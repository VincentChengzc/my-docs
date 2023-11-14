# markdown 语法基础

1.标题
常用写法（注意空格）

# 一级标题

# 二级标题

# 三级标题

# 四级标题

# 五级标题

# 六级标题

不常用写法

一级标题
==

二级标题
--

1
2
3
4
建议标题前后留空行，以增加可读性

2.字体样式
粗体  
**粗体**：粗体  
**粗体**：粗体  

斜体  
*斜体*：斜体  
*斜体*：斜体  
推荐使用*而非_  

删除线  
~~删除线~~ ：删除线  

3.段落  
一般以空行分段，无空行默认表示同一段落，段内换行需要在行末添加两个或以上空格  

4.列表  
有序列表  
有序列表1  
2. 有序列表2  
3. 有序列表3  
无序列表
*±和列表内容搭配（中间空格隔开），层次使用tab表示，推荐使用-  

* 无序列表1  
* 无序列表2  
* 无序列表3

* 无序列表1  
* 无序列表2  

* 无序列表3  

* 无序列表1  

* 无序列表2  
* 无序列表3  
分割线
—/___/***，三种方法，至少三个符号

5.图片

![图片描述文字](https://img.csdn.cn/.../img.png)
1
6.链接  
直接链接  
必须以协议开头，比如http、https、ftp  
<https://www.baidu.com>:<https://www.baidu.com>  

文本链接  
英文状态下的中括号包含描述文本，紧接着小括号包含超链接地址：  
百度：[百度](https://www.baidu.com)

引用链接  
百度  
。。。其他内容  

[百度][baidu]  
。。。其他内容  
[baidu]: <https://www.baidu.com>  

锚点  
高级部分  

[高级部分](#高级部分)  
...
<h1 id="高级部分">二、高级部分</h1>

7.代码  

let function = num => num + 1
1.行内代码
`let function = num => num + 1`

2.代码块
代码前加tab或四个空格，且前后空行

    let function = num => num + 1

3.或

```javascript
let function = num => num + 1
```

8.引用  
引用内容，依旧可以使用其他markdown语法，加粗样式，code
使用 Ctrl+Alt+Del 重启电脑

表头 表头 表头
单元格 单元格 单元格
左对齐 居中 右对齐
可以嵌套使用

> 引用内容，依旧可以使用其他markdown语法，**加粗样式**，`code`
> 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
> | 表头 | 表头 | 表头 |
> | :- | :-: | -: |
> | 单元格  | 单元格 | 单元格 |
> | 左对齐  | 居中 | 右对齐 |
> > 可以嵌套使用
1
2
3
4
5
6
7
9.表格
表头 表头 表头
单元格 单元格 单元格
左对齐 居中 右对齐
| 表头 | 表头 | 表头 |
| :- | :-: | -: |
| 单元格  | 单元格 | 单元格 |
| 左对齐  | 居中 | 右对齐 |
1
2
3
4
10.支持的 HTML 元素
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
1
使用 Ctrl+Alt+Del 重启电脑

<details>
  <summary> 点击此区域标题：查看详细内容 </summary>
  <p> - 测试文本段落 </p>
  <pre><code>  title，value，callBack可以缺省  </code>  </pre>
</details>
1
2
3
4
5
CSDN的编辑器并不支持可折叠文本

11.表情符号
😄、😆、😊、😃、😏、😍
☀️、☔️、☁️、❄️、⛄️、⚡️
🎍、💝、🎎、🎒、🎓、🎏
🏠、🏡、🏫、🏢、🏣、🏥
1️⃣、2️⃣、3️⃣、4️⃣、5️⃣、6️⃣

:smile:、:laughing:、:blush:、:smiley:、:smirk:、:heart_eyes:
:sunny:、:umbrella:、:cloud:、:snowflake:、:snowman:、:zap:
:bamboo:、:gift_heart:、:dolls:、:school_satchel:、:mortar_board:、:flags:
:house:、:house_with_garden:、:school:、:office:、:post_office:、:hospital:
:one:、:two:、:three:、:four:、:five:、:six:
1
2
3
4
5
🎁 Emoji cheat sheet for GitHub, Basecamp, Slack & more

12.任务列表
 待完成
 已完成

* [ ] 待完成
* [x] 已完成
