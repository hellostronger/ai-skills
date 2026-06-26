# Source Code Book Templates — v2.0

**Core principle: Show real code, not placeholders. Annotate every significant line.**

---

## 1. Chapter Content Templates

### Template A: "What is X" Chapter (Chapter 1)

```markdown
# 第 1 章 <项目名> 是什么，为什么重要

## 1.1 从名字说起

<项目全称> 的全称是 **<全称展开>**，由 <组织/作者> 开源，是一个 **<项目类型定义>**——<一句话解释项目本质>。

<发布历史>

## 1.2 <类别 A> vs <类别 B>：本质区别

很多人把 <项目名> 和 <竞品 1>、<竞品 2> 这类 <类别> 相提并论，但两者的设计哲学完全不同。

| 维度 | <类别 A> | <类别 B> |
|------|----------|----------|
| 设计理念 | <描述> | <描述> |
| 执行环境 | <描述> | <描述> |
| 决策权 | <描述> | <描述> |
| 扩展方式 | <描述> | <描述> |
| Opinionated 程度 | <描述> | <描述> |

<项目名> 是 **opinionated** 的：它预设了 <设计决策 1>、预设了 <设计决策 2>、预设了 <设计决策 3>。你可以改，但不改也能直接跑。这就是 "batteries included" 的含义。

## 1.3 <项目> 的核心特征

<项目名> 瞄准的是 **<目标场景>**——<场景描述>。

**特征一：<特征名>。** <详细解释，包含具体数据或例子>

**特征二：<特征名>。** <详细解释，引用源码中的关键设计>

```python
# 摘自 <实际文件路径>:<行号>
<真实代码 — 保留完整实现，不省略>
```

<逐段分析：这段代码体现了什么设计理念，为什么这样设计>

**特征三：<特征名>。** <详细解释>

## 1.4 发展历程

<版本演进、关键里程碑>

## 1.5 实际用例

**用例一：<用例名>。** <描述，说明输入和输出>

**用例二：<用例名>。** <描述>

## 1.6 与其他产品的定位对比

| 产品 | 定位 | 交互方式 | 开源 |
|------|------|---------|------|
| **<项目名>** | <定位> | <方式> | 是（<协议>） |
| <竞品 1> | <定位> | <方式> | 否 |

<项目名> 的核心差异在于：<差异化优势>。

## 小结

- **<项目名> 是一个 <类型定义>**，不是 <容易混淆的类型>——它提供 <核心价值>。
- **<数字> 个核心特征**：<特征 1>、<特征 2>、<特征 3>。
- **<发展历程要点>**。
- **<差异化优势>**。
```

---

### Template B: "Core Engine" Chapter (Modules with > 100 LOC)

**This template shows FULL implementation code, not simplified call chains.**

```markdown
# 第 N 章 <模块名>：<一句话概括该模块职责>

<引言段落：该模块在整体架构中的位置，解决什么问题，为什么需要它>

## N.1 模块定位与架构

<模块名> 位于 <项目名> 的 <层级>，负责 <职责>。它的核心抽象是 **<核心类名>**：

```python
# 摘自 <实际文件路径>:<行号>
class <核心类名>(<基类1>, <基类2>):
    """<文档字符串 — 从源码中提取>"""

    def __init__(
        self,
        <参数1>: <类型> = <默认值>,    # <参数说明>
        <参数2>: <类型> = <默认值>,    # <参数说明>
        <参数3>: <类型> | None = None, # <参数说明>
    ):
        super().__init__(<父类参数>)
        self.<属性1> = <参数1>
        self.<属性2> = <参数2>
        # <初始化逻辑>

    def <核心方法>(self, <参数>: <类型>) -> <返回类型>:
        """<方法文档字符串>"""
        <完整实现代码 — 不省略任何逻辑>
```

**继承链分析：**
- `<基类1>`：提供 <能力 1>
- `<基类2>`：提供 <能力 2>

## N.2 核心算法/流程

<模块名> 的核心处理流程如下：

```
<输入> → <步骤 1> → <步骤 2> → <步骤 3> → <输出>
           │           │           │
           ▼           ▼           ▼
        <细节 1>   <细节 2>   <细节 3>
