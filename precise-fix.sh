#!/bin/bash

echo "🔍 查看具体的JSX结构问题..."

echo "=== BLOG PAGE 第230-245行 ==="
sed -n '230,245p' src/app/blog/page.tsx

echo -e "\n=== FAQ PAGE 第245-260行 ==="
sed -n '245,260p' src/app/faq/page.tsx

echo -e "\n=== INSTALLATION GUIDE 第390-410行 ==="
sed -n '390,410p' src/app/installation-guide/page.tsx

echo -e "\n🔧 开始精确修复..."

# 创建备份
cp src/app/blog/page.tsx src/app/blog/page.tsx.backup
cp src/app/faq/page.tsx src/app/faq/page.tsx.backup
cp src/app/installation-guide/page.tsx src/app/installation-guide/page.tsx.backup

# 修复 blog/page.tsx - 确保 </Link> 和 <span> 在同一级别
echo "🔧 修复 blog/page.tsx..."
# 查找 </Link> 所在行，确保下一行的 <span> 缩进正确
awk '
/^[[:space:]]*<\/Link>/ {
    print $0
    getline
    if ($0 ~ /<span/) {
        gsub(/^[[:space:]]*/, "                        ")
        print $0
    } else {
        print $0
    }
    next
}
{print}
' src/app/blog/page.tsx > src/app/blog/page.tsx.tmp && mv src/app/blog/page.tsx.tmp src/app/blog/page.tsx

# 修复 faq/page.tsx - 确保 </Link> 和 </div> 在正确级别
echo "🔧 修复 faq/page.tsx..."
awk '
/^[[:space:]]*<\/Link>/ {
    print $0
    getline
    if ($0 ~ /<\/div>/) {
        gsub(/^[[:space:]]*/, "            ")
        print $0
    } else {
        print $0
    }
    next
}
{print}
' src/app/faq/page.tsx > src/app/faq/page.tsx.tmp && mv src/app/faq/page.tsx.tmp src/app/faq/page.tsx

# 修复 installation-guide/page.tsx - 这个看起来 <a> 标签缺失了
echo "🔧 修复 installation-guide/page.tsx..."
# 在 </Link> 后面应该有完整的 <a> 标签
sed -i '' '/                <\/Link>/{
N
N
N
N
s/                <\/Link>\n                \n                href="mailto:support@rodentlab\.com" \n                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"\n              >/                <\/Link>\n                <a \n                  href="mailto:support@rodentlab.com" \n                  className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"\n                >/
}' src/app/installation-guide/page.tsx

echo "✅ 修复完成！"

echo "📋 查看修复后的关键行:"
echo "=== BLOG PAGE 修复后 ==="
sed -n '235,245p' src/app/blog/page.tsx

echo -e "\n=== FAQ PAGE 修复后 ==="
sed -n '250,258p' src/app/faq/page.tsx

echo -e "\n=== INSTALLATION GUIDE 修复后 ==="
sed -n '395,405p' src/app/installation-guide/page.tsx

echo -e "\n🧪 测试编译..."
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
    
    echo -e "\n📋 让我们手动检查问题..."
    echo "BLOG问题行:"
    sed -n '235,242p' src/app/blog/page.tsx
    echo -e "\nFAQ问题行:"
    sed -n '249,256p' src/app/faq/page.tsx
    echo -e "\nINSTALLATION问题行:"
    sed -n '395,405p' src/app/installation-guide/page.tsx
fi
