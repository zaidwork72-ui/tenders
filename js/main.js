function mount(id, html) {
    document.getElementById(id).outerHTML = html;
}

function renderList(id, items, template) {
    const root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = items.map(template).join("");
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  if (header && typeof renderNavbar === 'function') {
    header.innerHTML = renderNavbar();
  }

  const footer = document.getElementById('site-footer');
  if (footer && typeof renderFooter === 'function') {
    footer.innerHTML = renderFooter();
  }

  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');

  if (navbar && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target)) {
        navbar.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

const heroSection = document.querySelector(".hero");
if (heroSection) {
    const glow = heroSection.querySelector(".hero__glow");

    const updateHeroGlow = (event) => {
        if (!glow) return;

        const rect = heroSection.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        heroSection.style.setProperty("--hero-glow-x", `${x}%`);
        heroSection.style.setProperty("--hero-glow-y", `${y}%`);
    };

    heroSection.addEventListener("pointerenter", (event) => {
        if (!glow) return;
        glow.style.transition = "none"; 
        updateHeroGlow(event);
        glow.style.opacity = "0.95";
        requestAnimationFrame(() => {
            glow.style.transition = "";
        });
    });

    heroSection.addEventListener("pointermove", updateHeroGlow);

    heroSection.addEventListener("pointerleave", () => {
        if (!glow) return;
        glow.style.opacity = "0";
    });
}

const searchIcon = document.querySelector(".search-bar__icon");
if (searchIcon) searchIcon.innerHTML = icons.search;

renderList("searchBar", homepageData.searchBar, (item) => `
    <div class="upSearch">
        <div class="country-dropdown">
            <button class="country-dropdown__trigger" type="button">
                <span class="country-dropdown__value">All Countries</span>
                ${icons[item.downIcon]}
            </button>

            <div class="country-dropdown__menu">
                <button class="country-dropdown__option active" type="button">
                    All Countries
                </button>

                <button class="country-dropdown__option" type="button">
                    America
                </button>

                <button class="country-dropdown__option" type="button">
                    Saudi
                </button>

                <button class="country-dropdown__option" type="button">
                    Dubai
                </button>

                <button class="country-dropdown__option" type="button">
                    Kuwait
                </button>
            </div>
        </div>
        <div class = "line"></div>
        <div class = "searchArea">
            ${icons[item.searchIcon]}
            <input type = "text" placeholder = "What are you looking for?">
            </div>
            <div class = button>
            <a href = "#" class = "accent-btn">
                Find Opportunities
            </a>
        </div>
    </div>
    <div class = "divider"></div>
    <div class = bottomSearch>
        Try: Solar projects in Saudi Arabia above $1M, closing in the next 90 days
    </div>
`);

document.addEventListener("click", (e) => {
    const dropdown = e.target.closest(".country-dropdown");

    if(!dropdown){
        document.querySelectorAll(".country-dropdown.is-open").forEach(item => {
            item.classList.remove("is-open")
        });
        return;
    }

    const trigger = e.target.closest(".country-dropdown__trigger");
    if(trigger){
        document.querySelectorAll(".country-dropdown.is-open").forEach(item => {
            if (item !== dropdown){
                item.classList.remove("is-open")
            }
        });
        dropdown.classList.toggle("is-open")
        return;
    }
        const option = e.target.closest(".country-dropdown__option");

    if (option) {
        const value = option.textContent.trim();
        dropdown.querySelector(
            ".country-dropdown__value"
        ).textContent = value;
        dropdown
            .querySelectorAll(".country-dropdown__option")
            .forEach(item => {
                item.classList.remove("active");
            });
        option.classList.add("active");
        dropdown.classList.remove("is-open");
        console.log("Selected country:", value);
    }
})

renderList("container-cards", homepageData.containerCards, (item) => `
    <div class = "card">
        <div class = "num">
            ${icons[item.icons]}
            <div class = "fancynum">
                ${item.number}
            </div>
        </div>
        <div class = "cardHeader">
            ${item.header}
        </div>
        <div class = "cardSubHeader">
            ${item.subheader}
        </div>
    </div>
`);

const cardsWrap = document.getElementById("cards-wrap");
const showCards = () => cardsWrap.classList.add("is-visible");

if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) {
            showCards();
            obs.disconnect();
        }
    }, { threshold: 0.25 }).observe(cardsWrap);
} else {
    showCards();
}

renderList("stats", homepageData.stats, (item) =>
`
    <div class = "stat-card">
        <div class = "statNum">
            ${item.number}
        </div>
        <div class = "statTitle">
            ${item.title}
        </div>
    </div>
`       
)

renderList("whyCards", homepageData.whyCards, (item) => `
    <div class = "why-inner-card">
        <div class = "card-icon">
            ${icons[item.icon]}
        </div>
        <div class = "text">
            <div class = "cardHeader">
                ${item.header}
            </div>
            <div class = "cardSubHeader">
                ${item.subheader}
            </div>
        </div>
    </div>
`)

function renderMarket(tabKey) {
  const { items, viewAll } = marketTabData[tabKey];
  const list = [...items, viewAllItem]; // last item = view all card

  renderList("marketCard", list, (item, index, array) => `
    ${
      index === array.length - 1
        ? `
          <div class="market-grid-card market-grid-card--view-all">
              <div class="explore">
                  ${viewAll} ${icons[item.arrow]}
              </div>
          </div>
        `
        : `
          <div class="market-grid-card">
              <div class="market-img">
                  <img src="${item.Image}" alt="${item.country}">
              </div>
              <div class="country-name">
                  <div class="info">
                      <span class="countryName">${item.country}</span>
                      <span class="opportunities">${item.opportunities}</span>
                  </div>
                  <div class="explore">
                      Explore ${icons[item.arrow]}
                  </div>
              </div>
          </div>
        `
    }
  `);

  // grid ko halka fade-in dene ke liye
  const grid = document.getElementById("marketCard");
  grid.classList.remove("swap");
  grid.querySelectorAll(".market-grid-card").forEach((card, i) => {
    card.style.setProperty("--i", i);
  });
  void grid.offsetWidth;
  grid.classList.add("swap");
}

// ---------- TABS ----------
const marketTab = document.querySelector(".market-tab");
const marketTabs = marketTab.querySelectorAll("span");
const tabKeys = ["regions", "industries", "countries"];

// sliding underline (HTML mein kuch add karne ki zaroorat nahi)
const indicator = document.createElement("i");
indicator.className = "market-tab-indicator";
marketTab.appendChild(indicator);

function moveIndicator(tab) {
  indicator.style.width = tab.offsetWidth + "px";
  indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
}

const getActiveTab = () => marketTab.querySelector("span.active");

// first load: bina animation ke sahi jagah par baithao
moveIndicator(getActiveTab());
requestAnimationFrame(() =>
  requestAnimationFrame(() => indicator.classList.add("ready"))
);
document.fonts?.ready.then(() => moveIndicator(getActiveTab()));
window.addEventListener("resize", () => moveIndicator(getActiveTab()));

marketTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("active")) return;

    marketTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    moveIndicator(tab);
    renderMarket(tabKeys[i]);
  });
});

renderMarket("regions");

// first load
renderMarket("regions");

renderList("trust", homepageData.trust,(item) => `
    <div class = "trust-logo-img">
        <img src="${item.Image}" alt = "${item.src}">
    </div>
`)