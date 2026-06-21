#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const SKILLS_DIR = path.join(os.homedir(), '.claude', 'skills');

class SkillsCLI {
  constructor() {
    this.registry = this.loadRegistry();
    this.ensureSkillsDir();
  }

  loadRegistry() {
    try {
      const localRegistry = path.join(__dirname, '..', '..', '..', 'registry.json');
      if (fs.existsSync(localRegistry)) {
        return JSON.parse(fs.readFileSync(localRegistry, 'utf8'));
      }
      return { version: '1.0.0', skills: [] };
    } catch (error) {
      console.error('Error loading registry:', error.message);
      process.exit(1);
    }
  }

  ensureSkillsDir() {
    if (!fs.existsSync(SKILLS_DIR)) {
      fs.mkdirSync(SKILLS_DIR, { recursive: true });
    }
  }

  list() {
    console.log('\n' + '─'.repeat(60));
    console.log('📋 Available Skills');
    console.log('─'.repeat(60));

    if (this.registry.skills.length === 0) {
      console.log('  No skills found in registry.');
      return;
    }

    this.registry.skills.forEach((skill, index) => {
      console.log(`\n  ${index + 1}. ${skill.name}`);
      console.log(`     ${skill.description}`);
      console.log(`     Version: ${skill.version}`);
      console.log(`     Tags: ${skill.tags.join(', ')}`);
    });

    console.log(`\n  Total: ${this.registry.skills.length} skill(s)`);
    console.log('─'.repeat(60) + '\n');
  }

  install(skillName) {
    if (!skillName) {
      console.log('📦 Installing all skills from registry...\n');
      this.registry.skills.forEach(skill => {
        this.installSingle(skill.name);
      });
      console.log('\n✅ All skills installed!');
      return;
    }
    this.installSingle(skillName);
  }

  installSingle(skillName) {
    const skill = this.registry.skills.find(s => s.name === skillName);
    if (!skill) {
      console.error(`❌ Skill "${skillName}" not found in registry.`);
      console.log('Run `ai-skills list` to see available skills.');
      return;
    }

    console.log(`📦 Installing ${skill.name}...`);

    try {
      const targetDir = path.join(SKILLS_DIR, skill.name);

      // Remove existing
      if (fs.existsSync(targetDir)) {
        fs.rmSync(targetDir, { recursive: true, force: true });
      }
      fs.mkdirSync(targetDir, { recursive: true });

      // Clone repo
      const cloneDir = path.join(os.tmpdir(), `ai-skills-${Date.now()}`);
      execSync(`git clone --depth 1 https://github.com/${skill.repo}.git "${cloneDir}"`, {
        stdio: 'pipe'
      });

      // Copy skill files
      const skillPath = path.join(cloneDir, skill.path);
      if (fs.existsSync(skillPath)) {
        this.copyDir(skillPath, targetDir);
        console.log(`✅ ${skill.name} v${skill.version} installed successfully.`);
      } else {
        console.error(`❌ Skill path "${skill.path}" not found.`);
      }

      // Cleanup
      fs.rmSync(cloneDir, { recursive: true, force: true });

    } catch (error) {
      console.error(`❌ Error installing ${skill.name}: ${error.message}`);
    }
  }

  remove(skillName) {
    const targetDir = path.join(SKILLS_DIR, skillName);
    if (!fs.existsSync(targetDir)) {
      console.log(`⚠️  Skill "${skillName}" is not installed.`);
      return;
    }

    fs.rmSync(targetDir, { recursive: true, force: true });
    console.log(`🗑️  Removed skill: ${skillName}`);
  }

  update() {
    console.log('🔄 Updating all installed skills...\n');
    const installed = fs.readdirSync(SKILLS_DIR)
      .filter(f => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());

    installed.forEach(skillName => {
      const skill = this.registry.skills.find(s => s.name === skillName);
      if (skill) {
        this.installSingle(skillName);
      }
    });
    console.log('\n✅ All skills updated!');
  }

  copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        this.copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// CLI parsing
function main() {
  const args = process.argv.slice(2);
  const cli = new SkillsCLI();

  if (args.length === 0) {
    showHelp();
    return;
  }

  const command = args[0];

  switch (command) {
    case 'list':
    case 'ls':
      cli.list();
      break;

    case 'install':
    case 'i':
      const skillArg = args[1];
      if (skillArg === '--skill') {
        cli.install(args[2]);
      } else {
        cli.install(skillArg);
      }
      break;

    case 'remove':
    case 'uninstall':
      if (!args[1]) {
        console.error('❌ Please specify a skill name.');
        return;
      }
      cli.remove(args[1]);
      break;

    case 'update':
    case 'up':
      cli.update();
      break;

    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;

    default:
      console.log(`Unknown command: ${command}`);
      showHelp();
  }
}

function showHelp() {
  console.log(`
  ai-skills CLI - Manage AI skills for Claude Code

  Usage:
    npx ai-skills <command> [options]

  Commands:
    list, ls              List all available skills
    install               Install all skills from registry
    install <skill>       Install a specific skill
    install --skill <n>   Install specific skill (alternate syntax)
    remove <skill>        Remove an installed skill
    update                Update all installed skills
    help                  Show this help message

  Examples:
    npx ai-skills list
    npx ai-skills install
    npx ai-skills install source-code-book
    npx ai-skills install --skill source-code-book
    npx ai-skills remove source-code-book
    npx ai-skills update

  Skills are installed to: ~/.claude/skills/
`);
}

main();
