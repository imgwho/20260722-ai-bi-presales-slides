# AI + BI 幻灯片四方案

主题：**资深 BI 工程师：AI+BI 的最佳实践**

这是一套关于 AI + BI 的演讲稿与网页幻灯片项目，用同一套内容分别实现四种演示方案：

- `slidev/`：Slidev 方案，保留 `slides.md` 源稿，并提供可直接访问的 `index.html`。
- `marp/`：Marp 方案，保留 `ai-bi.md` 源稿，并提供可直接访问的 `index.html`。
- `remarkjs/`：remark.js 方案，提供可直接访问的 `index.html`。
- `revealjs/`：reveal.js 方案，提供可直接访问的 `index.html`。

## 内容结构

1. 为什么很多 BI 最终变成“一堆图”
2. BI 开发：如何从图表走向产品
3. Html、多维表、传统 BI 对比
4. 重构 BI：AI+BI 的思路
5. 案例：Codex 一键打通 BI，包括 Tableau 与 Power BI 实操视频演示
6. BI 扩展：副业与接单

## 视频演示

`Videos/` 目录中的 mp4 会被网页幻灯片直接引用：

- Tableau：配置 MCP、询问 MCP 能力、生成成功
- Power BI：配置 MCP / Skills / npm、生成成功

视频页支持浏览器原生播放控制，并提供 `0.75x`、`1x`、`1.25x`、`1.5x`、`2x` 倍速切换。

`Videos.7z` 是本地压缩包，已通过 `.gitignore` 排除，不会提交到仓库。

## 本地预览

直接打开根目录的 `index.html`，或分别打开：

- `slidev/index.html`
- `marp/index.html`
- `remarkjs/index.html`
- `revealjs/index.html`

也可以使用 npm 脚本预览源稿：

```powershell
npm install
npm run slidev
npm run marp
npm run remark
npm run reveal
```

## GitHub Pages

仓库开启 GitHub Pages 后，四个版本的访问地址为：

- Slidev：`https://<username>.github.io/20260710-ai-bi-slides/slidev/`
- Marp：`https://<username>.github.io/20260710-ai-bi-slides/marp/`
- remark.js：`https://<username>.github.io/20260710-ai-bi-slides/remarkjs/`
- reveal.js：`https://<username>.github.io/20260710-ai-bi-slides/revealjs/`
