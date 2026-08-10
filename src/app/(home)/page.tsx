import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center flex-1 overflow-hidden px-4 py-24 text-center">
      {/* grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in srgb, var(--color-fd-border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-fd-border) 60%, transparent) 1px, transparent 1px)',
          backgroundSize: '3.5rem 3.5rem',
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,transparent_60%,var(--color-fd-background)_100%)]" />

      <div className="mb-8 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Project Nucleus" className="h-20 w-auto drop-shadow-md" />
        <img src="/title.png" alt="Project Nucleus" className="h-10 w-auto" />
      </div>

      <p className="max-w-md text-fd-muted-foreground text-lg mb-10 leading-relaxed">
        Official documentation for all Nucleus FiveM resources.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-5 py-2.5 transition-opacity hover:opacity-80"
          href="/docs"
        >
          Get Started
        </Link>
        <Link
          className="text-sm border border-fd-border rounded-full font-medium px-5 py-2.5 transition-colors hover:bg-fd-accent"
          href="/docs"
        >
          Browse Docs
        </Link>
      </div>
    </main>
  );
}