```

### 步骤 1：<步骤名>

```python
# 摘自 <实际文件路径>:<行号>
def <步骤函数>(<参数>: <类型>) -> <返回类型>:
    """<文档字符串>"""
    <完整实现 — 保留所有条件分支和错误处理>
```

<逐段分析>：
- 第 <X> 行：<这行做了什么，为什么重要>
- 第 <Y> 行：<这里的设计决策>

### 步骤 2：<步骤名>

<同样展示完整代码和分析>

## N.3 关键数据结构

<模块名> 使用以下数据结构管理运行时状态：

| 字段/属性 | 类型 | 默认值 | 说明 | 来源 |
|-----------|------|--------|------|------|
| `<字段1>` | `<类型>` | `<默认值>` | <说明> | 继承自 <父类> |
| `<字段2>` | `<类型>` | `<默认值>` | <说明> | 本类定义 |

## N.4 与上下游模块的交互

<模块名> 通过以下接口与其他模块交互：

| 上游模块 | 接口 | 数据流向 | 说明 |
|----------|------|----------|------|
| `<模块A>` | `<方法名>()` | A → 本模块 | <说明> |
| `<模块B>` | `<方法名>()` | 本模块 → B | <说明> |

## 小结

- **<要点 1>**：<核心功能总结>
- **<要点 2>**：<关键算法总结>
- **<要点 3>**：<设计决策总结>
- **<要点 4>**：<与其他模块的关系>
```

---

### Template C: "Variant/Extension" Chapter (Multiple Implementations)

**Use this when a base class has multiple implementations (e.g., 14 DPO loss variants).**

```markdown
# 第 N 章 <基础算法名> 及其 <数字> 种变体

<引言：介绍基础算法的数学原理和核心思想>

## N.1 基础算法：<算法名>

### 数学公式

<用 LaTeX 或文本描述核心公式>

### 源码实现

```python
# 摘自 <实际文件路径>:<行号>
class <基础类名>:
    """<文档字符串>"""

    def <损失方法>(
        self,
        policy_chosen_logps: torch.FloatTensor,
        policy_rejected_logps: torch.FloatTensor,
        reference_chosen_logps: torch.FloatTensor,
        reference_rejected_logps: torch.FloatTensor,
    ) -> Tuple[torch.FloatTensor, torch.FloatTensor, torch.FloatTensor]:
        """<完整文档字符串>"""
        <完整实现代码>
```

## N.2 <数字> 种变体对比

| 变体名 | loss_type 值 | 核心差异 | 适用场景 |
|--------|-------------|----------|----------|
| <变体 1> | `<值 1>` | <差异描述> | <场景> |
| <变体 2> | `<值 2>` | <差异描述> | <场景> |

## N.3 各变体实现细节

### <变体 1>：<名称>

**与基础版本的差异：** <描述>

```python
# 摘自 <实际文件路径>:<行号>
# 注意与基础版本的差异部分
<该变体的完整实现代码 — 高亮差异行>
```

### <变体 2>：<名称>

<同上格式>

## 小结

- **<要点 1>**：<基础算法核心>
- **<要点 2>**：<变体数量和设计思路>
- **<要点 3>**：<如何选择>
```

---

### Template D: "Configuration/Hyperparameter" Chapter (NEW)

**Use this for documenting dataclass/Pydantic configuration classes.**

```markdown
# 第 N 章 <配置类名>：<一句话概括>

<引言：该配置类在训练流程中的作用>

## N.1 完整参数列表

### 训练超参数

| 参数名 | 类型 | 默认值 | 说明 | 影响范围 |
|--------|------|--------|------|----------|
| `<param1>` | `<type>` | `<default>` | <说明> | <影响哪些模块> |
| `<param2>` | `<type>` | `<default>` | <说明> | <影响哪些模块> |

### <子类别> 参数

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `<param3>` | `<type>` | `<default>` | <说明> |

## N.2 关键参数的源码分析

### `<关键参数 1>`

```python
# 摘自 <实际文件路径>:<行号>
class <配置类名>(<基类>):
    <关键参数 1>: <类型> = field(
        default=<默认值>,
        metadata={"help": "<帮助文本 — 从源码提取>"}
    )
