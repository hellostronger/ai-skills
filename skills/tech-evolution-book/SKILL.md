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
  - Bash  # For PDF download and text extraction
  - Read  # For reading extracted text files
fallback_tools:
  - If PDF reading fails, use huggingface papers API
  - Use paperswithcode for benchmark summaries
  - Use semantic scholar API as backup
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
│  2. Try Multiple PDF Access Methods                │
│     ┌─────────────────────────────────────────┐   │
│     │ Method A: WebFetch arxiv.org/abs page   │   │
│     │ → Extract abstract, title, authors      │   │
│     └─────────────────────────────────────────┘   │
│     ┌─────────────────────────────────────────┐   │
│     │ Method B: HuggingFace Papers API        │   │
│     │ → https://huggingface.co/papers/XXXX    │   │
│     │ → Often has summary and key findings    │   │
│     └─────────────────────────────────────────┘   │
│     ┌─────────────────────────────────────────┐   │
│     │ Method C: Semantic Scholar API          │   │
│     │ → API: semanticscholar.org API          │   │
│     │ → Returns structured paper data         │   │
│     └─────────────────────────────────────────┘   │
│     ┌─────────────────────────────────────────┐   │
│     │ Method D: Papers With Code              │   │
│     │ → paperswithcode.com/paper/XXXX         │   │
│     │ → Has benchmarks, implementations       │   │
│     └─────────────────────────────────────────┘   │
│                                                    │
│  3. Extract Key Information                        │
│     From abstract: Problem, solution, results     │
│     From HuggingFace: Community summary           │
│     From PapersWithCode: Benchmark tables         │
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

### Multi-Query Parallel Search Strategy

**IMPORTANT**: Execute multiple searches in parallel for efficiency:

```python
# Phase 1: Discovery (4 parallel queries)
queries = [
  "[tech] history overview",
  "[tech] evolution timeline chronological",
  "[tech] version history releases",
  "[tech] roadmap development"
]

# Phase 2: Version Deep Dive (6 parallel queries per version)
queries = [
  "[tech] [version] release announcement official",
  "[tech] [version] technical report paper",
  "[tech] [version] improvements changes features",
  "[tech] [version] benchmark results evaluation",
  "[tech] [version] architecture implementation",
  "[tech] [version] vs previous comparison"
]

# Phase 3: Technical Details (5 parallel queries)
queries = [
  "[tech] [feature] implementation code",
  "[tech] [feature] algorithm explanation",
  "[tech] [feature] architecture diagram",
  "[tech] [feature] paper technical details",
  "how [tech] implements [feature]"
]

# Phase 4: Comparison (6 parallel queries)
queries = [
  "[tech] vs [competitor1] benchmark",
  "[tech] vs [competitor2] comparison",
  "[tech] competitive analysis",
  "[tech] performance ranking leaderboard",
  "[tech] strength weakness analysis",
  "[tech] best use cases scenarios"
]
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

### Tool Failure Handling

**When WebSearch returns incomplete results:**

```
┌────────────────────────────────────────────────────────┐
│           WebSearch Failure Recovery                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Scenario 1: Search returns tool call placeholder     │
│  ┌──────────────────────────────────────────────┐    │
│  │ Solution: Use existing knowledge + retry     │    │
│  │ 1. Note the failure in evaluation            │    │
│  │ 2. Use general knowledge about the topic     │    │
│  │ 3. Try alternative query wording             │    │
│  │ 4. Mark as "needs manual verification"       │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
│  Scenario 2: WebFetch blocked by domain               │
│  ┌──────────────────────────────────────────────┐    │
│  │ Solution: Use alternative access methods     │    │
│  │ 1. Try WebSearch with full URL               │    │
│  │ 2. Use cached results from previous searches │    │
│  │ 3. Use knowledge base about known papers     │    │
│  │ 4. Note citation as "arXiv:[ID]"             │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
│  Scenario 3: PDF Read fails (pdftoppm missing)        │
│  ┌──────────────────────────────────────────────┐    │
│  │ Solution: Use alternative extraction         │    │
│  │ 1. Bash: pdftotext paper.pdf paper.txt       │    │
│  │ 2. Read: paper.txt (as plain text)           │    │
│  │ 3. Use WebSearch for paper summary           │    │
│  │ 4. Use HuggingFace papers page               │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
│  Scenario 4: All searches fail                        │
│  ┌──────────────────────────────────────────────┐    │
│  │ Solution: Graceful degradation               │    │
│  │ 1. Use existing knowledge about the topic    │    │
│  │ 2. Clearly mark sections as "estimated"      │    │
│  │ 3. Provide partial output with caveats       │    │
│  │ 4. Suggest manual follow-up                  │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Knowledge Integration Rules

