# PR Template

Use this structure for every PR body created by the `ship` skill. Populate all sections based on actual changes — remove sections that genuinely don't apply (e.g. no migration, no breaking change).

---

## Template

```markdown
## What

<!-- 1–3 bullet points describing WHAT changed. Be specific — name files, components, routes, or modules. -->

- 
- 

## Why

<!-- 1 sentence explaining the motivation. What problem does this solve or what value does it add? -->

## How

<!-- Optional. Only include if the implementation approach is non-obvious or worth highlighting for reviewers. -->

## Checklist

- [ ] Tested locally (dev server running, golden path verified)
- [ ] No console errors or TypeScript warnings introduced
- [ ] Existing features unaffected (checked related pages/flows)
- [ ] New vocabulary/lesson data validated (if applicable)

## Notes for reviewer

<!-- Optional. Flag anything the reviewer should pay special attention to, known limitations, or follow-up work. -->

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

---

## Guidance for populating the template

### What
- List each logical change as a bullet. Reference specific files or components when helpful.
- Example: `- Add keyboard navigation (ArrowLeft/ArrowRight) to LessonPlayer slide controls`

### Why
- One sentence, plain English. Focus on the user or developer benefit.
- Example: `Speeds up lesson review for users who prefer keyboard-only navigation.`

### How
- Skip this section for straightforward changes.
- Include it when the approach involves a trade-off, a non-obvious pattern, or replaces a previous mechanism.

### Checklist
- Mark items as `[x]` only if Claude has actually performed the check during this session.
- Leave as `[ ]` when the check requires human action (e.g. manual QA on device).

### Scope reminder
- The PR always targets `develop`.
- The title follows conventional commits: `<type>(<scope>): <summary>` (≤ 70 chars).
```