```

<分析：这个参数的默认值为什么是这个值，调大/调小会有什么效果>

### `<关键参数 2>`

<同上格式>

## N.3 参数组合推荐

| 任务类型 | 推荐配置 | 说明 |
|----------|----------|------|
| <任务 1> | `<param1>=<值>, <param2>=<值>` | <原因> |
| <任务 2> | `<param1>=<值>, <param2>=<值>` | <原因> |

## 小结

- **<要点 1>**：<参数体系总览>
- **<要点 2>**：<关键参数详解>
- **<要点 3>**：<调参建议>
```

---

### Template E: "Registry/Mapping" Chapter (NEW)

**Use this for registration systems (loss_map, model_mapping, etc.).**

```markdown
# 第 N 章 <注册系统名>：<一句话概括>

<引言：注册系统的作用，为什么需要它>

## N.1 注册机制

```python
# 摘自 <实际文件路径>:<行号>
<注册系统的完整实现代码>
```

**工作原理：** <解释注册和查找的流程>

## N.2 已注册的 <项目类型>

| 名称 | 类 | 文件 | 说明 |
|------|-----|------|------|
| `<name1>` | `<ClassName>` | `<file.py>` | <说明> |
| `<name2>` | `<ClassName>` | `<file.py>` | <说明> |

## N.3 扩展方式

<如何注册新的 <项目类型>>

```python
# 示例：注册新的 <项目类型>
from <项目>.<模块> import <注册函数>

@<注册函数>("<名称>")
class My<项目类型>(<基类>):
    <实现>
```

## 小结

- **<要点 1>**：<注册机制原理>
- **<要点 2>**：<已注册项列表>
- **<要点 3>**：<扩展方式>
```

---

## 2. Index Page Templates

### Hero Section

```yaml
---
layout: home

hero:
  name: "<项目名> 源码解析"
  text: "<一句话副标题>"
  tagline: <详细描述，50-80 字，说明覆盖范围和读者将获得什么>
  actions:
    - theme: brand
      text: 开始阅读
      link: /chapters/01-<first-chapter>
    - theme: alt
      text: 查看目录
      link: /contents
    - theme: alt
      text: GitHub
      link: https://github.com/<username>/<project>-book

features:
  - icon:
      src: /icons/<feature1>.svg
    title: <特性 1 标题>
    details: <特性 1 描述，50-80 字>

  - icon:
      src: /icons/<feature2>.svg
    title: <特性 2 标题>
    details: <特性 2 描述，50-80 字>

  - icon:
      src: /icons/<feature3>.svg
    title: <特性 3 标题>
    details: <特性 3 描述，50-80 字>

  - icon:
      src: /icons/<feature4>.svg
    title: <特性 4 标题>
    details: <特性 4 描述，50-80 字>
---
```

---

## 3. Appendix Templates

### Appendix A: Reading Path Guide

```markdown
# 附录 A：阅读路径指南

本书涵盖 <项目名> 的架构设计、核心实现与生产运维，内容较多。根据你的角色和目标，推荐以下阅读路径。

## 路径一：入门开发者

**推荐章节：第 1-3 章，然后第 4-5 章**

如果你是第一次接触 <项目名>，建议从第 1 章的项目概览开始，了解 <项目名> 是什么、解决什么问题。第 2 章和第 3 章带你完成环境搭建和第一次运行，建立直观体验。有了基础认知后，阅读第 4-5 章深入理解 <核心概念 1> 和 <核心概念 2>。这条路径的目标是让你能够独立配置和使用 <项目名>，并对系统有一个完整的全局认知。

## 路径二：架构师 / 深度开发者

**推荐章节：第 6-11 章**

如果你已经熟悉 <项目名> 的基本用法，想要深入理解或定制扩展系统，重点阅读第 6 章 <核心模块 1>、第 7-8 章的 <核心模块 2>、第 9-11 章的 <扩展系统>。这些章节覆盖了 <项目名> <核心能力> 的完整设计——从 <环节 1>、<环节 2> 到 <环节 3> 的完整链路。读完这些章节，你将具备为 <项目名> 开发自定义 <扩展类型>、编写新 <组件> 或集成第三方 <服务> 的能力。

## 路径三：运维 / DevOps 工程师

**推荐章节：第 14-15 章，第 20-22 章**

如果你的职责是部署和运维 <项目名>，可以直接跳到第 14-15 章了解 <基础设施>，然后阅读第 20-22 章的 <配置>、<模型适配> 和 <部署>。第 20 章的 <速查表> 和附录 B 的 <参考表> 是日常运维的高频参考资料。
```

