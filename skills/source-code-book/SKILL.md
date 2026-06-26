---
name: source-code-book
description: "Generate comprehensive source code analysis books for open-source projects. Chapter count is dynamically determined by code volume — small repos get focused analysis, large repos get exhaustive deep-dives. Every significant implementation gets its real code preserved with line-by-line annotations. Use when the user wants to create a deep-dive book-style documentation of a GitHub repository, generate source code analysis content, or produce VitePress-based technical books. Triggers include: 'analyze this repo', 'create a source code book', 'write analysis for', 'generate documentation book', '源码解析', '源码分析', '写一本书', '分析这个仓库', '尽可能详细', '保留代码细节'."
allowed-tools: Bash(curl:*), Bash(git:*), Read, Write, Edit, Glob, Grep, WebFetch
metadata:
  author: "Reverse-engineered from CoolClaws pattern, optimized for code-detail preservation"
  version: "2.0.0"
  based-on: "https://github.com/coolclaws"
  optimized-for: "dynamic-chapter-planning + code-detail-preservation"
---

# source-code-book

Generate comprehensive source code analysis books for open-source projects. **Chapter count is dynamically determined by code volume** — a 500-line utility gets 8 chapters, a 20,000-line framework gets 40+ chapters. **Every significant implementation preserves its real code with line-by-line annotations**, not simplified pseudo-code.

## When to Use

- User wants to deeply analyze a GitHub repository
- User wants to create source code documentation in book format
- User asks for "源码解析", "源码分析", or "write a book about this repo"
- User wants structured technical documentation with chapters and appendices
- User says "尽可能详细", "保留代码细节", "每个函数都要讲"

## Workflow Overview

This skill follows a 6-phase approach:

1. **Clone & Discover** — Clone target repo, map structure, extract LOC metrics
2. **Analyze Architecture** — Understand design patterns, dependencies, data flow
3. **Dynamic Chapter Planning** — Calculate chapter count from LOC, plan based on code density
4. **Deep Code Reading** — Read every significant file, annotate code details
5. **Generate Content** — Write chapters with real code snippets, diagrams, comparisons
6. **Build & Deploy** — Set up VitePress, configure navigation, deploy to GitHub Pages

---

## Phase 1: Clone & Discover

### 1.1 Clone the Repository

```bash
git clone --depth 1 https://github.com/<owner>/<repo>.git target-repo
cd target-repo
```

