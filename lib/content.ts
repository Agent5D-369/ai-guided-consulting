import { BOOKING_URL } from "@/lib/site";

export type StructuralGap = {
  id: string;
  title: string;
  short: string;
  pain: string;
  shift: string;
  signal: string;
  mistaken: string;
};

export const structuralGaps: StructuralGap[] = [
  {
    id: "F1",
    title: "Conflict Without Resolution",
    short: "Recurring tension keeps getting personalized instead of diagnosed structurally.",
    pain: "The same conflict keeps coming back. People feel blamed, defensive, or exhausted because a structural issue is masquerading as a personality problem.",
    shift: "We name the real bottleneck, reduce blame, and replace looping tension with a clearer operating path.",
    signal: "It feels like repeated friction, emotional drag, and conversations that never quite land because the same unresolved condition keeps recreating the same human pattern.",
    mistaken: "It usually gets mistaken for attitude, chemistry, poor communication, or one difficult person."
  },
  {
    id: "F2",
    title: "Vision Misalignment",
    short: "The future is not clear enough for the business to organize around it.",
    pain: "Everyone thinks they are moving forward, but they are building different versions of the mission because the true direction was never made concrete.",
    shift: "We turn vague ambition into a shared direction people can actually build toward together.",
    signal: "It feels like motion without coherence. Work gets done, but it stacks into different futures instead of one aligned path.",
    mistaken: "It usually gets mistaken for slow execution, resistance, or a team that needs more motivation."
  },
  {
    id: "F3",
    title: "Governance Shadows",
    short: "Authority is blurry, ownership is fuzzy, and progress slows inside ambiguity.",
    pain: "Decisions happen by whoever is present, loudest, or least avoidable. Nobody can fully tell who owns what or how choices get made.",
    shift: "We rebuild decision structure, communication pathways, and ownership so momentum is no longer trapped in uncertainty.",
    signal: "It feels like hidden stalls, repeated revisiting, and a business that loses time every time ownership needs to become explicit.",
    mistaken: "It usually gets mistaken for collaboration issues, overthinking, or a team that simply needs to move faster."
  },
  {
    id: "F4",
    title: "Financial Fragility",
    short: "Money truth gets delayed until it becomes crisis, tension, or distrust.",
    pain: "Revenue, pricing, capacity, or cash flow realities are already shaping behavior, but the real economics are not being faced directly enough or soon enough.",
    shift: "We bring the financial truth back into the room and reconnect the model to reality, trust, and sustainability.",
    signal: "It feels like caution, pressure, and strangely emotional decisions because the numbers are already setting the terms even when nobody wants to say it plainly.",
    mistaken: "It usually gets mistaken for a mindset issue, temporary stress, or a sales problem in isolation."
  },
  {
    id: "F5",
    title: "Burnout of Key Holders",
    short: "The reliable people quietly carry too much for too long.",
    pain: "The business looks stable from the outside, but the institutional memory and execution capacity are burning out from within because too much rests on too few people.",
    shift: "We reduce hidden load, redistribute responsibility, and build systems that do not depend on heroics.",
    signal: "It feels like fragility hiding inside competence. The capable people still perform, but the cost is rising underneath the surface.",
    mistaken: "It usually gets mistaken for temporary fatigue, poor boundaries, or a season that will settle on its own."
  },
  {
    id: "F6",
    title: "Wrong-Fit People",
    short: "The mission evolved, but some roles, standards, or people did not evolve with it.",
    pain: "What once fit now dilutes the future. The business has changed, but the role fit, expectations, or culture have not caught up yet.",
    shift: "We align the structure to the next chapter so the right people can thrive and the wrong fit stops steering the direction.",
    signal: "It feels like drag, compromise, and a subtle lowering of standards because the system is still built around an older chapter.",
    mistaken: "It usually gets mistaken for loyalty, patience, or the belief that a little more clarity will solve a deeper fit problem."
  },
  {
    id: "F7",
    title: "Scale Trap",
    short: "Growth is outrunning the architecture that must hold it.",
    pain: "Demand, visibility, and moving parts are expanding faster than the systems, offers, team, or digital infrastructure can support.",
    shift: "We rebuild the foundation so growth stops feeling like emergency and starts feeling like capacity.",
    signal: "It feels like success arriving with chaos attached. More opportunity appears, but the business experiences it as strain instead of expansion.",
    mistaken: "It usually gets mistaken for a good problem, a temporary bottleneck, or proof that the team simply needs to push harder."
  }
];

