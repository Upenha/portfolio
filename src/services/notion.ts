'use server';
import { config } from '@/config/env';
import { Client } from '@notionhq/client';
import { redirect } from 'next/navigation';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: config.NOTION_API_KEY });

export type TProjectItem = {
  name: string;
  url: string;
  description: string;
};

export type TPost = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  createdAt: Date;
};

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: config.NOTION_PROJECTS_DATABASE_ID,
  });

  return response.results.map((project: any) => {
    return {
      name: project.properties.name.title[0].plain_text,
      url: project.properties.link.url,
      description: project.properties.description.rich_text[0].plain_text,
    };
  }) as TProjectItem[];
}

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: config.NOTION_POST_DATABASE_ID,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  });
  return response.results.map((post: any) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.tags.multi_select.map((tag: any) => tag.name),
      createdAt: post.created_time,
    };
  }) as TPost[];
}

export async function getPost(slug: string) {
  try {
    const response = await notion.databases.query({
      database_id: config.NOTION_POST_DATABASE_ID,
      filter: {
        or: [
          {
            property: 'slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });
    const page = response.results[0] as any;

    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      title: page.properties.title.title[0].plain_text,
      content: mdString.parent,
      createdAt: page.created_time,
    };
  } catch (err) {
    redirect('/');
  }
}
