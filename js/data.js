const homepageData = {
    navLinks: [
        { label: "Tenders", href: "/pages/tenders/tenderlisting.html", hasChevron: true },
        { label: "About us", href: "#" },
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
  ]
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