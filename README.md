# Site_Athar

Professional React portfolio for presenting Athar as an AI engineer focused on:

- local AI runtime orchestration
- retrieval and vector systems
- knowledge graph and long-term memory workflows
- strategic digital products relevant to campaign operations

The content is grounded in the real `/mnt/data/Projects_SSD` workspace, especially:

- `Unity_Projects/Unity_Linux_LLM`
- `pc-resource-agent-team`
- `cognee`
- `LocalAI`
- `qdrant-client`
- `modal-examples`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite outputs the production site to `dist/`.

## Cloudflare Pages

Use these settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current LTS compatible with the repo

## Deployment environment template

This repo includes [.env.example](/mnt/data/Projects_SSD/Site_Athar/.env.example:1) for local deployment setup.

Main variables:

- `GITHUB_REPO_OWNER`
- `GITHUB_REPO_NAME`
- `GITHUB_DEFAULT_BRANCH`
- `GITHUB_PAT` if you want HTTPS-based GitHub automation
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_PAGES_PROJECT_NAME`
- `CLOUDFLARE_PAGES_BRANCH`

Do not commit real secrets to the repo. Keep them in a local `.env` file only.

## Notes

- Main site structure lives in `src/App.jsx`.
- Portfolio copy and project data live in `src/data/siteContent.js`.
- Visual graphs are built with `recharts`.