export const painStatements = [
  "You know the vision is real, but the business underneath it feels scattered, stalled, or heavier than it should.",
  "You are carrying too much alone and everyone keeps looking to you for the answer, the decision, or the rescue.",
  "Your website, offer, systems, or app are half-built, outdated, or no longer matched to where the business is trying to go.",
  "You have tried consultants, freelancers, AI tools, and content rabbit holes, but you still do not have a coherent path.",
  "Growth feels like pressure instead of capacity because the structure beneath the business cannot hold the next level.",
  "You do not need more information. You need clarity, architecture, implementation, and relief."
] as const;

export const homepageServiceCards = [
  {
    title: "Digital Transformation Consulting",
    href: "/services/digital-transformation-consultant",
    copy:
      "For founders and small business owners who need the business model, systems, offers, and pathways rebuilt so growth stops feeling chaotic."
  },
  {
    title: "Website Development Consultant",
    href: "/services/website-development-consultant",
    copy:
      "Rebuild a confusing, dated, or underperforming website into a clear conversion asset that matches who you serve and where the business is going."
  },
  {
    title: "MVP Consultant + App Pathway Guidance",
    href: "/services/mvp-consultant",
    copy:
      "Turn an app idea into a practical path, scope, user flow, and build sequence without wasting money on the wrong development decisions."
  },
  {
    title: "AI Consultant for Small Business",
    href: "/services/ai-consultant-for-small-business",
    copy:
      "Use AI where it adds clarity, speed, and leverage. Ignore it where it creates noise, bloat, or false progress."
  },
  {
    title: "Fractional CTO Guidance for Non-Technical Founders",
    href: "/services/fractional-cto-for-non-technical-founders",
    copy:
      "Get senior-level thinking around tech decisions, architecture, sequencing, and product direction without hiring a full-time CTO too early."
  },
  {
    title: "Live Regenerative Business Rebuilds",
    href: "/book",
    copy:
      "This is the signature work: diagnose the structural gap, clarify the path, and rebuild the business live so it becomes more coherent, resilient, and prosperous."
  }
] as const;

export const buyerDrivers = [
  {
    title: "Relief",
    body:
      "They are tired of carrying friction, confusion, and hidden breakdowns that keep stealing momentum."
  },
  {
    title: "Clarity",
    body:
      "They want the real problem named accurately so they can stop guessing and move with confidence."
  },
  {
    title: "Control",
    body:
      "They want to reclaim decision-making power instead of feeling trapped by complexity, drift, or tech fog."
  },
  {
    title: "Simplicity",
    body:
      "They crave a cleaner path, fewer moving parts, and a business that finally makes sense again."
  },
  {
    title: "Progress",
    body:
      "They do not want theory. They want visible movement, repaired structure, and the next step handled live."
  },
  {
    title: "Transformation",
    body:
      "They want the business to match the identity, mission, and future they know they are meant to carry."
  }
] as const;

export const homepageFaqs = [
  {
    question: "Who is this for?",
    answer:
      "This is for founders, visionaries, consultants, coaches, and small business owners whose mission is clear but whose business architecture is not."
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No. This work is designed for people who need senior guidance and implementation support without becoming developers or systems architects first."
  },
  {
    question: "Is this strategy or implementation?",
    answer:
      "Both. The work starts with diagnosis and clarity, then moves into real rebuilding when needed, including websites, offers, funnels, AI systems, app pathways, and business structure."
  },
  {
    question: "Can you help rebuild my website or figure out an app?",
    answer:
      "Yes. Website rebuilds, conversion path simplification, MVP planning, and app pathway guidance are core parts of the work."
  },
  {
    question: "What happens on the rebuild call?",
    answer:
      "We identify the structural gap, clarify the path, and define the next practical move so you stop circling and start rebuilding with precision."
  },
  {
    question: "What makes this different from ordinary consulting?",
    answer:
      "You are not handed a pile of advice and sent away. This is live, psychologically attuned rebuild work that creates movement while you are still in the room."
  }
] as const;

export const sharePrompt = `I just found a diagnostic that puts language to why strong projects still stall: The 7 Structural Gaps Behind Project Collapse. Which one feels most active in our business right now?`;

