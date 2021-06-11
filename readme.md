## colors-web

一个自由度非常高的，在浏览器的控制台（Console）显示彩色文本的库，您可用以下方式显示。
目前还在开发更多功能中，有意见和想法请提 issues（格式无要求）

### 安装

```
npm install colors-web --save
```

### 使用

```javascript
import { logger, colors } from "colors-web";
// 可使用 style name 直接串联定义样式，如：colors().red.greenBg
logger(colors().red.greenBg.log("hello"), "world", colors().green("芋头"));
// 也可以使用 style name 作为方法调用定义样式，如：colors().red().greenBg()
logger(colors().red().greenBg().log("hello"), "world", colors().green("芋头"));
// 可以在定义 style 的同时直接输出文本
logger(colors().red().greenBg("hello"), "world", colors().green("芋头"));

// 除了颜色和背景色之外，支持其他 style，如 bold，italic，underline 等
logger(
  colors().bold().italic().redBg("hello"),
  "world",
  colors().white().padding(2, 5).underline().greenBg("芋头")
);
// 支持 140 个css标准样式名，同时支持自定义颜色: colors().color("#333").bg("#aaa")
logger(
  colors().color("#333").bg("#aaa").redBg("hello"),
  "world",
  colors().white.padding(2, 5).greenBg("芋头")
);
```
