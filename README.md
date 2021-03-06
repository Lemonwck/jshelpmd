# JavaScript 帮助命令

> _找到你需要的方法，而不必翻阅文档！✨_

当我第一次学习数组和对象方法时，我花了很多时间在文档中寻找合适的方法，我不得不一个接一个地搜索。我制作这个资源是为了帮助人们更自然地找到正确的对象方法。你可以缩小你想做的事情并进行探索，直到找到对你最有用的东西。

![js-explorer-demo](https://user-images.githubusercontent.com/2281088/124371705-9e321780-dc41-11eb-9624-d6e33f00334d.gif)

## 用法

我建议在全球范围内安装这个工具，这样无论你在做什么项目，你都可以使用它，但你可以把它去掉 `-g` 如果要在特定项目中使用，请标记：

```
npm i -g jshelpmd
```

> 在执行此命令之前，您可能需要运行  `sudo npm i -g js-explorer`

然后，要启动资源管理器，请键入：

```
jshelpmd
```
您将通过提示找到您的方法！
它还允许您在末尾保存条目（可选）

### 其他命令

```
jshelpmd plain
```

运行该工具而不要求在最后保存。

```
jshelpmd -p
```

同上，别名p表示普通。

```
lookup [string to look up]
```

如果保存条目，可以运行查找和字符串来查找该条目并打印它。

例如，假设您运行了资源管理器，最后当它提示您保存时，您保存了 `Array.slice()` 就像我总是把另一个弄混！”
你会键入“查找我总是混淆的那一个！”`


```
clearlookup
```

清除所有保存的jexplorer条目。

## 关于该项目的更多信息

我意识到有大约一百万种方法可以建立这个资源，有些分类法必然是自以为是的。我试图专注于我认为可以帮助我学到最好的东西，而不是行业标准的描述。如果这种学习方式更适合你，那就太好了！此资源不是这样设置的。请记住，这并不是为了全面或取代完整的文档，这就是为什么MDN文档在每种方法中都链接到。

我基于MDN文档中大部分较长的描述，对其进行了轻微的修改，因为我觉得该描述对初学者不够友好。为了以最少的认知负荷进行扫描，这些示例尽可能地简单，您可能需要MDN文档中为每种可能的使用提供额外的细节。

注意⚠️本代码是汉化 Sarah Drasner 大神的，如有任何侵权行为请联系我立即删除 https://github.com/sdras/js-explorer 