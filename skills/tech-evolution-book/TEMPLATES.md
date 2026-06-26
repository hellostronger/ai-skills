# Tech Evolution Book - Chapter Templates v2.0

**Core principle: Show real implementation details, not summaries. Preserve benchmark numbers exactly. Include code from papers/GitHub.**

---

## Template A: Origins Chapter (Chapter 1)

```markdown
# 第 1 章 [技术名] 的诞生：[背景/动机]

## 1.1 [行业/领域] 背景

[描述该技术诞生前行业面临的挑战和痛点]

### 问题与挑战

- **挑战一**：[描述]
- **挑战二**：[描述]
- **挑战三**：[描述]

### 现有方案的不足

[分析当时市场上/学术界已有的方案及其局限性]

## 1.2 [公司/团队] 的战略决策

[描述为什么该组织决定投入这个技术]

### 战略背景

[宏观战略层面的考量]

### 技术契机

[促使项目启动的具体技术突破或时机]

## 1.3 项目启动

### 团队组建

[核心团队成员、背景]

### 目标设定

| 目标层次 | 具体内容 |
|---------|---------|
| 短期目标 | [内容] |
| 中期目标 | [内容] |
| 长期目标 | [内容] |

### 技术路线选择

[为什么选择了特定的技术路线]

## 1.4 初期探索

[早期尝试、失败、调整]

## 小结

- [要点 1]
- [要点 2]
- [要点 3]
```

---

## Template B: Version Release Chapter (v2.0 — ENHANCED)

**Each version gets its own chapter. Show real code/diagrams for each improvement.**

```markdown
# 第 N 章 [版本号]：[版本特色/定位]

<引言：简述这个版本发布的时间、意义、主要改进>

## N.1 发布背景

### 时间节点

- **发布时间**：[具体日期]
- **开发周期**：[时间跨度]
- **上一版本**：[版本号]

### 发布动机

[为什么要推出这个版本，解决了什么问题]

## N.2 核心改进概述

### 改进清单

| 改进项 | 类别 | 重要性 | 效果 |
|-------|------|--------|------|
| [改进 1] | [架构/训练/数据/etc] | ⭐⭐⭐ | [量化效果] |
| [改进 2] | [类别] | ⭐⭐ | [效果] |
| [改进 3] | [类别] | ⭐ | [效果] |

### 改进亮点

**亮点一：[改进名]**

[简要描述为什么这个改进最重要]

## N.3 技术改进详解

### N.3.1 [改进点 1]

#### 问题分析

[这个改进要解决什么问题]

#### 解决方案

```
[代码/架构图/公式] ← REAL implementation in v2.0
```

#### 实现细节

[深入讲解实现方式]

```python
# 摘自 [论文/GitHub] ← REAL CODE in v2.0
[实际代码，不省略任何关键逻辑]
```

#### 与上一版本对比

| 维度 | 上一版本 | 本版本 | 提升 |
|-----|---------|-------|------|
| [维度 1] | [描述] | [描述] | [+X%] |
| [维度 2] | [描述] | [描述] | [+X] |

### N.3.2 [改进点 2]

[同上结构 — 必须包含代码/图表]

### N.3.3 [改进点 3]

[同上结构 — 必须包含代码/图表]

## N.4 性能评估

### Benchmark 结果

| 测试项 | 上一版本 | 本版本 | 提升 | 来源 |
|-------|---------|-------|-----|------|
| [测试 1] | [数值] | [数值] | [+X%] | [论文/Table X] |
| [测试 2] | [数值] | [数值] | [+X%] | [来源] |

### 实际效果

[在实际应用中的表现]

## N.5 社区反响

[发布后的社区评价、讨论、采用情况]

## 小结

- **核心改进**：[总结主要改进点]
- **性能提升**：[总结性能变化]
- **意义**：[这个版本在演进路线中的意义]
- **代码/架构**：[关键实现细节] ← NEW in v2.0
```

---

## Template C: Architecture Deep Dive Chapter (v2.0 — ENHANCED)

**For cross-version technologies that evolved over multiple releases.**

