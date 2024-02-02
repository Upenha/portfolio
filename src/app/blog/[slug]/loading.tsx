import { Loader2 } from 'lucide-react';
export default async function BlogLoading({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center text-lg">
        <Loader2 className="mr-3 size-6 animate-spin text-violet-500" />
        Loading
      </p>
    </div>
  );
}
