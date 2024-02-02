import { getProjects } from '@/services/notion';
import { NextResponse } from 'next/server';

export const revalidate = 30 * 1000;

export async function GET() {
  const request = await getProjects().then((res) => res);

  return NextResponse.json({ projects: request });
}
