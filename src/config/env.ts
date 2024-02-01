import { createEnv } from '@upenha/env';
import { z } from 'zod';

export const config = createEnv({
  NOTION_API_KEY: z.string(),
  NOTION_POST_DATABASE_ID: z.string(),
  NOTION_PROJECTS_DATABASE_ID: z.string(),
});
