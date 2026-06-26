---
name: tech-evolution-book
description: "Analyze technology evolution in book chapter format. Chapter count is dynamically determined by version count and feature complexity. Every technical improvement preserves its real implementation details with code snippets, architecture diagrams, and benchmark data. Use when the user wants to track tech iterations, model evolution, version history, or development roadmap. Triggers include: 'analyze tech evolution', 'track model iterations', '技术演进分析', '模型迭代', '发展历程', '版本历史', '尽可能详细', '保留实现细节'."
triggers:
  - analyze tech evolution
  - track model iterations
  - 技术演进分析
  - 模型迭代
  - 发展历程
  - 版本历史
  - analyze [tech-name] evolution
  - [tech-name] 发展史
  - 尽可能详细
  - 保留实现细节
requires_tools:
  - WebSearch
  - WebFetch
  - Bash  # For PDF download and text extraction
  - Read  # For reading extracted text files
  - kimi-webbridge  # For real browser access with login sessions
fallback_tools:
  - If WebSearch/WebFetch fails, use kimi-webbridge to access pages directly
  - If PDF reading fails, use huggingface papers API
  - Use paperswithcode for benchmark summaries
  - Use semantic scholar API as backup
  - Use kimi-webbridge to access official blogs and GitHub pages
---

# Tech Evolution Book Generator v2.0

## Purpose

Generate a comprehensive book analyzing the evolution of a technology (AI models, frameworks, libraries, etc.) in chapter format. **Chapter count is dynamically determined by version count and feature complexity** — 3 versions get 10 chapters, 10 versions get 30+ chapters. **Every technical improvement preserves its real implementation details** with code snippets, architecture diagrams, and benchmark data from official sources.

Covers:

1. **Origins & Motivation** - Why the technology was created
2. **Version Iterations** - Each major version/release (one chapter per version)
3. **Improvements** - What changed in each version (with real code/diagrams)
4. **Implementation Details** - How improvements were implemented (not simplified)
5. **Impact & Significance** - Why each change matters (with benchmark data)

---

## Agentic Search Strategy

### Core Principle: Iterative Deepening with Detail Preservation

The search process is **agentic** - it continues expanding until information requirements are met. **Every search must preserve implementation details, not just summaries.**

```
┌─────────────────────────────────────────────────────────────┐
│                    Agentic Search Flow                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐                                           │
│  │ Initial Query│                                           │
│  └──────┬───────                                           │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────     ┌──────────────┐                     │
│  │   Search     │────▶│  Evaluate    │                     │
│  └──────┬───────┘     │  Results     │                     │
│         │             └──────┬───────┘                     │
│         │                    │                             │
│         │              ┌─────┴─────┐                       │
│         │              │ Satisfied?│                       │
│         │              └──────────┘                       │
│         │                    │                             │
│         │              No    │    Yes                      │
│         │              ┌─────┴─────┐                       │
│         │              │           │                       │
│         │              ▼           ▼                       │
│         │        ┌──────────┐  ┌──────────               │
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
── "[technology] changelog"
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
── "[tech] [version] arxiv"  ← Flag for PDF download!
├── "[tech] [version] improvements changes"
└── "[tech] [version] architecture changes"

Evaluation Criteria:
- Core improvements identified? (Yes/No)
- Implementation details found? (Yes/No) ← MUST include code/diagrams
- Benchmark data available? (Yes/No)
- Real code snippets available? (Yes/No) ← NEW in v2.0

If No → Expand to:
├── "[tech] [version] paper pdf"
├── "[tech] [version] blog post"
├── "[tech] [version] GitHub commit analysis"
├── "[tech] [version] vs previous version"
├── "[tech] [version] source code implementation" ← NEW
└── "[tech] [version] community discussion"
```

### Phase 3: Technical Implementation Research

**Goal**: Code-level implementation details (MANDATORY in v2.0)

