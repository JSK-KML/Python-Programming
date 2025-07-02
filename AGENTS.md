# Repository Guidelines for Agents

This repository hosts the CP115 Python Programming course site built with VitePress under the `docs/` directory.

## Storing Images
- The directory `docs/assets/` is ignored in `.gitignore` and should not be used for new assets.
- Place screenshots or other documentation images in `docs/images/` instead and reference them from Markdown using that path.

## Checks Before Commit
- Run `npm ci --prefix docs` to install dependencies.
- Run `npm run docs:build --prefix docs` and ensure the build succeeds with no errors.

## Commit and PR Guidelines
- Keep commit messages concise (e.g., `docs: update git instructions`).
- In pull requests, summarize which docs were changed and note that the docs build passed.
