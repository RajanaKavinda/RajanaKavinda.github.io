# Rajana Kavinda — Engineering & Research Portfolio

A dark, responsive portfolio prepared for GitHub Pages. Live website: https://rajanakavinda.github.io/

## Edit your portfolio

- `content/portfolio.ts`: profile, projects, experience, education, skills, and certificates. Duplicate an existing project entry to add a new one. Set `featured: true` to put it in the selected work grid. Other projects appear in the expandable archive.
- `public/profile.jpeg`: replace this image to change the portrait (keep the filename).
- `app/globals.css`: change the color variables at the top to customize the theme; the rest controls layout.
- `app/page.tsx`: page structure and presentation.
- `index.html`: search title and description.

Project links are taken from the supplied CV. No publications or performance results have been invented. Referee contact information and your phone number are not included. The full CV is not bundled for public download because it includes third-party contact details.

## Local preview

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local address printed by the server. Changes appear automatically.

## Production build

```sh
npm run build
```

Static output is written to `out/` for GitHub Pages. No database, API keys, or paid server is needed.

## Publish future updates

1. Create a GitHub repository and upload this folder, excluding `node_modules`, `out`, `dist`, and `.env` files.
2. In Settings → Pages, choose **GitHub Actions** as the build source.
3. Open Actions → **Deploy portfolio to GitHub Pages** → **Run workflow**.
4. The workflow detects whether you use an account site (`RajanaKavinda.github.io`) or a project repository and sets the correct base path.
5. For future updates, edit the content, commit it, and run the workflow again. Publication is manual so you can review each update first.

Source framework: React / Vite, with CSS and Lucide icons. The dependency lockfile is included for reproducible installation.