```
For each key improvement:

Search Iteration:
├── "[tech] [feature] implementation"
├── "[tech] [feature] code analysis"
├── "[tech] [feature] technical blog"
└── "[tech] [feature] paper"

Evaluation Criteria:
- Algorithm/math explanation found? (Yes/No)
- Code snippets available? (Yes/No) ← MUST be real code, not pseudo-code
- Performance impact documented? (Yes/No)
- Implementation source (GitHub commit/PR)? (Yes/No) ← NEW

If No → Expand to:
├── "[tech] [feature] source code"
├── "[tech] [feature] GitHub pull request"
├── "[tech] [feature] architecture diagram"
├── "[tech] [feature] implementation details" ← NEW
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
│     From PDF: Implementation code, formulas       │ ← NEW in v2.0
│                                                    │
│  4. Summarize for Book Chapter                     │
│     - Create structured summary                    │
│     - Extract implementation details with code     │ ← CHANGED
│     - Quote key findings with page numbers         │ ← NEW
│     - Add citation reference                       │
│                                                    │
└─────────────────────────────────────────────────────┘
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

**PDF Analysis Focus Areas (v2.0 — MANDATORY)**:

When analyzing technical papers, extract:

1. **Abstract & Introduction**
   - Problem being solved
   - Key innovations claimed
   - Scope of the work

2. **Methodology Section** ← CRITICAL
   - Architecture design with diagrams
   - Algorithms with formulas
   - Implementation details with code snippets ← NEW
   - Mathematical formulations (copy exact equations)

3. **Experiments Section**
   - Benchmark results (exact numbers from tables)
   - Comparison tables (preserve all columns)
   - Performance metrics (with statistical significance if available)

4. **Discussion & Conclusion**
   - Limitations
   - Future directions
   - Key takeaways

5. **Appendix/Supplementary** ← NEW in v2.0
   - Hyperparameter settings
   - Implementation details
   - Additional experiments

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
   - pages="16-20" → Appendix, implementation details ← NEW

4. Extract key information (v2.0 — MORE DETAILED):
   - Title: "Qwen2 Technical Report"
   - Authors: Alibaba Cloud Qwen Team
   - Key innovations: GQA, improved tokenizer, extended training
   - Benchmarks: MMLU, MATH, HumanEval scores (exact numbers from Table 2)
   - Architecture details: Transformer with modifications (with diagram from Figure 1)
   - Implementation: GQA code structure (from Section 3.2) ← NEW
   - Hyperparameters: learning rate, batch size, etc. (from Appendix) ← NEW

5. Integrate into chapter:
   - Chapter 4: Qwen-2 Architecture Breakthrough
   - Section 4.2: GQA Implementation (from paper Section 3.2, with code)
   - Section 4.3: Benchmark Analysis (from paper Table 2, exact numbers)
   - Section 4.4: Training Details (from paper Appendix A) ← NEW
```

---

## Information Sufficiency Criteria (v2.0 — ENHANCED)

### Minimum Requirements for Each Version

Before moving to next version, ensure:

| Requirement | Source Type | Minimum Depth | v2.0 Addition |
|-------------|-------------|---------------|---------------|
| Release date | Official announcement | Exact date | - |
| Core improvements | Paper/Blog/GitHub | 3+ specific changes | Each with implementation detail |
| Implementation details | Paper/Code | 1+ technical explanation | **Must include code/diagram** |
| Performance data | Benchmark/Paper | Comparison numbers | Exact numbers from tables |
| Motivation | Interview/Blog | Why changes were made | - |
| **Code/Architecture** | **GitHub/Paper** | **1+ real code snippet** | **NEW in v2.0** |
| **Hyperparameters** | **Paper/Appendix** | **Key settings** | **NEW in v2.0** |

### Expansion Triggers

Continue searching if:

- ❌ Missing any minimum requirement
- ❌ Information is vague/generic
- ❌ No implementation details found
- ❌ **Only pseudo-code available, no real code** ← NEW
- ❌ Conflicting information between sources
- ❌ Need deeper explanation of specific feature
- ❌ **Benchmark numbers are approximate, not exact** ← NEW

### Termination Conditions

Stop searching when:

- ✅ All minimum requirements met
- ✅ Information from primary sources (official/paper)
- ✅ Cross-validated across multiple sources
- ✅ Implementation details are concrete with real code ← CHANGED
- ✅ Benchmark data is available with exact numbers ← CHANGED

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

Level 6 (Code-Specific) ← NEW in v2.0:
"[tech] [feature] implementation GitHub"
"[tech] [feature] source code commit"
"[tech] [feature] pull request details"
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

