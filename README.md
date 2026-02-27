# Menapia Site

Production marketing and research credibility website for Menapia — an operational atmospheric profiling company.

**Live site:** https://menapia-tech.github.io/menapia-site/

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static output)
- **Language:** TypeScript (strict)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **3D Globe:** [globe.gl](https://globe.gl/) (Three.js)
- **Deployment:** GitHub Pages via GitHub Actions

## Local Development

```bash
# Clone the repository
git clone https://github.com/Menapia-tech/menapia-site.git
cd menapia-site

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:4321/menapia-site/`.

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── content/
│   ├── projects/     # Project markdown files (content collection)
│   └── partners/     # Forecast partner markdown files (content collection)
├── layouts/          # Page layouts
├── pages/            # File-based routing
├── styles/           # Global CSS (Tailwind)
└── types/            # TypeScript type definitions

public/
├── ops/              # Operations GeoJSON data
│   └── operations.geojson
├── favicon.svg
└── robots.txt
```

## Adding a New Project

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
programme: "ARIA"
role: "Research collaborator"
status: "active"           # active | completed | planned
summary: "Brief description of the project."
externalUrl: "https://..."  # Optional
tags: ["tag1", "tag2"]
order: 5                    # Controls display order
---

Longer project description here.
```

The project will automatically appear on the Projects page and the home page.

## Adding a Forecast Partner

Create a new Markdown file in `src/content/partners/`:

```markdown
---
title: "Partner Name"
public: false              # true to show on public site
status: "exploring"        # exploring | pilot | operational
formats: ["netCDF", "BUFR"]
focusTags: ["NWP-ingest"]
summary: "Brief description."
order: 3
---

Partner description here.
```

Partners with `public: false` are stored in the content collection but not rendered on the public site.

## Updating Operations Data

Edit `public/ops/operations.geojson` to add, remove, or update operational sites:

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  },
  "properties": {
    "name": "Site Name",
    "status": "active",
    "lastUpdated": "2026-01-01T00:00:00Z",
    "type": "Description of site type",
    "relatedLink": "/menapia-site/projects"
  }
}
```

Valid status values: `active`, `planned`, `standby`, `confidential`.

The globe auto-refreshes every 60 seconds, so updates to this file on the deployed site will be picked up without a page reload.

## Deployment

Deployment is automatic via GitHub Actions on push to `main`. The workflow:

1. Installs dependencies
2. Builds the Astro site
3. Deploys to GitHub Pages

### Enabling GitHub Pages

In the repository settings:
1. Go to **Settings > Pages**
2. Under **Source**, select **GitHub Actions**

### Connecting a Custom Domain (Future)

When ready to connect a custom domain:

1. In `astro.config.mjs`, update:
   ```js
   site: 'https://yourdomain.com',
   base: '/',  // Remove /menapia-site base
   ```

2. Update all internal links to remove the `/menapia-site` prefix.

3. Add a `CNAME` file to the `public/` directory with your domain.

4. Configure DNS records as described in [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

5. Update `robots.txt` and any hardcoded URLs.

## Accessibility

- WCAG AA contrast minimum
- Skip-to-content link
- Semantic HTML structure
- Focus-visible states
- `prefers-reduced-motion` respected (globe auto-rotation disabled)
- ARIA labels on interactive elements

## Licence

All rights reserved. Menapia.
