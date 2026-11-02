export function quarterDates(year,quarter){const start=new Date(Date.UTC(year,(quarter-1)*3,1)),end=new Date(Date.UTC(year,quarter*3,0));return {start:start.toISOString().slice(0,10),end:end.toISOString().slice(0,10)}}
export function quarterlyMetrics(q){const {start,end}=quarterDates(q.year,q.quarter);const day=86400000,total=(Date.parse(end)-Date.parse(start))/day+1;const elapsed=Math.max(0,Math.min(total,(Date.parse(q.asOf)-Date.parse(start))/day+1));const fraction=elapsed/total;const achievement=q.target?q.revenue/q.target:0;return {elapsed,total,fraction,achievement,expected:q.target*fraction,pace:fraction?achievement/fraction:null,projected:fraction?q.revenue/fraction:null,winRate:q.won+q.lost?q.won/(q.won+q.lost):null}}
export const defaultQuarter={year:2026,quarter:4,asOf:'2026-11-02',target:500000,revenue:175000,calls:420,won:7,lost:18};
export function tierCounts(total){const t1=Math.round(total/6),t2=Math.round(total/6),t3=Math.round(total/3);return [t1,t2,t3,total-t1-t2-t3]}
export const tiers=[
{title:'T1 · Big bets',color:'violet',effort:40,rule:'Fit ≥ 90 and estimated annual opportunity ≥ AUD 250k',reason:'High fit and high commercial potential justify deeper research and multi-threading.',motion:'1:1 account plans; weekly buying-group engagement; partner with solutions engineering and an executive sponsor.'},
{title:'T2 · Quick wins',color:'green',effort:30,rule:'Not T1; existing relationship, fit ≥ 80 and an identified product hypothesis',reason:'An existing relationship and clear product whitespace may reduce discovery friction. Buying intent remains unverified.',motion:'Fortnightly value reviews; validate adoption gaps with customer success; agree a focused expansion discovery.'},
{title:'T3 · Build & develop',color:'blue',effort:20,rule:'Not T1/T2; fit ≥ 75',reason:'Promising fit needs stronger evidence of pain, timing, and stakeholder access.',motion:'Segment-led outreach every 3–4 weeks; test business-model hypotheses; promote when a buying trigger is validated.'},
{title:'T4 · Nurture',color:'orange',effort:10,rule:'Remaining accounts',reason:'Lower or uncertain fit calls for efficient coverage until a meaningful signal emerges.',motion:'Monthly signal monitoring and relevant nurture; revisit after expansion, funding, or architecture changes.'}];
export function accountTier(a){if(a.score>=90&&a.opportunity>=250000)return 0;if(a.status==='Existing'&&a.score>=80&&a.recommended&&!/validate|unknown/i.test(a.recommended))return 1;if(a.score>=75)return 2;return 3}
export const phaseContent=[
  {
    "days": "Days 1–30",
    "title": "Learn & prioritise",
    "factor": 0.4,
    "color": "blue",
    "categories": [
      [
        "Product upskilling",
        [
          "Complete foundational Payments, Billing, Connect, and Radar learning.",
          "Practise two business-model-led demos with a solutions engineer."
        ]
      ],
      [
        "Internal relationships & collaboration",
        [
          "Meet your manager, SDR partner, solutions engineer, and customer success team.",
          "Meet risk/compliance and deal desk to understand approval paths.",
          "Agree weekly coaching and account-review cadences."
        ]
      ],
      [
        "Admin & AI",
        [
          "Learn the CRM, qualification fields, and forecasting definitions.",
          "Use approved AI tools for research summaries and verify sources.",
          "Keep customer data within company policy."
        ]
      ],
      [
        "Territory Intelligence & Strategy",
        [
          "Audit account ownership and inherited pipeline.",
          "Validate tier criteria and map current product adoption.",
          "Build account plans for the first 10 T1 accounts."
        ]
      ],
      [
        "Customer outreach",
        [
          "Shadow three discoveries and run two mock discoveries with feedback.",
          "Launch small, personalised outreach cohorts.",
          "Review objections and messaging every week."
        ]
      ],
      [
        "Pipeline & revenue",
        [
          "Establish a baseline and inspect inherited opportunities.",
          "Track weekly calls, meetings, accepted opportunities, pipeline created, and stage ageing.",
          "Prioritise learning and qualification over early revenue."
        ]
      ]
    ]
  },
  {
    "days": "Days 31–60",
    "title": "Engage & qualify",
    "factor": 0.7,
    "color": "violet",
    "categories": [
      [
        "Product upskilling",
        [
          "Deepen discovery on Billing and Connect use cases.",
          "Co-deliver two tailored demos.",
          "Practise value-based objection handling."
        ]
      ],
      [
        "Internal relationships & collaboration",
        [
          "Run weekly deal reviews with your manager and SDR.",
          "Bring solutions engineering into qualified discovery.",
          "Validate expansion with customer success and engage relevant partners."
        ]
      ],
      [
        "Admin & AI",
        [
          "Maintain CRM next steps and stakeholder maps.",
          "Use approved AI for draft outreach and call preparation, with human review.",
          "Reconcile pipeline and forecast every week."
        ]
      ],
      [
        "Territory Intelligence & Strategy",
        [
          "Review response and conversion rates by tier.",
          "Validate T1 buying groups and run T2 whitespace reviews.",
          "Promote T3 accounts with credible buying triggers."
        ]
      ],
      [
        "Customer outreach",
        [
          "Build toward full activity and lead discovery conversations.",
          "Deliver demos tailored to validated customer problems.",
          "Test urgency and impact with economic buyers and multiple stakeholders."
        ]
      ],
      [
        "Pipeline & revenue",
        [
          "Track qualification conversion, pipeline created, demos, and mutual next steps weekly.",
          "Build quantified business cases.",
          "Forecast only deals supported by credible stage evidence."
        ]
      ]
    ]
  },
  {
    "days": "Days 61–90",
    "title": "Advance & expand",
    "factor": 1,
    "color": "green",
    "categories": [
      [
        "Product upskilling",
        [
          "Lead business-model-specific demos with technical support as needed.",
          "Complete an advanced product teach-back.",
          "Document recurring discovery patterns."
        ]
      ],
      [
        "Internal relationships & collaboration",
        [
          "Coordinate solutions engineering, legal, risk, implementation, and deal desk on qualified evaluations.",
          "Align customer success on adoption outcomes.",
          "Confirm handoff readiness and ownership."
        ]
      ],
      [
        "Admin & AI",
        [
          "Maintain forecast discipline and clean CRM hygiene.",
          "Automate approved repetitive admin tasks.",
          "Audit AI research for accuracy and apply human judgement to communications."
        ]
      ],
      [
        "Territory Intelligence & Strategy",
        [
          "Rebalance selling time against tier yield and buying signals.",
          "Plan next-quarter coverage and refresh product whitespace.",
          "Document the investment rationale for each priority account."
        ]
      ],
      [
        "Customer outreach",
        [
          "Operate at the full planned outreach cadence.",
          "Run tailored demos and engage multiple stakeholders.",
          "Use mutual action plans to progress evaluations."
        ]
      ],
      [
        "Pipeline & revenue",
        [
          "Inspect weekly revenue, win/loss, stage progression, coverage, and slippage.",
          "Close feasible deals and progress longer-cycle opportunities.",
          "Build next-quarter pipeline coverage."
        ]
      ]
    ]
  }
];
export const productDescriptions={Payments:'Accept and manage online payments.',Billing:'Recurring subscriptions, invoices, and usage-based billing.',Connect:'Payments for platforms and marketplaces.',Radar:'Tools for detecting and managing payment fraud.',Tax:'Tax calculation and related compliance workflows; availability varies.',Terminal:'In-person payments and connected commerce.','Optimized Checkout Suite':'Checkout experiences and payment methods designed to improve conversion.'};
export function opportunityReason(a){const reasons=a.recommended.split(/,\s*/).map(p=>({product:p,reason:({Payments:'Explore payment acceptance, conversion, and reconciliation needs.',Billing:'Validate recurring-revenue complexity, subscription changes, and manual billing work.',Connect:'Validate multi-party payment flows, seller onboarding, and payout operations.',Radar:'Validate fraud exposure, false declines, and current risk controls.',Tax:'Validate cross-border tax obligations and manual compliance effort.',Terminal:'Validate in-person payment needs and unified online/offline reporting.','Optimized Checkout Suite':'Validate checkout friction, mobile conversion, and payment-method gaps.'})[p]||'Validate the business problem and product suitability in discovery.'}));return {summary:`Signal: ${a.signal}. Current adoption: ${a.products}. ${a.status==='Existing'?'Explore adjacent product whitespace and adoption needs.':'Validate the incumbent architecture before proposing a change.'}`,reasons}}
export function safeLinkedInUrl(value){try{const u=new URL(value);return u.protocol==='https:'&&(u.hostname==='linkedin.com'||u.hostname==='www.linkedin.com')&&/^\/(in|sales\/lead)\//.test(u.pathname)?u.href:null}catch{return null}}
