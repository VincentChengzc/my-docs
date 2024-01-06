import{_ as a,c as e,a as r,U as l,k as t,o as i}from"./chunks/framework.8UM1mgsF.js";const w=JSON.parse('{"title":"markdown 语法基础","description":"","frontmatter":{},"headers":[],"relativePath":"博客/markdown 语法基础.md","filePath":"博客/markdown 语法基础.md","lastUpdated":1704347211000}'),s={name:"博客/markdown 语法基础.md"},n=l(`<h1 id="markdown-语法基础" tabindex="-1">markdown 语法基础 <a class="header-anchor" href="#markdown-语法基础" aria-label="Permalink to &quot;markdown 语法基础&quot;">​</a></h1><p>1.标题 常用写法（注意空格）</p><h1 id="一级标题" tabindex="-1">一级标题 <a class="header-anchor" href="#一级标题" aria-label="Permalink to &quot;一级标题&quot;">​</a></h1><h1 id="二级标题" tabindex="-1">二级标题 <a class="header-anchor" href="#二级标题" aria-label="Permalink to &quot;二级标题&quot;">​</a></h1><h1 id="三级标题" tabindex="-1">三级标题 <a class="header-anchor" href="#三级标题" aria-label="Permalink to &quot;三级标题&quot;">​</a></h1><h1 id="四级标题" tabindex="-1">四级标题 <a class="header-anchor" href="#四级标题" aria-label="Permalink to &quot;四级标题&quot;">​</a></h1><h1 id="五级标题" tabindex="-1">五级标题 <a class="header-anchor" href="#五级标题" aria-label="Permalink to &quot;五级标题&quot;">​</a></h1><h1 id="六级标题" tabindex="-1">六级标题 <a class="header-anchor" href="#六级标题" aria-label="Permalink to &quot;六级标题&quot;">​</a></h1><p>不常用写法</p><h1 id="一级标题-1" tabindex="-1">一级标题 <a class="header-anchor" href="#一级标题-1" aria-label="Permalink to &quot;一级标题&quot;">​</a></h1><h2 id="二级标题-1" tabindex="-1">二级标题 <a class="header-anchor" href="#二级标题-1" aria-label="Permalink to &quot;二级标题&quot;">​</a></h2><p>1 2 3 4 建议标题前后留空行，以增加可读性</p><p>2.字体样式 粗体<br><strong>粗体</strong>：粗体<br><strong>粗体</strong>：粗体</p><p>斜体<br><em>斜体</em>：斜体<br><em>斜体</em>：斜体<br> 推荐使用*而非_</p><p>删除线<br><s>删除线</s> ：删除线</p><p>3.段落<br> 一般以空行分段，无空行默认表示同一段落，段内换行需要在行末添加两个或以上空格</p><p>4.列表<br> 有序列表<br> 有序列表1<br> 2. 有序列表2<br> 3. 有序列表3<br> 无序列表 *±和列表内容搭配（中间空格隔开），层次使用tab表示，推荐使用-</p><ul><li><p>无序列表1</p></li><li><p>无序列表2</p></li><li><p>无序列表3</p></li><li><p>无序列表1</p></li><li><p>无序列表2</p></li><li><p>无序列表3</p></li><li><p>无序列表1</p></li><li><p>无序列表2</p></li><li><p>无序列表3<br> 分割线 —/___/***，三种方法，至少三个符号</p></li></ul><p>5.图片</p><p><img src="https://img.csdn.cn/.../img.png" alt="图片描述文字"> 1 6.链接<br> 直接链接<br> 必须以协议开头，比如http、https、ftp<br><a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a>:<a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a></p><p>文本链接<br> 英文状态下的中括号包含描述文本，紧接着小括号包含超链接地址：<br> 百度：<a href="https://www.baidu.com" target="_blank" rel="noreferrer">百度</a></p><p>引用链接<br> 百度<br> 。。。其他内容</p><p>[百度][baidu]<br> 。。。其他内容<br> [baidu]: <a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a></p><p>锚点<br> 高级部分</p><p><a href="#高级部分">高级部分</a><br> ...</p><h1 id="高级部分">二、高级部分</h1><p>7.代码</p><p>let function = num =&gt; num + 1 1.行内代码 <code>let function = num =&gt; num + 1</code></p><p>2.代码块 代码前加tab或四个空格，且前后空行</p><pre><code>let function = num =&gt; num + 1
</code></pre><p>3.或</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><p>8.引用<br> 引用内容，依旧可以使用其他markdown语法，加粗样式，code 使用 Ctrl+Alt+Del 重启电脑</p><p>表头 表头 表头 单元格 单元格 单元格 左对齐 居中 右对齐 可以嵌套使用</p><blockquote><p>引用内容，依旧可以使用其他markdown语法，<strong>加粗样式</strong>，<code>code</code> 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑</p><table><thead><tr><th style="text-align:left;">表头</th><th style="text-align:center;">表头</th><th style="text-align:right;">表头</th></tr></thead><tbody><tr><td style="text-align:left;">单元格</td><td style="text-align:center;">单元格</td><td style="text-align:right;">单元格</td></tr><tr><td style="text-align:left;">左对齐</td><td style="text-align:center;">居中</td><td style="text-align:right;">右对齐</td></tr></tbody></table><blockquote><p>可以嵌套使用 1 2 3 4 5 6 7 9.表格 表头 表头 表头 单元格 单元格 单元格 左对齐 居中 右对齐 | 表头 | 表头 | 表头 | | :- | :-: | -: | | 单元格 | 单元格 | 单元格 | | 左对齐 | 居中 | 右对齐 | 1 2 3 4 10.支持的 HTML 元素 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑 1 使用 Ctrl+Alt+Del 重启电脑</p></blockquote></blockquote><details><summary> 点击此区域标题：查看详细内容 </summary><p> - 测试文本段落 </p><pre><code>  title，value，callBack可以缺省  </code>  </pre></details>`,36),o=t("p",null,"11.表情符号 😄、😆、😊、😃、😏、😍 ☀️、☔️、☁️、❄️、⛄️、⚡️ 🎍、💝、🎎、🎒、🎓、🎏 🏠、🏡、🏫、🏢、🏣、🏥 1️⃣、2️⃣、3️⃣、4️⃣、5️⃣、6️⃣",-1),p=t("p",null,"😄、😆、😊、😃、😏、😍 ☀️、☔、☁️、❄️、⛄、⚡ 🎍、💝、🎎、🎒、🎓、🎏 🏠、🏡、🏫、🏢、🏣、🏥 1️⃣、2️⃣、3️⃣、4️⃣、5️⃣、6️⃣ 1 2 3 4 5 🎁 Emoji cheat sheet for GitHub, Basecamp, Slack & more",-1),d=t("p",null,"12.任务列表 待完成 已完成",-1),h=t("ul",null,[t("li",null,"[ ] 待完成"),t("li",null,"[x] 已完成")],-1);function c(b,k,u,m,_,g){return i(),e("div",null,[n,r(" 1 2 3 4 5 CSDN的编辑器并不支持可折叠文本 "),o,p,d,h])}const x=a(s,[["render",c]]);export{w as __pageData,x as default};
