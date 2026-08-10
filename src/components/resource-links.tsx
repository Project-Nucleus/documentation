import { Download, GitFork } from 'lucide-react';

export function ResourceLinks({ name }: { name: string }) {
  const base = `https://github.com/Project-Nucleus/${name}`;

  return (
    <div className="flex flex-wrap gap-3 my-4">
      <a
        href={base}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium border border-fd-border rounded-full px-4 py-2 transition-colors hover:bg-fd-accent"
      >
        <GitFork className="h-4 w-4" />
        Repository
      </a>
      <a
        href={`${base}/releases/latest/download/${name}.zip`}
        className="inline-flex items-center gap-2 text-sm font-medium bg-fd-primary text-fd-primary-foreground rounded-full px-4 py-2 transition-opacity hover:opacity-80"
      >
        <Download className="h-4 w-4" />
        Download
      </a>
    </div>
  );
}
