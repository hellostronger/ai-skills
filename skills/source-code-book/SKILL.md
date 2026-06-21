---
name: source-code-book
description: "Generate comprehensive source code analysis books for open-source projects. Use when the user wants to create a deep-dive book-style documentation of a GitHub repository, generate source code analysis content, or produce VitePress-based technical books. Triggers include: 'analyze this repo', 'create a source code book', 'write analysis for', 'generate documentation book', '源码解析', '源码分析', '写一本书', '分析这个仓库'. This skill clones the target repo, analyzes architecture, generates structured chapters following the CoolClaws book pattern, and sets up VitePress for GitHub Pages deployment."
allowed-tools: Bash(curl:*), Bash(git:*), Read, Write, Edit, Glob, Grep, WebFetch
metadata:
  author: "Reverse-engineered from CoolClaws pattern"
  version: "1.0.0"
  based-on: "https://github.com/coolclaws"
---

# source-code-book

Generate comprehensive source code analysis books for open-source projects following the proven CoolClaws pattern. Produces VitePress-based static sites with structured chapters, ready for GitHub Pages deployment.

## When to Use

- User wants to deeply analyze a GitHub repository
- User wants to create source code documentation in book format
- User asks for "源码解析", "源码分析", or "write a book about this repo"
- User wants structured technical documentation with chapters and appendices

## Workflow Overview

This skill follows a 5-phase approach:

1. **Clone & Discover** - Clone target repo, map structure, identify key modules
2. **Analyze Architecture** - Understand design patterns, dependencies, data flow
3. **Plan Book Structure** - Define chapters based on architectural layers
4. **Generate Content** - Write chapters with code snippets, diagrams, comparisons
5. **Build & Deploy** - Set up VitePress, configure navigation, deploy to GitHub Pages

---

## Phase 1: Clone & Discover

### 1.1 Clone the Repository

```bash
# Deep clone for full history analysis
git clone --depth 1 https://github.com/<owner>/<repo>.git target-repo
cd target-repo
```

### 1.2 Map Repository Structure

Use the explore agent to understand the codebase:

```
Task: Analyze the repository structure and identify:
1. Main directories and their purposes
2. Entry points (CLI, API, main modules)
3. Core modules and their relationships
4. Configuration files and their roles
5. Test structure and coverage
6. Dependencies (package.json, requirements.txt, etc.)
7. Documentation files (README, docs/, etc.)

Output a structured report with:
- Directory tree with size and file count
- Key files identified with brief descriptions
- Dependency analysis
- Technology stack summary
```

### 1.3 Extract Key Metrics

```bash
# Line counts by directory
find . -name "*.py" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs wc -l | sort -n | tail -20

# Git history stats
git log --oneline | wc -l
git log --format='%an' | sort | uniq -c | sort -rn | head -10

# File types
find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*" | sed 's/.*\.//' | sort | uniq -c | sort -rn | head -20
```

---

## Phase 2: Analyze Architecture

### 2.1 Identify Architectural Layers

Read key source files to understand:

- **Entry Points**: `main.py`, `cli.py`, `app.py`, `index.ts`
- **Core Engine**: Central processing logic, state management
- **Data Flow**: Request/response handling, event processing
- **Extension Points**: Plugins, hooks, middleware, skills
- **Configuration**: Config files, environment variables, settings
- **External Integrations**: APIs, databases, file systems

### 2.2 Map Module Dependencies

```
Task: Create a dependency graph showing:
1. Which modules import which other modules
2. Circular dependencies (if any)
3. External dependencies vs internal modules
4. Layer boundaries (presentation, business logic, data access)

Output as ASCII diagram or Mermaid graph.
```

### 2.3 Extract Design Patterns

Identify and document:
- Architectural patterns (MVC, Actor Model, Pipeline, etc.)
- Design patterns (Factory, Observer, Strategy, etc.)
- Concurrency models (async/await, threads, event loop)
- Error handling strategies
- Configuration management approaches

---

