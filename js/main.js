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
            ${item.number}
        </div>
        <div class = "cardHeader">
            ${item.header}
        </div>
        <div class = "cardSubHeader">
            ${item.subheader}
        </div>
    </div>
`);

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

renderList("marketCard", homepageData.marketCard, (item, index, array) => `
    ${
        index === array.length - 1
            ? `
                <div class="market-grid-card market-grid-card--view-all">
                    <div class="explore">
                        View all regions ${icons[item.arrow]}
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
                            <span class="countryName">
                                ${item.country}
                            </span>

                            <span class="opportunities">
                                ${item.opportunities}
                            </span>
                        </div>

                        <div class="explore">
                            Explore ${icons[item.arrow]}
                        </div>
                    </div>
                </div>
            `
    }
`)

const marketTab = document.querySelector(".market-tab");
const marketTabs = marketTab.querySelectorAll("span");

marketTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Active tab change
        marketTabs.forEach((item) => {
            item.classList.remove("active");
        });

        tab.classList.add("active");


        // Whole tab fluctuate
        marketTab.classList.remove("fluctuate");

        // Animation ko restart karne ke liye
        void marketTab.offsetWidth;

        marketTab.classList.add("fluctuate");
    });

});