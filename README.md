# S1

My 1st semester notes of Engineering.

## Prerequisites

- Node (>= v18)
- [Bun](https://bun.sh) (>= v1.1.34) as package manager and runtime

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── [module]/(subsection)/
│   │   └── config.ts
│   ├── pages/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Each markdown (`.md`) file under `src/content/docs` directory, is exposed as a
route based on its file name.

Static assets, like favicons, are placed under `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

Built using [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build/).

## Contact

For any questions or support, feel free to contact me @
[sahithyan.dev](https://sahithyan.dev)
