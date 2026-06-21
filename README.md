# AI Skills

A collection of Claude Code skills for source code analysis, documentation generation, and more.

## Skills

| Skill | Description |
|-------|-------------|
| [source-code-book](skills/source-code-book/) | Generate comprehensive source code analysis books for open-source projects |
| [tech-evolution-book](skills/tech-evolution-book/) | Analyze technology evolution in book format - track iterations, improvements, implementation details |

---

## Installation

This repository supports **three installation methods**:

### Option 1: Claude Code Plugin (Recommended)

Install via Claude Code's built-in plugin/marketplace system:

```bash
# Add the marketplace
/plugin marketplace add hellostronger/ai-skills

# List available skills from the marketplace
/plugin skills list

# Install a specific skill
/plugin skills install source-code-book

# Install all skills
/plugin skills install --all
```

**Advantages:**
- Native integration with Claude Code
- Auto-updates when marketplace is updated
- Centralized skill management

---

### Option 2: CLI Install (npx)

Use the CLI tool for flexible installation:

```bash
# List available skills
npx ai-skills list

# Install all skills
npx ai-skills install

# Install a specific skill (two syntaxes)
npx ai-skills install source-code-book
npx ai-skills install --skill source-code-book

# Update all installed skills
npx ai-skills update

# Remove a skill
npx ai-skills remove source-code-book

# Show help
npx ai-skills help
```

**Advantages:**
- Works without Claude Code running
- More control over installation
- Can install from anywhere

Skills are installed to `~/.claude/skills/`.

---

### Option 3: Manual Install

For developers or custom setups:

```bash
# Clone the repository
git clone https://github.com/hellostronger/ai-skills.git

# Copy a specific skill to your Claude skills directory
cp -r ai-skills/skills/source-code-book ~/.claude/skills/

# Or copy all skills
cp -r ai-skills/skills/* ~/.claude/skills/
```

**Advantages:**
- Full control
- Can modify skills before use
- No dependency on external tools

---

## Directory Structure

```
ai-skills/
├── .claude-plugin/              # Claude Code plugin configuration
│   ├── marketplace.json         # Marketplace definition (for Option 1)
│   └── plugin.json              # Plugin definition (for Option 1)
│
├── package.json                 # npm entry point (for Option 2 npx)
├── registry.json                # Skills registry (for Option 2 CLI)
├── skill.json                   # Collection metadata
│
├── packages/cli/                # CLI tool implementation
│   ├── package.json
│   └── bin/
│       └── ai-skills.js         # Main CLI script
│
├── skills/                      # All skills
│   └── source-code-book/
│       ├── skill.json           # Skill metadata
│       ├── SKILL.md             # Skill definition (entry point)
│       ├── QUICKSTART.md        # Quick start guide
│       └── TEMPLATES.md         # Chapter templates
│
└── README.md                    # This file
```

---

## Contributing

Want to add your own skill to this marketplace?

### Step 1: Create Your Skill

```bash
mkdir skills/my-new-skill
```

Create the required files:

```
skills/my-new-skill/
├── skill.json      # Required: metadata
├── SKILL.md        # Required: skill definition
└── ...             # Optional: additional resources
```

### Step 2: Define Metadata

**skill.json:**
```json
{
  "name": "my-new-skill",
  "version": "1.0.0",
  "type": "skill",
  "description": "Brief description of what this skill does",
  "entry": "SKILL.md",
  "tags": ["tag1", "tag2", "tag3"],
  "languages": ["en"]
}
```

### Step 3: Register Your Skill

Add to `registry.json`:
```json
{
  "skills": [
    {
      "name": "my-new-skill",
      "repo": "your-username/ai-skills",
      "path": "skills/my-new-skill",
      "version": "1.0.0",
      "description": "Description",
      "author": "Your Name",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

### Step 4: Submit PR

1. Fork this repository
2. Add your skill
3. Update `registry.json`
4. Submit a pull request

---

## Skill Specification

### Required Files

| File | Purpose |
|------|---------|
| `skill.json` | Metadata (name, version, description, tags) |
| `SKILL.md` | Skill definition with YAML frontmatter |

### skill.json Format

```json
{
  "name": "skill-name",           // Required: unique identifier
  "version": "1.0.0",             // Required: semantic version
  "type": "skill",                // Required: always "skill"
  "description": "...",           // Required: brief description
  "entry": "SKILL.md",            // Required: entry point file
  "author": "",                   // Optional: author name
  "tags": ["..."],                // Optional: search tags
  "languages": ["en", "zh"]       // Optional: supported languages
}
```

### SKILL.md Format

```markdown
---
name: skill-name
description: Brief description
triggers:
  - pattern1
  - pattern2
---

# Skill Title

[Skill content here...]
```

---

## License

MIT