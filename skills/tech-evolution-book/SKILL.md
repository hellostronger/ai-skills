---
name: tech-evolution-book
description: Analyze technology evolution in book chapter format - track iterations, improvements, and implementation details
triggers:
  - analyze tech evolution
  - track model iterations
  - 技术演进分析
  - 模型迭代
  - 发展历程
  - 版本历史
  - analyze [tech-name] evolution
  - [tech-name] 发展史
requires_tools:
  - WebSearch
  - WebFetch
  - Read  # For reading PDF files
---

# Tech Evolution Book Generator

## Purpose

Generate a comprehensive book analyzing the evolution of a technology (AI models, frameworks, libraries, etc.) in chapter format, covering:

1. **Origins & Motivation** - Why the technology was created
2. **Version Iterations** - Each major version/release
3. **Improvements** - What changed in each version
4. **Implementation Details** - How improvements were implemented
5. **Impact & Significance** - Why each change matters

---

## Agentic Search Strategy

### Core Principle: Iterative Deepening

The search process is **agentic** - it continues expanding until information requirements are met.

```
┌─────────────────────────────────────────────────────────────┐
│                    Agentic Search Flow                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐                                           │
│  │ Initial Query│                                           │
│  └──────┬───────┘                                           │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────┐     ┌──────────────┐                     │
│  │   Search     │────▶│  Evaluate    │                     │
│  └──────┬───────┘     │  Results     │                     │
│         │             └──────┬───────┘                     │
│         │                    │                             │
│         │              ┌─────┴─────┐                       │
│         │              │ Satisfied?│                       │
│         │              └─────┬─────┘                       │
│         │                    │                             │
│         │              No    │    Yes                      │
│         │              ┌─────┴─────┐                       │
│         │              │           │                       │
│         │              ▼           ▼                       │
│         │        ┌──────────┐  ┌──────────┐               │
│         │        │ Expand   │  │ Proceed  │               │
│         │        │ Search   │  │ to Write │               │
│         │        └─────┬────┘  └──────┘───┘               │
│         │              │                                     │
│         └──────────────┘                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Phase 1: Breadth-First Discovery

**Goal**: Establish timeline and version list

```
Search Iteration 1:
├── "[technology] history overview"
├── "[technology] evolution timeline"
├── "[technology] version history"
└── "[technology] releases chronological"

Evaluation Criteria:
- Have we identified all major versions? (Yes/No)
- Do we know release dates? (Yes/No)
- Do we have high-level overview? (Yes/No)

If No → Expand to:
├── "[technology] GitHub releases"
├── "[technology] changelog"
├── "[technology] roadmap"
└── [company/blog] "[technology] announcements"
```

### Phase 2: Version-Specific Deep Dive

**Goal**: Detailed information for each version

```
For each identified version:

Search Iteration:
├── "[tech] [version] release announcement"
├── "[tech] [version] technical report"
├── "[tech] [version] arxiv"  ← Flag for PDF download!
├── "[tech] [version] improvements changes"
└── "[tech] [version] architecture changes"

Evaluation Criteria:
- Core improvements identified? (Yes/No)
- Implementation details found? (Yes/No)
- Benchmark data available? (Yes/No)

If No → Expand to:
├── "[tech] [version] paper pdf"
├── "[tech] [version] blog post"
├── "[tech] [version] GitHub commit analysis"
├── "[tech] [version] vs previous version"
└── "[tech] [version] community discussion"
```

### Phase 3: Technical Implementation Research

**Goal**: Code-level implementation details

```
For each key improvement:

Search Iteration:
├── "[tech] [feature] implementation"
├── "[tech] [feature] code analysis"
├── "[tech] [feature] technical blog"
└── "[tech] [feature] paper"

Evaluation Criteria:
- Algorithm/math explanation found? (Yes/No)
- Code snippets available? (Yes/No)
- Performance impact documented? (Yes/No)