## Phase 3: Plan Book Structure

### 3.1 Define Chapter Outline

Follow the CoolClaws "Three-Layer" structure:

**Part 1: Macro Understanding (Chapters 1-3)**
- Chapter 1: What is this project? Why does it matter?
- Chapter 2: Repository overview and tech stack
- Chapter 3: Quick start guide

**Part 2: Core Engine (Chapters 4-10)**
- Chapter 4: Main entry point and initialization
- Chapter 5: Core data structures and state management
- Chapter 6: Primary processing pipeline
- Chapter 7: Configuration system
- Chapter 8: Key algorithms and logic
- Chapter 9: Error handling and resilience
- Chapter 10: Testing strategy

**Part 3: Extension Ecosystem (Chapters 11+)**
- Chapter 11: Plugin/extension system
- Chapter 12: Tool integrations
- Chapter 13: API and interfaces
- Chapter 14: Deployment and operations
- Chapter 15: Performance optimization

**Appendices**
- Appendix A: Reading path guide (for different roles)
- Appendix B: Configuration reference
- Appendix C: Glossary of terms
- Appendix D: Version changelog

### 3.2 Create Chapter Titles

Generate descriptive titles following the pattern:
- `第 N 章 <主题>：<副标题>`
- Examples:
  - "第 4 章 LangGraph 引擎：图驱动的 Agent 编排"
  - "第 6 章 11 层中间件管道：Agent 的神经系统"

### 3.3 Define Key Features (for index.md)

Extract 3-4 key features to highlight on the book's homepage:
- Feature title + 1-2 sentence description
- SVG icon representing the feature

---

## Phase 4: Generate Content

### 4.1 Chapter Writing Template

Each chapter follows this structure:

```markdown
# 第 N 章 <章节标题>

<引言段落 - 概述本章内容、目标、读者将获得什么>

## N.1 <小节标题>

<概念解释>
- Clear definitions
- Why this matters
- How it fits into the bigger picture

<Code snippet from source>
```python
# 简化后的调用链
def key_function(...):
    # ... actual code from repo
```

<Analysis of the code>
- What it does
- Design decisions
- Trade-offs

## N.2 <小节标题>

<Architecture diagram>
```
Component A → Component B → Component C
                ↓
            Component D
```

<Table comparing approaches>
| Approach | Pros | Cons | When to Use |
|----------|------|------|-------------|
| A        | ...  | ...  | ...         |

## 小结

- **要点 1**：<关键概念总结>
- **要点 2**：<实现细节总结>
- **要点 3**：<设计决策总结>
```

### 4.2 Content Generation Rules

1. **Code-Driven**: Every major concept must have a real code snippet
2. **Progressive Disclosure**: Start simple, add complexity gradually
3. **Visual Aids**: Use ASCII diagrams, tables, and flowcharts
4. **Real Paths**: Reference actual file paths from the repo
5. **Version-Specific**: Note which version/commit you're analyzing
6. **Comparison Tables**: Compare with alternatives when relevant

### 4.3 Introduction Chapter Template (Chapter 1)

```markdown
# 第 1 章 <项目名> 是什么，为什么重要

## 1.1 从名字说起

<项目全称解释、命名由来>

## 1.2 <项目类型> vs <替代方案>：本质区别

<对比表格>
| 维度 | <项目名> | <替代方案 1> | <替代方案 2> |
|------|----------|--------------|--------------|
| 设计理念 | ... | ... | ... |
| 核心特性 | ... | ... | ... |

## 1.3 <项目> 的三个核心特征

**特征一：<特征名>。** <详细解释>

**特征二：<特征名>。** <详细解释>

**特征三：<特征名>。** <详细解释>

## 1.4 发展历程

<版本演进、关键里程碑>

## 1.5 实际用例

**用例一：<用例名>。** <描述>

**用例二：<用例名>。** <描述>

## 1.6 与其他产品的定位对比

<对比表格>

## 小结

- **要点 1**
- **要点 2**
- **要点 3**
```