### 1.2 Map Repository Structure

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
# Total LOC by language
find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/__pycache__/*" | xargs file --mime-type 2>/dev/null | grep -E "text|python|javascript" | cut -d: -f1 | xargs wc -l 2>/dev/null | tail -1

# LOC by directory (key modules only, exclude tests/examples)
for dir in <core-dirs>; do
  count=$(find "$dir" -name "*.py" -o -name "*.ts" -o -name "*.js" 2>/dev/null | xargs wc -l 2>/dev/null | tail -1 | awk '{print $1}')
  echo "$dir: $count LOC"
done

# File count and LOC for each module
find . -name "*.py" -not -path "*/__pycache__/*" -not -path "*/tests/*" | xargs wc -l | sort -n

# Top 20 largest source files
find . -name "*.py" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | grep -v __pycache__ | xargs wc -l | sort -rn | head -20
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

## Phase 3: Dynamic Chapter Planning

### 3.1 Calculate Chapter Count from Code Volume

**DO NOT use a fixed chapter count.** Calculate based on actual LOC:

| Total LOC | Recommended Chapters | Strategy |
|-----------|---------------------|----------|
| < 1,000 | 6-10 | One chapter per module, focus on core flow |
| 1,000 - 5,000 | 10-18 | One chapter per major component, group related files |
| 5,000 - 15,000 | 18-30 | Split large modules into sub-chapters, cover each algorithm |
| 15,000 - 30,000 | 30-45 | Each significant class gets its own section, cover all variants |
| > 30,000 | 45+ | Full exhaustive analysis, every non-trivial function documented |

**Calculation formula:**

```python
def calculate_chapters(total_loc, module_breakdown):
    """
    total_loc: total lines of source code (excluding tests, examples, docs)
    module_breakdown: dict of {module_name: loc}
    """
    # Base: 3 chapters for intro/overview/quickstart
    base = 3

    # Each module with > 100 LOC gets its own chapter
    module_chapters = sum(1 for loc in module_breakdown.values() if loc > 100)

    # Large modules (> 500 LOC) get split into sub-chapters
    split_chapters = sum(loc // 500 for loc in module_breakdown.values() if loc > 500)

    # Every 1,000 LOC of total code needs ~1 appendix or deep-dive
    appendix_chapters = max(1, total_loc // 2000)

    return base + module_chapters + split_chapters + appendix_chapters
```

### 3.2 Module-to-Chapter Mapping Rules

For each source directory, apply these rules:

**Rule 1: One module = one chapter (minimum)**
Each directory with > 100 LOC of non-trivial code gets at least one chapter.

**Rule 2: Large modules get split**
A module with > 500 LOC should be split into multiple chapters:
- Each public class with > 50 LOC → one subsection
- Each public function with > 30 LOC → documented with full code
- Each algorithm/strategy variant → its own comparison section

**Rule 3: Registry/mapping files get their own chapter**
Files like `mapping.py`, `registry.py`, `__init__.py` with many exports deserve a chapter explaining the registration pattern.

**Rule 4: Variants get dedicated sections**
If a base class has 14 subclasses (e.g., DPO's 14 loss variants), each variant gets its own subsection with real code.

**Rule 5: Configuration dataclasses get full documentation**
Every field in a dataclass/Pydantic model gets documented with its default value, type, and effect.

### 3.3 Chapter Outline Template

After calculation, produce a chapter plan like:

```
Part 1: 宏观认知 (Chapters 1-3) — fixed
Part 2: 基础设施层 (Chapters 4-{N}) — one per core module
Part 3: 核心实现层 (Chapters {N+1}-{M}) — split large modules
Part 4: 高级特性 (Chapters {M+1}-{K}) — variants, extensions, integrations
Part 5: 超参数与配置 (Chapters {K+1}-{P}) — dataclass field docs
Appendices — reference tables, glossary, reading paths
```

### 3.4 Code Detail Preservation Rules

**These rules are MANDATORY:**

1. **Never replace real code with `...` or `# actual code from repo`** — copy the actual implementation
2. **Every code block must show the real function signature** — parameters, types, return types
3. **Complex functions (> 20 lines) must be shown in full** — not summarized
4. **Show the actual default values** — not `<default>` placeholders
5. **Include the file path as a comment** — `# 摘自 swift/loss/embedding.py:123`
6. **Annotate key lines** — add inline comments explaining design decisions
7. **Show the inheritance chain** — `class DPOTrainer(Trainer, DPOTrainerMixin)` — both parents matter
8. **Include conditional branches** — if/else logic reveals design decisions
9. **Show error handling** — try/except blocks are part of the design
10. **Preserve magic numbers with explanation** — `temperature=0.1  # InfoNCE默认温度`

---

## Phase 4: Deep Code Reading

### 4.1 Read Every Significant File

For each source file identified in Phase 1:

1. **Read the full file** — use `Read` tool with appropriate limits
2. **Identify all public classes** — document their inheritance chain
3. **Identify all public functions** — note signatures and LOC
4. **Map the call graph** — which functions call which
5. **Note all configuration parameters** — with defaults and effects
6. **Extract real code snippets** — save for use in chapters

### 4.2 Code Annotation Process

For each code snippet to be included in a chapter:

```python
# WRONG — do not do this:
def loss_function(...):
    # ... actual code from repo
    return loss

# RIGHT — do this instead:
# 摘自 swift/loss/embedding.py:45
def InfoNCELoss(
    query: torch.Tensor,      # query 嵌入向量 [B, D]
    positive: torch.Tensor,   # 正样本嵌入向量 [B, D]
    negatives: torch.Tensor,  # 负样本嵌入矩阵 [B, N, D]
    temperature: float = 0.1, # 温度参数，控制分布平滑度
    in_batch_negatives: bool = True  # 是否使用 batch 内负样本
) -> torch.Tensor:
    """InfoNCE 损失函数实现。

    通过最大化 query 与 positive 的相似度、
    最小化 query 与 negatives 的相似度来学习嵌入表示。
    """
    # 计算 query 与 positive 的余弦相似度
    pos_sim = F.cosine_similarity(query, positive, dim=-1)  # [B]

    # 计算 query 与所有负样本的相似度
    neg_sim = torch.bmm(
        query.unsqueeze(1),    # [B, 1, D]
        negatives.transpose(1, 2)  # [B, D, N]
    ).squeeze(1)  # [B, N]

    # 拼接正负样本 logits
    logits = torch.cat([pos_sim.unsqueeze(1), neg_sim], dim=1)  # [B, N+1]

    # 除以温度参数
    logits = logits / temperature

    # 目标：正样本索引为 0
    targets = torch.zeros(query.size(0), dtype=torch.long, device=query.device)

    return F.cross_entropy(logits, targets)
```

### 4.3 Comparison Table Rules

When comparing implementations (e.g., loss function variants):

- **Show the actual difference in code**, not just descriptions
- Include the mathematical formula if applicable
- Show the hyperparameter difference (e.g., `beta=0.1` vs `beta=0.5`)
- Include a "when to use" recommendation based on the code logic

---

## Phase 5: Generate Content

### 5.1 Chapter Writing Rules

Each chapter follows this structure:

```markdown
# 第 N 章 <章节标题>

<引言段落 — 概述本章内容，说明该模块在整体架构中的位置>

## N.1 <核心概念>

<概念解释，为什么需要这个模块>

### 源码实现

```python
# 摘自 <实际文件路径>:<行号>
<真实代码，保留完整实现>
```

<逐行/逐段分析>

## N.2 <变体/配置/使用方式>

<对比表格，包含实际参数差异>

## N.3 <设计决策>

<为什么这样设计，有什么 trade-off>

## 小结

- **要点 1**：<关键概念总结>
- **要点 2**：<实现细节总结>
- **要点 3**：<设计决策总结>
```

### 5.2 Content Generation Rules

1. **Real Code Only**: Every major concept must show the actual source code with file path
2. **Progressive Disclosure**: Start with the interface/signature, then dive into implementation
3. **Visual Aids**: Use ASCII diagrams, tables, and flowcharts
4. **Real Paths**: Reference actual file paths (`swift/loss/embedding.py`)
5. **Version-Specific**: Note which version/commit you're analyzing
6. **Comparison Tables**: Show real code differences between variants
7. **Full Signatures**: Show all parameters with types and defaults
8. **Inheritance Chains**: Show `class Child(Parent1, Parent2)` with both parents explained

### 5.3 Chapter Templates

See TEMPLATES.md for detailed templates. Key change from v1:
- **Template B (Core Engine)**: Now requires full implementation code, not simplified call chains
- **Template C (Extension System)**: Now requires showing the registration mechanism code
- **New Template D (Configuration)**: New template for documenting dataclass fields with full parameter tables

---

## Phase 6: Build & Deploy

### 6.1 Initialize VitePress Project

```bash
mkdir <project>-book
cd <project>-book
npm init -y
npm install -D vitepress
```

### 6.2 Create package.json

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

### 6.3 Create VitePress Config

Generate `.vitepress/config.ts` with:
- Site title and description
- Navigation bar (开始阅读, 目录, GitHub)
- **Sidebar dynamically generated from actual chapter count** — do not hardcode
- Footer and social links
- Search enabled

### 6.4 Generate index.md

Create homepage with:
- Hero layout
- Project name, tagline, description
- Action buttons (开始阅读, 查看目录, GitHub)
- 3-4 feature cards with icons

### 6.5 Generate contents.md

Create table of contents page listing **all chapters** organized by parts. Must match the actual number of chapters generated.

### 6.6 Create Chapter Files

Write all chapters in `chapters/` directory. File naming:
- `01-<slug>.md`
- `02-<slug>.md`
- ... (continue for all dynamically-planned chapters)
- `appendix-a-<slug>.md`
- `appendix-b-<slug>.md`
- `appendix-c-<slug>.md`

### 6.7 Add Assets

Create `public/` directory:
- `favicon.svg`
- `logo.svg`

### 6.8 Setup GitHub Actions

Create `.github/workflows/deploy.yml` for automatic deployment to GitHub Pages.

### 6.9 Create README.md

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

### 6.10 Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: <项目名> 源码解析"
git branch -M main
git remote add origin https://github.com/<username>/<project>-book.git
git push -u origin main
```

**Note**: If HTTPS push fails (common in China), try SSH:
```bash
git remote set-url origin git@github.com:<username>/<project>-book.git
git push -u origin main
```

---

## Quality Checklist

Before finalizing the book, verify:

- [ ] Chapter count matches the dynamic calculation from Phase 3
- [ ] **Every code snippet is real source code** — no `...` or `<placeholder>` patterns
- [ ] All chapters have consistent formatting
- [ ] Code snippets include file path comments (`# 摘自 swift/loss/embedding.py:45`)
- [ ] Function signatures show all parameters with types and defaults
- [ ] Class definitions show full inheritance chains
- [ ] ASCII diagrams are clear and accurate
- [ ] Tables are properly formatted in Markdown
- [ ] All internal links work (run `npm run docs:build` to check)
- [ ] Navigation sidebar matches actual chapter structure
- [ ] Index page has compelling description and features
- [ ] Appendices provide useful reference material
- [ ] GitHub Actions workflow is configured
- [ ] README.md is complete

---

## Anti-Patterns (DO NOT DO)

1. **Never write `def foo(...): return <call>()`** — show the real implementation
2. **Never write `<参数>` or `<类型>` placeholders** — use actual parameter names and types
3. **Never skip error handling code** — try/except reveals design decisions
4. **Never skip conditional branches** — if/else logic is part of the architecture
5. **Never write "详见源码"** — the reader is reading the book to avoid reading source
6. **Never hardcode chapter count to 15** — calculate from LOC
7. **Never write `# ... actual code from repo`** — this is a book, not a link

---

## Tips for High-Quality Books

1. **Read the README first**: Understand the project's own documentation before analyzing
2. **Follow the code**: Trace execution from entry points to understand data flow
3. **Identify the "magic"**: What makes this project special? Focus on that
4. **Use real examples**: Extract actual usage patterns from tests or docs
5. **Compare and contrast**: Help readers understand trade-offs with real code diffs
6. **Write for multiple audiences**: Beginners need context, experts need depth
7. **Keep chapters focused**: Each chapter should have a clear theme
8. **Update for versions**: Note which version you're analyzing, mention breaking changes
9. **Annotate, don't just copy**: Add inline comments explaining WHY, not just WHAT
10. **Show the registry pattern**: How modules register themselves is key architecture

---

## Example Output Structure

```
<project>-book/
├── .vitepress/
│   └── config.ts
├── .github/
│   ── workflows/
│       └── deploy.yml
├── chapters/
│   ├── 01-what-is-<project>.md
│   ├── 02-repo-overview.md
│   ├── 03-quick-start.md
│   ├── 04-<module-1>.md        ← one per module, count varies
│   ├── 05-<module-2>.md
│   ├── ...                      ← continues based on LOC
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

---

## References

This skill is reverse-engineered from the CoolClaws book pattern and optimized for code-detail preservation:
- **Source**: https://github.com/coolclaws
- **Top book**: deerflow-book (576 stars)
- **Pattern**: VitePress + Markdown + GitHub Pages
- **Style**: Progressive disclosure, code-driven, architecture-focused
- **v2.0 improvements**: Dynamic chapter count from LOC, mandatory real code preservation, inline annotation
