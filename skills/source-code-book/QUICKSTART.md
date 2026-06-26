# Source Code Book Skill v2.0 - Quick Start Guide

## What This Skill Does

This skill generates comprehensive source code analysis books for open-source projects. **Chapter count is dynamically determined by code volume** — a 500-line utility gets 8 chapters, a 20,000-line framework gets 40+ chapters. **Every significant implementation preserves its real code** with line-by-line annotations, not simplified pseudo-code.

## How to Use

### Basic Usage

Simply ask Claude Code:
- "分析这个仓库 https://github.com/owner/repo"
- "Create a source code book for this repo"
- "为这个项目写一本源码解析书，尽可能详细"
- "Generate a book analyzing this codebase, preserve all code details"
- "源码解析，保留每个函数的实现细节"

### What You'll Get

A complete VitePress-based static site with:
- **Dynamically-planned chapters** (count based on LOC analysis)
- **Real source code in every chapter** — full implementations, not `...` placeholders
- **Professional homepage** with hero section and feature cards
- **Table of contents** page matching actual chapter count
- **Three+ appendices** (reading guide, config reference, glossary)
- **GitHub Actions** for automatic deployment
- **Ready to publish** on GitHub Pages

## Workflow

### Phase 1: Clone & Discover (5-10 min)
- Clone target repository
- Map directory structure
- **Extract LOC metrics per module** ← NEW
- Identify key modules and entry points

### Phase 2: Analyze Architecture (10-20 min)
- Understand design patterns
- Map module dependencies
- Identify architectural layers
- Extract key algorithms and data flows

### Phase 3: Dynamic Chapter Planning (5-10 min) ← CHANGED
- **Calculate chapter count from LOC** ← NEW
- **Map each module to chapters based on code density** ← NEW
- Create descriptive chapter titles
- Identify 3-4 key features for homepage
- Plan code snippets (real code, not placeholders)

### Phase 4: Deep Code Reading (10-20 min) ← NEW
- **Read every significant source file** ← NEW
- **Annotate code with inline comments** ← NEW
- Extract real code snippets with file paths
- Map call graphs between modules

### Phase 5: Generate Content (30-90 min)
- Write Chapter 1: "What is X, why it matters"
- Write Chapters 2-3: Overview and quick start
- Write module chapters: **with full real code** ← CHANGED
- Write variant chapters: **with code diff comparisons** ← NEW
- Write configuration chapters: **with full parameter tables** ← NEW
- Write appendices

### Phase 6: Build & Deploy (5-10 min)
- Initialize VitePress project
- Generate all configuration files
- Create index and contents pages
- Set up GitHub Actions workflow
- Initialize git repository
- **Try SSH push if HTTPS fails** ← NEW

**Total time: 1-2.5 hours depending on code volume**

## Example Output

```
myproject-book/
├── .vitepress/config.ts
├── .github/workflows/deploy.yml
├── chapters/
│   ├── 01-what-is-myproject.md
│   ├── 02-repo-overview.md
│   ├── 03-quick-start.md
│   ├── 04-<module-1>.md        ← count varies by LOC
│   ├── 05-<module-2>.md
│   ├── ...                      ← continues dynamically
│   ├── appendix-a-reading-path.md
│   ├── appendix-b-config-reference.md
│   └── appendix-c-glossary.md
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── index.md
├── contents.md
├── package.json
├── README.md
└── CNAME (optional)
```

## Quality Features

### 1. Dynamic Chapter Planning ← NEW
Chapter count is calculated from LOC, not fixed. Small repos get focused analysis, large repos get exhaustive deep-dives.

### 2. Real Code Preservation ← IMPROVED
Every major concept shows the **actual source code** with file path comments. No `...` or `<placeholder>` patterns. Functions > 20 lines are shown in full.

### 3. Code Annotation ← NEW
Key lines are annotated with inline comments explaining design decisions, not just what the code does.

### 4. Progressive Disclosure
Content starts with macro understanding, then dives into core engine, finally covers extension ecosystem.

### 5. Visual Aids
- ASCII architecture diagrams
- Comparison tables with real code diffs ← IMPROVED
- Flow charts
- Configuration parameter tables ← NEW

### 6. Multiple Reader Paths
Appendix A provides reading recommendations for:
- Beginner developers
- Architects / deep developers
- DevOps / operations engineers

### 7. Production Ready
- VitePress configuration
- GitHub Actions deployment
- Responsive design
- Local search enabled

## v2.0 Changes from v1.0

| Aspect | v1.0 | v2.0 |
|--------|------|------|
| Chapter count | Fixed 15-25 | Dynamic from LOC |
| Code snippets | Simplified `def foo(...)` | Full real implementation |
| Placeholders | `<参数>`, `<类型>` | Actual parameter names and types |
| Variants | Grouped in one section | Each variant gets its own subsection |
| Configuration | Brief mention | Full parameter table with defaults |
| Registry systems | Not covered | Dedicated template |
| Push method | HTTPS only | HTTPS + SSH fallback |

## Customization

You can customize the output by specifying:

### Target Audience
"Focus on beginners" or "Target advanced developers"

### Detail Level
"Keep it concise" or "尽可能详细，每个函数都要讲"

### Language
"Write in English" or "用中文写"

### Focus Areas
"Emphasize the plugin system" or "Focus on performance aspects"

## Troubleshooting

### Issue: "Repository too large"
**Solution**: Ask to "Focus on the src/ directory only" or "Analyze the core module only"

### Issue: "Not enough code examples"
**Solution**: v2.0 always includes real code. If still insufficient, say "show every function implementation"

### Issue: "Chapters too shallow"
**Solution**: v2.0 shows full code. If still shallow, say "annotate each line explaining the design decision"

### Issue: "GitHub push fails"
**Solution**: v2.0 tries SSH fallback: `git remote set-url origin git@github.com:<user>/<repo>.git`

## Publishing Your Book

### Option 1: GitHub Pages (Recommended)
```bash
cd myproject-book
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/myproject-book.git
git push -u origin main
# If HTTPS fails, use SSH:
git remote set-url origin git@github.com:<username>/myproject-book.git
git push -u origin main
```

### Option 2: Local Preview
```bash
npm install
npm run docs:dev
# Open http://localhost:5173
```

### Option 3: Static Export
```bash
npm run docs:build
# Output in .vitepress/dist/
# Upload to any static hosting
```

## Credits

This skill is reverse-engineered from the CoolClaws book pattern and optimized for code-detail preservation:
- **Source**: https://github.com/coolclaws
- **Analysis**: Based on study of 70+ repositories
- **Pattern**: VitePress + Markdown + GitHub Pages
- **v2.0 Style**: Dynamic chapters, real code preservation, inline annotation
