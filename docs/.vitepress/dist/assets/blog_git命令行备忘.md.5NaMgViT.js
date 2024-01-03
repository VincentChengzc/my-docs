import{_ as t,c as e,o as a,U as i}from"./chunks/framework.8UM1mgsF.js";const m=JSON.parse('{"title":"git命令行备忘","description":"","frontmatter":{},"headers":[],"relativePath":"blog/git命令行备忘.md","filePath":"blog/git命令行备忘.md","lastUpdated":null}'),o={name:"blog/git命令行备忘.md"},r=i(`<h1 id="git命令行备忘" tabindex="-1">git命令行备忘 <a class="header-anchor" href="#git命令行备忘" aria-label="Permalink to &quot;git命令行备忘&quot;">​</a></h1><h3 id="查询命令" tabindex="-1">查询命令 <a class="header-anchor" href="#查询命令" aria-label="Permalink to &quot;查询命令&quot;">​</a></h3><pre><code>  1 git status           //查看修改过的文件命令
  2 git help             //帮助命令，查询git命令的用法
  3 git --version       //查询git的版本信息，一般在安装的时候用于证实安装是否成功  
</code></pre><h3 id="添加之后提交代码到本地库" tabindex="-1">添加之后提交代码到本地库 <a class="header-anchor" href="#添加之后提交代码到本地库" aria-label="Permalink to &quot;添加之后提交代码到本地库&quot;">​</a></h3><pre><code>  1 git init            //初始化仓库
  2 git add a.txt   //添加某个文件到本地暂存区
  3 git add .       //添加所有目录下修改过的文件
  4 git rm a.txt    //移除某个文件，和git add 相反
  5 git commit -m &quot;注释&quot; //提交并增加提交注释，非常重要且常用的命令。用于将所有通过 git add 暂存的文件，提交到本地库。
  6 
  7 
  8 git diff      //比较文件的不同，即暂存区和工作区的差异。
  9 git mv      //移动或重命名工作区文件。
  10 git reset    //回退版本
</code></pre><h3 id="本地和服务仓库之间的交互" tabindex="-1">本地和服务仓库之间的交互 <a class="header-anchor" href="#本地和服务仓库之间的交互" aria-label="Permalink to &quot;本地和服务仓库之间的交互&quot;">​</a></h3><pre><code>  1 git branch             //查看分支状况
  2 git branch -h         //查看其他的命令
  3 git checkout XXX      //用来切换分支
  4 git stash             //用来临时存放暂不打算提交的文件
  5 git tag               //为代码的历史记录某个点打个标签，一般用来标记发布的版本。
  6 git cherry-pick      //用于将另一个分支的某次提交代码，合并到当前分支。
  7 git rebase           //用于将另一个分支的最新代码，全量合并到当前分支。
  8 git branch (branchname)     //创建一个分支
</code></pre><h3 id="查看日志记录" tabindex="-1">查看日志记录 <a class="header-anchor" href="#查看日志记录" aria-label="Permalink to &quot;查看日志记录&quot;">​</a></h3><pre><code>  1 git log                 //查看历史记录
  2 git reflog             //可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
</code></pre><h3 id="git-删除" tabindex="-1">git 删除 <a class="header-anchor" href="#git-删除" aria-label="Permalink to &quot;git 删除&quot;">​</a></h3><pre><code>  1 git rm         //会删掉index和workspace的文件
  2 git cached    //只会删除index，workspace会保留。
</code></pre><h3 id="设置配置信息" tabindex="-1">设置配置信息 <a class="header-anchor" href="#设置配置信息" aria-label="Permalink to &quot;设置配置信息&quot;">​</a></h3><pre><code>  1 git config --global user.name &quot;echo.cheng&quot; git用户名
  2.git config --global user.email &quot;&lt;250409437@qq.com&gt;&quot; git邮箱
</code></pre>`,13),n=[r];function c(d,g,h,l,s,_){return a(),e("div",null,n)}const p=t(o,[["render",c]]);export{m as __pageData,p as default};
