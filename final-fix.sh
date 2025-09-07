#!/bin/bash

echo "🚀 最终JSX修复 - 基于具体代码结构"

# 创建备份
cp src/app/blog/page.tsx src/app/blog/page.tsx.backup
cp src/app/faq/page.tsx src/app/faq/page.tsx.backup
cp src/app/installation-guide/page.tsx src/app/installation-guide/page.tsx.backup

echo "🔧 修复 blog/page.tsx..."
# blog 页面问题：</Link> 和 <span> 之间的缩进不匹配
# 需要将 <span> 移到与 </Link> 同级
sed -i '' '
/^[[:space:]]*<\/Link>$/{
n
s/^[[:space:]]*<span/                      <span/
}' src/app/blog/page.tsx

echo "🔧 修复 faq/page.tsx..."
# faq 页面问题：</Link> 和 </div> 之间的缩进不匹配
# 需要将 </div> 移到正确的缩进级别
sed -i '' '
/^[[:space:]]*<\/Link>$/{
n
s/^[[:space:]]*<\/div>/            <\/div>/
}' src/app/faq/page.tsx

echo "🔧 修复 installation-guide/page.tsx..."
# installation 页面问题：<a> 标签缺少闭合的 </a>，用了 </Link>
# 需要将 </Link> 改为 </a>
sed -i '' '
/Contact Support$/{
n
s/<\/Link>/<\/a>/
}' src/app/installation-guide/page.tsx

echo "✅ 修复完成！"

echo "📋 验证修复结果："
echo "=== BLOG PAGE 修复后的关键行 ==="
sed -n '236,242p' src/app/blog/page.tsx

echo -e "\n=== FAQ PAGE 修复后的关键行 ==="
sed -n '250,256p' src/app/faq/page.tsx

echo -e "\n=== INSTALLATION GUIDE 修复后的关键行 ==="
sed -n '395,405p' src/app/installation-guide/page.tsx

echo -e "\n🧪 测试编译..."
if npm run build; then
    echo "🎉 编译成功！"
    echo "🗑️  删除备份文件..."
    rm -f src/app/blog/page.tsx.backup
    rm -f src/app/faq/page.tsx.backup
    rm -f src/app/installation-guide/page.tsx.backup
    echo "✅ 所有问题已解决！"
else
    echo "❌ 编译仍有问题，恢复备份并显示详细错误..."
    mv src/app/blog/page.tsx.backup src/app/blog/page.tsx
    mv src/app/faq/page.tsx.backup src/app/faq/page.tsx
    mv src/app/installation-guide/page.tsx.backup src/app/installation-guide/page.tsx
    
    echo "🔄 已恢复备份文件"
    echo "📋 如需手动修复，请按以下方式："
    echo ""
    echo "1. blog/page.tsx 第239行："
    echo "   将 '                      <span' 改为 '                      <span'"
    echo ""
    echo "2. faq/page.tsx 第253行："
    echo "   将 '          </div>' 改为 '            </div>'"
    echo ""
    echo "3. installation-guide/page.tsx 第404行："
    echo "   将 '              </Link>' 改为 '              </a>'"
fi
