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
    html: `<p class="kicker">案例：仪表盘优化</p><h1>优化前：明细表不是数据产品</h1><div class="case-layout"><figure><img src="../Images/优化前.png" alt="优化前的订单明细仪表盘截图"><figcaption>优化前：Order Details from Superstore</figcaption></figure><div class="case-notes"><h2>讲解注释</h2><ul><li>它只是在展示订单明细，用户知道“有什么数据”，但不知道“该看什么”。</li><li>探索路径依赖导出到其他工具，BI 没有承接分析动作。</li><li>这一页适合用来回应前面的问题：为什么很多 BI 最终只是一堆图或一张大表。</li></ul></div></div>`
  },
  {
    html: `<p class="kicker">案例：仪表盘优化</p><h1>第一步：补上下文和结构</h1><div class="case-layout"><figure><img src="../Images/优化中1.png" alt="优化中第一步，增加上下文和结构"><figcaption>第一步：固定尺寸、标题说明、侧边筛选器</figcaption></figure><div class="case-notes"><h2>讲解注释</h2><ul><li>先解决“这个看板给谁用、用来干什么”的问题。</li><li>标题和副标题定义业务语境，固定尺寸保证交付体验稳定。</li><li>筛选器移到侧边栏，减少主画布干扰，为后续分析区域腾出空间。</li></ul></div></div>`
  },
  {
    html: `<p class="kicker">案例：仪表盘优化</p><h1>第二步：把筛选变成分析入口</h1><div class="case-grid"><figure><img src="../Images/优化中2.png" alt="优化中第二步，增加可视化"><figcaption>增加趋势和维度图表</figcaption></figure><figure><img src="../Images/优化中3.png" alt="优化中第三步，增加高亮和交互"><figcaption>增加高亮、散点图和交互探索</figcaption></figure></div><div class="case-notes compact"><h2>讲解注释</h2><ul><li>把原本静态筛选器改成可点击图表，让用户通过图表完成筛选和定位。</li><li>趋势图负责发现时间变化，散点图负责发现异常和关系，表格高亮负责承接明细判断。</li><li>这一步体现“场景化看板”到“决策工具”的转变。</li></ul></div>`
  },
  {
    html: `<p class="kicker">案例：仪表盘优化</p><h1>最后：补文档、入口和闭环</h1><div class="case-layout"><figure><img src="../Images/优化后.png" alt="优化后的订单明细探索仪表盘截图"><figcaption>优化后：增加说明浮层和使用引导</figcaption></figure><div class="case-notes"><h2>讲解注释</h2><ul><li>说明浮层降低新用户上手成本，让 BI 具备 onboarding 能力。</li><li>可以进一步加入问题反馈、工单链接或改进需求入口。</li><li>这不是单纯美化，而是把看板补成可持续迭代的数据产品。</li></ul></div></div><p class="quote">好的 BI 不是把数据摆出来，而是把用户带到下一步动作。</p>`
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
    html: `<h1>Tableau 自动化配置方法</h1><h2>imgwho/cwprep + imgwho/cwtwb</h2><ul><li><strong>安装工具</strong>：执行 <code>pip install cwprep cwtwb</code>，需要示例或云端校验时可安装 <code>cwtwb[examples]</code>、<code>cwtwb[validate]</code></li><li><strong>配置 MCP</strong>：在 MCP 客户端中注册 <code>cwprep</code> 与 <code>cwtwb</code>，命令分别为 <code>uvx cwprep</code>、<code>uvx cwtwb</code></li><li><strong>本地自检</strong>：运行 <code>cwprep doctor</code>、<code>cwprep status</code>、<code>cwtwb doctor</code>、<code>cwtwb status --json</code></li><li><strong>分工边界</strong>：cwprep 负责生成 <code>.tfl/.tflx</code> 清洗流；cwtwb 负责生成、编辑、校验 <code>.twb/.twbx</code> 工作簿</li></ul>`
  },
  {
    html: `<h1>Tableau 落地步骤</h1><ol><li><strong>准备数据清洗流</strong>：用 cwprep 先读 <code>cwprep://docs/api-reference</code>、计算语法和最佳实践，设计 flow definition</li><li><strong>生成 Prep 文件</strong>：先 <code>validate_flow_definition</code> 校验，再用 <code>generate_tfl</code> 输出 <code>.tfl/.tflx</code>；需要审阅时可用 <code>translate_to_sql</code></li><li><strong>准备工作簿模板</strong>：用 cwtwb <code>create_workbook</code> 或 <code>open_workbook</code>，设置 CSV / Excel / Hyper / Server 数据源</li><li><strong>组装报表</strong>：调用 <code>list_fields</code>、<code>add_worksheet</code>、<code>configure_chart</code>、<code>add_dashboard</code>，最后 <code>save_workbook</code></li><li><strong>校验与分发</strong>：用 <code>cwtwb validate</code> 或云端 REST 校验，发布后可接 <code>tableauPushDing</code> 截图推送</li></ol>`
  },
  {
    html: `<h1>Tableau 实操演示</h1><div class="video-demo"><div class="video-frame"><video controls preload="metadata" playsinline src="../Videos/1tableau 配置mcp_compressed.mp4"></video></div><div class="video-panel"><h2>演示片段</h2><button class="video-choice is-selected" data-video="../Videos/1tableau 配置mcp_compressed.mp4">配置 MCP</button><button class="video-choice" data-video="../Videos/2tableau 询问mcp能力_compressed.mp4">询问 MCP 能力</button><button class="video-choice" data-video="../Videos/3tableau生成成功_compressed.mp4">生成成功</button><h2>播放速度</h2><div class="speed-controls"><button data-speed="0.75">0.75x</button><button class="is-selected" data-speed="1">1x</button><button data-speed="1.25">1.25x</button><button data-speed="1.5">1.5x</button><button data-speed="2">2x</button></div></div></div>`
  },
  {
    html: `<h1>Power BI 智能体配置方法</h1><h2>PowerBI Authoring Skills + Modeling MCP</h2><ul><li><strong>安装 Skills</strong>：从 <code>microsoft/skills-for-fabric</code> 下载 PowerBI Authoring Skills，放入 Codex 可识别目录，例如 <code>.agents/skills</code> 或 <code>~/.agents/skills</code></li><li><strong>安装 MCP</strong>：配置 PowerBI Modeling MCP，让 AI 能读取模型、创建度量值、运行 DAX 查询和导出元数据</li><li><strong>安装依赖</strong>：准备 Node.js 20+，并安装 <code>@microsoft/powerbi-report-authoring-cli</code> 与 <code>@microsoft/powerbi-desktop-bridge-cli</code></li><li><strong>验证环境</strong>：运行 <code>powerbi-report-author --version</code> 和 <code>powerbi-desktop --version</code></li></ul>`
  },
  {
    html: `<h1>Power BI 落地步骤</h1><ol><li><strong>方式 A：基于已打开模型</strong>：先打开 Power BI Desktop 并导入数据，保持文件打开，让 AI 读取当前模型并设计报表</li><li><strong>方式 B：基于 PBIP 项目</strong>：将现有报表导出为 PBIP；编辑或美化现有报表时，PBIP 文件应保持关闭，避免影响读写</li><li><strong>Prompt 发起需求</strong>：说明页数、分析主题、布局风格和覆盖场景，例如“基于已导出的 PBIP 项目，创建深色科技风报表”</li><li><strong>先审设计文档</strong>：AI 会产出 <code>_brief/report-spec.md</code>，确认页面结构、主题风格和分析路径后再回复 approve</li><li><strong>生成与验收</strong>：AI 产出 PBIP 报表后，打开刷新数据；需要独立交付时，再另存为 <code>.pbix</code></li></ol>`
  },
  {
    html: `<h1>Power BI 实操演示</h1><div class="video-demo"><div class="video-frame"><video controls preload="metadata" playsinline src="../Videos/1powerbi 配置mcp skill npm_compressed.mp4"></video></div><div class="video-panel"><h2>演示片段</h2><button class="video-choice is-selected" data-video="../Videos/1powerbi 配置mcp skill npm_compressed.mp4">配置 MCP / Skills / npm</button><button class="video-choice" data-video="../Videos/2powerbi生成成功_compressed.mp4">生成成功</button><h2>播放速度</h2><div class="speed-controls"><button data-speed="0.75">0.75x</button><button class="is-selected" data-speed="1">1x</button><button data-speed="1.25">1.25x</button><button data-speed="1.5">1.5x</button><button data-speed="2">2x</button></div></div></div>`
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
