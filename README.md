# Ashgrove

Marketing and interactive worldbuilding for the fictional Ashgrove horror project.

## Current prototype

The repository now contains the first version of the Ashgrove residency assessment:

- `index.html` — landing page, survey shell, and results view
- `styles.css` — polished corporate-community visual language
- `app.js` — eight-question survey, local state, and prototype scoring
- `wrangler.jsonc` — starter Cloudflare static-assets configuration

The current demo is intentionally self-contained. It sends no form data anywhere and stores nothing after refresh.

## Run locally

Because the prototype is plain HTML/CSS/JavaScript, you can open `index.html` directly or run any small static web server from the repository directory.

Example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Cloudflare Pages

The easiest first deployment is Cloudflare Pages connected directly to this GitHub repository.

Use:

- Production branch: `main`
- Framework preset: None
- Build command: leave blank
- Build output directory: `/`

If Cloudflare requires a build output folder, we can move the public files into a dedicated `public/` directory in the next pass.

## Cloudflare Workers static assets

The included `wrangler.jsonc` also gives us a path toward deploying the same prototype through Workers static assets once Wrangler is added to the project.

## Next planned layers

1. Replace the generic result screen with the full Ashgrove visual identity.
2. Add the community map and neighborhood placement system.
3. Add a longer fictional internal assessment layer.
4. Separate public-facing scoring from hidden Ashgrove institutional scoring.
5. Add lore documents and world-bible material under `/docs`.
6. Add optional analytics only after deciding what reader data, if any, should actually be collected.

> Ashgrove is fictional. The assessment is part of the story experience, not a real eligibility or suitability tool.