---

## Phase 5: Build & Deploy

### 5.1 Initialize VitePress Project

Create the book project structure:

```bash
mkdir <project>-book
cd <project>-book
npm init -y
npm install -D vitepress
```

### 5.2 Create package.json

```json
{
  "name": "<project>-book",
  "version": "1.0.0",
  "description": "<项目名> 源码解析 - <一句话描述>",
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.4"
  }
}
```

### 5.3 Create VitePress Config

Generate `.vitepress/config.ts` with:
- Site title and description
- Navigation bar (开始阅读, 目录, GitHub)
- Sidebar organized by parts
- Footer and social links
- Search enabled

### 5.4 Generate index.md

Create homepage with:
- Hero layout
- Project name, tagline, description
- Action buttons (开始阅读, 查看目录, GitHub)
- 3-4 feature cards with icons

### 5.5 Generate contents.md

Create table of contents page listing all chapters organized by parts.

### 5.6 Create Chapter Files

Write all chapters in `chapters/` directory:
- `01-<slug>.md`
- `02-<slug>.md`
- ...
- `appendix-a-<slug>.md`
- `appendix-b-<slug>.md`
- `appendix-c-<slug>.md`

### 5.7 Add Assets

Create `public/` directory:
- `favicon.svg`
- `logo.png`
- `icons/` directory with feature icons

### 5.8 Setup GitHub Actions

Create `.github/workflows/deploy.yml` for automatic deployment to GitHub Pages.

### 5.9 Create README.md

```markdown
# <项目名> 源码解析

<一句话描述>

## 在线阅读

https://<username>.github.io/<project>-book/

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## License

MIT
```

### 5.10 Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: <项目名> 源码解析"
git branch -M main
git remote add origin https://github.com/<username>/<project>-book.git
git push -u origin main
```

---

## Quality Checklist

Before finalizing the book, verify:

- [ ] All chapters have consistent formatting
- [ ] Code snippets are from actual source files with file paths noted
- [ ] ASCII diagrams are clear and accurate
- [ ] Tables are properly formatted in Markdown
- [ ] All internal links work (run `npm run docs:build` to check)
- [ ] Navigation sidebar matches chapter structure
- [ ] Index page has compelling description and features
- [ ] Appendices provide useful reference material
- [ ] GitHub Actions workflow is configured
- [ ] README.md is complete

---

## Tips for High-Quality Books

1. **Read the README first**: Understand the project's own documentation before analyzing
2. **Follow the code**: Trace execution from entry points to understand data flow
3. **Identify the "magic"**: What makes this project special? Focus on that
4. **Use real examples**: Extract actual usage patterns from tests or docs
5. **Compare and contrast**: Help readers understand trade-offs
6. **Write for multiple audiences**: Beginners need context, experts need depth
7. **Keep chapters focused**: Each chapter should have a clear theme
8. **Update for versions**: Note which version you're analyzing, mention breaking changes

---

## Example Output Structure

```
<project>-book/
├── .vitepress/
│   └── config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── chapters/
│   ├── 01-what-is-<project>.md
│   ├── 02-repo-overview.md
│   ├── 03-quick-start.md
│   ├── 04-core-engine.md
│   ├── 05-data-flow.md
│   ├── 06-configuration.md
│   ├── 07-extension-system.md
│   ├── 08-deployment.md
│   ├── appendix-a-reading-path.md
│   ├── appendix-b-config-reference.md
│   └── appendix-c-glossary.md
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── icons/
│       ├── feature1.svg
│       ├── feature2.svg
│       └── feature3.svg
├── index.md
├── contents.md
├── package.json
├── README.md
└── CNAME (optional)
```

---

## References

This skill is reverse-engineered from the CoolClaws book pattern:
- **Source**: https://github.com/coolclaws
- **Top book**: deerflow-book (576 stars)
- **Pattern**: VitePress + Markdown + GitHub Pages
- **Style**: Progressive disclosure, code-driven, architecture-focused
