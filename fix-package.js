#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PackageJsonFixer {
  constructor() {
    this.packagePath = path.join(process.cwd(), 'package.json');
  }

  // 检查并修复 package.json
  async fixPackageJson() {
    console.log('🔍 检查 package.json...');
    
    if (!fs.existsSync(this.packagePath)) {
      console.error('❌ package.json 文件不存在');
      return false;
    }

    try {
      // 读取原始内容
      const content = fs.readFileSync(this.packagePath, 'utf8');
      console.log('📖 读取文件成功');
      
      // 尝试解析 JSON
      try {
        const parsed = JSON.parse(content);
        console.log('✅ package.json 格式正确');
        
        // 添加修复脚本
        this.addFixScripts(parsed);
        return true;
      } catch (parseError) {
        console.log('❌ JSON 解析错误:', parseError.message);
        console.log('🔧 尝试修复...');
        
        // 尝试修复常见的 JSON 错误
        const fixedContent = this.attemptFix(content);
        
        if (fixedContent) {
          // 创建备份
          const backupPath = this.packagePath + '.backup.' + Date.now();
          fs.writeFileSync(backupPath, content);
          console.log('📦 备份创建:', backupPath);
          
          // 写入修复后的内容
          fs.writeFileSync(this.packagePath, fixedContent);
          console.log('✅ package.json 已修复');
          
          return true;
        } else {
          console.log('❌ 无法自动修复，需要手动检查');
          return false;
        }
      }
    } catch (error) {
      console.error('❌ 读取文件错误:', error.message);
      return false;
    }
  }

  // 尝试修复常见的 JSON 错误
  attemptFix(content) {
    let fixed = content;

    // 修复常见问题
    const fixes = [
      // 修复缺少引号的属性名
      { pattern: /(\w+):/g, replacement: '"$1":' },
      
      // 修复单引号
      { pattern: /'/g, replacement: '"' },
      
      // 修复结尾多余的逗号
      { pattern: /,(\s*[}\]])/g, replacement: '$1' },
      
      // 修复缺少逗号
      { pattern: /}(\s*")(?=\w)/g, replacement: '},$1' },
      { pattern: /](\s*")(?=\w)/g, replacement: '],$1' },
      
      // 修复多余的逗号在开头
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /\[\s*,/g, replacement: '[' }
    ];

    for (const fix of fixes) {
      const before = fixed;
      fixed = fixed.replace(fix.pattern, fix.replacement);
      if (before !== fixed) {
        console.log(`🔧 应用修复: ${fix.pattern}`);
      }
    }

    // 尝试解析修复后的内容
    try {
      const parsed = JSON.parse(fixed);
      
      // 添加修复脚本
      this.addFixScripts(parsed);
      
      // 格式化输出
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      console.log('❌ 修复后仍然无法解析:', error.message);
      return null;
    }
  }

  // 添加修复脚本到 package.json
  addFixScripts(packageObj) {
    if (!packageObj.scripts) {
      packageObj.scripts = {};
    }

    // 添加 JSX 修复脚本
    const newScripts = {
      'fix-jsx': 'node jsx-fixer.js',
      'fix-jsx:rollback': 'node jsx-fixer.js --rollback',
      'fix-jsx:specific': 'node jsx-fixer.js src/app/blog/page.tsx src/app/faq/page.tsx src/app/installation-guide/page.tsx'
    };

    let added = false;
    for (const [key, value] of Object.entries(newScripts)) {
      if (!packageObj.scripts[key]) {
        packageObj.scripts[key] = value;
        added = true;
        console.log(`➕ 添加脚本: ${key}`);
      }
    }

    if (!added) {
      console.log('ℹ️  修复脚本已存在');
    }
  }

  // 显示当前 package.json 的问题区域
  showProblemArea(content) {
    const lines = content.split('\n');
    console.log('\n📋 package.json 内容预览:');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      console.log(`${lineNum.toString().padStart(3)}: ${line}`);
      
      // 显示前后 5 行
      if (lineNum >= 772 && lineNum <= 782) {
        console.log('    ⚠️  问题可能在这个区域');
      }
    });
  }

  // 创建一个简单的 package.json 模板
  createBasicTemplate() {
    const template = {
      "name": "deer-repellent",
      "version": "0.1.0",
      "private": true,
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "fix-jsx": "node jsx-fixer.js",
        "fix-jsx:rollback": "node jsx-fixer.js --rollback",
        "fix-jsx:specific": "node jsx-fixer.js src/app/blog/page.tsx src/app/faq/page.tsx src/app/installation-guide/page.tsx"
      },
      "dependencies": {
        "next": "14.0.0",
        "react": "^18",
        "react-dom": "^18"
      },
      "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "eslint": "^8",
        "eslint-config-next": "14.0.0",
        "typescript": "^5"
      }
    };

    const backupPath = this.packagePath + '.broken.' + Date.now();
    const originalContent = fs.readFileSync(this.packagePath, 'utf8');
    fs.writeFileSync(backupPath, originalContent);
    
    fs.writeFileSync(this.packagePath, JSON.stringify(template, null, 2));
    
    console.log(`🔄 创建了基础的 package.json 模板`);
    console.log(`📦 原文件备份到: ${backupPath}`);
    console.log(`⚠️  请检查并添加你项目需要的其他依赖`);
  }
}

// 主函数
async function main() {
  const fixer = new PackageJsonFixer();
  
  console.log('🚀 Package.json 修复工具启动\n');
  
  const success = await fixer.fixPackageJson();
  
  if (!success) {
    console.log('\n❓ 是否创建基础模板？ (y/N)');
    
    // 简化版：直接创建模板
    console.log('🔧 创建基础模板...');
    fixer.createBasicTemplate();
  }
  
  console.log('\n✨ 完成！现在可以尝试运行: npm run fix-jsx');
}

main().catch(console.error);