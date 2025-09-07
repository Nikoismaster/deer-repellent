#!/bin/bash

echo "🚀 快速修复 JSX 语法错误..."

# 创建备份
echo "📦 创建备份..."
cp src/app/blog/page.tsx src/app/blog/page.tsx.backup
cp src/app/faq/page.tsx src/app/faq/page.tsx.backup
cp src/app/installation-guide/page.tsx src/app/installation-guide/page.tsx.backup

# 修复 blog/page.tsx 第238-239行
echo "🔧 修复 blog/page.tsx..."
sed -i '' '238,239c\
                        </Link>\
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
' src/app/blog/page.tsx

# 修复 faq/page.tsx 第252-253行
echo "🔧 修复 faq/page.tsx..."
sed -i '' '252,253c\
              </Link>\
            </div>
' src/app/faq/page.tsx

# 修复 installation-guide/page.tsx 第398-399行
echo "🔧 修复 installation-guide/page.tsx..."
sed -i '' '398,399c\
                </Link>\
                
' src/app/installation-guide/page.tsx

echo "✅ 修复完成！"

echo "🧪 测试编译..."
npm run build

if [ $? -eq 0 ]; then
    echo "🎉 编译成功！删除备份文件..."
    rm -f src/app/blog/page.tsx.backup
    rm -f src/app/faq/page.tsx.backup
    rm -f src/app/installation-guide/page.tsx.backup
else
    echo "❌ 编译失败，恢复备份..."
    mv src/app/blog/page.tsx.backup src/app/blog/page.tsx
    mv src/app/faq/page.tsx.backup src/app/faq/page.tsx
    mv src/app/installation-guide/page.tsx.backup src/app/installation-guide/page.tsx
    echo "🔄 文件已恢复"
fi
