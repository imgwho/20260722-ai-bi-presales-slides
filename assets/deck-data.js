window.AIBISlides = [
  {
    section: "封面",
    center: true,
    html: `
      <div class="kicker">BUSINESS · BI · AI</div>
      <h1>把业务问题，变成 <span class="accent">可落地的数据智能方案</span></h1>
      <p class="lead">郭文华｜业务型售前顾问 · BI / 数据智能方向</p>
      <div class="hero-tags">
        <span>8 年数据与数字化</span>
        <span>制造 / 消费 / 保险</span>
        <span>AI 原生工作方式</span>
      </div>
    `
  },
  {
    section: "定位",
    html: `
      <div class="kicker">我的定位与方法</div>
      <h1>业务、数据与 AI 的连接者</h1>
      <div class="metric-grid">
        <article><strong>8 年</strong><span>BI、数据分析与企业数字化</span></article>
        <article><strong>端到端</strong><span>交流、澄清、方案、PoC、汇报、推进</span></article>
        <article><strong>多行业</strong><span>制造、消费、保险、地产与金融</span></article>
        <article><strong>AI 原生</strong><span>把新能力转成可验证业务场景</span></article>
      </div>
      <div class="flow compact" style="margin-top: 20px;">
        <div><b>01</b><strong>经营问题</strong><span>目标、流程、角色、痛点</span></div><i>→</i>
        <div><b>02</b><strong>需求澄清</strong><span>场景、规则、边界</span></div><i>→</i>
        <div><b>03</b><strong>方案设计</strong><span>指标、数据、原型</span></div><i>→</i>
        <div><b>04</b><strong>价值呈现</strong><span>演示、验证、共识</span></div><i>→</i>
        <div><b>05</b><strong>推进落地</strong><span>计划、协同、验收</span></div>
      </div>
      <div class="quote">“不从产品功能开始，而从客户要解决的经营问题开始。”</div>
    `
  },
  {
    section: "AI+BI",
    html: `
      <div class="kicker">开源项目 01</div>
      <h1>cwtwb：让 AI 工程化构建 Tableau</h1>
      <div class="case-layout">
        <figure><img src="../Images/evidence/cwtwb-hero.png" alt="cwtwb 界面截图"><figcaption>AI 调用 MCP 工具生成布局、仪表板与交互</figcaption></figure>
        <div class="case-notes">
          <p class="product-lead">从自然语言或代码，生成可检查、可复现、可验证的 <code>.twb / .twbx</code>。</p>
          <div class="feature-grid">
            <span>Python SDK</span><span>MCP Server</span><span>图表与仪表板</span><span>XSD 校验</span><span>Cloud 验证</span><span>可复现交付</span>
          </div>
          <a class="repo-link" href="https://github.com/aidatacooper/cwtwb" target="_blank" rel="noreferrer">查看开源项目 ↗</a>
        </div>
      </div>
    `
  },
  {
    section: "AI+BI",
    html: `
      <div class="kicker">开源项目 02</div>
      <h1>cwprep：让 AI 构建可复现的数据准备流程</h1>
      <div class="case-layout">
        <figure><img src="../Images/evidence/cwprep-hero.png" alt="cwprep 界面截图"><figcaption>AI 设计并生成可在 Tableau Prep 中继续编辑的流程</figcaption></figure>
        <div class="case-notes">
          <p class="product-lead">声明式生成 <code>.tfl / .tflx</code>，覆盖连接、清洗、关联、计算、聚合与 SQL 翻译。</p>
          <div class="feature-grid">
            <span>多数据源</span><span>Join / Union</span><span>清洗与计算</span><span>Pivot</span><span>打包交付</span><span>SQL Translation</span>
          </div>
          <a class="repo-link" href="https://github.com/aidatacooper/cwprep" target="_blank" rel="noreferrer">查看开源项目 ↗</a>
        </div>
      </div>
    `
  },
  {
    section: "AI+BI",
    html: `
      <div class="kicker">开源与自动化生态</div>
      <h1>AI 生成 BI 资产 ＋ tableauPushDing 智能定时推送</h1>
      <div class="pipeline">
        <article><small>CWTWB</small><strong>工作簿工程</strong><span>AI 生成 .twb 资产</span></article><i>→</i>
        <article class="cyan"><small>CWPREP</small><strong>数据流程工程</strong><span>AI 构建 .tfl 清洗</span></article><i>→</i>
        <article class="blue"><small>PUSH DING</small><strong>Tableau REST API</strong><span>自动抓取 + sharp 拼接</span></article><i>→</i>
        <article class="green"><small>DELIVERY</small><strong>钉钉/微信推送</strong><span>定时发送高清报表长图</span></article>
      </div>
      <div class="proof-row" style="margin-top: 18px;">
        <span>cwtwb / cwprep 开源工具</span>
        <span>tableauPushDing 自动化系统</span>
        <span>30,000+ 社区下载验证</span>
      </div>
      <p class="micro">结合开源项目 https://github.com/imgwho/tableauPushDing 实现从 BI 资产生成到钉钉自动化的全闭环链路。</p>
    `
  },
  {
    section: "AI产品",
    html: `
      <div class="kicker">销售话术分析系统</div>
      <h1>从海量聊天中，提炼可复制的销售能力</h1>
      <div class="problem-solution">
        <div>
          <h2>业务问题</h2>
          <ul>
            <li>优秀销售经验停留在个人手中</li>
            <li>海量企业微信聊天无法人工复盘</li>
            <li>新客转化与客户维系缺少标准资产</li>
          </ul>
        </div>
        <div>
          <h2>产品答案</h2>
          <ul>
            <li>从真实成交与互动数据筛选样本</li>
            <li>AI 提炼话术、风格与触发条件</li>
            <li>生成可评分、可复用的话术与聊点库</li>
          </ul>
        </div>
      </div>
      <div class="two-mode">
        <article><strong>HUNTING</strong><span>新客开发：首单成交路径、高转化话术</span></article>
        <article><strong>FARMING</strong><span>客户维系：高互动聊点、SEED+P 话题裂变</span></article>
      </div>
    `
  },
  {
    section: "AI产品",
    html: `
      <div class="kicker">数据流转与系统架构</div>
      <h1>从销售聊天记录到可复用话术资产</h1>
      <div class="flow" style="margin-bottom: 16px;">
        <div><b>ORDER</b><strong>订单表</strong><span>首单、金额、时间、客户</span></div><i>→</i>
        <div><b>STAFF</b><strong>员工表</strong><span>销售、工号、团队</span></div><i>→</i>
        <div><b>BRIDGE</b><strong>微信映射</strong><span>会员 ID ↔ 客户微信 ID</span></div><i>→</i>
        <div><b>CHAT</b><strong>聊天记录</strong><span>销售消息、客户回复、轮次</span></div><i>→</i>
        <div><b>AI ASSET</b><strong>AI 话术库</strong><span>成交话术 · 维系聊点</span></div>
      </div>
      <div class="proof-row" style="margin-bottom: 18px;">
        <span>Top 销售</span><span>首单成交</span><span>客户回复</span><span>话术提炼</span><span>可复用资产</span>
      </div>
      <div class="snippet-layout">
        <article class="conversation-card">
          <small>话题案例：地域美食与旅游邀约｜自嘲式求助</small>
          <p>“最近看到好多人推荐您老家的特色美食，我兴冲冲去尝了，结果感觉被‘照骗’了。想请教您这位地道美食家，最正宗的味道和吃法应该是怎样的？”</p>
          <div class="followups">
            <span>① 共情：果然少了灵魂</span>
            <span>② 请教：还有哪些隐藏宝藏</span>
            <span>③ 延展：像本地人一样怎么玩</span>
          </div>
        </article>
        <aside class="score-card">
          <strong>92</strong>
          <span>AI 模拟评测</span>
          <ul style="margin-top:10px;">
            <li>人设 19 / 20</li>
            <li>情感 14 / 15</li>
            <li>认同 19 / 20</li>
            <li>驱动 14 / 15</li>
          </ul>
        </aside>
      </div>
    `
  },
  {
    section: "华芝林",
    html: `
      <div class="kicker">华芝林 · 个人售前项目</div>
      <h1>客户给我的，不是一份完整需求</h1>
      <div class="chaos-grid" style="margin-bottom: 20px;">
        <span>管家婆发货数据</span><span>20+ 省区经营监控</span><span>70% 签约红线</span><span>合同与培训人数</span><span>应返 / 实返</span><span>省总 / 地总 / 业务</span><span>兼任与代收</span><span>一单多商品</span><span>企业微信入口</span>
      </div>
      <div class="quote" style="margin-top: 16px;">
        “真正的售前工作，是把这些碎片重新组织成<span class="accent">客户能够确认、团队能够交付</span>的系统。”
      </div>
    `
  },
  {
    section: "AI产品",
    html: `
      <div class="kicker">真实互动聊点案例库</div>
      <h1>真实聊天中可复制的高互动话题案例</h1>
      <div class="case-matrix" style="grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <article>
          <strong style="color:#0f766e; font-size:18px;">01. 地域美食与本地生活</strong>
          <span style="font-size:14px; margin: 8px 0; line-height: 1.45;">“最近看到好多人推荐您老家的特色美食，去尝了感觉被‘照骗’了。想请教您最正宗的味道应该是怎样的？”</span>
          <em style="font-size:12px; color:#64748b;">追问：①共情少了灵魂 ｜ ②隐秘宝藏 ｜ ③像本地人一样玩</em>
        </article>
        <article>
          <strong style="color:#0f766e; font-size:18px;">02. 育儿与亲子教育</strong>
          <span style="font-size:14px; margin: 8px 0; line-height: 1.45;">“您家孩子习惯养得真好！我们家现在动不动就拉扯，想向您取取经，平时是怎么引导孩子平衡的？”</span>
          <em style="font-size:12px; color:#64748b;">追问：①倾听同款困扰 ｜ ②赞赏接地气方法 ｜ ③周末带娃好去处</em>
        </article>
        <article>
          <strong style="color:#0f766e; font-size:18px;">03. 职场与管理心得</strong>
          <span style="font-size:14px; margin: 8px 0; line-height: 1.45;">“看您朋友圈分享的管理心得特别受启发，想请教下在跨部门协作时，如何更好地对齐预期？”</span>
          <em style="font-size:12px; color:#64748b;">追问：①视角极其透彻 ｜ ②突破僵局做法 ｜ ③实操价值高</em>
        </article>
      </div>
      <div class="ai-ribbon" style="margin-top: 18px;">
        <strong>以客户回复、互动轮次和回复速度计算互动分</strong>
        <span>AI 做轻度分类与整理，保留客户真实回复证据。案例取自 20251215-chat-analysis 开源项目。</span>
      </div>
    `
  },
  {
    section: "华芝林",
    html: `
      <div class="kicker">流程、规范与 SEED+P</div>
      <h1>把返款业务拆成两个可追溯工作流</h1>
      <div class="workflow-split">
        <article>
          <small>WORKFLOW A</small>
          <h2>应返</h2>
          <p>订单明细 → 角色分配 → 应返金额 → 销售查询</p>
          <span>回答：这笔钱为什么属于我？</span>
        </article>
        <article>
          <small>WORKFLOW B</small>
          <h2>实返</h2>
          <p>财务汇总打款 → 实返 Excel → 批次核销 → 到账核对</p>
          <span>回答：这次到账包含哪些订单？</span>
        </article>
      </div>
      <div class="rule-bar" style="margin-top: 18px;">
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">S - 真实场景 (Situation)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">E - 情绪共鸣 (Emotion)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">E - 事实证据 (Evidence)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">D - 话题走向 (Direction)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">P - AI 提炼 (Prompt)</span>
      </div>
    `
  },
  {
    section: "华芝林",
    html: `
      <div class="kicker">原型证据</div>
      <h1>用可点击原型，把口头规则变成共同语言</h1>
      <div class="prototype-grid">
        <figure><img src="../Images/evidence/refund-image4.png" alt="财务数据核销工作台原型"><figcaption>财务核销工作台：应返、实返、状态与代收</figcaption></figure>
        <figure><img src="../Images/evidence/refund-image5.png" alt="合并打款核销原型"><figcaption>按打款批次合并核销，并上传凭证</figcaption></figure>
        <figure><img src="../Images/evidence/refund-image6.png" alt="账户审批与角色管理原型"><figcaption>账号审批、多角色与代收绑定</figcaption></figure>
      </div>
    `
  },
  {
    section: "华芝林",
    html: `
      <div class="kicker">方案与看板证据</div>
      <h1>从数据源到管理动作的完整链路</h1>
      <div class="dual-shot">
        <figure><img src="../Images/evidence/proposal-image1.png" alt="华芝林数智化方案架构图"><figcaption>方案原稿：管家婆 / Excel → 数据处理 → Tableau / 门户 → 企业微信</figcaption></figure>
        <figure><img src="../Images/evidence/dashboard-image1.png" alt="华芝林全国销售与团队管理大盘原型"><figcaption>看板原型：签约红线、省区排名、团队变化与培训投入</figcaption></figure>
      </div>
      <div class="case-notes horizontal">
        <span>保留员工 Excel 工作习惯</span>
        <span>后台清洗、分类、汇总并沉淀</span>
        <span>用 70% 红线识别经营偏差</span>
        <span>企业微信免密入口服务管理层</span>
      </div>
    `
  },
  {
    section: "行业案例",
    html: `
      <div class="kicker">案例组合</div>
      <h1>制造为主，消费与保险补充</h1>
      <div class="case-matrix">
        <article>
          <strong>一汽 / 一汽大众</strong>
          <span>产销存、供应链、财务经营、HR、管理层会议 BI</span>
          <em>制造 · 复杂业务</em>
        </article>
        <article>
          <strong>立白 / 蒙牛 / 华芝林</strong>
          <span>电商全链路、财务 PoC、销售与返款数智化</span>
          <em>消费 · 零售</em>
        </article>
        <article>
          <strong>友邦 / 安盛天平</strong>
          <span>销售业绩、佣金、保费、经营监控与异常识别</span>
          <em>保险 · 经营分析</em>
        </article>
        <article>
          <strong>金科 / 广汽研究院</strong>
          <span>招投标、产品边界、平台升级、多端与权限方案</span>
          <em>复杂售前 · 推进</em>
        </article>
      </div>
    `
  },
  {
    section: "岗位价值",
    html: `
      <div class="kicker">岗位匹配</div>
      <h1>业务型售前 × AI 原生执行力</h1>
      <div class="metric-grid">
        <article><strong>01. 更快进入业务</strong><span>快速理解陌生流程，抓住管理问题与关键规则</span></article>
        <article><strong>02. 更清楚地讲价值</strong><span>用指标、场景和决策路径，而不是功能清单沟通</span></article>
        <article><strong>03. 更快形成验证</strong><span>借助 AI 生成原型、样例和可运行的 BI 资产</span></article>
        <article><strong>04. 更稳地推进项目</strong><span>明确角色、范围、风险、交付物与关键节点</span></article>
      </div>
      <div class="quote">“岗位需要的不是‘会讲 BI’，而是能把客户经营诉求转成可信方案的人。”</div>
    `
  },
  {
    section: "结束",
    center: true,
    html: `
      <div class="kicker">LET'S BUILD VALUE WITH DATA</div>
      <h1>把客户听不清的需求<br><span class="accent">变成 看得见、能验证、可落地 的方案</span></h1>
      <p class="lead">郭文华｜成都｜业务型售前顾问 · BI / 数据智能</p>
      <div class="contact-row">
        <a href="tel:17313162175">173 1316 2175</a>
        <a href="mailto:imgwho@qq.com">imgwho@qq.com</a>
        <a href="https://github.com/aidatacooper" target="_blank" rel="noreferrer">github.com/aidatacooper ↗</a>
      </div>
    `
  }
];
