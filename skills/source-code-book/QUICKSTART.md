# Source Code Book Skill - Quick Start Guide

## What This Skill Does

This skill generates comprehensive source code analysis books for open-source projects, following the proven CoolClaws pattern that produced 70+ books with the top one (deerflow-book) gaining 576 GitHub stars.

## How to Use

### Basic Usage

Simply ask Claude Code:
- "分析这个仓库 https://github.com/owner/repo"
- "Create a source code book for this repo"
- "为这个项目写一本源码解析书"
- "Generate a book analyzing this codebase"

### What You'll Get

A complete VitePress-based static site with:
- **Structured chapters** (15-25 chapters organized in parts)
- **Professional homepage** with hero section and feature cards
- **Table of contents** page
- **Three appendices** (reading guide, config reference, glossary)
- **GitHub Actions** for automatic deployment
- **Ready to publish** on GitHub Pages

## Workflow

### Phase 1: Clone & Discover (5-10 min)
- Clone target repository
- Map directory structure
- Identify key modules and entry points
- Extract metrics (line counts, git history, dependencies)

### Phase 2: Analyze Architecture (10-20 min)
- Understand design patterns
- Map module dependencies
- Identify architectural layers
- Extract key algorithms and data flows

### Phase 3: Plan Book Structure (5-10 min)
- Define chapter outline (3 parts + appendices)
- Create descriptive chapter titles
- Identify 3-4 key features for homepage
- Plan code snippets and diagrams

### Phase 4: Generate Content (30-60 min)
- Write Chapter 1: "What is X, why it matters"
- Write Chapters 2-3: Overview and quick start
- Write Chapters 4-10: Core engine deep-dives
- Write Chapters 11+: Extension ecosystem
- Write appendices

### Phase 5: Build & Deploy (5-10 min)
- Initialize VitePress project
- Generate all configuration files
- Create index and contents pages
- Set up GitHub Actions workflow
- Initialize git repository

**Total time: 1-2 hours for a complete book**

## Example Output

```
myproject-book/
├── .vitepress/config.ts
├── .github/workflows/deploy.yml
├── chapters/
│   ├── 01-what-is-myproject.md
│   ├── 02-repo-overview.md
│   ├── 03-quick-start.md
│   ├── 04-core-engine.md
│   ├── ...
│   ├── appendix-a-reading-path.md
│   ├── appendix-b-config-reference.md
│   └── appendix-c-glossary.md
├── public/
│   ├── favicon.svg
│   └── icons/
├── index.md
├── contents.md
├── package.json
└── README.md
```

## Quality Features

### 1. Code-Driven Analysis
Every major concept includes real code snippets from the source repository with file paths noted.

### 2. Progressive Disclosure
Content starts with macro understanding, then dives into core engine, finally covers extension ecosystem.

### 3. Visual Aids
- ASCII architecture diagrams
- Comparison tables
- Flow charts
- Configuration examples

### 4. Multiple Reader Paths
Appendix A provides reading recommendations for:
- Beginner developers
- Architects / deep developers
- DevOps / operations engineers

### 5. Production Ready
- VitePress configuration
- GitHub Actions deployment
- Responsive design
- Local search enabled

## Customization

You can customize the output by specifying:

### Target Audience
"Focus on beginners" or "Target advanced developers"

### Chapter Count
"Keep it concise with 10 chapters" or "Comprehensive with 25+ chapters"

### Language
"Write in English" or "用中文写"

### Focus Areas
"Emphasize the plugin system" or "Focus on performance aspects"

## Tips for Best Results

1. **Choose well-documented projects**: Projects with good READMEs and comments produce better books
2. **Specify version**: "Analyze version 2.0" for more focused analysis
3. **Request specific depth**: "Deep dive into the scheduling algorithm" for detailed chapters
4. **Ask for comparisons**: "Compare with similar projects" for context-rich content

## Troubleshooting

### Issue: "Repository too large"
**Solution**: Ask to "Focus on the src/ directory only" or "Analyze the core module only"

### Issue: "Not enough code examples"
**Solution**: Ask to "Include more code snippets from implementation files"

### Issue: "Chapters too shallow"
**Solution**: Ask to "Add more technical depth to chapter 5" or "Expand the architecture analysis"

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
```

GitHub Actions will automatically deploy to `https://<username>.github.io/myproject-book/`

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

## Examples from CoolClaws

Study these real examples:
- **deerflow-book** (576⭐) - Best example of comprehensive analysis
- **openclaw-book** (23⭐) - Good example of architecture-focused writing
- **mini-sglang-book** (6⭐) - Good example of educational approach

All available at: https://github.com/coolclaws

## Advanced Usage

### Analyze Multiple Repos
"Analyze these 3 repos and create a comparative book"

### Update Existing Book
"Update the book with the latest version of the repository"

### Add New Chapter
"Add a chapter about the testing strategy"

### Change Style
"Rewrite in a more conversational tone" or "Make it more academic"

## Skill Implementation

The skill is implemented as a Claude Code skill file at:
```
~/.claude/skills/source-code-book/SKILL.md
```

With detailed templates at:
```
~/.claude/skills/source-code-book/TEMPLATES.md
```

## Credits

This skill is reverse-engineered from the CoolClaws book pattern:
- **Source**: https://github.com/coolclaws
- **Analysis**: Based on study of 70+ repositories
- **Pattern**: VitePress + Markdown + GitHub Pages
- **Style**: Progressive disclosure, code-driven, architecture-focused