# Phase 3: Technical Details (6 parallel queries) ← ENHANCED
queries = [
  "[tech] [feature] implementation code",
  "[tech] [feature] algorithm explanation",
  "[tech] [feature] architecture diagram",
  "[tech] [feature] paper technical details",
  "how [tech] implements [feature]",
  "[tech] [feature] GitHub source code" ← NEW
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
| **Only pseudo-code** | **Add "source code" or "commit"** | **"Qwen 2 GQA source code commit"** ← NEW |

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
│  │ - Code search (GitHub)          │ ← NEW                 │
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
│  └─────────────┬───────────────────                       │
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
│  │ Phase 5: Dynamic Chapter Plan   │ ← NEW                 │
│  │ - Calculate chapters from       │                       │
│  │   version count + features      │                       │
│  │ - Map versions to chapters      │                       │
│  │ - Plan code snippets            │                       │
│  └─────────────┬───────────────────                       │
│                │                                            │
│                ▼                                            │
│  ┌─────────────────────────────────┐                       │
│  │ Phase 6: Book Generation        │                       │
│  │ - Structure chapters            │                       │
│  │ - Write content with REAL CODE  │ ← CHANGED             │
│  │ - Add citations                 │                       │
│  │ - Generate VitePress config     │                       │
│  └─────────────────────────────────┘                       │
│                │                                            │
│                ▼                                            │
│  END                                                        │
│                                                             │
└─────────────────────────────────────────────────────────────
```

---

## Tools Specification

### Required Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| **WebSearch** | Information discovery | Every search iteration |
| **WebFetch** | Get page content | For arXiv pages, official blogs |
| **Bash** | Download PDFs, clone repos | `curl -o paper.pdf arxiv_url`, `git clone` |
| **Read** | PDF analysis, code reading | `pages="1-20"` for paper, full file for code |
| **Write** | Generate book | Final output generation |
| **kimi-webbridge** | Browser automation | When WebSearch/WebFetch blocked |

### Tool Failure Handling

**When WebSearch returns incomplete results:**

```
────────────────────────────────────────────────────────┐
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
│  Scenario 5: No real code found ← NEW in v2.0        │
│  ┌──────────────────────────────────────────────┐    │
│  │ Solution: Clone repo and read source         │    │
│  │ 1. Bash: git clone [repo_url]                │    │
│  │ 2. Glob: find relevant files                 │    │
│  │ 3. Read: extract implementation code         │    │
│  │ 4. Include in chapter with file path         │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
└────────────────────────────────────────────────────────
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

### PDF Reading Strategy (v2.0 — ENHANCED)

```
# Step 1: Download PDF
curl -L -o /tmp/paper.pdf "https://arxiv.org/pdf/XXXX.XXXXX.pdf"

# Step 2: Read key sections (READ MORE in v2.0)
Read(file_path="/tmp/paper.pdf", pages="1-3")   # Abstract, Introduction
Read(file_path="/tmp/paper.pdf", pages="4-8")   # Methodology
Read(file_path="/tmp/paper.pdf", pages="9-12")  # Experiments
Read(file_path="/tmp/paper.pdf", pages="13-15") # Conclusion
Read(file_path="/tmp/paper.pdf", pages="16-25") # Appendix ← NEW in v2.0

# Step 3: Extract and structure information (MORE DETAILED in v2.0)
# - Extract exact benchmark numbers from tables
# - Extract code snippets from implementation sections
# - Extract hyperparameters from appendix
# - Extract architecture diagrams (describe in ASCII)
```

---

## Dynamic Chapter Planning (NEW in v2.0)

### Calculate Chapter Count from Version Count

**DO NOT use a fixed chapter count.** Calculate based on actual version count and feature complexity:

| Version Count | Features per Version | Recommended Chapters | Strategy |
|---------------|---------------------|---------------------|----------|
| 1-3 | Basic | 6-10 | One chapter per version + tech deep-dive |
| 3-5 | Moderate | 10-18 | One chapter per version + feature chapters |
| 5-8 | Complex | 18-30 | Split major versions, each feature gets section |
| 8-12 | Very Complex | 30-45 | Each version + each major feature |
| > 12 | Exhaustive | 45+ | Full version history + all features |

**Calculation formula:**

```python
def calculate_chapters(version_count, features_per_version, has_competitors=True):
    """
    version_count: number of major versions
    features_per_version: average number of key features per version
    has_competitors: whether to include comparison chapter
    """
    # Base: 2 chapters for intro + future
    base = 2
    
    # One chapter per version
    version_chapters = version_count
    
    # Major features get their own chapter if > 3 per version
    if features_per_version > 3:
        feature_chapters = min(features_per_version, 5)  # Cap at 5
    else:
        feature_chapters = 0
    
    # Comparison chapter if competitors exist
    comparison_chapters = 1 if has_competitors else 0
    
    # Appendix chapters
    appendix_chapters = 2  # Quick reference + citations
    
    return base + version_chapters + feature_chapters + comparison_chapters + appendix_chapters
```

### Version-to-Chapter Mapping Rules

**Rule 1: Each major version = one chapter (minimum)**
Each version with significant changes gets its own chapter.

**Rule 2: Major versions get split**
A version with > 5 key features should be split into multiple chapters:
- Core architecture changes → one section
- Training improvements → one section
- Performance gains → one section

**Rule 3: Each key feature gets a subsection**
Each feature within a version gets its own subsection with:
- Problem it solves
- Implementation details (with code/diagram)
- Performance impact

**Rule 4: Technical deep-dives get dedicated chapters**
Cross-version technologies (e.g., GQA, RoPE) get their own chapter explaining evolution.

**Rule 5: Comparison chapters for competitive landscape**
Include competitor comparison with benchmark tables.

---

## Code Detail Preservation Rules (NEW in v2.0)

**These rules are MANDATORY for tech-evolution-book:**

1. **Never replace real code with `...` or pseudo-code** — copy the actual implementation
2. **Every code block must show the real function/class signature** — parameters, types
3. **Complex implementations (> 20 lines) must be shown in full** — not summarized
4. **Show the actual hyperparameters** — not `<value>` placeholders
5. **Include the source as a comment** — `# 摘自 arxiv:2407.10671 Section 3.2` or `# 摘自 GitHub: QwenLM/Qwen2/main/modeling_qwen2.py`
6. **Annotate key lines** — add inline comments explaining design decisions
7. **Show the evolution** — how code changed from v1 to v2
8. **Include conditional branches** — if/else logic reveals design decisions
9. **Show error handling** — try/except blocks are part of the design
10. **Preserve benchmark numbers exactly** — copy from tables, don't approximate

### Code Snippet Rules

```python
# WRONG — do not do this:
class GroupedQueryAttention(nn.Module):
    def __init__(self, ...):
        # ... actual implementation
        pass

# RIGHT — do this instead:
# 摘自 arxiv:2407.10671 Section 3.2 + GitHub: QwenLM/Qwen2
class Qwen2Attention(nn.Module):
    """Multi-headed attention from 'Attention Is All You Need' paper.
    Modified to use Grouped Query Attention (GQA)."""

    def __init__(
        self,
        hidden_size: int,
        num_heads: int,
        num_kv_heads: int,  # NEW in v2: fewer than num_heads
        max_position_embeddings: int = 32768,
        rope_theta: float = 1000000.0,
    ):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads  # GQA: shared KV heads
        self.head_dim = hidden_size // num_heads
        
        # Split qkv projection for GQA
        self.q_proj = nn.Linear(hidden_size, num_heads * self.head_dim, bias=True)
        self.k_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.v_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.o_proj = nn.Linear(num_heads * self.head_dim, hidden_size, bias=False)
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

Read: pages="16-20" ← NEW in v2.0
Extract:
- Hyperparameter settings
- Implementation details
- Additional experiments

# Also search for code ← NEW in v2.0
Search: "Qwen2 GQA implementation GitHub"
Result: Found GitHub repo QwenLM/Qwen2

Bash: git clone --depth 1 https://github.com/QwenLM/Qwen2.git /tmp/qwen2-code

Read: /tmp/qwen2-code/modeling_qwen2.py (lines 150-250)
Extract:
- Actual Qwen2Attention class implementation
- GQA code structure
- RoPE integration

EVAL: Requirements met?
- Release date: ✅ 2024年6月
- Core improvements: ✅ GQA, tokenizer改进, 训练数据扩展
- Implementation details: ✅ 从论文和GitHub提取
- Performance data: ✅ Benchmark表格 (exact numbers)
- **Real code**: ✅ 从GitHub提取 ← NEW
- **Hyperparameters**: ✅ 从Appendix提取 ← NEW

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

# Also get code from transformers library ← NEW in v2.0
Search: "transformers GQA implementation GitHub"
Result: Found huggingface/transformers

Bash: git clone --depth 1 https://github.com/huggingface/transformers.git /tmp/transformers

Read: /tmp/transformers/src/transformers/models/qwen2/modeling_qwen2.py
Extract:
- Full Qwen2Attention implementation
- GQA integration with RoPE
- Attention mask handling

EVAL: Implementation details sufficient?
- Algorithm: ✅ 从论文提取
- **Real code**: ✅ 从transformers库提取 ← NEW
- Performance impact: ✅ 从Qwen2论文提取

DECISION: Proceed
```

---

## Output Format

Generate a **VitePress-ready** book with:

1. `index.md` - Hero page with overview
2. `chapters/*.md` - Individual chapters (count varies by version count)
3. `.vitepress/config.ts` - Navigation config (dynamically generated)

Each chapter should include:
- **Citations**: `[1] arxiv:2407.10671` style references
- **Source links**: Link to original papers/blogs/GitHub
- **Code snippets**: REAL code from papers/GitHub, not pseudo-code ← CHANGED
- **Tables**: Benchmark comparisons, feature comparisons (exact numbers) ← CHANGED
- **Diagrams**: ASCII architecture diagrams from papers ← NEW

---

## Output Generation Template

### Standard Book Structure (Dynamic)

```markdown
# [Technology Name] 演进史

## 目录

- 第 1 章：诞生背景
- 第 2 章：版本 1.x - 基础奠基
- 第 3 章：版本 2.x - 核心突破
- 第 4 章：版本 3.x - 成熟完善
- 第 5 章：[核心技术] 深度解析 ← If features > 3
- 第 6 章：竞品对比分析
- 第 7 章：未来展望
- 附录 A：版本演进速查表
- 附录 B：参考文献

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

## 第 N 章 [版本名]：[定位]（[日期]）

> 核心改进：[列举3个主要改进]

### N.1 发布背景

**发布时间**：[日期]

**版本定位**：[定位描述]

### N.2 核心改进详解

#### 改进 1：[名称]

**问题**：[解决了什么问题]

**方案**：[具体方案]

**实现**：
```python
# 摘自 [论文/GitHub] ← REAL CODE in v2.0
[实际代码，不省略]
```

**效果**：[量化效果]

#### 改进 2：[名称]
[同上结构]

### N.3 性能评估

| Benchmark | 上一版本 | 本版本 | 提升 |
|-----------|---------|-------|-----|
| [测试名] | [数值] | [数值] | [+X%] |

### N.4 社区反响

[发布后的评价、讨论、采用情况]

---

## 第 N 章 [核心技术] 深度解析

### N.1 [技术] 实现原理

#### 基础概念

[技术概念解释]

#### 为什么选择它

[设计决策分析]

#### 实现细节

```python
# 摘自 [GitHub/论文] ← REAL CODE in v2.0
[完整实现代码]
```

#### 性能影响

| 维度 | 无此技术 | 有此技术 | 差异 |
|-----|---------|---------|-----|
| 速度 | [数值] | [数值] | [+/-X] |
| 内存 | [数值] | [数值] | [+/-X] |

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

## Quality Check Before Output (v2.0 — ENHANCED)

Before finalizing output, verify:

| Requirement | Check | Status | v2.0 Addition |
|-------------|-------|--------|---------------|
| All versions covered? | List versions found | ✅/❌ | - |
| Each version has 3+ improvements? | Count improvements | ✅/❌ | Each with implementation detail |
| Benchmark tables complete? | Check data | ✅/ | Exact numbers from sources |
| Technical details included? | Check depth | ✅/❌ | **Must include real code** |
| Citations added? | List sources | ✅/❌ | - |
| Comparison section present? | Verify | ✅/❌ | - |
| Future predictions included? | Verify | ✅/❌ | - |
| **Real code snippets?** | **Check all code blocks** | ✅/❌ | **NEW in v2.0** |
| **No pseudo-code?** | **Verify no `...` patterns** | ✅/❌ | **NEW in v2.0** |
| **File paths in comments?** | **Check code comments** | ✅/❌ | **NEW in v2.0** |

If any ❌ → Return to search phase

---

## Anti-Patterns (DO NOT DO) ← NEW in v2.0

1. **Never write `class Foo(nn.Module): # ... actual implementation`** — show the real code
2. **Never write `<parameter>` or `<value>` placeholders** — use actual parameter names and values
3. **Never skip implementation details** — readers want to know HOW, not just WHAT
4. **Never approximate benchmark numbers** — copy exact numbers from tables
5. **Never write "详见论文"** — the reader is reading the book to avoid reading papers
6. **Never hardcode chapter count to 7** — calculate from version count
7. **Never write `# ... implementation details`** — this is a book, not a link
8. **Never skip the appendix** — hyperparameters and additional experiments matter

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
| 训练数据扩展 | 训练 | ⭐ | 7T tokens |

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

#### 代码实现

```python
# 摘自 arxiv:2407.10671 Section 3.2 + GitHub: QwenLM/Qwen2
class Qwen2Attention(nn.Module):
    """Multi-headed attention with Grouped Query Attention."""

    def __init__(
        self,
        hidden_size: int,
        num_heads: int,
        num_kv_heads: int,  # GQA: fewer than num_heads
        max_position_embeddings: int = 32768,
        rope_theta: float = 1000000.0,
    ):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads  # GQA关键：共享KV头
        self.head_dim = hidden_size // num_heads
        
        # QKV投影（GQA版本）
        self.q_proj = nn.Linear(hidden_size, num_heads * self.head_dim, bias=True)
        self.k_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.v_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.o_proj = nn.Linear(num_heads * self.head_dim, hidden_size, bias=False)
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

> 数据来源：Qwen2 Technical Report (arxiv:2407.10671) Table 2

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
- 代码注释使用中文 ← NEW in v2.0

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
- Code comments in English
```

---

## Technology Type-Specific Templates

### AI Model Analysis

```
Required Sections:
1. Model Architecture (Transformer variants, attention mechanisms) ← With code
2. Training Data (scale, composition, languages)
3. Training Methodology (pretraining, fine-tuning stages)
4. Benchmark Performance (MMLU, MATH, HumanEval, etc.) ← Exact numbers
5. Specialized Variants (if any: Math, Coder, VL)
6. Inference Efficiency (speed, memory, techniques) ← With benchmarks
7. Open Source Status (license, availability)
```

### Framework/Library Analysis

```
Required Sections:
1. Core Architecture (design patterns, key components) ← With code
2. API Evolution (breaking changes, new features) ← With code diffs
3. Performance Improvements (benchmarks, optimizations) ← Exact numbers
4. Community Adoption (npm downloads, GitHub stars)
5. Competitor Comparison (similar frameworks)
6. Migration Guides (version upgrade paths)
```

### Programming Language Analysis

```
Required Sections:
1. Language Design Philosophy
2. Syntax/Feature Evolution ← With code examples
3. Runtime Improvements ← With benchmarks
4. Standard Library Changes
5. Tooling Updates (compilers, linters)
6. Community & Ecosystem Growth
```

---

## kimi-webbridge Browser Search Strategy

### When to Use kimi-webbridge

**Use kimi-webbridge when**:
- WebSearch/WebFetch blocked by domain restrictions
- Need to access official blogs (qwenlm.github.io, etc.)
- Need real browser with login sessions
- Need to navigate and extract content from dynamic pages
- Need to access GitHub source code ← NEW in v2.0

### kimi-webbridge Workflow

```
┌─────────────────────────────────────────────────────────────┐
│              kimi-webbridge Search Workflow                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Check daemon status                                     │
│     ~/.kimi-webbridge/bin/kimi-webbridge status             │
│     → Ensure running: true, extension_connected: true       │
│                                                             │
│  2. Navigate to target page                                 │
│     POST http://127.0.0.1:10086/command                     │
│     {                                                        │
│       "action": "navigate",                                 │
│       "args": {                                              │
│         "url": "https://qwenlm.github.io/blog/",            │
│         "newTab": true                                      │
│       },                                                     │
│       "session": "tech-evolution-research"                  │
│     }                                                        │
│                                                             │
│  3. Get page snapshot                                       │
│     POST http://127.0.0.1:10086/command                     │
│     {                                                        │
│       "action": "snapshot",                                 │
│       "args": {}                                             │
│     }                                                        │
│     → Returns accessibility tree with @e references         │
│                                                             │
│  4. Extract specific information                            │
│     POST http://127.0.0.1:10086/command                     │
│     {                                                        │
│       "action": "evaluate",                                 │
│       "args": {                                              │
│         "code": "(() => {                                    │
│           const texts = [];                                  │
│           document.querySelectorAll('*').forEach(el => {    │
│             if (el.innerText.includes('Release'))            │
│               texts.push(el.innerText);                      │
│           });                                                │
│           return texts;                                      │
│         })()"                                                │
│       }                                                      │
│     }                                                        │
│                                                             │
│  5. Click to load more                                      │
│     POST http://127.0.0.1:10086/command                     │
│     {                                                        │
│       "action": "click",                                    │
│       "args": { "selector": "@e3" }                         │
│     }                                                        │
│                                                             │
│  6. Close session                                           │
│     POST http://127.0.0.1:10086/command                     │
│     {                                                        │
│       "action": "close_session"                             │
│     }                                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Example: Getting Qwen Latest Versions

```javascript
// Navigate to official blog
await kimiNavigate("https://qwen.ai/research", "qwen-research");

// Get snapshot
const snapshot = await kimiSnapshot();

// Find version mentions
const versions = await kimiEvaluate(`
  (() => {
    const texts = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.innerText && el.innerText.includes('Qwen3')) {
        texts.push(el.innerText.trim());
      }
    });
    return [...new Set(texts)].slice(0, 30);
  })()
`);

// Parse version information
// Extract: Qwen3-1.7B, Qwen3-8B, Qwen3-30B-A3B, Qwen3.5-..., Qwen3.7-Plus

// Close session
await kimiCloseSession();
```

### kimi-webbridge vs Other Tools

| Tool | Strengths | Limitations |
|------|-----------|-------------|
| **WebSearch** | Fast, simple | May be blocked, incomplete results |
| **WebFetch** | Direct page access | Domain restrictions common |
| **kimi-webbridge** | Real browser, login sessions, dynamic content | Requires daemon running |
| **git clone + Read** ← NEW | Real source code | Needs repo URL |

### Recommended Tool Order

```
1. Try WebSearch first (fastest)
2. If blocked → Try WebFetch
3. If still blocked → Use kimi-webbridge
4. For official blogs → Prefer kimi-webbridge directly
5. For GitHub pages → Prefer kimi-webbridge directly
6. For source code → git clone + Read ← NEW in v2.0
```

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
读取 pages 16-20: 提取超参数设置 ← NEW

# 也搜索代码 ← NEW in v2.0
搜索: "Qwen2 GQA implementation GitHub"
克隆仓库: git clone https://github.com/QwenLM/Qwen2.git
读取源码: modeling_qwen2.py (lines 150-250)
提取: Qwen2Attention 完整实现

评估: 是否满足最低要求？
- 发布日期: ✅ 2024年6月
- 核心改进: ✅ GQA, tokenizer改进, 训练数据扩展
- 实现细节: ✅ 从论文和GitHub提取
- 性能数据: ✅ Benchmark表格 (exact numbers)
- **真实代码**: ✅ 从GitHub提取 ← NEW
- **超参数**: ✅ 从Appendix提取 ← NEW

[继续迭代直到满足所有要求]
```

---

## References

This skill is reverse-engineered from the CoolClaws book pattern and optimized for tech evolution analysis:
- **Source**: https://github.com/coolclaws
- **Pattern**: VitePress + Markdown + GitHub Pages
- **Style**: Progressive disclosure, detail-driven, benchmark-focused
- **v2.0 improvements**: Dynamic chapter count, mandatory real code preservation, GitHub source integration, enhanced PDF analysis
