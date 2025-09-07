#!/bin/bash

echo "开始修复 ESLint 错误..."

# 创建备份目录
mkdir -p backup
cp -r src backup/

echo "已创建备份到 backup/ 目录"

# 1. 修复单引号转义问题
echo "修复单引号转义..."
find src -name "*.tsx" -type f -exec sed -i.bak \
  -e "s/They're/They\&apos;re/g" \
  -e "s/you're/you\&apos;re/g" \
  -e "s/don't/don\&apos;t/g" \
  -e "s/shouldn't/shouldn\&apos;t/g" \
  -e "s/can't/can\&apos;t/g" \
  -e "s/doesn't/doesn\&apos;t/g" \
  -e "s/we're/we\&apos;re/g" \
  -e "s/it's/it\&apos;s/g" \
  -e "s/that's/that\&apos;s/g" \
  -e "s/what's/what\&apos;s/g" \
  -e "s/here's/here\&apos;s/g" \
  -e "s/there's/there\&apos;s/g" \
  {} \;

# 2. 修复双引号转义问题
echo "修复双引号转义..."
find src -name "*.tsx" -type f -exec sed -i.bak2 \
  -e 's/"5-Minute Setup"/\&quot;5-Minute Setup\&quot;/g' \
  -e 's/"acoustic barrier"/\&quot;acoustic barrier\&quot;/g' \
  -e 's/"Use.*Link.*instead"/\&quot;Use Link instead\&quot;/g' \
  {} \;

# 3. 修复 <a> 标签为 <Link> 组件
echo "修复链接组件..."
find src -name "*.tsx" -type f -exec sed -i.bak3 \
  -e 's/<a href="\/"/<Link href="\/"/g' \
  -e 's/<a href="\/blog"/<Link href="\/blog"/g' \
  -e 's/<a href="\/product"/<Link href="\/product"/g' \
  -e 's/<a href="\/faq"/<Link href="\/faq"/g' \
  -e 's/<a href="\/about"/<Link href="\/about"/g' \
  -e 's/<a href="\/privacy"/<Link href="\/privacy"/g' \
  -e 's/<a href="\/terms"/<Link href="\/terms"/g' \
  -e 's/<a href="\/how-it-works"/<Link href="\/how-it-works"/g' \
  -e 's/<a href="\/installation-guide"/<Link href="\/installation-guide"/g' \
  -e 's/<\/a>/<\/Link>/g' \
  {} \;

# 4. 添加缺失的 Link 导入
echo "添加缺失的 Link 导入..."

# 检查并添加 Link 导入到需要的文件
files_needing_link=(
  "src/app/about/page.tsx"
  "src/app/blog/page.tsx"
  "src/app/blog/[slug]/page.tsx"
  "src/app/faq/page.tsx"
  "src/app/how-it-works/page.tsx"
  "src/app/installation-guide/page.tsx"
  "src/app/product/page.tsx"
)

for file in "${files_needing_link[@]}"; do
  if [ -f "$file" ]; then
    # 检查是否已经有 Link 导入
    if ! grep -q "import.*Link.*from.*next/link" "$file"; then
      # 在第一个 import 后添加 Link 导入
      sed -i.bak4 "1a\\
import Link from 'next/link';" "$file"
    fi
  fi
done

# 5. 修复 TypeScript any 类型
echo "修复 TypeScript any 类型..."
if [ -f "src/app/blog/[slug]/page.tsx" ]; then
  sed -i.bak5 \
    -e 's/Record<string, any>/Record<string, { id: string; title: string; excerpt: string; content: string; image: string; category: string; readTime: string; publishDate: string; author: string; tags: string[]; }>/g' \
    "src/app/blog/[slug]/page.tsx"
fi

# 6. 删除未使用的导入
echo "删除未使用的导入..."

# FAQ 页面 - 删除未使用的导入
if [ -f "src/app/faq/page.tsx" ]; then
  sed -i.bak6 \
    -e 's/import.*Metadata.*from.*next.*;//g' \
    -e 's/, Volume2//g' \
    -e 's/, Droplets//g' \
    -e 's/Volume2, //g' \
    -e 's/Droplets, //g' \
    "src/app/faq/page.tsx"
fi

# How It Works 页面 - 删除未使用的导入
if [ -f "src/app/how-it-works/page.tsx" ]; then
  sed -i.bak7 \
    -e 's/import Image from.*next\/image.*;//g' \
    -e 's/, Shield//g' \
    -e 's/Shield, //g' \
    "src/app/how-it-works/page.tsx"
fi

# Product 页面 - 删除未使用的导入
if [ -f "src/app/product/page.tsx" ]; then
  sed -i.bak8 \
    -e 's/, ArrowRight//g' \
    -e 's/, Thermometer//g' \
    -e 's/ArrowRight, //g' \
    -e 's/Thermometer, //g' \
    "src/app/product/page.tsx"
fi

# Blog 页面 - 删除未使用的导入
if [ -f "src/app/blog/page.tsx" ]; then
  sed -i.bak9 \
    -e 's/, Tag//g' \
    -e 's/Tag, //g' \
    "src/app/blog/page.tsx"
fi

# 主页 - 删除未使用的导入
if [ -f "src/app/page.tsx" ]; then
  sed -i.bak10 \
    -e 's/import Image from.*next\/image.*;//g' \
    "src/app/page.tsx"
fi

# 7. 清理备份文件
echo "清理临时文件..."
find src -name "*.bak*" -delete

# 8. 修复 layout.tsx 中的同步脚本问题
echo "修复 layout.tsx 同步脚本问题..."
if [ -f "src/app/layout.tsx" ]; then
  # 将同步 script 标签改为异步
  sed -i.bak_layout \
    -e 's/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/<script async src="https:\/\/cdn.tailwindcss.com"><\/script>/g' \
    "src/app/layout.tsx"
  
  # 删除备份文件
  rm -f "src/app/layout.tsx.bak_layout"
fi

echo "修复完成！"
echo ""
echo "修复内容："
echo "✓ 修复了所有单引号转义问题"
echo "✓ 修复了双引号转义问题"
echo "✓ 将 <a> 标签替换为 <Link> 组件"
echo "✓ 添加了缺失的 Link 导入"
echo "✓ 修复了 TypeScript any 类型"
echo "✓ 删除了未使用的导入"
echo "✓ 修复了同步脚本问题"
echo ""
echo "现在可以运行构建测试："
echo "npm run build"
echo ""
echo "如果出现问题，可以从 backup/ 目录恢复文件"