# 20260722-ai-bi-presales-slides

郭文华 ｜ 业务型售前顾问 · BI / 数据智能方向 ｜ 个人能力与项目案例展示幻灯片

---

## 🔗 在线预览链接 (GitHub Pages)

- 🎬 **Reveal.js + Markdown 官方插件版**（基于 Reveal.js 官方引擎 + `RevealMarkdown` 插件，全量由 `slides.md` 驱动）：  
  👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/reveal-markdown/](https://imgwho.github.io/20260722-ai-bi-presales-slides/reveal-markdown/)

- 🔴 **Markdown 驱动版**（卡片海报风格 + Markdown 引擎）：  
  👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/markdown/](https://imgwho.github.io/20260722-ai-bi-presales-slides/markdown/)

- 🔴 **Bold Poster 视觉强化版**（经典红黑高对比波普海报设计）：  
  👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/bold-poster/](https://imgwho.github.io/20260722-ai-bi-presales-slides/bold-poster/)

- 🟢 **Reveal 经典演示版**（Revealjs 自定义渲染）：  
  👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/revealjs/](https://imgwho.github.io/20260722-ai-bi-presales-slides/revealjs/)

---

## 🚀 技术可行性说明：Reveal.js + Markdown 插件

Reveal.js 官方原生支持通过 `RevealMarkdown` 插件直接拉取并解析 Markdown 文件：

```html
<div class="reveal">
  <div class="slides">
    <section data-markdown="slides.md"
             data-separator="^\r?\n---\r?\n$"
             data-separator-vertical="^\r?\n--\r?\n$">
    </section>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [ RevealMarkdown ]
  });
</script>
```

这意味着：修改 `reveal-markdown/slides.md` 中的 Markdown 内容后，Reveal.js 会自动解析 `---` 分隔符，并原生呈现 Reveal.js 的全屏 3D 过渡与键盘导航交互！

---

## 💻 本地运行说明

```bash
# 启动本地开发服务
npx http-server . -p 8080
```

- 访问 Reveal.js + Markdown 官方版：`http://localhost:8080/reveal-markdown/`
- 访问 Markdown 海报版：`http://localhost:8080/markdown/`
- 访问 Bold Poster 版：`http://localhost:8080/bold-poster/`
- 访问 Reveal 经典版：`http://localhost:8080/revealjs/`
