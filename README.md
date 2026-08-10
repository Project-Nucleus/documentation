# Project Nucleus — Documentation

Official documentation site for all Nucleus FiveM resources.

Built with [Fumadocs](https://fumadocs.vercel.app) and Next.js, exported as a static site.

## Stack

- **Framework**: Next.js (static export)
- **Docs engine**: Fumadocs
- **Styling**: Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

Output goes to `out/`.

## Content

Docs live in `content/docs/`. Each `.mdx` file maps to a page. Folder structure defines the sidebar.

Frontmatter fields:

| Field | Description |
|---|---|
| `title` | Page title |
| `description` | Subtitle shown under the title |
| `icon` | Lucide icon name for the sidebar |
| `github` | GitHub repo name — enables Repository and Download buttons |