```markdown
# 第 N 章 [架构特性] 深度解析

<引言：说明这个架构特性的重要性>

## N.1 [特性] 是什么

### 定义

[清晰定义这个技术概念]

### 历史背景

[这个技术在业界的发展历史]

### 与其他方案的对比

| 方案 | 优点 | 缺点 | 适用场景 |
|-----|-----|-----|---------|
| [方案 A] | [优点] | [缺点] | [场景] |
| [方案 B] | [优点] | [缺点] | [场景] |
| **[本方案]** | [优点] | [缺点] | [场景] |

## N.2 为什么 [技术名] 选择它

[分析选择这个技术的原因]

### 理论依据

[学术/理论基础]

### 实际考量

[工程/资源/效率考量]

## N.3 实现原理 (v2.0 — REAL CODE)

### 核心算法

```
[算法描述/伪代码] ← Must be detailed
```

### 代码实现

```python
# 摘自 [GitHub/论文] ← REAL CODE in v2.0
[完整实现代码，不省略]
```

### 数据流图

```
[ASCII 架构图]

例如：
┌─────────────┐
│   Input     │
└─────────────┘
      │
      ▼
┌─────────────
│ [处理步骤 1] │
─────────────┘
      │
      ▼
┌─────────────┐
│ [处理步骤 2] │
└─────────────
      │
      ▼
┌─────────────┐
│   Output    │
└─────────────┘
```

### 代码演进 (NEW in v2.0)

展示这个特性在不同版本中的代码变化：

```python
# v1.0 — 基础实现
[代码]

# v2.0 — 改进实现
[代码]

# 变化说明
- 第 X 行：[变化描述]
- 第 Y 行：[变化描述]
```

## N.4 性能影响分析

### 计算复杂度

[时间/空间复杂度分析]

### 实测数据

| 配置 | 无[特性] | 有[特性] | 差异 | 来源 |
|-----|---------|---------|-----|------|
| 推理速度 | [数值] | [数值] | [+/-X] | [论文/Table X] |
| 内存占用 | [数值] | [数值] | [+/-X] | [来源] |
| 训练时间 | [数值] | [数值] | [+/-X] | [来源] |

## N.5 最佳实践

[如何正确使用这个特性]

## 小结

- **原理**：[总结核心原理]
- **优势**：[总结主要优势]
- **注意事项**：[使用注意点]
- **代码实现**：[关键代码位置] ← NEW in v2.0
```

---

## Template D: Comparison Chapter (v2.0 — ENHANCED)

```markdown
# 第 N 章 [技术名] 与竞品对比

## N.1 竞品概览

### 主要竞品

| 产品 | 公司/团队 | 定位 | 开源 | 最新版本 |
|-----|----------|-----|------|----------|
| **[技术名]** | [公司] | [定位] | [是/否] | [版本] |
| [竞品 1] | [公司] | [定位] | [是/否] | [版本] |
| [竞品 2] | [公司] | [定位] | [是/否] | [版本] |

### 发展时间线

```
2023.08  [技术名]-1 发布
2023.09  [竞品 1] 发布
2024.02  [技术名]-1.5 发布
2024.06  [技术名]-2 发布
2024.XX  [竞品 2] 发布
```

## N.2 架构对比

### 模型架构

| 特性 | [技术名] | [竞品 1] | [竞品 2] |
|-----|---------|---------|---------|
| 注意力机制 | [类型] | [类型] | [类型] |
| 位置编码 | [类型] | [类型] | [类型] |
| 激活函数 | [类型] | [类型] | [类型] |
| Normalization | [类型] | [类型] | [类型] |

### 训练数据

| 维度 | [技术名] | [竞品 1] | [竞品 2] |
|-----|---------|---------|---------|
| 数据规模 | [规模] | [规模] | [规模] |
| 数据来源 | [来源] | [来源] | [来源] |
| 多语言支持 | [详情] | [详情] | [详情] |

## N.3 性能对比

### Benchmark 对比

| 测试集 | [技术名] | [竞品 1] | [竞品 2] | 来源 |
|-------|---------|---------|---------|------|
| [测试 1] | [分数] | [分数] | [分数] | [来源] |
| [测试 2] | [分数] | [分数] | [分数] | [来源] |
| [测试 3] | [分数] | [分数] | [分数] | [来源] |

### 推理效率

| 模型大小 | 推理速度 | 显存占用 | 来源 |
|---------|---------|---------|------|
| [技术名]-7B | [数值] | [数值] | [来源] |
| [竞品 1]-7B | [数值] | [数值] | [来源] |

## N.4 生态对比

### 开源程度

[对比开源协议、开放程度]

### 社区活跃度

[对比 GitHub stars、贡献者数量、issue 讨论]

### 微调生态

[对比微调工具、教程、案例]

## N.5 各场景推荐

| 场景 | 推荐 | 原因 |
|-----|-----|-----|
| [场景 1] | [推荐产品] | [原因] |
| [场景 2] | [推荐产品] | [原因] |
| [场景 3] | [推荐产品] | [原因] |

## 小结

- **[技术名] 优势**：[总结]
- **[技术名] 不足**：[总结]
- **适用场景**：[总结]
```

