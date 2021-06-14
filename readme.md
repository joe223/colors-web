## colors-web

一个自由度非常高的，在浏览器的控制台（Console）显示彩色文本的库，您可用以下方式显示。
目前还在开发更多功能中，有意见和想法请提 issues（格式无要求）

### 安装

```
npm install colors-web --save
```

### 使用

colors-web 支持以下特性：

- 文字颜色和背景色
  - 支持 140 种 web 标准色值，见此文最后
  - 直接用列表中的颜色做方法调用
    - `colors().red().greenBg();`
  - 使用属性的方式链式调用
    - `colors().red.greenBg.log('这是效果');`
  - 自定义颜色
    - `colors('#aaa');`
    - `colors('rgba(1,1,1,1)');`
    - `colors('red');`
    - `bg('#aaa');`
    - `bg('rgba(1,1,1,1)');`
    - `bg('red');`
- 其他文字样式，直接以方法调用
  - `colors().bold();`
  - `colors().italic();`
  - `colors().padding(topbottom,rightleft);`
  - `colors().underline();`
  - `colors().linethrough();`
  - `colors().fontsize(size);`
  - `colors().fontfamily(familyName);`
- 其他特性
  - 何时传入需要显示的字符串？
    - 在任何一个链式调用的方法中传入都可以（以最后一个生效）
      - `colors('字符串');`
      - `colors().red('字符串');`
      - `colors().red.greenBg('字符串');`
    - 设置样式后，手动调用 log 方法设置字符串
      - `colors().red.greenBg.log('字符串');`
  - 所有 colors 的调用都会返回一个 colors 实例，所以可以放心一直串下去
- 最后一步：调用 logger() 显示到 console 中
  - logger 可以传入两种对象：colors() 返回的实例，或 字符串，当传入字符串的时候，默认用灰色无背景的方式显示。

部分示例：

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

### 开发

```
npm run start
```

### todo

- 补充 d.ts
- 用原生 TypeScript 实现
- 兼容 error ，warn 等 level，支持打印复杂对象
- 单元测试
- 兼容终端（Nodejs）

### 支持的颜色

