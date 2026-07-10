window.AIBISlides = [
  {
    center: true,
    html: `<p class="kicker">AI + BI Best Practices</p><h1>资深BI工程师：AI+BI的最佳实践</h1><p>从“一堆图”到可行动的数据产品</p>`
  },
  {
    html: `<h1>目录</h1><ol><li>为什么很多 BI 最终变成“一堆图”</li><li>BI 开发：如何从图表走向产品</li><li>Html、多维表、传统 BI 对比</li><li>重构 BI：AI+BI 的思路</li><li>案例：Codex 一键打通 BI</li><li>BI 扩展：副业与接单</li></ol>`
  },
  {
    html: `<p class="kicker">第一部分</p><h1>需求从一开始就停在“展示层”</h1><ul><li>典型需求：做个看板、做个大屏、做个仪表盘</li><li>这些词都指向“展示”，而不是“业务目标”</li><li>BI 项目从立项那一刻起就被框死在“可视化”层</li></ul><p class="quote">结果：图很漂亮，但业务不知道该怎么用。</p>`
  },
  {
    html: `<p class="kicker">第一部分</p><h1>指标是堆出来的，不是设计出来的</h1><ul><li>数据库里有什么字段就展示什么</li><li>趋势图、饼图、柱状图堆满一屏</li><li>缺少指标体系：核心指标、解释指标、行动指标</li></ul><p class="quote">没有指标体系，图表只能是数据截图的高级版。</p>`
  },
  {
    html: `<p class="kicker">第一部分</p><h1>没有“决策场景”，只有“浏览场景”</h1><div class="cols"><div><h2>浏览场景</h2><p>看看数据怎么样。</p></div><div><h2>决策场景</h2><p>今天要做什么动作？预算调哪里？哪个产品要下架？</p></div></div><p class="quote">没有决策场景，BI 就无法驱动行动，只能成为数据橱窗。</p>`
  },
  {
    html: `<p class="kicker">第一部分</p><h1>BI 被当成“汇报工具”</h1><div class="cols"><div><h2>汇报</h2><ul><li>要好看</li><li>要炫</li><li>要动效</li></ul></div><div><h2>运营</h2><ul><li>要定位问题</li><li>要指导动作</li><li>要融入流程</li></ul></div></div><p class="quote">汇报型 BI = 好看但不长久<br>运营型 BI = 好用才会被持续使用</p>`
  },
  {
    html: `<p class="kicker">第一部分</p><h1>缺少闭环：看完之后什么都不会发生</h1><ul><li>看完数据没有下一步动作</li><li>没有责任人</li><li>没有阈值</li><li>没有预警</li><li>没有行动建议</li></ul><p class="quote">没有闭环的 BI，本质上就是“一堆图”。</p>`
  },
  {
    html: `<p class="kicker">第二部分</p><h1>从“图表”到“场景化看板”</h1><p><strong>核心：图表不再是数据的形状，而是问题的答案。</strong></p><ul><li>先写业务问题，再画图</li><li>每张图都对应一个明确的问题</li><li>看板结构围绕“场景”而不是“图表类型”</li></ul><p class="quote">场景化让 BI 从展示走向理解。</p>`
  },
  {
    html: `<p class="kicker">第二部分</p><h1>从“看板”到“决策工具”</h1><p><strong>核心：BI 不只是告诉你发生了什么，还要推动你做什么。</strong></p><ul><li><strong>阈值</strong>：好/坏的分界线</li><li><strong>预警</strong>：自动发现异常</li><li><strong>动作入口</strong>：预算调整、配置修改、任务派发</li></ul><p class="quote">决策工具让 BI 从理解走向行动。</p>`
  },
  {
    html: `<p class="kicker">第二部分</p><h1>从“决策工具”到“数据产品”</h1><p><strong>核心：让 BI 能被复用、被售卖、被迭代。</strong></p><ul><li>明确的用户角色</li><li>清晰的价值主张</li><li>完整的功能结构</li><li>权限体系、配置体系、数据源管理</li></ul><p class="quote">数据产品让 BI 从行动走向规模化价值。</p>`
  },
  {
    html: `<h1>Html、多维表、传统 BI 对比</h1><table><thead><tr><th>评估维度</th><th>HTML 自研方案</th><th>多维表</th><th>传统 BI</th></tr></thead><tbody><tr><td>定制化能力</td><td>极高，可自由编写 UI 与交互</td><td>较低，受限平台组件</td><td>较高，受限内置图表</td></tr><tr><td>AI 生成友好度</td><td>极高，代码结构标准</td><td>一般，依赖 API</td><td>较低，专有格式复杂</td></tr><tr><td>数据量支持</td><td>取决于后端与前端调优</td><td>较小，通常有行数上限</td><td>极高，支持亿级聚合</td></tr><tr><td>维护成本</td><td>高，需前端能力</td><td>极低，开箱即用</td><td>中等，需要 BI 人员</td></tr><tr><td>适用场景</td><td>移动卡片、高管看板</td><td>轻量协作、进销存</td><td>企业数仓、复杂指标</td></tr></tbody></table>`
  },
  {
    html: `<h1>重构 BI：从 GUI 走向声明式代码</h1><ul><li>废弃手动拖拽：AI 将业务需求转化为配置文件或代码脚本</li><li>数据准备自动化：代码定义清洗流，AI 映射字段、处理缺失值</li><li>报表组装工程化：解析 BI 工具 XML / JSON，用 Python 批量组装布局</li></ul>`
  },
  {
    html: `<h1>AI Agent 在 BI 中的应用闭环</h1><ol><li><strong>需求理解与规划</strong>：解析指标、维度与图表类型</li><li><strong>自动化加工与生成</strong>：生成清洗流文件与报表模板</li><li><strong>部署与校验</strong>：上传报表并进行数据准确性校验</li></ol>`
  },
  {
    html: `<h1>Tableau 自动化路线</h1><h2>cwprep + cwtwb</h2><ul><li><strong>cwprep</strong>：逆向解析 Tableau Prep <code>.tfl</code>，将 GUI 清洗步骤转换为结构化 Python 脚本</li><li><strong>cwtwb</strong>：解析 <code>.twb</code> XML，AI 根据业务指标需求直接组装图表、维度、度量值与布局</li></ul>`
  },
  {
    html: `<h1>Tableau 落地步骤</h1><ol><li>提取模板：准备企业标准色彩、字体和基础布局的 <code>.twb</code></li><li>AI 生成配置：输出字段映射、图表类型、计算字段公式 JSON</li><li>脚本动态拼装：用 <code>cwtwb</code> 修改模板 XML</li><li>上线分发：结合 <code>tableauPushDing</code> 无头截图并推送到钉钉、企业微信</li></ol>`
  },
  {
    html: `<h1>Power BI 智能体路线</h1><h2>PBIP + TMDL + PBIR + MCP</h2><ul><li><strong>PBIP</strong>：将 <code>.pbix</code> 拆成纯文本项目目录</li><li><strong>TMDL</strong>：语义模型的纯文本表示，DAX 公式可直接读写</li><li><strong>PBIR</strong>：视图层标准 JSON，便于 AI 修改布局</li><li><strong>MCP</strong>：AI 编码智能体读写本地 Power BI 或 PBIP 项目</li></ul>`
  },
  {
    html: `<h1>Power BI 落地步骤</h1><ol><li>将 <code>.pbix</code> 另存为 <code>.pbip</code> 并纳入 Git</li><li>注册 Power BI Modeling MCP Server 或导入 Skills for Fabric</li><li>用 Prompt 生成度量值、同比、环比和命名规范</li><li>AI 扫描 <code>.tmdl</code>，修改 DAX 与元数据并热重载</li><li>用 <code>pbip-validator</code> 校验，再通过 <code>fabric-cicd</code> 部署到 Fabric</li></ol>`
  },
  {
    html: `<h1>BI 扩展：小红书</h1><ul><li><strong>个人定位</strong>：数据分析专家、BI 自动化效率专家</li><li><strong>视觉展示</strong>：HTML 仪表盘截图、Tableau / Power BI 经典业务模板</li><li><strong>实操分享</strong>：AI+BI 自动化提效案例</li><li><strong>转化路径</strong>：引流至微信私域，承接报表定制、技术咨询、简历指导</li></ul>`
  },
  {
    html: `<h1>BI 扩展：闲鱼</h1><ul><li><strong>成品模板</strong>：企业通用销售 / 财务数据仪表盘模板</li><li><strong>定制服务</strong>：Tableau / Power BI 看板、Python 清洗脚本、Excel 自动报表</li><li><strong>关键词优化</strong>：数据分析、BI代做、报表定制、大屏设计、DAX编写</li><li><strong>高效交付</strong>：复用 <code>cwprep</code> 和 <code>cwtwb</code> 模板库，提高单小时利润率</li></ul>`
  },
  {
    center: true,
    html: `<h1>结论</h1><p>AI+BI 的关键不是让 AI 帮你拖图表。</p><p>真正的变化是：把 BI 改造成可规划、可生成、可校验、可部署的数据产品工程。</p>`
  }
];