---

## Template E: Future Chapter

```markdown
# 第 N 章 未来展望

## N.1 当前局限

### 技术局限

| 局限点 | 描述 | 可能解决方向 |
|-------|-----|-------------|
| [局限 1] | [描述] | [方向] |
| [局限 2] | [描述] | [方向] |

### 应用局限

[在实际应用中面临的挑战]

## N.2 下一代预测

### 可能的技术改进

- **[改进方向 1]**：[预测]
- **[改进方向 2]**：[预测]

### 行业趋势

[整个行业的发展趋势]

## N.3 多模态演进

[如果涉及，讨论多模态发展方向]

## N.4 推理能力突破

[讨论推理能力提升的可能性]

## N.5 对行业的影响

[预测这个技术未来对行业的影响]

## 小结

- [展望要点 1]
- [展望要点 2]
- [展望要点 3]
```

---

## Template F: Quick Reference Appendix (NEW in v2.0)

```markdown
# 附录 A：版本演进速查表

## [技术名] 版本历史

| 版本 | 发布时间 | 核心改进 | 关键指标 | 论文/来源 |
|-----|---------|---------|---------|----------|
| v1.0 | [日期] | [改进] | [指标] | [链接] |
| v1.5 | [日期] | [改进] | [指标] | [链接] |
| v2.0 | [日期] | [改进] | [指标] | [链接] |
| v2.5 | [日期] | [改进] | [指标] | [链接] |

## 改进演进图

```
v1.0 ──────────────────────────────────────────> v2.5
 │                                                │
 ├─ 基础架构                                      ├─ 综合优化
 ├─ 多语言支持                                    ├─ 专项模型(Math/Coder)
 ├─ 基础能力                                      ├─ 性能突破
 │                                                │
 └────────────────────────────────────────────────┘
        [时间跨度] 内实现了 [关键突破]
```

## 关键代码位置 (NEW in v2.0)

| 特性 | 文件路径 | 行号 | 说明 |
|-----|---------|------|------|
| [特性 1] | [GitHub path] | [lines] | [说明] |
| [特性 2] | [path] | [lines] | [说明] |

## 超参数参考 (NEW in v2.0)

| 版本 | 学习率 | Batch Size | 训练 Tokens | 上下文长度 |
|-----|--------|-----------|------------|-----------|
| v1.0 | [值] | [值] | [值] | [值] |
| v2.0 | [值] | [值] | [值] | [值] |
```

---

## Template G: Citations Appendix (NEW in v2.0)

```markdown
# 附录 B：参考文献

## 官方资源

1. [官方博客标题] - [URL]
2. [GitHub仓库] - [URL]
3. [官方文档] - [URL]

## 学术论文

1. [论文标题] - arXiv:[编号]
2. [论文标题] - arXiv:[编号]

## 技术博客

1. [博客标题] - [URL]
2. [博客标题] - [URL]

## 社区资源

1. [Reddit讨论] - [URL]
2. [Hacker News] - [URL]
```

---

## Search Query Templates

### For Model Evolution