export type ServicePageContent = {
  slug: string;
  keyword: string;
  title: string;
  navTitle: string;
  description: string;
  answer: string;
  opening: string;
  problem: string;
  visualImage: string;
  visualAlt: string;
  accent: string;
  pullQuote: string;
  editorialLabels: string[];
  feelsLike: string[];
  actuallyHappening: string[];
  symptoms: string[];
  whatRickDoes: string[];
  whoItIsFor: string[];
  whatChanges: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const servicePages: Record<string, ServicePageContent> = {
  "digital-transformation-consultant": {
    slug: "digital-transformation-consultant",
    keyword: "digital transformation consultant",
    title: "Digital Transformation Consultant for Founders and Small Businesses",
    navTitle: "Digital Transformation Consulting",
    description:
      "Rick helps businesses rebuild underlying systems, structure, pathways, and digital architecture so growth becomes coherent.",
    answer:
      "If the business feels harder to operate than it should, the issue is usually structural, not motivational. Rick helps founders and small business owners rebuild the systems, pathways, decision architecture, and digital layers beneath the mission so growth becomes coherent again.",
    opening:
      "If the business feels harder to operate than it should, the issue is usually structural, not motivational. Rick helps founders and small business owners rebuild the systems, pathways, decision architecture, and digital layers beneath the mission so growth becomes coherent again.",
    problem:
      "Most small businesses do not need more software. They need a cleaner structure, clearer sequencing, and a business model that can support the mission without constant drag.",
    visualImage: "/rick/rick-city-blue.png",
    visualAlt: "Rick Broider standing in a city setting",
    accent: "from-electric-400/30 via-cyan-300/10 to-transparent",
    pullQuote: "Growth stops feeling coherent when the digital layer keeps evolving without the structure underneath it.",
    editorialLabels: ["Systems clarity", "Offer architecture", "Digital pathway repair"],
    feelsLike: [
      "The business has momentum, but the operating reality still feels scattered.",
      "Growth creates drag instead of capacity.",
      "The team is busy, but decisions keep looping or stalling.",
      "Tools, offers, systems, and priorities no longer feel aligned."
    ],
    actuallyHappening: [
      "The business structure has not caught up to the next chapter.",
      "Decision pathways, ownership, systems, and digital infrastructure are creating hidden friction.",
      "What feels like stress is often a sequencing problem, not a motivation problem."
    ],
    symptoms: [
      "Your offers, systems, and delivery model no longer match the level of business you are trying to hold.",
      "The team is working hard, but growth still feels messy, expensive, or reactive.",
      "Your digital tools are multiplying faster than clarity."
    ],
    whatRickDoes: [
      "Diagnoses the structural bottleneck beneath the visible stress.",
      "Clarifies the operating path, priorities, and digital sequence.",
      "Rebuilds the systems, website, offer flow, or implementation layer live when needed."
    ],
    whoItIsFor: [
      "Founders whose business has outgrown its original structure.",
      "Small business owners navigating operational complexity without clear tech leadership.",
      "Vision-led operators who want practical movement, not abstract transformation decks."
    ],
    whatChanges: [
      "Decisions get simpler because the architecture is clearer.",
      "The business stops leaking energy through hidden friction.",
      "Growth starts feeling coordinated instead of improvised."
    ],
    faqs: [
      {
        question: "Is this only about software?",
        answer:
          "No. The digital layer matters, but the work also includes offers, pathways, workflows, ownership, and the business model beneath them."
      },
      {
        question: "Can this include live implementation?",
        answer:
          "Yes. When the right move is rebuilding rather than advising, Rick works live with you so the business actually changes while the clarity is fresh."
      }
    ],
    related: [
      "website-development-consultant",
      "ai-consultant-for-small-business",
      "fractional-cto-for-non-technical-founders"
    ]
  },
  "website-development-consultant": {
    slug: "website-development-consultant",
    keyword: "website development consultant",
    title: "Website Development Consultant for Businesses That Need More Than a Redesign",
    navTitle: "Website Development Consultant",
    description:
      "This is not just aesthetics. It is about rebuilding clarity, conversion, structure, messaging, and trust.",
    answer:
      "This is not just about redesigning your site. It is about rebuilding clarity, trust, messaging, and conversion so the website actually supports where the business is going next.",
    opening:
      "This is not just about redesigning your site. It is about rebuilding clarity, trust, messaging, and conversion so the website actually supports where the business is going next. Rick Broider helps founders, consultants, coaches, and small business owners turn confusing, outdated, or underperforming websites into clear, strategically aligned assets that support the next chapter of growth.",
    problem:
      "A weak site does more than look dated. It creates confusion. It slows trust. It makes your offer harder to understand. It weakens conversion. And it often becomes the public face of a business that has already outgrown its old shape.",
    visualImage: "/rick/rick-car-burgundy.png",
    visualAlt: "Rick Broider portrait in a burgundy shirt",
    accent: "from-amber-300/25 via-rose-300/10 to-transparent",
    pullQuote: "A website should lower friction, raise trust, and help the right person feel oriented within seconds.",
    editorialLabels: ["Messaging clarity", "Conversion structure", "Trust by design"],
    feelsLike: [
      "The site looks fine but does not convert.",
      "The message is vague or outdated.",
      "The business evolved but the site did not.",
      "People land there and still do not know what you really do.",
      "The site feels disconnected from the real value of the business.",
      "You keep meaning to fix it, but the project stays stuck, fuzzy, or half-finished."
    ],
    actuallyHappening: [
      "Most underperforming websites are not failing because of one design issue.",
      "They are failing because the structure beneath the site is unclear.",
      "That usually means the positioning, offer hierarchy, user path, messaging, call to action, trust sequence, or the way the business has changed without the site catching up is off."
    ],
    symptoms: [
      "The site looks acceptable, but it does not create conviction.",
      "You struggle to explain what you do quickly and clearly.",
      "Traffic or referrals arrive, but the conversion path feels thin, confusing, or emotionally flat."
    ],
    whatRickDoes: [
      "Clarifies the buyer journey, page structure, and decision path.",
      "Rebuilds messaging, hierarchy, and conversion architecture around trust.",
      "Creates or guides a website that matches the next chapter of the business."
    ],
    whoItIsFor: [
      "Businesses with half-built, outdated, or misaligned websites.",
      "Founders whose positioning has evolved beyond what the current site can hold.",
      "Experts who need the site to feel credible, calm, and conversion-ready."
    ],
    whatChanges: [
      "Visitors understand the value faster.",
      "The site feels more aligned with the caliber of work you actually do.",
      "The website becomes a strategic asset instead of a quiet liability."
    ],
    faqs: [
      {
        question: "Is this only for full rebuilds?",
        answer:
          "No. Some businesses need a full rebuild, while others need sharper messaging, cleaner structure, and a stronger conversion pathway."
      },
      {
        question: "Can you help even if I already have a designer or developer?",
        answer:
          "Yes. Rick can guide the architecture and messaging layer so the build team is working from a clearer strategy."
      }
    ],
    related: [
      "digital-transformation-consultant",
      "mvp-consultant",
      "ai-consultant-for-small-business"
    ]
  },
  "mvp-consultant": {
    slug: "mvp-consultant",
    keyword: "MVP consultant",
    title: "MVP Consultant for Non-Technical Founders and Early-Stage Builders",
    navTitle: "MVP Consultant",
    description:
      "Clarify scope, user flow, next steps, and what to build before wasting money.",
    answer:
      "Before you build an MVP, you need clarity on what should exist, what should wait, and what the user actually needs. Rick helps non-technical founders scope the right first version so they do not burn time and money building the wrong thing.",
    opening:
      "Before you build an MVP, you need clarity on what should exist, what should wait, and what the user actually needs. Rick helps non-technical founders scope the right first version so they do not burn time and money building the wrong thing.",
    problem:
      "App ideas often collapse under premature development, vague scope, or technical decisions made before the product logic is mature enough to support them.",
    visualImage: "/rick/rick-selfie-parking.jpg",
    visualAlt: "Rick Broider taking a casual outdoor selfie",
    accent: "from-indigo-400/30 via-electric-400/10 to-transparent",
    pullQuote: "Before you build faster, you need the product path to become simpler, safer, and more honest.",
    editorialLabels: ["Scope discipline", "Founder translation", "Build sequence"],
    feelsLike: [
      "The idea is real, but the product path still feels foggy.",
      "You are unsure what belongs in version one.",
      "Developer questions are showing up before the product logic is ready.",
      "The budget risk feels higher because the scope is still vague."
    ],
    actuallyHappening: [
      "The product concept has not been translated into a practical build sequence yet.",
      "Scope, user flow, and decision logic are still carrying too much ambiguity.",
      "Without that clarity, development gets expensive fast."
    ],
    symptoms: [
      "You have a strong concept, but no trustworthy sequencing.",
      "Developers are asking questions you are not equipped to answer yet.",
      "The budget risk feels high because the path still feels foggy."
    ],
    whatRickDoes: [
      "Clarifies the product promise, user flow, and version-one scope.",
      "Translates vision into practical build decisions for non-technical founders.",
      "Helps you avoid overbuilding, wrong sequencing, and expensive ambiguity."
    ],
    whoItIsFor: [
      "Founders with a product idea but no internal technical leader.",
      "Early-stage builders trying to scope a first release responsibly.",
      "Businesses exploring a digital product extension without wasting capital."
    ],
    whatChanges: [
      "The concept becomes clearer and more buildable.",
      "You can speak to developers with more precision and less fog.",
      "The next investment decision gets safer."
    ],
    faqs: [
      {
        question: "Do I need wireframes before we start?",
        answer:
          "No. If anything, the work often begins before wireframes so the product logic can become clear before design and development accelerate."
      },
      {
        question: "Is this useful if I am still validating the idea?",
        answer:
          "Yes. Clarifying the MVP often improves validation because it sharpens what problem the product is actually solving."
      }
    ],
    related: [
      "fractional-cto-for-non-technical-founders",
      "website-development-consultant",
      "digital-transformation-consultant"
    ]
  },
  "ai-consultant-for-small-business": {
    slug: "ai-consultant-for-small-business",
    keyword: "AI consultant for small business",
    title: "AI Consultant for Small Business Owners Who Want Clarity, Not Noise",
    navTitle: "AI Consultant for Small Business",
    description:
      "Use AI selectively and strategically where it adds leverage and human-centered value.",
    answer:
      "Most small businesses do not need more AI tools. They need better judgment about where AI creates leverage, where it creates noise, and how to use it without losing clarity or trust.",
    opening:
      "Most small businesses do not need more AI tools. They need better judgment about where AI creates leverage, where it creates noise, and how to use it without losing clarity or trust.",
    problem:
      "Many businesses are being pushed toward AI before their offers, workflows, or customer experience are clear enough to benefit from it.",
    visualImage: "/rick/rick-patio-charcoal.png",
    visualAlt: "Rick Broider outdoors in a charcoal shirt",
    accent: "from-cyan-300/25 via-indigo-400/10 to-transparent",
    pullQuote: "The useful question is not whether AI is available. It is whether it serves clarity, capacity, and human trust.",
    editorialLabels: ["Human-centered AI", "Practical leverage", "Noise reduction"],
    feelsLike: [
      "You are hearing about AI everywhere, but the path still feels noisy.",
      "Experiments create output without stronger decisions.",
      "You want leverage, but not more complexity.",
      "You do not want the business to lose trust or voice."
    ],
    actuallyHappening: [
      "The business needs discernment, not more tools.",
      "AI only helps when the workflow, messaging, and customer experience are clear enough to use it well.",
      "Without that clarity, AI becomes another layer of distraction."
    ],
    symptoms: [
      "You are experimenting with AI, but results feel fragmented or underwhelming.",
      "Teams are producing more output without stronger decisions.",
      "You want leverage, not another layer of complexity."
    ],
    whatRickDoes: [
      "Identifies the workflows where AI creates real practical lift.",
      "Filters out hype and keeps the implementation human-centered.",
      "Designs small, useful systems that support clarity, speed, and capacity."
    ],
    whoItIsFor: [
      "Small business owners who want selective AI adoption with real judgment.",
      "Founders who need senior guidance before embedding AI into core workflows.",
      "Service businesses looking for leverage without losing trust or voice."
    ],
    whatChanges: [
      "AI stops being a distraction and becomes a tool with boundaries.",
      "The business gains leverage without diluting the human experience.",
      "Implementation choices feel cleaner, safer, and more useful."
    ],
    faqs: [
      {
        question: "Will this push us toward using AI everywhere?",
        answer:
          "No. The point is discernment. Some parts of the business should be accelerated. Others should stay human because trust and nuance matter more."
      },
      {
        question: "Can AI work be combined with website or systems rebuilding?",
        answer:
          "Yes. It often works best when AI decisions are made inside a broader rebuild of messaging, workflow, or digital architecture."
      }
    ],
    related: [
      "digital-transformation-consultant",
      "website-development-consultant",
      "fractional-cto-for-non-technical-founders"
    ]
  },
  "fractional-cto-for-non-technical-founders": {
    slug: "fractional-cto-for-non-technical-founders",
    keyword: "fractional CTO for non-technical founders",
    title: "Fractional CTO Guidance for Non-Technical Founders",
    navTitle: "Fractional CTO Guidance",
    description:
      "High-level technical guidance without premature overhead.",
    answer:
      "This is for non-technical founders who need senior technical direction without the cost or complexity of hiring a full-time CTO too early.",
    opening:
      "This is for non-technical founders who need senior technical direction without the cost or complexity of hiring a full-time CTO too early.",
    problem:
      "Technical decisions become expensive when non-technical founders are asked to scope, evaluate, and sequence product or platform work without a senior translator in the room.",
    visualImage: "/rick/rick-portrait-garden.jpg",
    visualAlt: "Rick Broider portrait in a garden setting",
    accent: "from-sky-300/25 via-electric-400/10 to-transparent",
    pullQuote: "Founders need a technical translator they can trust before product complexity starts choosing the roadmap for them.",
    editorialLabels: ["Senior guidance", "Architecture judgment", "Founder-side support"],
    feelsLike: [
      "Technical conversations feel opaque or hard to evaluate.",
      "Vendors or developers are effectively defining the roadmap.",
      "You need senior judgment, but not a full executive hire yet.",
      "Build decisions feel expensive because sequencing is unclear."
    ],
    actuallyHappening: [
      "The business needs founder-side technical judgment before product complexity compounds.",
      "Architecture, sequencing, and tradeoffs are being decided without enough trusted translation.",
      "That raises both cost and risk."
    ],
    symptoms: [
      "You are relying on vendors or developers to define the roadmap for you.",
      "You cannot easily tell which build decisions matter now versus later.",
      "You need strategic technical thinking but are not ready for a full executive hire."
    ],
    whatRickDoes: [
      "Clarifies architecture decisions and build sequencing.",
      "Translates technical tradeoffs into practical founder-level choices.",
      "Supports product direction, vendor conversations, and implementation judgment."
    ],
    whoItIsFor: [
      "Non-technical founders building products or digital infrastructure.",
      "Businesses navigating software decisions without trusted internal leadership.",
      "Teams that need senior technical perspective on a flexible basis."
    ],
    whatChanges: [
      "Technical conversations stop feeling opaque.",
      "Decisions get more strategic and less reactive.",
      "You gain confidence without taking on premature overhead."
    ],
    faqs: [
      {
        question: "Is this the same as hiring a development agency?",
        answer:
          "No. This is strategic guidance and decision support. It can strengthen an agency relationship, but it is not the same thing as outsourcing execution."
      },
      {
        question: "Can this help with app planning too?",
        answer:
          "Yes. MVP scope, product sequencing, and founder-side technical decision support often overlap with this work."
      }
    ],
    related: [
      "mvp-consultant",
      "digital-transformation-consultant",
      "ai-consultant-for-small-business"
    ]
  }
};

export const serviceIndexIntro =
  "Rick helps diagnose the structural issue beneath the stress, then rebuilds the right layer with you so the mission has a stronger business underneath it.";

export const bookingPageSections = {
  whoItsFor: [
    "Founders and small business owners whose business has outgrown its current structure.",
    "People with half-built websites, offers, systems, or app ideas that need real direction.",
    "Visionaries who want live guidance and implementation, not passive advice."
  ],
  whatHappens: [
    "We identify the structural gap behind the visible stress.",
    "We clarify the path, sequence, and next practical move.",
    "You leave with sharper direction and a more grounded plan."
  ],
  whatToBring: [
    "The current reality, even if it feels messy.",
    "The business, website, offer, or product tension you keep circling.",
    "Any relevant links or notes that help us see the pattern faster."
  ],
  whatYouLeaveWith: [
    "A more accurate diagnosis.",
    "A clearer rebuild path.",
    "Relief, momentum, and the next step made visible."
  ]
};

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/the-7-structural-gaps-behind-project-collapse", label: "Diagnostic" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" }
] as const;

export const defaultCta = {
  label: "Book Your Rebuild Call",
  href: BOOKING_URL
};
