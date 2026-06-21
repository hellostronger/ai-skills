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
---

# Tech Evolution Book Generator

## Purpose

Generate a comprehensive book analyzing the evolution of a technology (AI models, frameworks, libraries, etc.) in chapter format, covering:

1. **Origins & Motivation** - Why the technology was created
2. **Version Iterations** - Each major version/release
3. **Improvements** - What changed in each version
4. **Implementation Details** - How improvements were implemented
5. **Impact & Significance** - Why each change matters

## Workflow

### Phase 1: Research & Information Gathering

Use **DuckDuckGo Web Search** to gather information:

```
Step 1: Initial Overview Search
- Search: "[technology name] history overview"
- Search: "[technology name] evolution timeline"
- Search: "[technology name] version history"

Step 2: Version-Specific Research
For each major version:
- Search: "[technology name] [version] release announcement"
- Search: "[technology name] [version] improvements changes"
- Search: "[technology name] [version] technical details"
- Search: "[technology name] [version] paper/blog"

Step 3: Implementation Details
- Search: "[technology name] [feature] implementation"
- Search: "[technology name] architecture design"
- Search: "[technology name] technical blog"

Step 4: Community & Impact
- Search: "[technology name] community reaction"
- Search: "[technology name] comparison with competitors"
- Search: "[technology name] benchmark results"
```

### Phase 2: Structure the Book

Organize into chapters following this structure:

```
Part I: Origins & Foundation
├── Chapter 1: Birth of [Technology]
├── Chapter 2: Core Architecture & Design Philosophy

Part II: Evolution Journey
├── Chapter 3: Version 1.x - The Foundation
├── Chapter 4: Version 2.x - Major Breakthrough
├── Chapter 5: Version 3.x - Refinement & Optimization
├── ... (continue for each major version)

Part III: Technical Deep Dive
├── Chapter N: Key Improvements Analysis
├── Chapter N+1: Implementation Details

Part IV: Impact & Future
├── Chapter N+2: Industry Impact
├── Chapter N+3: Future Directions
```

### Phase 3: Write Each Chapter

For each chapter, follow the template structure (see TEMPLATES.md).

## Search Strategy

### DuckDuckGo Search Tips

1. **Use specific queries**:
   - `"Qwen 2.5" release announcement`
   - `Qwen model architecture MHA GQA`
   - `Qwen 2 technical report`

2. **Search for official sources first**:
   - Official blogs, papers, GitHub repos
   - arXiv papers for AI models
   - Official documentation

3. **Cross-reference multiple sources**:
   - Official announcements
   - Technical papers
   - Community discussions
   - Benchmark results

4. **Search patterns**:
   ```
   [tech] + "release" / "announcement"
   [tech] + "paper" / "arxiv"
   [tech] + "vs" + [competitor] (for comparison)
   [tech] + "benchmark" / "evaluation"
   [tech] + "implementation" / "architecture"
   [tech] + [version] + "improvements"
   ```

## Example: Analyzing Qwen Model Evolution

### Search Queries

```
Phase 1:
- "Qwen model history overview"
- "Qwen evolution timeline Alibaba"
- "Qwen 1 Qwen 2 Qwen 2.5 comparison"

Phase 2 (Version-specific):
- "Qwen-7B release announcement 2023"
- "Qwen 2 technical report arxiv"
- "Qwen 2.5 improvements changes"
- "Qwen-Math Qwen-Coder specialized models"

Phase 3 (Technical):
- "Qwen architecture GQA MHA"
- "Qwen RoPE implementation"
- "Qwen training data composition"
- "Qwen tokenizer design"

Phase 4 (Impact):
- "Qwen benchmark results"
- "Qwen vs Llama vs GPT comparison"
- "Qwen community adoption"
```

### Expected Output Structure

```
# Qwen 模型演进史

## 第 1 章 Qwen 的诞生：阿里的 AI 战略
- 1.1 背景：阿里为什么要做大模型
- 1.2 Qwen 项目的启动与团队
- 1.3 Qwen-1 的定位与目标

## 第 2 章 Qwen-1：奠定基石（2023年8月）
- 2.1 模型架构：Transformer 的继承与创新
- 2.2 训练数据：多语言、多领域的数据策略
- 2.3 发布版本：7B、14B、72B 的定位
- 2.4 首次评估：能力与不足

## 第 3 章 Qwen-1.5：快速迭代（2024年2月）
- 3.1 为什么快速推出 1.5
- 3.2 核心改进点
  - 3.2.1 更好的 tokenizer
  - 3.2.2 改进的注意力机制
  - 3.2.3 训练效率提升
- 3.3 技术实现细节
- 3.4 性能提升对比

## 第 4 章 Qwen-2：架构突破（2024年6月）
- 4.1 GQA (Grouped Query Attention) 的引入
- 4.2 实现细节与代码分析
- 4.3 与 MHA 的对比
- 4.4 性能影响评估

## 第 5 章 Qwen-2.5：成熟之作（2024年9月）
- 5.1 全方位改进
- 5.2 Qwen-Math：数学专项优化
- 5.3 Qwen-Coder：编程专项优化
- 5.4 训练数据的升级

## 第 6 章 关键技术创新深度解析
- 6.1 RoPE 位置编码的实现
- 6.2 SwiGLU 激活函数的选择
- 6.3 RMSNorm vs LayerNorm
- 6.4 tokenizer 设计哲学

## 第 7 章 与竞品对比
- 7.1 Qwen vs Llama 系列
- 7.2 Qwen vs DeepSeek
- 7.3 Qwen vs GPT 系列
- 7.4 各维度的优劣势分析

## 第 8 章 社区影响与生态
- 8.1 开源策略的影响
- 8.2 微调生态的发展
- 8.3 应用案例

## 第 9 章 未来展望
- 9.1 Qwen-3 的可能方向
- 9.2 多模态演进
- 9.3 推理能力突破
```

## Output Format

Generate a **VitePress-ready** book with:

1. `index.md` - Hero page with overview
2. `chapters/*.md` - Individual chapters
3. `.vitepress/config.ts` - Navigation config

## Notes

- **Always verify information** from multiple sources
- **Cite sources** when making claims
- **Include code snippets** when discussing implementations
- **Use comparison tables** for version differences
- **Add diagrams** using ASCII art or mermaid
- **Keep technical depth** appropriate for the audience

## Quick Start

```
User: 分析 Qwen 模型的演进史

Claude:
好的！我将使用 DuckDuckGo 搜索收集信息，然后生成一本关于 Qwen 模型演进的技术书籍。

首先进行初步调研...
[执行搜索]
[收集信息]
[生成章节大纲]
[逐章撰写]
```