<table id="colors_table">
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">颜色</th>
   <th scope="col">RGB 十六进制数</th>
  </tr>
 </thead>
 <tbody>
  <tr style="position: relative;">
   <td rowspan="16">CSS Color Module Level&nbsp; </td>
  
   <td style="text-align: center;">black（黑）</td>
   <td>#000000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">silver（银）</td>
   <td>#c0c0c0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">gray（灰）</td>
   <td>#808080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">white（白）</td>
   <td>#ffffff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">maroon（褐）</td>
   <td>#800000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">red（红）</td>
   <td>#ff0000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">purple（紫）</td>
   <td>#800080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">fuchsia（紫红）</td>
   <td>#ff00ff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">green（绿）</td>
   <td>#008000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lime（绿黄）</td>
   <td>#00ff00</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">olive（橄榄绿）</td>
   <td>#808000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">yellow（黄）</td>
   <td>#ffff00</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">navy（藏青）</td>
   <td>#000080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">blue（蓝）</td>
   <td>#0000ff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">teal（青）</td>
   <td>#008080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">aqua（水绿）</td>
   <td>#00ffff</td>
  
  </tr>
  <tr>
   <td>CSS Color Module Level&nbsp;2 </td>
  
   <td style="text-align: center;">orange（橙）</td>
   <td>#ffa500</td>
  
  </tr>
  <tr>
   <td rowspan="128">CSS Color Module Level&nbsp;3 </td>
  
   <td style="text-align: center;">aliceblue（浅灰蓝）</td>
   <td>#f0f8ff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">antiquewhite（古董白）</td>
   <td>#faebd7</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">aquamarine（海蓝）</td>
   <td>#7fffd4</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">azure（蔚蓝）</td>
   <td>#f0ffff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">beige（浅褐）</td>
   <td>#f5f5dc</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">bisque（橘黄）</td>
   <td>#ffe4c4</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">blanchedalmond（杏仁白）</td>
   <td>#ffebcd</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">blueviolet（蓝紫）</td>
   <td>#8a2be2</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">brown（褐）</td>
   <td>#a52a2a</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">burlywood（原木色）</td>
   <td>#deb887</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">cadetblue（灰蓝）</td>
   <td>#5f9ea0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">chartreuse（黄绿）</td>
   <td>#7fff00</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">chocolate（巧克力色）</td>
   <td>#d2691e</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">coral（珊瑚红）</td>
   <td>#ff7f50</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">cornflowerblue（矢车菊蓝）</td>
   <td>#6495ed</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">cornsilk（玉米穗黄）</td>
   <td>#fff8dc</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">crimson（深红）</td>
   <td>#dc143c</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkblue（深蓝）</td>
   <td>#00008b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkcyan（深青）</td>
   <td>#008b8b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkgoldenrod（暗金）</td>
   <td>#b8860b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkgray<sup> </sup>（深灰）</td>
   <td>#a9a9a9</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkgreen（深绿）</td>
   <td>#006400</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkgrey<sup></sup>（深灰）</td>
   <td>#a9a9a9</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkkhaki（暗黄褐）</td>
   <td>#bdb76b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkmagenta（深紫）</td>
   <td>#8b008b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkolivegreen（深橄榄绿）</td>
   <td>#556b2f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkorange（深橙）</td>
   <td>#ff8c00</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkorchid（深兰花紫）</td>
   <td>#9932cc</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkred（深红）</td>
   <td>#8b0000</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darksalmon（深橙红）</td>
   <td>#e9967a</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkseagreen（深海绿）</td>
   <td>#8fbc8f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkslateblue（暗灰蓝）</td>
   <td>#483d8b</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkslategray<sup> </sup>（墨绿）</td>
   <td>#2f4f4f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkslategrey<sup> </sup>（墨绿）</td>
   <td>#2f4f4f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkturquoise（暗宝石绿）</td>
   <td>#00ced1</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">darkviolet（深紫罗兰）</td>
   <td>#9400d3</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">deeppink（深粉红）</td>
   <td>#ff1493</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">deepskyblue（深天蓝）</td>
   <td>#00bfff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">dimgray<sup>（暗灰）</sup></td>
   <td>#696969</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">dimgrey<sup>（暗灰）</sup></td>
   <td>#696969</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">dodgerblue（遮板蓝）</td>
   <td>#1e90ff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">firebrick（砖红）</td>
   <td>#b22222</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">floralwhite（花白）</td>
   <td>#fffaf0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">forestgreen（丛林绿）</td>
   <td>#228b22</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">gainsboro（浅灰）</td>
   <td>#dcdcdc</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">ghostwhite（幽灵白）</td>
   <td>#f8f8ff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">gold（金）</td>
   <td>#ffd700</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">goldenrod（橘黄）</td>
   <td>#daa520</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">greenyellow（黄绿）</td>
   <td>#adff2f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">grey（灰）</td>
   <td>#808080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">honeydew（蜜瓜色）</td>
   <td>#f0fff0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">hotpink（亮粉）</td>
   <td>#ff69b4</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">indianred（印第安红）</td>
   <td>#cd5c5c</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">indigo（靛蓝）</td>
   <td>#4b0082</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">ivory（象牙白）</td>
   <td>#fffff0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">khaki（卡其色）</td>
   <td>#f0e68c</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lavender（淡紫）</td>
   <td>#e6e6fa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lavenderblush（淡紫红）</td>
   <td>#fff0f5</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lawngreen（草绿）</td>
   <td>#7cfc00</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lemonchiffon（粉黄）</td>
   <td>#fffacd</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightblue（淡蓝）</td>
   <td>#add8e6</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightcoral（浅珊瑚色）</td>
   <td>#f08080</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightcyan（淡青）</td>
   <td>#e0ffff</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightgoldenrodyellow（浅金黄）</td>
   <td>#fafad2</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightgray<sup></sup>（浅灰）</td>
   <td>#d3d3d3</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightgreen（浅绿）</td>
   <td>#90ee90</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightgrey<sup></sup>（浅灰）</td>
   <td>#d3d3d3</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightpink（淡粉）</td>
   <td>#ffb6c1</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightsalmon（浅肉色）</td>
   <td>#ffa07a</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightseagreen（浅海绿）</td>
   <td>#20b2aa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightskyblue（浅天蓝）</td>
   <td>#87cefa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightslategray<sup> </sup>（浅青灰）</td>
   <td>#778899</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightslategrey<sup> </sup>（浅青灰）</td>
   <td>#778899</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightsteelblue（浅钢蓝）</td>
   <td>#b0c4de</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">lightyellow（浅黄）</td>
   <td>#ffffe0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">limegreen（酸橙绿）</td>
   <td>#32cd32</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">linen（亚麻色）</td>
   <td>#faf0e6</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumaquamarine（中绿）</td>
   <td>#66cdaa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumblue（中蓝）</td>
   <td>#0000cd</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumorchid（间兰花紫）</td>
   <td>#ba55d3</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumpurple（中紫）</td>
   <td>#9370db</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumseagreen（间海绿）</td>
   <td>#3cb371</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumslateblue（中暗蓝）</td>
   <td>#7b68ee</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumspringgreen（中春绿）</td>
   <td>#00fa9a</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumturquoise（中海湖蓝）</td>
   <td>#48d1cc</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mediumvioletred（中紫罗兰）</td>
   <td>#c71585</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">midnightblue（午夜蓝）</td>
   <td>#191970</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mintcream（薄荷乳白）</td>
   <td>#f5fffa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">mistyrose（粉玫瑰红）</td>
   <td>#ffe4e1</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">moccasin（鹿皮色）</td>
   <td>#ffe4b5</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">navajowhite（纳瓦白）</td>
   <td>#ffdead</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">oldlace（浅米色）</td>
   <td>#fdf5e6</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">olivedrab（橄榄褐）</td>
   <td>#6b8e23</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">orangered（橙红）</td>
   <td>#ff4500</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">orchid（兰花紫）</td>
   <td>#da70d6</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">palegoldenrod（灰菊黄）</td>
   <td>#eee8aa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">palegreen（苍绿）</td>
   <td>#98fb98</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">paleturquoise（苍宝石绿）</td>
   <td>#afeeee</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">palevioletred（苍紫罗兰）</td>
   <td>#db7093</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">papayawhip（木瓜色）</td>
   <td>#ffefd5</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">peachpuff（桃色）</td>
   <td>#ffdab9</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">peru（秘鲁色）</td>
   <td>#cd853f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">pink（粉）</td>
   <td>#ffc0cb</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">plum（李子色）</td>
   <td>#dda0dd</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">powderblue（粉蓝）</td>
   <td>#b0e0e6</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">rosybrown（玫瑰粽）</td>
   <td>#bc8f8f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">royalblue（宝蓝）</td>
   <td>#4169e1</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">saddlebrown（马鞍棕）</td>
   <td>#8b4513</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">salmon（鲑肉色）</td>
   <td>#fa8072</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">sandybrown（沙褐色）</td>
   <td>#f4a460</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">seagreen（海绿）</td>
   <td>#2e8b57</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">seashell（贝壳白）</td>
   <td>#fff5ee</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">sienna（赭）</td>
   <td>#a0522d</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">skyblue（天蓝）</td>
   <td>#87ceeb</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">slateblue（青蓝）</td>
   <td>#6a5acd</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">slategray<sup> </sup>（青灰）</td>
   <td>#708090</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">slategrey<sup> </sup>（青灰）</td>
   <td>#708090</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">snow（雪白）</td>
   <td>#fffafa</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">springgreen（春绿）</td>
   <td>#00ff7f</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">steelblue（铁青）</td>
   <td>#4682b4</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">tan（棕褐）</td>
   <td>#d2b48c</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">thistle（苍紫）</td>
   <td>#d8bfd8</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">tomato（番茄红）</td>
   <td>#ff6347</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">turquoise（蓝绿）</td>
   <td>#40e0d0</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">violet（紫罗兰色）</td>
   <td>#ee82ee</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">wheat（麦色）</td>
   <td>#f5deb3</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">whitesmoke（烟白）</td>
   <td>#f5f5f5</td>
  
  </tr>
  <tr>
  
   <td style="text-align: center;">yellowgreen（黄绿）</td>
   <td>#9acd32</td>
  
  </tr>
  <tr>
   <td>CSS Color Module Level&nbsp;4 </td>
  
   <td style="text-align: center;">rebeccapurple（利百加紫）</td>
   <td>#663399</td>
  
  </tr>
 </tbody>
</table>
