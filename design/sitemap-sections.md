# Silvana — карта страниц и секций (build spec)

Извлечено из `content/*.md`. Каждый док содержит готовую секцию «Layout & UX» — это основной источник при верстке.

## Дерево роутов (~29 страниц)

### Standalone (top-level, без дропдауна)
| Route | Файл | Ключевые секции |
|---|---|---|
| `/` | HomePage.md | hero+ticker+tree → logo wall → **bento** (6 cards) → router band → stats → institutions(accordion) → developers(code) → LPs → pull quote → integration paths → blog carousel → newsletter → closing CTA+side cards |
| `/thesis` | OurThesis.md | hero (oversized statement type) → positioning → why-now (4 stat blocks $2T/35%/44%/30+) → wedge → beyond-one-chain rail → CTA. **Full agentic tree** |
| `/markets` | Markets.md | hero → markets table (3 pairs, live cols) → CTA. One viewport |
| `/earnhub` | EarnHub.md | hero → season banner → 3-step → seasons → leaderboard teaser → CTA |
| `/about` | About.md | hero → story → values 3-up → ecosystem logo wall → careers/contact → CTA |

### Products (`/products`)
| Route | Файл | Ключевые секции |
|---|---|---|
| `/products` | Products(landing).md | hero → 3-up product cards. One viewport |
| `/products/silvana-book` | Products(Silvana Book).md | hero → 4-step lifecycle (branch viz) → 6-up guarantees → Terminal/Swap/RFQ tabs → security narrative → CTA. Sticky "Open app" pill |
| `/products/agentic-api` | Products(Agentic API).md | hero → why → **two-phase diagram** → capabilities 4x2 → language band → CTA |
| `/products/sdk` | Products(SDK).md | hero → capabilities 4x2 → 3-step + code block → CTA |

### Agents (`/agents`)
| Route | Файл | Ключевые секции |
|---|---|---|
| `/agents` | Agents(landing).md | hero (tree branches) → sources 3-up → lifecycle stepper → marketplace band → CTA. Sticky sub-nav tabs |
| `/agents/catalog` | Agents(Agent catalog).md | flagship 5 cards → filterable catalog grid (7 categories) → CTA |
| `/agents/playground` | Agents(Playground).md | hero → **2-panel simulator** (controls+live orderbook) → v2/testnet bands → CTA. Site's only continuous animation |
| `/agents/use-cases` | Agents(Use Cases).md | hero → **interactive sequence viewer** (Trade demo) → 8 coming-soon cards |

### Build (`/build`)
| Route | Файл | Ключевые секции |
|---|---|---|
| `/build` | Build(developer hub).md | hero → 3-up entry cards → optional stat band. One viewport |
| `/build/sdk-guide` | Build(SDK guide).md | **scrollytelling** quickstart (5 steps, sticky code panel) → 8 capabilities → go-custom → CTA. Right-rail TOC |
| `/build/api-reference` | Build(API reference).md | hero → services table (5 rows) → **two-phase diagram (reused)** → capabilities → CTA |
| `/build/agent-space` | Build(Agent space).md | hero → Silvana Book agent (arch diagram) → hosting comparison table + 4 cards → CTA |

### Solutions (`/solutions`)
| Route | Файл | Ключевые секции |
|---|---|---|
| `/solutions` | Solution(landing).md | hero → use cases grid → who-can-use row → case studies row. <2 viewports |
| `/solutions/who-can-use` | Solution(Who can use Silvana).md | hero → 10 audience cards (5x2) → CTA |
| `/solutions/case-studies` | Solution(Case studies).md | 3 case sections (Modo / Loop+Supanova / Hecto): logo→narrative→stat row→quote→link |
| `/solutions/trade` | Solution(Trade_live).md | hero (Live badge) → who → 9-step vertical timeline → manual-vs-agentic table → CTA |
| `/solutions/{commerce,margin,payroll,loans,risk-compliance,audit,reconciliation,treasury}` | Solution(upcoming).md | **8 страниц на одном шаблоне**: Coming-soon hero → who chips → flow timeline → manual-vs-agentic → shared CTA |

## Переиспользуемые компоненты (строим первыми)

Ядро архитектуры — почти весь сайт собирается из этого набора:

| Компонент | Где используется |
|---|---|
| **Nav** (дропдауны Products/Agents/Build/Solutions + magenta "Open app", persistent) | везде |
| **Footer** (5 колонок-sitemap, positioning line, newsletter mini-form) | везде |
| **Hero** (eyebrow / headline / subhead / 2 CTA) | каждая страница |
| **CTA band** (closing) | каждая страница |
| **Agentic tree** (SVG, draw-on анимация) — фирменный мотив | Home, Thesis, Agents, About |
| **Two-phase diagram** (prepare→sign→execute, keys-local callout) | Agentic API, API reference (явно «reuse exact component») |
| **Flow timeline / stepper** (actor tags, once-on-scroll) | Silvana Book, Agents, Trade, 8 upcoming, Use cases |
| **Manual-vs-agentic** comparison table | Trade + 8 upcoming |
| **Tabbed code block** (Rust / TypeScript, copy, blinking cursor) | Home, Agentic API, SDK, SDK guide |
| **Capabilities grid** (4x2, one-liner each) | Agentic API, SDK, API reference, SDK guide |
| **Card grid + filter chips** | Agent catalog, Solutions, Who-can-use |
| **Case study block** (logo→narrative→stats→quote) | Case studies, Home institutions |
| **Stats band** (display type, count-up on scroll) | Home, Thesis, case studies |
| **Logo wall / marquee** | Home, About |
| **Comparison table** (hosting models) | Agent Space |

## Решённые вопросы
- **Markets / Terminal / Swap:** по контенту — **Markets** это отдельная страница (`/markets`). **Terminal, Swap, RFQ** — это возможности/поверхности продукта внутри Silvana Book и приложения (`/products/silvana-book`, табы), НЕ отдельные маркетинговые страницы. Footer ссылается на них как на части продукта/app.

## ⚠️ Открытый вопрос: тема и стиль (см. ниже / palette.md)
Дизайн-заметки в контенте требуют **тёмную, плоскую тему без градиентов**, что противоречит брифу по цветам (белая база + градиент). Нужно решение заказчика.
