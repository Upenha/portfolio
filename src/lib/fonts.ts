import { BASE_URL } from './utils';

export interface FontOptions {
  data: Buffer | ArrayBuffer;
  name: string;
}

export async function loadFont(file: string): Promise<ArrayBuffer> {
  return fetch(`${BASE_URL}/fonts/${file}`).then((res) => res.arrayBuffer());
}

export async function loadFonts(): Promise<FontOptions[]> {
  const geistBold = await loadFont('Geist-Bold.otf');
  const geistSemibold = await loadFont('Geist-Semibold.otf');

  const fonts: FontOptions[] = [
    {
      data: geistBold,
      name: 'Geist Bold',
    },
    {
      data: geistSemibold,
      name: 'Geist Semibold',
    },
  ];

  return fonts;
}