If No → Expand to:
├── "[tech] [feature] source code"
├── "[tech] [feature] GitHub pull request"
├── "[tech] [feature] architecture diagram"
└── "[tech] similar [feature] implementation"
```

### Phase 4: Comparison & Impact

**Goal**: Competitive landscape and community impact

```
Search Iteration:
├── "[tech] vs [competitor1] vs [competitor2]"
├── "[tech] benchmark comparison"
├── "[tech] community reaction"
└── "[tech] adoption statistics"

If No → Expand to:
├── "[tech] reddit discussion"
├── "[tech] twitter sentiment"
├── "[tech] industry analysis report"
└── "[tech] use cases examples"
```

---

## PDF Paper Analysis (arXiv Papers)

### Detection & Download Workflow

When search results contain **arXiv links**:

```
┌────────────────────────────────────────────────────┐
│           arXiv Paper Processing Pipeline           │
├────────────────────────────────────────────────────┤
│                                                    │
│  1. Detect arXiv URL in search results             │
│     Pattern: arxiv.org/abs/XXXX.XXXXX              │
│                                                    │
│  2. Download PDF                                   │
│     URL: arxiv.org/pdf/XXXX.XXXXX.pdf              │
│     Tool: WebFetch → Get PDF URL                   │
│     Tool: Bash (curl/wget) → Download to temp      │
│                                                    │
│  3. Read & Analyze PDF                             │
│     Tool: Read (with pages parameter)              │
│     Extract: Title, Authors, Abstract              │
│     Extract: Key technical innovations             │
│     Extract: Benchmark results, Tables             │
│     Extract: Architecture diagrams                 │
│                                                    │
│  4. Summarize for Book Chapter                     │
│     - Create structured summary                    │
│     - Extract implementation details               │
│     - Quote key findings                           │
│     - Add citation reference                       │
│                                                    │
└────────────────────────────────────────────────────┘
```

### PDF Analysis Tools

**Primary Tool: Read**

```python
# Read PDF with pages parameter
Read(
  file_path="/path/to/paper.pdf",
  pages="1-10"  # Read first 10 pages
)
```

**PDF Analysis Focus Areas**:

When analyzing technical papers, extract:

1. **Abstract & Introduction**
   - Problem being solved
   - Key innovations claimed
   - Scope of the work

2. **Methodology Section**
   - Architecture design
   - Algorithms used
   - Implementation details
   - Mathematical formulations

3. **Experiments Section**
   - Benchmark results
   - Comparison tables
   - Performance metrics

4. **Discussion & Conclusion**
   - Limitations
   - Future directions
   - Key takeaways

### Example: Processing arXiv Paper

```
Search: "Qwen 2 technical report arxiv"

Result: https://arxiv.org/abs/2407.10671

Actions:
1. WebFetch → Get PDF URL: https://arxiv.org/pdf/2407.10671.pdf
2. Bash → curl -o /tmp/qwen2.pdf https://arxiv.org/pdf/2407.10671.pdf
3. Read → 
   - pages="1-5" → Abstract, Introduction, Architecture overview
   - pages="6-10" → Training methodology, Experiments
   - pages="11-15" → Benchmark results, Conclusion

4. Extract key information:
   - Title: "Qwen2 Technical Report"
   - Authors: Alibaba Cloud Qwen Team
   - Key innovations: GQA, improved tokenizer, extended training
   - Benchmarks: MMLU, MATH, HumanEval scores
   - Architecture details: Transformer with modifications

5. Integrate into chapter:
   - Chapter 4: Qwen-2 Architecture Breakthrough
   - Section 4.2: GQA Implementation (from paper Section 3)
   - Section 4.3: Benchmark Analysis (from paper Table 2)
```

---

## Information Sufficiency Criteria

### Minimum Requirements for Each Version

Before moving to next version, ensure:

| Requirement | Source Type | Minimum Depth |
|-------------|-------------|---------------|
| Release date | Official announcement | Exact date |
| Core improvements | Paper/Blog/GitHub | 3+ specific changes |
| Implementation details | Paper/Code | 1+ technical explanation |
| Performance data | Benchmark/Paper | Comparison numbers |
| Motivation | Interview/Blog | Why changes were made |

### Expansion Triggers

Continue searching if:

- ❌ Missing any minimum requirement
- ❌ Information is vague/generic
- ❌ No implementation details found
- ❌ Conflicting information between sources
- ❌ Need deeper explanation of specific feature

### Termination Conditions

Stop searching when:

- ✅ All minimum requirements met
- ✅ Information from primary sources (official/paper)
- ✅ Cross-validated across multiple sources
- ✅ Implementation details are concrete
- ✅ Benchmark data is available

---

## Search Expansion Patterns

### Progressive Query Expansion

```
Level 1 (Broad):
"[tech] history"

