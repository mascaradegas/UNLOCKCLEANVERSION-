---
name: ship
description: Run the full ship routine: stage changes, write a conventional commit, push the branch, and open a PR against develop. Use this skill whenever the user says /ship, "ship it", "commit and PR", "open a PR", "push and PR", or any variation of the commit → push → pull request workflow.
---

# Ship

Automate the full commit → push → PR routine for the current branch.

## Overview

This skill handles the entire delivery loop:
1. Inspect what changed and group changes by logical unit
2. Stage and commit each group separately (preferred)
3. Push the branch to origin
4. Open a PR targeting `develop` via the `gh` CLI

Read `pr-template.md` (bundled alongside this SKILL.md) for the PR body structure.

---

## Step 1 — Inspect the workspace

Run these in parallel, then present a compact summary to the user:

```bash
git status          # unstaged/staged files
git diff            # unstaged changes
git diff --cached   # staged changes
git log --oneline -5  # recent commit style for tone-matching
```

If there is nothing to commit (clean tree, no staged files), tell the user and stop.

---

## Step 2 — Plan the commits

**Prefer multiple focused commits over one large commit.** Group changed files by the logical unit they belong to — a module, component, service, store, utility, or config area. Each group becomes its own commit.

For example, if changes touch `WordDrop.tsx`, `progressStore.ts`, and `vite.config.js`:
- Commit 1: `feat(word-drop): …` → stages only `WordDrop.tsx`
- Commit 2: `fix(store): …` → stages only `progressStore.ts`
- Commit 3: `chore(config): …` → stages only `vite.config.js`

Present the proposed grouping to the user before staging. The user can merge or split groups as they see fit.

**If the user passed specific files** (e.g. `/ship src/App.tsx src/stores/progressStore.ts`): treat those as the full scope and still try to group them logically.

**Single-commit exception**: if all changes belong to the same logical unit or the diff is trivially small, one commit is fine — don't over-split.

---

## Step 3 — Write commit messages

Follow the **Conventional Commits** spec. Always write in **English**.

### Format

```
<type>(<scope>): <short imperative summary>

[optional body — wrap at 72 chars]

[optional footer: BREAKING CHANGE, closes #N, Co-Authored-By, etc.]
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | New feature or user-visible behavior |
| `fix` | Bug fix |
| `refactor` | Code restructure without behavior change |
| `style` | Formatting, whitespace, no logic change |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `chore` | Build scripts, deps, tooling, config |
| `perf` | Performance improvement |
| `ci` | CI/CD pipeline changes |

### Scope

Use the primary module or area changed (e.g. `auth`, `lesson-player`, `word-drop`, `tts`, `store`, `homework`). Omit scope when the change spans the whole codebase.

### Rules

- Summary line ≤ 72 characters, lowercase after the colon, no trailing period
- Body is optional but useful for non-obvious changes
- Reference issue/PR numbers in the footer when known
- Always append the Co-Authored-By trailer:

```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

### Examples

```
feat(lesson-player): add keyboard shortcut for slide navigation
```

```
fix(tts): fall back to Web Speech API when MP3 times out after 500ms
```

```
chore(deps): upgrade vite to 5.4 and update config aliases
```

Commit each group using a heredoc to preserve formatting:

```bash
git add <files-for-this-group>
git commit -m "$(cat <<'EOF'
<type>(<scope>): <summary>

<body if needed>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

If a pre-commit hook fails: fix the underlying issue, re-stage, and create a **new** commit — never use `--no-verify` unless the user explicitly requests it.

---

## Step 4 — Push

After all commits are done:

```bash
git push -u origin HEAD
```

If the push is rejected (non-fast-forward), diagnose before acting. Do **not** force-push without explicit user confirmation.

---

## Step 5 — Create the PR

Target branch is always **`develop`** unless the user explicitly overrides it.

1. Read `pr-template.md` from the skill directory to load the PR body structure.
2. Populate each section based on the diff and commit history since the branch diverged from `develop`:
   ```bash
   git log develop...HEAD --oneline
   git diff develop...HEAD --stat
   ```
3. Keep the title short (≤ 70 chars), mirroring the type/scope of the most significant commit (or the broadest scope if commits span multiple areas).
4. Create the PR:

```bash
gh pr create \
  --base develop \
  --title "<type>(<scope>): <summary>" \
  --body "$(cat <<'EOF'
<populated pr body>
EOF
)"
```

5. Return the PR URL to the user.

---

## Guardrails

- Never commit files that look like secrets (`.env`, `*.key`, `credentials.*`) — warn the user and skip them.
- Never force-push (`--force`, `-f`) without explicit instruction.
- Never skip hooks (`--no-verify`) without explicit instruction.
- Always target `develop`, not `main` or `master`, unless the user says otherwise.
- If the current branch IS `develop` or `main`, warn the user before proceeding.
