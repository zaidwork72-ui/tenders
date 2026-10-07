const homepageData = {
    navLinks: [
        { label: "Latest tenders", href: "/pages/tenders/tenderlisting.html" },
        { label: "About us", href: "/pages/about.html" },
        { label: "Pricing", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Contact us", href: "#" }
    ],
      footerColumns: [
    {
      title: "Product",
      links: ["Advanced search", "Search & Filter", "Saved Searches", "Tender Alerts", "Pricing"]
    },
    {
      title: "TENDERS",
      links: ["Europe", "Middle East", "North America", "Asia-Pacific", "Africa", "Latin America"]
    },
    {
      title: "Company",
      links: ["About", "Support", "Sitemap", "Privacy Policy", "Terms of Service"]
    }
  ],
  searchBar: [
    {
      downIcon: "blueChevron",
      searchIcon: "searchIcon"
    },
  ],
  containerCards: [
    {
        icons: "searchv1",
        number: "01",
        header: "Search and refine",
        subheader: "Find tenders matching your requirements."
    },
    {
        icons: "priview",
        number: "02",
        header: "Preview and evaluate",
        subheader: "Review key details before spending a credit."
    },
    {
        icons: "save",
        number: "03",
        header: "Save your search",
        subheader: "Save up to 5 searches and discover relevant tenders from your dashboard."
    },
    {
        icons: "access",
        number: "04",
        header: "Access when ready",
        subheader: "Use 1 credit to access the full tender."
    }
  ],
  stats: [
    { number: "240", title: "Countries", icons: "statWorld" },
    { number: "1M+", title: "Government purchasers", icons: "statUser" },
    { number: "70K+", title: "Tenders & RFPs added daily", icons: "statFile" },
    { number: "Every 4 hours", title: "Data updates", icons: "statHour" }
  ],
  whyCards: [
    {
      icon: "fresh", 
      header: "Fresh opportunities",
      subheader: "New tenders from procurement sources worldwide."
    },
    {
      icon: "evaluate",
      header: "Evaluate before you pay",
      subheader: "Preview key details before spending a credit."
    },
    {
      icon: "pay",
      header: "Pay when you're ready",
      subheader: "Use 1 credit to access the full tender when ready.",
    },
    {
      icon: "built",
      header: "Built for action",
      subheader: "Save, track, download and share tenders with ease.",
    },
  ],
    technology: [
    {
      icon: "fresh", 
      header: "Progressive Web Application",
      subheader: "A fast, responsive experience designed to make tender information accessible across devices."
    },
    {
      icon: "evaluate",
      header: "Apache Solr search",
      subheader: "Powerful search infrastructure helps refine preferences and surface relevant opportunities faster."
    },
    {
      icon: "pay",
      header: "Faster delivery with CDN",
      subheader: "Content delivery infrastructure helps make tender information available quickly, wherever you are.",
    }
  ],
  trust: [
    {
      Image: "assets/trusted-logo/fedex.svg",
      src: "fedEx",
    },
    {
      Image: "assets/trusted-logo/tata.svg",
      src: "tata",
    },
    {
      Image: "assets/trusted-logo/levis.svg",
      src: "levis",
    },
    {
      Image: "assets/trusted-logo/coke.svg",
      src: "coke",
    },
    {
      Image: "assets/trusted-logo/google.svg",
      src: "google",
    },
    {
      Image: "assets/trusted-logo/icici.svg",
      src: "icici",
    },
  ],
alertcard: [
  {
    type: "problem",
    title: "The common problem",
    iconHeader: "alert",
    iconItem: "alertCircle",
    points: [
      "Recurring fees, even when you don't find relevant tenders.",
      "Pay before knowing if a tender is worth pursuing.",
      "Limited flexibility for occasional users.",
      "Higher commitment when you only need a few tenders."
    ]
  },
  {
    type: "solution",
    title: "Tenders and Bids",
    iconHeader: "greenBulb",          // apne icons object ka naam daalo
    iconItem: "greenCircle",     // apne icons object ka naam daalo
    points: [
      "No subscription or recurring fees.",
      "Preview key details before paying.",
      "Use credits only for tenders you choose.",
      "Greater control over your budget."
    ]
  }
],
}



const viewAllItem = { arrow: "longArrow" };

const marketTabData = {
  regions: {
    viewAll: "View all regions",
    items: [
      { Image: "assets/images/regionmaps/europeHigh.svg", country: "Europe",        opportunities: "97,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/asiaHigh.svg", country: "Asia",          opportunities: "85,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/middleEastHigh.svg", country: "Middle East",   opportunities: "87,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/northAmericaHigh.svg", country: "North America", opportunities: "50,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/oceaniaHigh.svg", country: "Oceania",       opportunities: "67,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/africaHigh.svg", country: "Africa",        opportunities: "25,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/regionmaps/latinAmericaHigh.svg", country: "Latin America", opportunities: "7,850 opportunities",  arrow: "longArrow" },
    ],
  },
  industries: {
    viewAll: "View all industries",
    items: [
      { Image: "assets/images/map.svg", country: "Energy",             opportunities: "97,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Healthcare",         opportunities: "85,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Infrastructure",     opportunities: "87,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Technology",         opportunities: "50,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Agriculture",        opportunities: "67,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Manufacturing",      opportunities: "25,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/map.svg", country: "Financial Services", opportunities: "7,850 opportunities",  arrow: "longArrow" },
    ],
  },
  countries: {
    viewAll: "View all countries",
    items: [
      { Image: "assets/images/countrymaps/india2023High.svg", country: "India",          opportunities: "97,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/usaHigh.svg", country: "United States",  opportunities: "85,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/germanyHigh.svg", country: "Germany",        opportunities: "87,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/uaeHigh.svg", country: "UAE",            opportunities: "50,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/japanHigh.svg", country: "Japan",          opportunities: "67,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/australiaHigh.svg", country: "Australia",      opportunities: "25,850 opportunities", arrow: "longArrow" },
      { Image: "assets/images/countrymaps/brazilHigh.svg", country: "Brazil",         opportunities: "7,850 opportunities",  arrow: "longArrow" },
    ],
  },
};


const locationData = [
  {
    country : "India",
    states: [
      { name: "Maharashtra", selected: true},
      { name: "Delhi", selected: true},
      { name: "Karnataka", selected: false},
      {name: "Tamil Nadu", selected: false},
      {name: "Gujarat", selected: false}
    ],
    more: "+95 more"
  },
  {
    country : "United States",
    states: [
      {name: "California", selected: true},
      {name: "New York", selected: true},
      {name: "Texas", selected: false},
      {name: "Florida", selected: false}
    ],
    more: "+46 more"
  },
  {
    country : "UAE",
    states: [
      {name: "Dubai", selected: true},
      {name: "Abu Dhabi", selected: false},
      {name: "Sharjah", selected: false}
    ],
    more: "+4 more"
  }
]


const tenderListingPage = {
  searchQuery: "Medical equipment government tenders in Germany",

  activeFilter: [
    { name: "Medical Equipment", active: true },
    { name: "Germany", active: true },
    { name: "Government Buyers", active: true },
    { name: "All Values", active: false },
    { name: "All Deadlines", active: false },
  ],

  resultsCount: 847,

  regions: [
    { name: "Europe", count: "3,842" },
    { name: "Middle East", count: "1,291" },
    { name: "North America", count: "2,105" },
    { name: "Asia-Pacific", count: "2,887" },
    { name: "Africa", count: "984" },
    { name: "Latin America", count: "731" },
  ],

  industries: [
    { name: "Information Technology", count: "4,210" },
    { name: "Construction & Works", count: "3,891" },
    { name: "Healthcare", count: "2,740" },
    { name: "Energy", count: "1,984" },
    { name: "Defence & Security", count: "1,582" },
    { name: "Logistics & Transport", count: "1,388" },
    { name: "Water & Utilities", count: "1,120" },
  ],

  tenderTypes: [
    { name: "Supply" },
    { name: "Services" },
    { name: "Works" },
    { name: "Consulting" },
    { name: "Framework" },
  ],

  tenders: [
    {
      flag: "germany", country: "Germany", type: "SUPPLY", industry: "Healthcare",
      status: "open", value: "EUR 2.4M", closes: "2025-02-15", urgent: false,
      title: "Supply and Installation of Medical Imaging Equipment — MRI and CT Systems",
      buyer: "Bundesministerium für Gesundheit · Berlin",
      desc: "Procurement of high-field MRI systems (1.5T and 3T) and multi-slice CT scanners for four federal hospital facilities. Includes installation, commissioning, and five-year maintenance contracts.",
      ref: "BMG/2024/MED/4821", published: "2024-12-18",
    },
    {
      flag: "uae", country: "United Arab Emirates", type: "WORKS", industry: "Information Technology",
      status: "open", value: "USD 23.1M", closes: "2025-03-10", urgent: false,
      title: "Smart City Digital Infrastructure Programme — Phase II",
      buyer: "Dubai Municipality · Dubai",
      desc: "Design, supply and implementation of smart city digital infrastructure including IoT sensor networks, city-wide data platform, intelligent traffic management systems, and integrated command and control centre.",
      ref: "DM/ICT0/2024/0934", published: "2024-12-20",
    },
    {
      flag: "uk", country: "United Kingdom", type: "SERVICES", industry: "Information Technology",
      status: "closing", closingIn: "10D", value: "GBP 5.1M", closes: "2025-01-28", urgent: true,
      title: "Enterprise Tax Management Software — Licensing and Support Services",
      buyer: "HM Revenue & Customs · London",
      desc: "Multi-year enterprise software licensing for tax calculation and case management systems, including maintenance releases, technical support, and bespoke development capacity.",
      ref: "HMRC/ICT/2024/7702", published: "2024-12-15",
    },
    {
      flag: "saudi", country: "Saudi Arabia", type: "WORKS", industry: "Energy",
      status: "open", value: "USD 49.3M", closes: "2025-03-20", urgent: false,
      title: "Solar PV Power Generation Facility — 50MW Grid-Connected",
      buyer: "NEOM Company · Tabuk",
      desc: "EPC contract for a 50MW ground-mounted photovoltaic power plant connected to the NEOM internal grid. Includes land preparation, PV module supply, mounting structure, grid interconnection substation and SCADA systems.",
      ref: "NEOM/ENG/2024/2250", published: "2024-12-10",
    },
    {
      flag: "australia", country: "Australia", type: "FRAMEWORK", industry: "Defence & Security",
      status: "closing", closingIn: "4D", value: "AUD 8.9M", closes: "2025-01-22", urgent: true,
      title: "Protective and Safety Equipment — National Standing Offer",
      buyer: "Department of Defence · Canberra",
      desc: "Establishment of a national standing offer arrangement for the supply of personal protective equipment, safety apparel and associated accessories to ADF and Defence civilian personnel across all states and territories.",
      ref: "CASG/EQ/2024/3318", published: "2024-12-22",
    },
    {
      flag: "canada", country: "Canada", type: "SERVICES", industry: "Information Technology",
      status: "open", value: "CAD 12M", closes: "2025-02-08", urgent: false,
      title: "Cloud Computing and Managed Infrastructure Services",
      buyer: "Shared Services Canada · Ottawa",
      desc: "Managed cloud infrastructure services for Government of Canada workloads, including migration support, security operations, and 24/7 managed services under Protected B security classification.",
      ref: "SSC/ICT/2024/5590", published: "2024-12-17",
    },
    {
      flag: "sa", country: "South Africa", type: "WORKS", industry: "Water & Utilities",
      status: "open", value: "USD 26M", closes: "2025-03-01", urgent: false,
      title: "Bulk Water Treatment Plant — Upgrade and Expansion",
      buyer: "eThekwini Metropolitan Municipality · Durban",
      desc: "Civil and mechanical works for the upgrade and capacity expansion of the Wiggins Water Treatment Works, increasing daily treatment capacity from 340 Ml/day to 520 Ml/day.",
      ref: "ETM/WS/2024/8841", published: "2024-12-05",
    },
    {
      flag: "netherlands", country: "Netherlands", type: "CONSULTING", industry: "Information Technology",
      status: "closing", closingIn: "13D", value: "EUR 890K", closes: "2025-01-31", urgent: true,
      title: "Cybersecurity Assessment and Penetration Testing Services",
      buyer: "Ministerie van Justitie en Veiligheid · The Hague",
      desc: "Comprehensive cybersecurity assessment services including penetration testing, red team exercises, vulnerability assessment, and security architecture review for Ministry ICT infrastructure.",
      ref: "MJV/ICT/2024/6650", published: "2024-12-19",
    },
    {
      flag: "singapore", country: "Singapore", type: "SERVICES", industry: "Logistics & Transport",
      status: "open", value: "SGD 31.5M", closes: "2025-04-05", urgent: false,
      title: "Port Logistics Automation — Terminal Operating System Upgrade",
      buyer: "Maritime and Port Authority of Singapore · Singapore",
      desc: "Design, supply, implementation and integration of next-generation Terminal Operating System (TOS) for Tuas Port Phase II, including automated container tracking, AI-assisted resource allocation, and digital twin capability.",
      ref: "MPA/IT/2024/1182", published: "2024-12-12",
    },
    {
      flag: "brazil", country: "Brazil", type: "SUPPLY", industry: "Healthcare",
      status: "open", value: "USD 9.7M", closes: "2025-02-20", urgent: false,
      title: "National Immunisation Programme — Vaccine Cold Chain Equipment",
      buyer: "Ministério da Saúde · Brasília",
      desc: "Supply of cold chain equipment for the National Immunisation Programme including ultra-low temperature freezers, pharmaceutical refrigerators, transport coolers and associated temperature monitoring systems for 850 health facilities.",
      ref: "MS/SVS/2024/9940", published: "2024-12-08",
    },
  ],
};