Level 2 (Specific):
"[tech] [version] release"

Level 3 (Deep):
"[tech] [version] technical report arxiv"

Level 4 (Source-Specific):
"arxiv.org [tech] [version] paper"
"[tech] GitHub [version] release notes"

Level 5 (Alternative Sources):
"[tech] [version] reddit discussion"
"[tech] [version] blog analysis"
"[tech] [version] video explanation"
```

### Query Modification Strategies

If results are insufficient:

| Problem | Strategy | Example |
|---------|----------|---------|
| No official source | Add company name | "Alibaba Qwen 2 technical report" |
| No technical details | Add "paper" or "arxiv" | "Qwen 2 arxiv paper" |
| No benchmarks | Add "benchmark" or "evaluation" | "Qwen 2 benchmark comparison" |
| No code | Add "GitHub" or "implementation" | "Qwen 2 GQA implementation GitHub" |
| No timeline | Add "chronological" or "timeline" | "Qwen model evolution timeline" |

---

## Workflow

### Complete Agentic Search Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  START                                                      │
│    │                                                        │
│    ▼                                                        │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 1: Breadth Discovery      │                       │
│  │ - Timeline search               │                       │
│  │ - Version list                  │                       │
│  │ - EVAL: All versions found?     │                       │
│  │   No → Expand search            │                       │
│  │   Yes → Proceed                 │                       │
│  └─────────────┬───────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 2: Version Deep Dive      │                       │
│  │ For each version:               │                       │
│  │ - Release info search           │                       │
│  │ - arXiv check → Download PDF    │                       │
│  │ - PDF analysis (Read tool)      │                       │
│  │ - EVAL: Requirements met?       │                       │
│  │   No → Expand search            │                       │
│  │   Yes → Next version            │                       │
│  └─────────────┬───────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 3: Implementation Deep    │                       │
│  │ For each key feature:           │                       │
│  │ - Technical search              │                       │
│  │ - Code search                   │                       │
│  │ - arXiv for architecture papers │                       │
│  │ - PDF analysis                  │                       │
│  │ - EVAL: Details sufficient?     │                       │
│  │   No → Expand search            │                       │
│  │   Yes → Proceed                 │                       │
│  └─────────────┬───────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 4: Comparison & Impact    │                       │
│  │ - Competitor search             │                       │
│  │ - Benchmark search              │                       │
│  │ - EVAL: Comparison complete?    │                       │
│  │   No → Expand search            │                       │
│  │   Yes → Proceed                 │                       │
│  └─────────────┬───────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 5: Book Generation        │                       │
│  │ - Structure chapters            │                       │
│  │ - Write content                 │                       │
│  │ - Add citations                 │                       │
│  │ - Generate VitePress config     │                       │
│  └─────────────────────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  END                                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Tools Specification

### Required Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| **WebSearch** | Information discovery | Every search iteration |
| **WebFetch** | Get page content | For arXiv pages, official blogs |
| **Bash** | Download PDFs | `curl -o paper.pdf arxiv_url` |
| **Read** | PDF analysis | `pages="1-20"` for paper content |
| **Write** | Generate book | Final output generation |

### PDF Reading Strategy

```
# Step 1: Download PDF
curl -L -o /tmp/paper.pdf "https://arxiv.org/pdf/XXXX.XXXXX.pdf"

# Step 2: Read key sections
Read(file_path="/tmp/paper.pdf", pages="1-3")   # Abstract, Introduction
Read(file_path="/tmp/paper.pdf", pages="4-8")   # Methodology
Read(file_path="/tmp/paper.pdf", pages="9-12")  # Experiments
Read(file_path="/tmp/paper.pdf", pages="13-15") # Conclusion

