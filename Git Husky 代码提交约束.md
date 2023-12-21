# Git Husky 代码提交约束

1、安装

pnpm/npm/yarn add husky -D

2、添加配置

2.1 添加husky
npx husky install

2.2 添加husky pre-commit 预提交校验
npx husky add .husky/pre-commit

2.3 添加 commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

3.commitlint 校验
pnpm/npm/yarn add @commitlint/cli -D