### Appendix B: Configuration Reference

```markdown
# 附录 B：配置字段速查表

本附录列出 <项目名> 所有可配置字段及其说明。配置支持三种方式：
1. 环境变量（`<PREFIX>_<FIELD_NAME>`）
2. 配置文件（`config.yaml`）
3. 命令行参数（`--<field-name>`）

优先级：命令行参数 > 环境变量 > 配置文件 > 默认值

## 核心配置

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `<field_1>` | `<type>` | `<default>` | <说明> |
| `<field_2>` | `<type>` | `<default>` | <说明> |

## <模块名> 配置

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `<field_1>` | `<type>` | `<default>` | <说明> |

## 示例配置

```yaml
# 完整配置示例
<module_1>:
  <field_1>: <value>
  <field_2>: <value>

<module_2>:
  <field_1>: <value>
```
```

### Appendix C: Glossary

```markdown
# 附录 C：术语表

| 术语 | 英文 | 说明 |
|------|------|------|
| <术语 1> | <English> | <解释> |
| <术语 2> | <English> | <解释> |
| <术语 3> | <English> | <解释> |
```

---

## 4. ASCII Diagram Patterns

### Architecture Overview

```
┌─────────────────────────────────────────────┐
│              <系统名称>                       │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ 模块 A    │  │ 模块 B    │  │ 模块 C    │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│       │              │              │        │
│       └──────────────┼──────────────┘        │
│                      │                       │
│              ┌──────────┐                    │
│              │ 核心引擎  │                    │
│              └──────────┘                    │
│                      │                       │
│       ──────────────┼──────────────┐        │
│       │              │              │        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ 存储层    │  │ 缓存层    │  │ 通信层    │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
─────────────────────────────────────────────┘
```

### Pipeline / Flow

```
<输入> → <步骤 1> → <步骤 2> → <步骤 3> → <输出>
           │           │           │
           ▼           ▼           ▼
        <副作用 1>  <副作用 2>  <副作用 3>
```

### Layer Architecture

```
┌─────────────────────────────┐
│     Presentation Layer       │  ← 用户接口
├─────────────────────────────┤
│     Business Logic Layer     │  ← 核心逻辑
├─────────────────────────────
│     Data Access Layer        │  ← 数据操作
├─────────────────────────────┤
│     Infrastructure Layer     │  ← 基础设施
└─────────────────────────────┘
```

