#!/bin/bash

# 备份文件
cp src/app/blog/[slug]/page.tsx src/app/blog/[slug]/page.tsx.backup

# 修复 params 类型 - 将其改为异步处理
sed -i '' 's/{ params }: { params: { slug: string } }/{ params }: { params: Promise<{ slug: string }> }/' src/app/blog/[slug]/page.tsx

# 在函数内部添加 await params
sed -i '' 's/const article = blogPosts\[params.slug\]/const resolvedParams = await params; const article = blogPosts[resolvedParams.slug]/' src/app/blog/[slug]/page.tsx

# 修复 generateMetadata 函数也需要同样处理
sed -i '' 's/export async function generateMetadata({ params }: { params: { slug: string } })/export async function generateMetadata({ params }: { params: Promise<{ slug: string }> })/' src/app/blog/[slug]/page.tsx

# 在 generateMetadata 中也添加 await
sed -i '' 's/const article = blogPosts\[params.slug\]/const resolvedParams = await params; const article = blogPosts[resolvedParams.slug]/' src/app/blog/[slug]/page.tsx

echo "修复完成，测试编译..."
npm run build