When using existing knowledge due to search failures:

```
Use Knowledge + Mark Caveat Pattern:

Example output:
```markdown
## 2.3 核心架构

Qwen-2 使用了以下核心架构（基于技术报告摘要）：

1. **GQA (Grouped Query Attention)** ⭐
   - 多个 query head 共享一个 KV head
   - KV cache 减少约 4x
   - 推理效率提升显著
   > 注：具体实现细节需参考 arxiv:2407.10671

2. **RoPE 位置编码**
   - 旋转位置编码方案
   - 支持长序列建模
   > 注：参数细节需进一步验证
```

Always:
1. Add "（基于公开资料）" or similar caveat
2. Use ">" blockquotes to note what needs verification
3. Provide arXiv IDs for papers even if not fully analyzed
4. Link to official sources when possible
```

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

---

## Content Synthesis Strategy

### Information Integration Pattern

When multiple search results return partial information:

```
┌──────────────────────────────────────────────────────┐
│           Content Synthesis Workflow                  │
├──────────────────────────────────────────────────────┤
│                                                      │
│  1. Collect Search Results                          │
│     ├─ Result A: Partial timeline                   │
│     ├─ Result B: Benchmark data                     │
│     ├─ Result C: Architecture info                  │
│     └─ Result D: Release details                    │
│                                                      │
│  2. Extract Key Facts from Each                     │
│     ├─ Extract: Version names, dates, numbers       │
│     ├─ Extract: Benchmark scores                    │
│     ├─ Extract: Technical terms                     │
│     └─ Extract: Feature descriptions                │
│                                                      │
│  3. Cross-Reference & Validate                      │
│     ├─ Match version dates across sources           │
│     ├─ Verify benchmark numbers                     │
│     ├─ Confirm architecture details                 │
│     └─ Flag inconsistencies                         │
│                                                      │
│  4. Synthesize Unified View                         │
│     ├─ Create master timeline table                 │
│     ├─ Build benchmark comparison tables            │
│     ├─ Write technical explanations                 │
│     └─ Add citations to sources                     │
│                                                      │
│  5. Identify Missing Information                    │
│     ├─ Check against minimum requirements           │
│     ├─ List gaps that need expansion                │
│     └─ Generate next search queries                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Fact Extraction Rules

When processing search results:

```
Priority 1: Official Sources
├─ Official blogs (qwenlm.github.io)
├─ GitHub repositories (QwenLM/Qwen*)
├─ arXiv papers (arxiv.org/abs/*)
├─ Official documentation
→ Extract ALL available facts

Priority 2: Community Sources  
├─ HuggingFace (huggingface.co)
├─ Papers With Code (paperswithcode.com)
├─ Reddit discussions (r/LocalLLaMA)
├─ Blog posts (medium, towardsdatascience)
→ Extract confirmed facts, verify numbers

Priority 3: Secondary Sources
├─ News articles
├─ YouTube transcripts
├─ Twitter/X posts
→ Use for sentiment, community reaction only
```

---

## Output Generation Template

### Standard Book Structure

```markdown
# [Technology Name] 模型演进史

## 目录

- 第 1 章：诞生背景
- 第 2 章：版本 1.x - 基础奠基
- 第 3 章：版本 2.x - 核心突破
- 第 4 章：版本 3.x - 成熟完善
- 第 5 章：技术深度解析
- 第 6 章：竞品对比分析
- 第 7 章：未来展望

---

## 第 1 章 [技术名] 的诞生：[背景标题]

> 本章要点：[一句话总结]

### 1.1 行业背景与挑战

[描述行业痛点，为什么需要这个技术]

### 1.2 项目启动

**时间**：[具体日期]

**团队**：[开发团队/公司]

**目标**：[项目愿景]

---

## 第 2 章 [版本名]：[定位]（[日期]）

> 核心改进：[列举3个主要改进]

### 2.1 发布背景

**发布时间**：[日期]

**版本定位**：[定位描述]

### 2.2 核心改进详解

#### 改进 1：[名称]

**问题**：[解决了什么问题]

**方案**：[具体方案]

**实现**：
```
[代码/架构图]
```

**效果**：[量化效果]

#### 改进 2：[名称]
[同上结构]

#### 改进 3：[名称]
[同上结构]

### 2.3 性能评估

| Benchmark | 本版本 | 上版本 | 提升 |
|-----------|-------|-------|-----|
| [测试名] | [数值] | [数值] | [+X%] |

### 2.4 社区反响

[发布后的评价、讨论、采用情况]

---

## 第 N 章 技术深度解析

### N.1 [核心技术] 实现原理

#### 基础概念

[技术概念解释]

#### 为什么选择它

[设计决策分析]

#### 实现细节

```python
# 关键代码片段
[代码]
```

#### 性能影响

| 维度 | 无此技术 | 有此技术 | 差异 |
|-----|---------|---------|-----|
| 速度 | [数值] | [数值] | [+X] |
| 内存 | [数值] | [数值] | [-X] |

---

## 附录

### A. 版本演进速查表

| 版本 | 发布时间 | 核心改进 | 关键指标 |
|-----|---------|---------|---------|
| v1 | [日期] | [改进] | [指标] |
| v2 | [日期] | [改进] | [指标] |

### B. 参考文献

1. [官方博客标题] - [URL]
2. [论文标题] - arXiv:[编号]
3. [GitHub仓库] - [URL]

---
```

### Benchmark Table Templates

```markdown
# Model Size Comparison

| Model Size | MMLU | MATH | HumanEval | GSM8K |
|------------|------|------|-----------|-------|
| 7B | [score] | [score] | [score] | [score] |
| 72B | [score] | [score] | [score] | [score] |

# Version Evolution Comparison

| Benchmark | v1 | v1.5 | v2 | v2.5 |
|-----------|-----|------|-----|------|
| MMLU | [s] | [s] | [s] | [s] |
| MATH | [s] | [s] | [s] | [s] |

# Competitor Comparison

| Model | MMLU | MATH | HumanEval | Best For |
|-------|------|------|-----------|----------|
| [Tech] | [s] | [s] | [s] | [use case] |
| [Comp1] | [s] | [s] | [s] | [use case] |
| [Comp2] | [s] | [s] | [s] | [use case] |
```

---

## Quality Check Before Output

Before finalizing output, verify:

| Requirement | Check | Status |
|-------------|-------|--------|
| All versions covered? | List versions found | ✅/❌ |
| Each version has 3+ improvements? | Count improvements | ✅/❌ |
| Benchmark tables complete? | Check data | ✅/❌ |
| Technical details included? | Check depth | ✅/❌ |
| Citations added? | List sources | ✅/❌ |
| Comparison section present? | Verify | ✅/❌ |
| Future predictions included? | Verify | ✅/❌ |

If any ❌ → Return to search phase
---

## Example Output (Qwen Model Evolution)

### Generated Chapter Example

```markdown
# Qwen 模型演进史

## 第 2 章 Qwen-2：架构突破（2024年6月）

### 2.1 发布背景

**发布时间**：2024年6月7日

**团队**：阿里云 Qwen Team

**定位**：相比 Qwen-1.5 的全面架构升级

### 2.2 核心改进清单

| 改进项 | 类别 | 重要性 | 效果 |
|-------|------|--------|------|
| GQA (Grouped Query Attention) | 架构 | ⭐⭐⭐ | KV cache 减少 4x |
| 扩展上下文窗口 | 能力 | ⭐⭐ | 支持 32K+ tokens |
| 训练数据扩展 | 训练 | ⭐⭐ | 7T tokens |

### 2.3 GQA 实现详解

#### 问题背景

传统 MHA (Multi-Head Attention) 在推理时需要为每个 head 存储独立的 KV cache，内存占用大。

#### 解决方案

GQA 将多个 query head 分组，每组共享一个 KV head：

```
MHA: 32 query heads → 32 KV heads (各独立)
GQA: 32 query heads → 8 KV heads (分组共享)
     每4个 query head 共享1个 KV head
```

#### 效果对比

| 维度 | MHA | GQA | 提升 |
|-----|-----|-----|------|
| KV cache 大小 | 100% | 25% | 减少75% |
| 推理速度 | 基准 | +15% | 更快 |
| 性能损失 | - | <2% | 可接受 |

### 2.4 性能评估

**Benchmark对比（Qwen-1.5 vs Qwen-2 72B）**

| Benchmark | Qwen-1.5-72B | Qwen-2-72B | 提升 |
|-----------|-------------|------------|------|
| MMLU | 77.2 | 84.2 | +7.0 |
| MATH | 36.1 | 58.0 | +21.9 |
| HumanEval | 52.8 | 64.1 | +11.3 |

> 数据来源：Qwen2 Technical Report (arxiv:2407.10671)

### 2.5 社区反响

发布后：
- GitHub: 24小时内获得 5000+ stars
- Hacker News: 热门讨论
- Reddit r/LocalLLaMA: 高度关注

主要评价：
- "GQA 是关键突破" - 性能效率双赢
- "中文模型新标杆"
- "开源社区的重要贡献"
```

---

## Multilingual Support

### Chinese Output Pattern

When analyzing Chinese technologies or for Chinese users:

```
Default Output Language: 中文

Structure:
- 章节标题使用中文
- 技术术语保留英文原文
- 解释使用中文
- Benchmark 表格保持英文基准名称

Example:
"Qwen-2 引入了 **GQA (Grouped Query Attention)** 技术，
将 KV cache 内存占用减少了约 4 倍，推理速度提升约 15%。"
```

### English Output Pattern

When analyzing English technologies or for English users:

```
Default Output Language: English

Structure:
- All content in English
- Technical terms explained in English
- Standard benchmark names
```

---

## Technology Type-Specific Templates

### AI Model Analysis

```
Required Sections:
1. Model Architecture (Transformer variants, attention mechanisms)
2. Training Data (scale, composition, languages)
3. Training Methodology (pretraining, fine-tuning stages)
4. Benchmark Performance (MMLU, MATH, HumanEval, etc.)
5. Specialized Variants (if any: Math, Coder, VL)
6. Inference Efficiency (speed, memory, techniques)
7. Open Source Status (license, availability)
```

### Framework/Library Analysis

```
Required Sections:
1. Core Architecture (design patterns, key components)
2. API Evolution (breaking changes, new features)
3. Performance Improvements (benchmarks, optimizations)
4. Community Adoption (npm downloads, GitHub stars)
5. Competitor Comparison (similar frameworks)
6. Migration Guides (version upgrade paths)
```

### Programming Language Analysis

```
Required Sections:
1. Language Design Philosophy
2. Syntax/Feature Evolution
3. Runtime Improvements
4. Standard Library Changes
5. Tooling Updates (compilers, linters)
6. Community & Ecosystem Growth
```