### Data Flow Diagram

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│  <组件A>  │────▶│  <组件B>  │────▶│  <组件C>  │
│         │     │         │     │         │
│ 输出:    │     │ 输入:    │     │ 输入:    │
│ <类型A>  │     │ <类型A>  │     │ <类型B>  │
│         │     │ 输出:    │     │ 输出:    │
│         │     │ <类型B>  │     │ <类型C>  │
└─────────┘     └─────────┘     └─────────┘
```

---

## 5. Comparison Table Patterns

### Product Comparison

```markdown
| 维度 | <项目名> | <竞品 1> | <竞品 2> |
|------|----------|----------|----------|
| 定位 | <定位> | <定位> | <定位> |
| 语言 | <语言> | <语言> | <语言> |
| 许可证 | <许可证> | <许可证> | <许可证> |
| 核心特性 | <特性> | <特性> | <特性> |
| 学习曲线 | <描述> | <描述> | <描述> |
| 社区活跃度 | <描述> | <描述> | <描述> |
```

### Approach Comparison

```markdown
| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|---------|
| <方案 A> | <优点> | <缺点> | <场景> |
| <方案 B> | <优点> | <缺点> | <场景> |
| <方案 C> | <优点> | <缺点> | <场景> |
```

### Code Difference Comparison (NEW)

```markdown
| 维度 | <实现 A> | <实现 B> |
|------|----------|----------|
| 核心公式 | `<公式 A>` | `<公式 B>` |
| 关键代码差异 | `<代码行 A>` | `<代码行 B>` |
| 超参数 | `<param>=<值>` | `<param>=<值>` |
| 数值稳定性 | <描述> | <描述> |
| 推荐场景 | <场景> | <场景> |
```

---

## 6. Code Snippet Rules (v2.0 — MANDATORY)

### Rule 1: Always Include File Path

```python
# 摘自 swift/loss/embedding.py:45
def InfoNCELoss(...):
```

### Rule 2: Show Full Function Signature

```python
# WRONG
def loss_function(...):

# RIGHT
def InfoNCELoss(
    query: torch.Tensor,
    positive: torch.Tensor,
    negatives: torch.Tensor,
    temperature: float = 0.1,
    in_batch_negatives: bool = True
) -> torch.Tensor:
```

### Rule 3: Show Full Implementation for Functions > 10 Lines

```python
# WRONG — never do this
def forward(self, x):
    # ... actual implementation
    return output

# RIGHT — show the real code
def forward(self, x):
    x = self.linear1(x)
    x = F.relu(x)
    x = self.dropout(x)
    x = self.linear2(x)
    return x
```

### Rule 4: Annotate Key Lines

```python
# 摘自 swift/rlhf_trainers/dpo_trainer.py:123
def dpo_loss(self, policy_chosen_logps, policy_rejected_logps,
             reference_chosen_logps, reference_rejected_logps):
    # 计算策略模型与参考模型的 log probability 差值
    pi_logratios = policy_chosen_logps - policy_rejected_logps
    ref_logratios = reference_chosen_logps - reference_rejected_logps
    logits = pi_logratios - ref_logratios  # 优势对数比

    # 根据 loss_type 选择不同的损失函数
    if self.loss_type == "sigmoid":
        loss = -F.logsigmoid(self.beta * logits)
    elif self.loss_type == "hinge":
        loss = torch.relu(1 - self.beta * logits)
    # ... 其他 loss_type 分支
```

### Rule 5: Show Class Inheritance Chains

```python
# 摘自 swift/rlhf_trainers/dpo_trainer.py:28
class DPOTrainer(Trainer, DPOTrainerMixin):
    """DPO 训练器，继承自 Trainer 和 DPOTrainerMixin。

    Trainer 提供：训练循环、优化器管理、日志记录
    DPOTrainerMixin 提供：DPO 损失计算、偏好数据处理
    """
```

### Rule 6: Show Conditional Branches

```python
# WRONG — don't skip branches
def compute_loss(self, ...):
    # ... implementation
    return loss

# RIGHT — show all branches
def compute_loss(self, model, inputs, return_outputs=False):
    if self.task_type == "causal_lm":
        loss = self.causal_lm_loss(model, inputs)
    elif self.task_type == "embedding":
        loss = self.embedding_loss(model, inputs)
    elif self.task_type == "reranker":
        loss = self.reranker_loss(model, inputs)
    else:
        raise ValueError(f"Unknown task type: {self.task_type}")
    return loss
```

---

## 7. Chapter Title Patterns

### Descriptive Titles

- 第 1 章 <项目名> 是什么，为什么重要
- 第 2 章 仓库全景与技术栈
- 第 3 章 快速上手
- 第 N 章 <模块名>：<一句话概括模块职责>
- 第 N 章 <基础算法名> 及其 <数字> 种变体
- 第 N 章 <配置类名> 全解
- 第 N 章 <注册系统名>：<注册机制>

### Appendix Titles

- 附录 A：阅读路径指南
- 附录 B：<类型> 字段速查表
- 附录 C：术语表
- 附录 D：版本更新日志
