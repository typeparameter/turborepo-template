A batteries-included starting point for TypeScript projects, with fast tooling and sensible defaults.

Included tooling:

- [Turborepo] – task orchestrator with caching support
- [TypeScript] 7 – native compiler and language tooling
- [Oxlint] – high-performance linter for TypeScript and JavaScript
- [Oxfmt] – high-performance, Prettier-compatible formatter

## Prerequisites

- [Node.js] 24+
- [pnpm] 10+

## Tasks

Before running these tasks, install package dependencies with `pnpm install`.

The commands below use the repository-local version of Turbo. Optionally, install Turbo globally with `pnpm add --global turbo` to omit the `pnpm` prefix.

### Build the project

```shell
pnpm turbo build
```

### Run lint, format, and type checks

```shell
pnpm turbo check
```

### Start development tasks

```shell
pnpm turbo dev
```

[Turborepo]: https://turborepo.dev/
[TypeScript]: https://www.typescriptlang.org/
[Oxlint]: https://oxc.rs/docs/guide/usage/linter.html
[Oxfmt]: https://oxc.rs/docs/guide/usage/formatter.html
[Node.js]: https://nodejs.org/
[pnpm]: https://pnpm.io/