```bash
# Phase 1: Overview
"[model-name] evolution timeline"
"[model-name] version history"
"[model-name] development roadmap"

# Phase 2: Version Details
"[model-name] [version] release"
"[model-name] [version] announcement"
"[model-name] [version] improvements"
"[model-name] [version] technical report"

# Phase 3: Architecture
"[model-name] architecture design"
"[model-name] [component] implementation"
"[model-name] training methodology"

# Phase 4: Benchmarks
"[model-name] benchmark results"
"[model-name] evaluation metrics"
"[model-name] vs [competitor] comparison"

# Phase 5: Source Code ← NEW in v2.0
"[model-name] [feature] GitHub source code"
"[model-name] [feature] implementation commit"
"site:github.com [model-name] [feature]"
```

### For Framework Evolution

```bash
# Similar patterns adapted for frameworks
"[framework] version history"
"[framework] [version] features"
"[framework] breaking changes [version]"
"[framework] performance improvements"
"[framework] source code implementation" ← NEW
```

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

## Code Snippet Rules (v2.0 — MANDATORY)

### Rule 1: Always Include Source

```python
# 摘自 arxiv:2407.10671 Section 3.2
# 或
# 摘自 GitHub: QwenLM/Qwen2/main/modeling_qwen2.py
class Qwen2Attention(nn.Module):
```

### Rule 2: Show Full Implementation for Functions > 10 Lines

```python
# WRONG — never do this
class GroupedQueryAttention(nn.Module):
    def __init__(self, ...):
        # ... actual implementation
        pass

# RIGHT — show the real code
class Qwen2Attention(nn.Module):
    def __init__(
        self,
        hidden_size: int,
        num_heads: int,
        num_kv_heads: int,
        max_position_embeddings: int = 32768,
        rope_theta: float = 1000000.0,
    ):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads
        self.head_dim = hidden_size // num_heads
        
        self.q_proj = nn.Linear(hidden_size, num_heads * self.head_dim, bias=True)
        self.k_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.v_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)
        self.o_proj = nn.Linear(num_heads * self.head_dim, hidden_size, bias=False)
```

### Rule 3: Annotate Key Lines

```python
# 摘自 arxiv:2407.10671 Section 3.2
class Qwen2Attention(nn.Module):
    def __init__(self, hidden_size, num_heads, num_kv_heads):
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads  # GQA关键：KV头数少于Q头数
        self.head_dim = hidden_size // num_heads
        
        # QKV投影（GQA版本：K和V的维度更小）
        self.q_proj = nn.Linear(hidden_size, num_heads * self.head_dim, bias=True)
        self.k_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)  # ← GQA改进
        self.v_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)  # ← GQA改进
```

### Rule 4: Show Evolution

```python
# v1.0 — 传统MHA
self.k_proj = nn.Linear(hidden_size, hidden_size, bias=True)  # 32 heads

# v2.0 — GQA改进
self.k_proj = nn.Linear(hidden_size, num_kv_heads * self.head_dim, bias=True)  # 8 heads
```

---

## Benchmark Table Rules (v2.0 — MANDATORY)

### Rule 1: Copy Exact Numbers

```markdown
# WRONG — approximate
| MMLU | ~84 | ~86 |

# RIGHT — exact from paper
| MMLU | 84.2 | 86.1 |

> 数据来源：[论文标题] Table 2
```

### Rule 2: Include Source

```markdown
| Benchmark | v1.5 | v2.0 | 提升 | 来源 |
|-----------|------|------|-----|------|
| MMLU | 77.2 | 84.2 | +7.0 | arxiv:2407.10671 Table 2 |
| MATH | 36.1 | 58.0 | +21.9 | arxiv:2407.10671 Table 2 |
```

### Rule 3: Show All Relevant Metrics

Don't just show one benchmark — show the full picture:

```markdown
| 模型 | MMLU | MATH | HumanEval | GSM8K | 来源 |
|-----|------|------|-----------|-------|------|
| v1.5-72B | 77.2 | 36.1 | 52.8 | 62.1 | arxiv:2401.10587 |
| v2.0-72B | 84.2 | 58.0 | 64.1 | 79.3 | arxiv:2407.10671 |
| 提升 | +7.0 | +21.9 | +11.3 | +17.2 | - |
```
