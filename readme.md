- 页面先写结构
  类名语义化   .key.sound   一个盒子
  结构从外到内，
  良好的结构是页面的基础
- 写结构时不要考虑样式
- 样式
  - 块级元素   block
    行内元素?
  - 弹性布局------display:flex;

    所有子元素的块级能力被干掉，(使元素变横行)
    min-height:100vh;      (绝对高度)
    justify-content:center;    (水平居中)
    align-items:center;   (垂直居中)
  - html 默认的字体大小是16px
    rem (根em)  
    跟vh  一样是相对单位
    rem 是相对于html的字体大小
    0.4rem = 16px * 0.4 = 6.389px    (为什么不用px，因为在手机端px不准确，所以引入了rem)
  - 盒子模型
    margin + border + padding + content