# Step 3: Extract and structure information
# Use extracted content to populate chapter sections
```

---

## Example: Full Agentic Search for Qwen

### Phase 1 Execution

```
Search 1: "Qwen model evolution timeline"
Result: Found versions 1, 1.5, 2, 2.5 mentioned

EVAL: Are all versions identified?
- Versions found: 1, 1.5, 2, 2.5
- Dates: Partial (need more)

DECISION: Expand search

Search 2: "Qwen release history chronological"
Result: 2023.08 (Qwen-1), 2024.02 (Qwen-1.5), 2024.06 (Qwen-2), 2024.09 (Qwen-2.5)

EVAL: All versions and dates found? YES
DECISION: Proceed to Phase 2
```

### Phase 2 Execution (for Qwen-2)

```
Search: "Qwen 2 technical report"
Result: Found arXiv link: https://arxiv.org/abs/2407.10671

ARXIV DETECTED → Download PDF

Bash: curl -o /tmp/qwen2.pdf https://arxiv.org/pdf/2407.10671.pdf

Read: pages="1-5"
Extract:
- Title: Qwen2 Technical Report
- Authors: Qwen Team, Alibaba Cloud
- Abstract: Qwen2 series with improved architecture

Read: pages="6-10"
Extract:
- GQA (Grouped Query Attention) implementation details
- Training data: 7T tokens
- Architecture modifications

Read: pages="11-15"
Extract:
- Benchmark tables (MMLU: 84.2, MATH: 56.4, HumanEval: 64.6)
- Comparison with Qwen-1.5
- Performance improvements

EVAL: Requirements met? YES
DECISION: Proceed to next version
```

### Phase 3 Execution (for GQA feature)

```
Search: "Qwen 2 GQA implementation details"
Result: Found blog post explaining GQA

Search: "Grouped Query Attention paper"
Result: Found original GQA paper arxiv.org/abs/2305.13245

ARXIV DETECTED → Download PDF

Bash: curl -o /tmp/gqa.pdf https://arxiv.org/pdf/2305.13245.pdf

Read: pages="1-8"
Extract:
- GQA algorithm explanation
- Mathematical formulation
- Code implementation hints

EVAL: Implementation details sufficient? YES
DECISION: Proceed
```

---

## Output Format

Generate a **VitePress-ready** book with:

1. `index.md` - Hero page with overview
2. `chapters/*.md` - Individual chapters
3. `.vitepress/config.ts` - Navigation config

Each chapter should include:
- **Citations**: `[1] arxiv:2407.10671` style references
- **Source links**: Link to original papers/blogs
- **Code snippets**: Where applicable
- **Tables**: Benchmark comparisons, feature comparisons

---

## Quick Start Example

```
User: 请分析 Qwen 模型从 Qwen-1 到 Qwen-2.5 的演进历程，包含每个版本的改进和实现细节

Claude:
好的！我将使用 Agentic Search 策略深度分析 Qwen 模型演进。

## Phase 1: 版本发现
搜索: "Qwen model evolution timeline" ...

评估: 是否找到所有版本？
- 找到: Qwen-1 (2023.08), Qwen-1.5 (2024.02), Qwen-2 (2024.06), Qwen-2.5 (2024.09)
- 结果: ✅ 满足要求

## Phase 2: 版本深度分析
分析 Qwen-2 ...
搜索: "Qwen 2 technical report arxiv"
发现 arXiv 论文: https://arxiv.org/abs/2407.10671

下载 PDF ...
读取 pages 1-5: 提取架构概述
读取 pages 6-10: 提取 GQA 实现细节
读取 pages 11-15: 提取 benchmark 数据

评估: 是否满足最低要求？
- 发布日期: ✅ 2024年6月
- 核心改进: ✅ GQA, tokenizer改进, 训练数据扩展
- 实现细节: ✅ 从论文提取
- 性能数据: ✅ Benchmark表格
- 改进动机: ❌ 缺少

扩展搜索: "Qwen 2 design decisions motivation"
...

[继续迭代直到满足所有要求]
```