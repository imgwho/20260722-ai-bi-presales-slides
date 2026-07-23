window.AIBISlides = [
  {
    section: "封面",
    center: true,
    html: `
      <div class="kicker">BUSINESS · BI · AI</div>
      <h1>把业务问题，变成<br><span class="accent">可落地的数据智能方案</span></h1>
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
      <div class="kicker">开源项目 03</div>
      <h1>tableauPushDing：BI 报表定时拼接与钉钉推送系统</h1>
      <div class="case-layout">
        <figure><img src="../Images/evidence/tableaupushding.png" alt="tableauPushDing 系统架构图" style="background:#fff; padding:10px; border-radius:8px;"><figcaption>系统架构：React+Vite 前端 ｜ Bun+Elysia 后端 ｜ sharp 图片拼接 ｜ 钉钉 API</figcaption></figure>
        <div class="case-notes">
          <p class="product-lead">打通 Tableau Server 与企业钉钉生态，实现高清报表自动拉取、长图拼接与定时无感推送。</p>
          <div class="feature-grid">
            <span>Bun + Elysia</span><span>React + Vite</span><span>Tableau REST API</span><span>sharp 图片拼接</span><span>Croner 调度</span><span>钉钉工作通知</span>
          </div>
          <a class="repo-link" href="https://github.com/imgwho/tableauPushDing" target="_blank" rel="noreferrer">查看开源项目 ↗</a>
        </div>
      </div>
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
          <small>产品介绍期案例：白酒品鉴与专家背书（销售：蔡莉）</small>
          <p><strong>上下文背景：</strong>销售受邀作为代表参加专家发布会，借现场氛围建立稀缺性与品质认可。<br>
          <strong>对话记录：</strong>销售：“哥，我现在作为优秀代表跟专家领导在现场吃饭，中科院发酵专业范鏖教授对我们这次白酒进行了高度评价，价格绝对匹配得上品质！[强]”<br>
          <strong>客户反应：</strong>客户表示刚回家，并主动询问转账交付预订款。</p>
          <div class="followups">
            <span>① 权威背书：引入中科院专家范鏖教授现场好评</span>
            <span>② 稀缺塑造：现场上千人仅不到10人受邀用餐</span>
            <span>③ 价值锚定：正面回应价格与品质匹配关切</span>
          </div>
        </article>
        <aside class="score-card">
          <strong>85</strong>
          <span>脚本综合评分</span>
          <ul style="margin-top:10px;">
            <li>阶段：产品介绍</li>
            <li>触发：现场专家背书</li>
            <li>效果：客户主动转账</li>
            <li>客单：高价值资产</li>
          </ul>
        </aside>
      </div>
    `
  },
  {
    section: "AI产品",
    html: `
      <div class="kicker">SEED+P 话题裂变模型</div>
      <h1>真实聊天上下文与 AI 自动生成的聊点库</h1>
      <div class="rule-bar" style="margin-bottom: 14px;">
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">S - 真实场景 (Situation)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">E - 情绪共鸣 (Emotion)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">E - 事实证据 (Evidence)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">D - 话题走向 (Direction)</span>
        <span style="background:#0f766e; color:#fff; border-color:#0f172a;">P - AI 提炼 (Prompt)</span>
      </div>
      <div class="case-matrix" style="grid-template-columns: repeat(3, 1fr); gap: 14px;">
        <article style="padding:14px; text-align:left;">
          <strong style="color:#0f766e; font-size:16px;">01. 地域美食与隐藏宝藏（生活切入）</strong>
          <p style="font-size:13px; color:#475569; margin: 6px 0; line-height:1.4;"><strong>[背景]</strong> 客户到访/出差当地，销售以自嘲式请教美食避坑切入<br>
          <strong>[对话]</strong> 销售：“看好多人推荐您老家特色美食，去尝了感觉被‘照骗’了，正宗味道是怎样的呀？” ➜ 客户：“那些都是网红店噱头！真正地道的都在老城区巷子里，下次带你去尝。”发了老字号小吃地图。</p>
          <div style="background:#f0fdf4; border:1px dashed #0f766e; padding:6px 10px; border-radius:4px; margin-top:6px; font-size:12px; color:#065f46;">
            <strong>💡 AI 生成聊点走向：</strong><br>
            ① 避坑共鸣（网红店 vs 老字号） ➔ ② 谦虚请教（本地专家视角） ➔ ③ 自然延伸（老城区隐藏宝藏）
          </div>
        </article>
        <article style="padding:14px; text-align:left;">
          <strong style="color:#0f766e; font-size:16px;">02. 异议化解与真诚沟通（消除顾虑）</strong>
          <p style="font-size:13px; color:#475569; margin: 6px 0; line-height:1.4;"><strong>[背景]</strong> 客户对品牌子公司归属产生怀疑“别是假的吧”<br>
          <strong>[对话]</strong> 销售：“怎么会假呢，这是酒厂资质... 投入这么大，有顾虑完全理解，知无不言！” ➜ 客户：“行，了解清楚我就放心了，你帮我安排吧。”</p>
          <div style="background:#f0fdf4; border:1px dashed #0f766e; padding:6px 10px; border-radius:4px; margin-top:6px; font-size:12px; color:#065f46;">
            <strong>💡 AI 生成聊点走向：</strong><br>
            ① 共情资金安全顾虑 ➔ ② 出示官方资质凭证 ➔ ③ 引导开诚布公答疑
          </div>
        </article>
        <article style="padding:14px; text-align:left;">
          <strong style="color:#0f766e; font-size:16px;">03. 促成方案与阶段付款（促成交易）</strong>
          <p style="font-size:13px; color:#475569; margin: 6px 0; line-height:1.4;"><strong>[背景]</strong> 客户资金一时周转不开，面临观望停滞<br>
          <strong>[对话]</strong> 销售：“先收您一万零两百定金，剩下付给快递，假一罚十，不能让你吃亏！” ➜ 客户：“我当放心你了，明天就把定金转过去。”</p>
          <div style="background:#f0fdf4; border:1px dashed #0f766e; padding:6px 10px; border-radius:4px; margin-top:6px; font-size:12px; color:#065f46;">
            <strong>💡 AI 生成聊点走向：</strong><br>
            ① 降低首付门槛压力 ➔ ② 定制货到付款担保 ➔ ③ 给予正品兜底承诺
          </div>
        </article>
      </div>
      <div class="ai-ribbon" style="margin-top: 18px;">
        <strong>真实聊天上下文 ➔ AI 提取 SEED+P 关键证据 ➔ 自动导出高转化聊点库</strong>
        <span>数据全量引自 20251215-chat-analysis 项目 script_library.json，助力销售团队快速复盘与培训。</span>
      </div>
    `
  },
  {
    section: "AI产品",
    html: `
      <div class="kicker">20251215-chat-analysis 聊点资产全景</div>
      <h1>海量微信记录中自动提炼的 8 大高互动聊点库</h1>
      <div class="case-matrix" style="grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 12px;">
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">01. 早餐习惯 (1588.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“在吃包子奶茶呢，你也别忘了先吃点在工作”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：早上好，吃早餐了吗？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">02. 体育看球 (1384.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“大叔看球赛吗？我不喜欢看中超！收拾下家里”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：你平时喜欢看哪个联赛？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">03. 送发票外勤 (1206.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“刚看完你发的文件到公司，等会去别的公司送发票”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：早呀，今天要去送发票吗？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">04. 阳光与气温 (798.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“难得几天出太阳[呲牙]，阳光明媚像你一样心情美美哒”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：今天你们那边出太阳了吗？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">05. 流感提醒 (783.0)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“公司好多同事流感了... 月初欠费很正常”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：最近流感挺多的，防护做好没？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">06. 酒口味偏好 (704.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“我知道你那都是酱香的，平时我只喝啤酒，白的辣[偷笑]”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：平时喝啤酒多，白酒喝得少吧？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">07. 地方胡辣汤 (659.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“贵州没正宗胡辣汤！去苏州站坐大巴到了报平安”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：当地有什么特色早餐推荐吗？</em>
        </article>
        <article style="padding:10px; text-align:left;">
          <strong style="color:#0f766e; font-size:14px;">08. 周一加班 (646.5)</strong>
          <span style="font-size:12px; color:#475569; display:block; margin:4px 0;">“早上好勤劳的小蜜蜂，昨天加班到几点呀？”</span>
          <em style="font-size:11px; color:#64748b;">AI 开场：昨天加班到几点？目标完成没？</em>
        </article>
      </div>
      <div class="ai-ribbon" style="margin-top: 10px;">
        <strong>只凭单表互动流水线（回复+轮次+速度），由 AI 聚类为 8 大稳态分类与推荐开场</strong>
        <span>数据 100% 引自开源项目 20251215-chat-analysis（v2 聊点生成引擎），保留真实回复证据。</span>
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
    section: "华芝林",
    html: `
      <div class="kicker">流程与范围控制</div>
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
        <span>联合主键：单据编号 + 商品</span>
        <span>已核销数据锁定</span>
        <span>代收关系动态配置</span>
        <span>多身份视角切换</span>
        <span>一期锁定返款核销，二期规划直连与自动化</span>
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
