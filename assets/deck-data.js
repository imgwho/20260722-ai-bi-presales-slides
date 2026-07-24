window.AIBISlides = [
  {
    section: "第一部分",
    html: `
      <div class="kicker">个人介绍</div>
      <h1>郭文华｜8年+ BI 与数据解决方案经验</h1>
      <div class="metric-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 920px;">
        <article><strong>8年+</strong><span>BI 与数据解决方案经验</span></article>
        <article><strong>30+</strong><span>售前、POC 及项目支持</span></article>
        <article><strong>多行业</strong><span>制造、消费、金融保险、地产物业</span></article>
        <article><strong>AI+BI</strong><span>用工具提高 Demo 与 POC 效率</span></article>
      </div>
      <div class="quote">“我擅长在客户现场把模糊需求理清楚，再用原型和数据方案推动项目。”</div>
    `
  },
  {
    section: "第一部分",
    html: `
      <div class="kicker">岗位理解</div>
      <h1>售前的工作，是把客户的问题<br><span class="accent">变成能讨论、能验证的解决方案</span></h1>
      <div class="flow compact" style="margin-top: 34px;">
        <div><b>01</b><strong>听懂问题</strong><span>目标、现状、关键人</span></div><i>→</i>
        <div><b>02</b><strong>理清业务</strong><span>流程、数据、规则</span></div><i>→</i>
        <div><b>03</b><strong>做出验证</strong><span>原型、Demo、POC</span></div><i>→</i>
        <div><b>04</b><strong>推动实施</strong><span>范围、节奏、协同</span></div>
      </div>
    `
  },
  {
    section: "第二部分 · 案例一",
    html: `
      <div class="kicker">案例一 · AI 聊天话题生成</div>
      <h1>AI 从聊天记录中生成<br>销售话题和成交建议</h1>
      <div class="problem-solution">
        <div>
          <h2>背景</h2>
          <ul>
            <li>销售每天维护很多客户，很难持续找到合适的话题</li>
            <li>优秀销售的聊天方法散落在大量聊天记录中</li>
            <li>主管无法逐条复盘，新人也缺少真实参考</li>
          </ul>
        </div>
        <div>
          <h2>需要解决的问题</h2>
          <ul>
            <li>怎样从大量聊天中筛出客户真实回复、持续互动的片段</li>
            <li>怎样排除自动消息、群发消息和销售单向发送</li>
            <li>怎样判断一个话题是否真的能引发客户继续交流</li>
            <li>怎样避免 AI 编造故事或生成不合适的话题</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    section: "第二部分 · 案例一",
    html: `
      <div class="kicker">解决方案</div>
      <h1>从有效聊天中生成销售聊天话题</h1>
      <div class="solution-steps" style="margin-top: 28px;">
        <article><b>01</b><strong>清洗聊天记录</strong><span>保留有效文字消息，去掉自动消息、群发消息和状态异常的数据。</span></article><i>→</i>
        <article><b>02</b><strong>找出高互动聊天</strong><span>按销售与客户分组；相隔 6 小时切成一段，只保留双方真实来回交流的对话。</span></article><i>→</i>
        <article><b>03</b><strong>提炼聊天话题</strong><span>AI 只做分类和轻度整理，生成开场和追问；人工确认后给销售使用。</span></article>
      </div>
      <div class="method-notes">
        <p><strong>互动判断：</strong>客户回复次数、对话轮次、客户文字长度、首次回复速度共同计算互动分；短回复过多或销售单向发送过多会降分。</p>
        <p><strong>AI 边界：</strong>只在家庭、工作、健康、饮食、天气、兴趣、节日、经历八类中提炼；不虚构人设，不引入交易或推销内容。</p>
        <p><strong>输出控制：</strong>同一话题最多保留两种真实表达，并标注真实回复、互动分和风险等级，方便人工审核。</p>
      </div>
    `
  },
  {
    section: "第二部分 · 案例一",
    html: `
      <div class="kicker">成果</div>
      <h1>最终告诉销售：聊什么、怎么回答、哪些方法有效</h1>
      <div class="case-matrix" style="grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <article><strong>聊天话题</strong><span>根据客户聊过的工作、生活和兴趣，生成更自然的聊天话题。</span><em>客户偏好 / 互动情况 / 风险提醒</em></article>
        <article><strong>成交应对建议</strong><span>客户关注价格、效果或信任问题时，提供真实案例中的处理方法。</span><em>客户顾虑 / 应对方式 / 使用场景</em></article>
        <article><strong>培训和复盘材料</strong><span>把优秀聊天整理成案例卡片，方便新人学习和主管复盘。</span><em>真实案例 / 做法说明 / 注意事项</em></article>
      </div>
      <div class="snippet-layout" style="margin-top: 18px;">
        <article class="conversation-card">
          <small>示例：客户问“这个产品和其他产品有什么区别？”</small>
          <p>系统从优秀成交聊天中整理出：先解释适合什么人，再用真实案例建立信任，最后说明价格对应的具体价值。</p>
          <div class="followups">
            <span>真实订单筛选</span>
            <span>聊天内容脱敏</span>
            <span>AI 生成建议 + 人工确认</span>
          </div>
        </article>
        <aside class="score-card">
          <strong>3类</strong>
          <span>销售帮助</span>
          <ul style="margin-top:10px;"><li>和客户聊什么</li><li>客户犹豫怎么答</li><li>优秀案例怎么学</li></ul>
        </aside>
      </div>
    `
  },
  {
    section: "第二部分 · 案例二",
    html: `
      <div class="kicker">案例二 · 华芝林售前咨询</div>
      <h1>把零散的 Excel 数据整理成<br>提成管理系统和经营分析看板</h1>
      <div class="problem-solution">
        <div>
          <h2>背景</h2>
          <ul>
            <li>一家医药销售企业，希望统一查看销售经营情况</li>
            <li>返款就是按订单规则计算和发放的销售提成</li>
            <li>客户希望同时解决提成查询、到账核对和经营分析</li>
          </ul>
        </div>
        <div>
          <h2>需要解决的问题</h2>
          <ul>
            <li>销售、合同和培训等经营数据分散，难以分析和管理</li>
            <li>“应返”和“实返”混在一起</li>
            <li>一单多商品、多身份、代收关系复杂</li>
            <li>管理层、财务、销售关注点不同</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    section: "第二部分 · 案例二",
    html: `
      <div class="kicker">解决方案</div>
      <h1>一套看板看经营，一套流程管返款</h1>
      <div class="solution-dual">
        <article>
          <b>经营看板</b>
          <strong>汇总销售、合同和培训数据</strong>
          <span>让管理层查看全国、省区和团队的经营情况。</span>
          <ul>
            <li>销售：销量、签约比例和省区排名</li>
            <li>团队：人员变化和各省培训情况</li>
            <li>数据：用固定 Excel 表持续更新</li>
          </ul>
        </article>
        <article>
          <b>返款管理</b>
          <strong>分开计算“应返”和“实返”</strong>
          <span>应返是按订单规则该返的钱；实返是财务实际打出去的钱。财务核对到账，销售查询自己的返款。</span>
          <ul>
            <li>应返：按订单、商品和身份计算提成</li>
            <li>实返：按财务打款批次核对到账</li>
            <li>角色：销售、地总、省总分别查看</li>
          </ul>
        </article>
      </div>
      <div class="quote">我先和客户确认数据从哪里来、谁来使用、钱怎么计算，再做出可点击原型，一起确认页面和操作流程。</div>
    `
  },
  {
    section: "第二部分 · 案例二",
    html: `
      <div class="kicker">方案与成果</div>
      <h1>用原型把看板和返款规则讲清楚</h1>
      <div class="prototype-grid">
        <figure><img src="../Images/evidence/dashboard-image1.png" alt="全国销售与团队管理看板原型"><figcaption>经营看板：销量、签约、省区、团队与培训</figcaption></figure>
        <figure><img src="../Images/evidence/refund-image4.png" alt="财务数据核销工作台原型"><figcaption>财务核销：应返、实返与到账状态</figcaption></figure>
        <figure><img src="../Images/evidence/refund-image5.png" alt="合并打款核销原型"><figcaption>合并打款：按批次核对订单明细</figcaption></figure>
      </div>
      <div class="case-notes horizontal">
        <span>管理层看得清：经营情况集中展示</span>
        <span>财务对得上：打款找到对应订单</span>
        <span>销售查得到：只看与自己相关的数据</span>
        <span>项目分步做：一期核对，二期连接系统</span>
      </div>
    `
  },
  {
    section: "第三部分",
    html: `
      <div class="kicker">AI + BI 开源工具</div>
      <h1>用工具提高 Demo、POC 和方案验证效率</h1>
      <div class="case-matrix" style="grid-template-columns: repeat(3, 1fr); gap: 18px;">
        <article>
          <strong>cwtwb</strong>
          <span>AI 理解看板指标和业务规则，快速生成 Tableau 看板和 BI 原型。</span>
          <em><a href="https://github.com/aidatacooper/cwtwb" target="_blank" rel="noreferrer">GitHub 仓库 ↗</a></em>
        </article>
        <article>
          <strong>cwprep</strong>
          <span>AI 理解字段关系和计算规则，快速生成数据处理流程，验证数据能不能用。</span>
          <em><a href="https://github.com/aidatacooper/cwprep" target="_blank" rel="noreferrer">GitHub 仓库 ↗</a></em>
        </article>
        <article>
          <strong>tableauPushDing</strong>
          <span>用 AI Coding 做成整套自动化系统：定时获取报表、拼成长图并推送到钉钉。</span>
          <em><a href="https://github.com/imgwho/tableauPushDing" target="_blank" rel="noreferrer">GitHub 仓库 ↗</a></em>
        </article>
      </div>
      <div class="tool-chain">
        <article><b>01</b><strong>AI 理解规则</strong><span>cwprep：整理字段、计算和数据处理规则</span></article><i>→</i>
        <article><b>02</b><strong>AI 生成原型</strong><span>cwtwb：生成工作簿、图表和仪表板</span></article><i>→</i>
        <article><b>03</b><strong>AI Coding 自动化</strong><span>tableauPushDing：取图、拼接和钉钉推送</span></article>
      </div>
      <div class="metric-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 16px;">
        <article><strong>3个</strong><span>AI × Tableau × 自动化开源工具</span></article>
        <article><strong>3万+</strong><span>相关开源包累计下载</span></article>
        <article><strong>Tableau</strong><span>获得官方社区认可</span></article>
      </div>
    `
  },
  {
    section: "结束",
    center: true,
    html: `
      <div class="kicker">SUMMARY</div>
      <h1>把客户的问题理清楚<br><span class="accent">把数据方案做出来，把项目推动落地</span></h1>
      <div class="case-notes horizontal" style="margin-top: 24px;">
        <span>快速听懂客户真正要解决的问题</span>
        <span>把分散的需求整理成清晰方案</span>
        <span>用 AI 和 BI 工具更快完成演示和验证</span>
      </div>
      <p class="lead">郭文华｜成都｜业务型售前顾问 · BI / 数据智能</p>
      <div class="contact-row">
        <a href="tel:17313162175">173 1316 2175</a>
        <a href="mailto:imgwho@qq.com">imgwho@qq.com</a>
        <a href="https://github.com/aidatacooper" target="_blank" rel="noreferrer">github.com/aidatacooper ↗</a>
      </div>
    `
  }
];
