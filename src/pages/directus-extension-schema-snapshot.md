---
layout: "../layouts/Page.astro"
title: "Directus Schema Snapshot — git-diffable schema versioning"
description: "A CLI tool that normalizes Directus (or any JSON) schema exports into a git-diffable, AI-readable format and computes structured diffs between versions."
pubDate: "Jul 6 2026"
heroImage: "../assets/blog-placeholder-about.jpg"
---

## What it is

[`directus-extension-schema-snapshot`](https://github.com/nguyenhy/directus-extension-schema-snapshot) is a small CLI toolset that turns a raw JSON schema snapshot (e.g. a Directus schema export) into a git-diffable, AI-readable format, then computes structured diffs between two versions — added, removed, modified.

## Why you need it

Schema snapshots as one giant JSON blob are hard to diff, hard to review in a pull request, and hard for an AI agent to reason about — context-heavy and unstructured. This tool normalizes a snapshot into a structured, per-entity form and computes a clean diff between versions, so schema changes become as reviewable as code changes.

## What it's not

- Not a database migration framework — no rollback engine, no query builder.
- Not a live schema sync tool — works on snapshots you export, not a continuous watcher.
- Not a data migration tool — backfill logic stays manual, on purpose.

## Status

**Implemented:** `normalize`, `diff`, `add`, `list`, `show`, `remove` — git-backed version storage, every version is one commit, CLI only.

**Not yet built:** rename detection, migrate-plan/apply, rollback plan, Web UI. See the [roadmap](https://github.com/nguyenhy/directus-extension-schema-snapshot/blob/main/docs/roadmap-draft.md) for the ordered list.

## Commands

```
npx schema-snapshot@latest normalize schema.json
npx schema-snapshot@latest diff v1.json v2.json
npx schema-snapshot@latest add schema.json -m "initial import"
npx schema-snapshot@latest list
npx schema-snapshot@latest --help
```

## Install

No install needed — run via `npx schema-snapshot@latest <command>`.

Want to extend it (custom normalizer/parser/store)? Install it as a dependency instead:

```
npm install
cp .env.example .env   # optional
```

## Learn more

Source, full docs, and issues: [nguyenhy/directus-extension-schema-snapshot](https://github.com/nguyenhy/directus-extension-schema-snapshot)
