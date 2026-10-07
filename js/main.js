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

if (cardsWrap) {
    const arrows = cardsWrap.querySelector(".flow-arrows");
    const arrowMotion = document.getElementById("arrow-motion");
    const arrowHead = document.getElementById("arrow-head");

    const DRAW_TIME = 6000;
    const HOLD_TIME = 2500;
    const FADE_TIME = 500;

    function playArrow(startDelay) {
        if (!arrows || !arrowMotion) return;

        arrows.classList.remove("play", "fade");
        arrows.style.setProperty("--start", startDelay + "s");
        void arrows.offsetWidth;
        arrows.classList.add("play");
        arrowMotion.beginElementAt(startDelay);

        setTimeout(() => {
            arrows.classList.add("fade");
            setTimeout(() => playArrow(0.3), FADE_TIME + 200);
        }, startDelay * 1000 + DRAW_TIME + HOLD_TIME);
    }

    const showCards = () => {
        cardsWrap.classList.add("is-visible");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (arrowHead) {
                arrowHead.setAttribute("transform", "translate(1028 311) rotate(-38)");
            }
            if (arrows) {
                arrows.classList.add("play");
            }
        } else {
            playArrow(1);
        }
    };

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
}
renderList("stats", homepageData.stats, (item) =>
`
    <div class = "stat-card">
        <div class =  "stat-left">
            <div class = "stat-icon">
                ${icons[item.icons]}
            </div>
        </div>
        <div class = "stat-right">
            <div class = "statNum">
                ${item.number}
            </div>
            <div class = "statTitle">
                ${item.title}
            </div>
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
  const list = [...items, viewAllItem]; 

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

if (marketTab) {
  const marketTabs = marketTab.querySelectorAll("span");
  const tabKeys = ["regions", "industries", "countries"];

  const indicator = document.createElement("i");
  indicator.className = "market-tab-indicator";
  marketTab.appendChild(indicator);

  function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
  }

  const getActiveTab = () => marketTab.querySelector("span.active");

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
}

renderList("bottomCards", homepageData.alertcard, (item, i) => `
  ${i === 1 ? `<div class="arrow-circle">${icons.whiteChevron}</div>` : ""}
  <div class="alert-card ${item.type}">
    <div class="alert-top">
      ${icons[item.iconHeader]}
      <span>${item.title}</span>
    </div>
    <ul class="alert-bottom">
      ${item.points.map(p => `
        <li>${icons[item.iconItem]}<span>${p}</span></li>
      `).join("")}
    </ul>
  </div>
`)

function renderTrustMarquee() {
    const root = document.getElementById("trust");
    if (!root) return;

    const card = (item) => `
        <div class="trust-logo-img">
            <img src="${item.Image}" alt="${item.src}">
        </div>`;

    root.innerHTML = `<div class="trust-track"><div class="trust-group">${homepageData.trust.map(card).join("")}</div></div>`;
    const track = root.firstElementChild;
    const group = track.firstElementChild;
    const single = group.innerHTML;

    const repeat = Math.max(1, Math.ceil(root.offsetWidth / group.scrollWidth));
    group.innerHTML = single.repeat(repeat);

    const clone = group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);

    track.style.setProperty("--marquee-duration", (group.scrollWidth / 60) + "s");
}

renderTrustMarquee();

let trustResizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(trustResizeTimer);
    trustResizeTimer = setTimeout(renderTrustMarquee, 200);
});




// =========================================================
// ===== Tender Listing Page: filter / sort / pagination ===
// =========================================================

// Maps each country present in tenderListingPage.tenders to the
// sidebar "Region" group it belongs to. Extend this if new
// countries are added to data.js.
const COUNTRY_REGION_MAP = {
    "Germany": "Europe",
    "United Kingdom": "Europe",
    "Netherlands": "Europe",
    "United Arab Emirates": "Middle East",
    "Saudi Arabia": "Middle East",
    "Australia": "Asia-Pacific",
    "Singapore": "Asia-Pacific",
    "Canada": "North America",
    "South Africa": "Africa",
    "Brazil": "Latin America",
};

// Single source of truth for every filter / sort / pagination control.
const listingState = {
    filters: {
        region: new Set(),
        industry: new Set(),
        type: new Set(),
    },
    closingWithin30: false,
    sortBy: "relevance",
    currentPage: 1,
    pageSize: 10,
};

const SORT_OPTION_MAP = {
    "Relevance": "relevance",
    "Newest": "newest",
    "Closing soon": "closing",
    "Value: High to low": "value",
};

function isTenderListingPage() {
    return typeof tenderListingPage !== "undefined" && !!document.getElementById("tender-list");
}

// Pulls the numeric magnitude out of strings like "EUR 2.4M" or
// "USD 890K" so tenders can be sorted by value regardless of currency.
function parseTenderValue(str) {
    if (!str) return 0;
    const match = String(str).replace(/,/g, "").match(/([\d.]+)\s*([MKB])?/i);
    if (!match) return 0;
    let num = parseFloat(match[1]);
    const suffix = (match[2] || "").toUpperCase();
    if (suffix === "M") num *= 1e6;
    else if (suffix === "K") num *= 1e3;
    else if (suffix === "B") num *= 1e9;
    return num;
}

// The sample dataset's dates are fixed (Dec 2024 - Apr 2025), so
// "today" for the purposes of the demo data is derived from the
// tenders that are already flagged as "closing" (status + closingIn),
// instead of the real wall-clock date — otherwise every tender in
// this fixed dataset would already be in the past. Falls back to the
// real current date if no "closing" tender is present in the data.
function getMockToday() {
    const reference = tenderListingPage.tenders.find((t) => t.status === "closing" && t.closingIn);
    if (reference) {
        const days = parseInt(reference.closingIn, 10) || 0;
        return new Date(new Date(reference.closes).getTime() - days * 86400000);
    }
    return new Date();
}

function getFilteredTenders() {
    const { region, industry, type } = listingState.filters;
    const today = listingState.closingWithin30 ? getMockToday() : null;

    return tenderListingPage.tenders.filter((t) => {
        if (region.size && !region.has(COUNTRY_REGION_MAP[t.country])) return false;
        if (industry.size && !industry.has(t.industry)) return false;
        if (type.size && !type.has(String(t.type || "").toLowerCase())) return false;
        if (today) {
            const daysToClose = (new Date(t.closes) - today) / 86400000;
            if (daysToClose < 0 || daysToClose > 30) return false;
        }
        return true;
    });
}

function getSortedTenders(list) {
    const sorted = list.slice();
    switch (listingState.sortBy) {
        case "newest":
            sorted.sort((a, b) => new Date(b.published) - new Date(a.published));
            break;
        case "closing":
            sorted.sort((a, b) => new Date(a.closes) - new Date(b.closes));
            break;
        case "value":
            sorted.sort((a, b) => parseTenderValue(b.value) - parseTenderValue(a.value));
            break;
        default:
            // "relevance" — keep the original data order
            break;
    }
    return sorted;
}

function getPaginatedTenders(list) {
    const start = (listingState.currentPage - 1) * listingState.pageSize;
    return list.slice(start, start + listingState.pageSize);
}

// Master render: filter -> sort -> paginate -> render (in that order),
// then re-sync every dependent piece of UI from the same state.
function renderListingPage() {
    const filtered = getFilteredTenders();
    const sorted = getSortedTenders(filtered);

    const totalPages = Math.max(1, Math.ceil(sorted.length / listingState.pageSize));
    if (listingState.currentPage > totalPages) listingState.currentPage = totalPages;
    if (listingState.currentPage < 1) listingState.currentPage = 1;

    const pageItems = getPaginatedTenders(sorted);

    renderActiveFilters();
    renderSidebarFilters();
    renderResultsHeader(sorted.length);
    renderTenderCards(pageItems);
    renderResultsFooter(sorted.length, pageItems.length);
    syncListingPanelHeights();
}

// Chips derived from the actual sidebar selections + the "closing
// within 30 days" checkbox. These are on top of (not instead of)
// the original static tags in tenderListingPage.activeFilter.
function buildActiveFilterChips() {
    const chips = [];
    listingState.filters.region.forEach((value) => chips.push({ group: "region", value, label: value }));
    listingState.filters.industry.forEach((value) => chips.push({ group: "industry", value, label: value }));
    listingState.filters.type.forEach((value) => chips.push({
        group: "type",
        value,
        label: value.charAt(0).toUpperCase() + value.slice(1),
    }));
    if (listingState.closingWithin30) {
        chips.push({ group: "closing30", value: "closing30", label: "Closing within 30 days" });
    }
    return chips;
}

// --- Active filter tags ---
// Renders the original static tags from tenderListingPage.activeFilter
// as-is (left untouched, just made removable), plus dynamic chips for
// whatever the sidebar / "closing within 30 days" checkbox actually has
// selected right now.
function renderActiveFilters() {
    const wrap = document.getElementById("active-filter");
    if (!wrap) return;

    const staticChipsHtml = tenderListingPage.activeFilter
      .map(
        (f, index) => `
          <span class="filter-tag ${f.active ? "active" : "inactive"}">
            ${f.name}
            <button type="button" class="remove-filter" aria-label="Remove ${f.name}" data-kind="static" data-index="${index}">
              ${f.active ? icons.blueX : icons.greyX}
            </button>
          </span>
        `
      )
      .join("");

    const dynamicChipsHtml = buildActiveFilterChips()
      .map(
        (c) => `
          <span class="filter-tag active">
            ${c.label}
            <button type="button" class="remove-filter" aria-label="Remove ${c.label}" data-kind="dynamic" data-group="${c.group}" data-value="${c.value}">
              ${icons.blueX}
            </button>
          </span>
        `
      )
      .join("");

    wrap.innerHTML = `
    <span class="label">Active filter mapping:</span>
    ${staticChipsHtml}
    ${dynamicChipsHtml}
  `;

    wrap.querySelectorAll(".remove-filter").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.dataset.kind === "static") {
                tenderListingPage.activeFilter.splice(Number(btn.dataset.index), 1);
                renderActiveFilters();
                syncListingPanelHeights();
                return;
            }

            const { group, value } = btn.dataset;
            if (group === "closing30") {
                listingState.closingWithin30 = false;
                const checkbox = document.getElementById("closing-30");
                if (checkbox) checkbox.checked = false;
            } else {
                listingState.filters[group].delete(value);
            }
            listingState.currentPage = 1;
            renderListingPage();
        });
    });
}

// --- Sidebar: region / industry / tender type checkboxes ---
function renderSidebarFilters() {
    renderList("region-filters", tenderListingPage.regions, (item) => `
    <label class="checkbox-row">
      <span class="left">
        <input type="checkbox" data-group="region" value="${item.name}" ${listingState.filters.region.has(item.name) ? "checked" : ""} />
        <span>${item.name}</span>
      </span>
      <span class="count">${item.count}</span>
    </label>
  `);

    renderList("industry-filters", tenderListingPage.industries, (item) => `
    <label class="checkbox-row">
      <span class="left">
        <input type="checkbox" data-group="industry" value="${item.name}" ${listingState.filters.industry.has(item.name) ? "checked" : ""} />
        <span>${item.name}</span>
      </span>
      <span class="count">${item.count}</span>
    </label>
  `);

    renderList("tender-type-filters", tenderListingPage.tenderTypes, (item) => {
        const value = item.name.toLowerCase();
        return `
    <label class="checkbox-row">
      <span class="left">
        <input type="checkbox" data-group="type" value="${value}" ${listingState.filters.type.has(value) ? "checked" : ""} />
        <span>${item.name}</span>
      </span>
    </label>
  `;
    });

    document
        .querySelectorAll("#region-filters input, #industry-filters input, #tender-type-filters input")
        .forEach((input) => {
            input.addEventListener("change", () => {
                const { group } = input.dataset;
                const { value } = input;
                if (input.checked) listingState.filters[group].add(value);
                else listingState.filters[group].delete(value);
                listingState.currentPage = 1;
                renderListingPage();
            });
        });
}

// --- Results count (top of results panel) ---
function renderResultsHeader(totalCount) {
    const el = document.getElementById("results-count");
    if (el) el.textContent = `${totalCount.toLocaleString()} opportunities found`;
}

// --- Tender cards ---
function renderTenderCards(items) {
    const root = document.getElementById("tender-list");
    if (!root) return;

    if (!items.length) {
        root.innerHTML = `
      <div class="tender-empty-state">
        <p class="tender-empty-title">No tenders found</p>
        <p class="tender-empty-text">Try adjusting or removing your filters.</p>
      </div>
    `;
        return;
    }

    root.innerHTML = items
      .map(
        (t) => `
    <article class="tender-card">

      <!-- Top section -->
      <div class="tender-card-top">

        <!-- Left content -->
        <div class="tender-card-left">

          <div class="tender-meta-line">
            <span class="flag">${icons[t.flag]}</span>
            <span>${t.country}</span>
            
            <span class="tag-pill">${t.type}</span>
            <span>${t.industry}</span>
            ${badgeTemplate(t)}
          </div>

          <h3 class="tender-title">${t.title}</h3>

          <p class="tender-buyer">${t.buyer}</p>

          <p class="tender-desc">${t.desc}</p>

        </div>

        <!-- Right content -->
        <div class="tender-card-right">

          <div class="tender-value">${t.value}</div>

          <div class="tender-closes ${t.urgent ? "urgent" : ""}">
            Closes ${t.closes}
          </div>

          <div class="tender-actions">
            <button class="icon-btn" aria-label="Save tender">
              ${icons.favourite}
            </button>

            <button class="btn-view">
              View ${icons.viewArrow}
            </button>
          </div>

        </div>

      </div>

      <!-- Bottom section -->
      <div class="tender-card-bottom">
        <span class="tender-ref">
          REF: ${t.ref} &nbsp;·&nbsp; Published ${t.published}
        </span>
      </div>

    </article>
  `
      )
      .join("");
}

function badgeTemplate(t) {
    if (t.status === "open") {
        return `<span class="badge open"><span class="dot"></span>OPEN</span>`;
    }
    return `<span class="badge closing"><span class="dot"></span>CLOSING ${t.closingIn}</span>`;
}

// --- Bottom: "Showing results X out of Y" + pagination ---
function renderResultsFooter(totalCount, pageCount) {
    const footer = document.getElementById("results-footer");
    if (!footer) return;

    const totalPages = Math.max(1, Math.ceil(totalCount / listingState.pageSize));
    const current = listingState.currentPage;

    footer.innerHTML = `
    <div class="results-info">Showing results ${pageCount} out of ${totalCount}</div>
    <div class="pagination">
      <button type="button" class="page-btn page-prev" ${current === 1 ? "disabled" : ""}>Previous</button>
      ${buildPageNumbersMarkup(current, totalPages)}
      <button type="button" class="page-btn page-next" ${current === totalPages ? "disabled" : ""}>Next</button>
    </div>
  `;

    const prevBtn = footer.querySelector(".page-prev");
    const nextBtn = footer.querySelector(".page-next");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (listingState.currentPage > 1) {
                listingState.currentPage -= 1;
                renderListingPage();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (listingState.currentPage < totalPages) {
                listingState.currentPage += 1;
                renderListingPage();
            }
        });
    }

    footer.querySelectorAll(".page-num").forEach((btn) => {
        btn.addEventListener("click", () => {
            listingState.currentPage = Number(btn.dataset.page);
            renderListingPage();
        });
    });
}

function buildPageNumbersMarkup(current, totalPages) {
    const pages = [];
    const maxShown = 5;

    if (totalPages <= maxShown + 2) {
        for (let i = 1; i <= totalPages; i += 1) pages.push(i);
    } else {
        pages.push(1);
        const start = Math.max(2, current - 1);
        const end = Math.min(totalPages - 1, current + 1);
        if (start > 2) pages.push("...");
        for (let i = start; i <= end; i += 1) pages.push(i);
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
    }

    return pages
      .map((p) =>
        p === "..."
          ? `<span class="page-ellipsis">...</span>`
          : `<button type="button" class="page-btn page-num ${p === current ? "active" : ""}" data-page="${p}">${p}</button>`
      )
      .join("");
}

// --- Sidebar collapse/expand (per filter group), state-preserving ---
function bindFilterCollapse() {
    document.querySelectorAll(".filter-block").forEach((block) => {
        const title = block.querySelector(".filter-block-title");
        const content = block.querySelector(".filterssss");
        if (!title || !content) return;

        title.addEventListener("click", () => {
            const collapsed = block.classList.toggle("is-collapsed");
            content.style.display = collapsed ? "none" : "";
        });
    });
}

// --- Sort dropdown ---
function bindSortControl() {
    const select = document.querySelector(".sort-control select");
    if (!select) return;

    select.addEventListener("change", () => {
        listingState.sortBy = SORT_OPTION_MAP[select.value] || "relevance";
        listingState.currentPage = 1;
        renderListingPage();
    });
}

// --- "Closing within 30 days" checkbox ---
function bindClosing30Filter() {
    const checkbox = document.getElementById("closing-30");
    if (!checkbox) return;

    checkbox.checked = listingState.closingWithin30;
    checkbox.addEventListener("change", () => {
        listingState.closingWithin30 = checkbox.checked;
        listingState.currentPage = 1;
        renderListingPage();
    });
}

// =========================================================
// Mobile Filter Bottom Sheet
// =========================================================

function renderMobileFilterOptions() {

    const regionRoot = document.getElementById("mobile-region-filters");
    const industryRoot = document.getElementById("mobile-industry-filters");
    const typeRoot = document.getElementById("mobile-type-filters");

    if (!regionRoot || !industryRoot || !typeRoot) return;


    // -----------------------------------------------------
    // Region
    // -----------------------------------------------------
    regionRoot.innerHTML = tenderListingPage.regions.map((item) => `
        <label class="mobile-filter-option">
            <span class="mobile-filter-option__left">
                <input
                    type="checkbox"
                    data-mobile-group="region"
                    value="${item.name}"
                    ${listingState.filters.region.has(item.name) ? "checked" : ""}
                >
                <span>${item.name}</span>
            </span>
            <span class="mobile-filter-option__count">
                ${item.count}
            </span>
        </label>
    `).join("");

    industryRoot.innerHTML = tenderListingPage.industries.map((item) => `
        <label class="mobile-filter-option">
            <span class="mobile-filter-option__left">
                <input
                    type="checkbox"
                    data-mobile-group="industry"
                    value="${item.name}"
                    ${listingState.filters.industry.has(item.name) ? "checked" : ""}
                >
                <span>${item.name}</span>
            </span>
            <span class="mobile-filter-option__count">
                ${item.count}
            </span>
        </label>
    `).join("");

    typeRoot.innerHTML = tenderListingPage.tenderTypes.map((item) => {
        const value = item.name.toLowerCase();
        return `
            <label class="mobile-filter-option">
                <span class="mobile-filter-option__left">
                    <input
                        type="checkbox"
                        data-mobile-group="type"
                        value="${value}"
                        ${listingState.filters.type.has(value) ? "checked" : ""}
                    >
                    <span>${item.name}</span>
                </span>
            </label>
        `;
    }).join("");

    const mobileClosing = document.getElementById("mobile-closing-30");
    if (mobileClosing) {
        mobileClosing.checked = listingState.closingWithin30;
    }
    updateMobileFilterCounts();
}

function bindMobileFilterOptions() {

    document
        .querySelectorAll("[data-mobile-group]")
        .forEach((input) => {

            input.addEventListener("change", () => {

                const group = input.dataset.mobileGroup;
                const value = input.value;

                if (input.checked) {
                    listingState.filters[group].add(value);
                } else {
                    listingState.filters[group].delete(value);
                }

                updateMobileFilterCounts();

            });

        });


    const closing = document.getElementById("mobile-closing-30");

    if (closing) {

        closing.addEventListener("change", () => {

            listingState.closingWithin30 = closing.checked;

            updateMobileFilterCounts();

        });

    }
}

function updateMobileFilterCounts() {

    const regionCount =
        document.getElementById("mobile-region-count");

    const industryCount =
        document.getElementById("mobile-industry-count");

    const typeCount =
        document.getElementById("mobile-type-count");


    if (regionCount) {

        const count = listingState.filters.region.size;

        regionCount.textContent =
            count ? `${count} selected` : "";

    }


    if (industryCount) {

        const count = listingState.filters.industry.size;

        industryCount.textContent =
            count ? `${count} selected` : "";

    }


    if (typeCount) {

        const count = listingState.filters.type.size;

        typeCount.textContent =
            count ? `${count} selected` : "";

    }
}

function openMobileFilterSheet() {

    const sheet =
        document.getElementById("mobile-filter-sheet");

    const overlay =
        document.getElementById("mobile-filter-overlay");

    if (!sheet || !overlay) return;


    renderMobileFilterOptions();
    bindMobileFilterOptions();


    sheet.classList.add("is-open");
    overlay.classList.add("is-open");

    sheet.setAttribute("aria-hidden", "false");

    document.body.classList.add("mobile-filter-open");
}


function closeMobileFilterSheet() {

    const sheet =
        document.getElementById("mobile-filter-sheet");

    const overlay =
        document.getElementById("mobile-filter-overlay");

    if (!sheet || !overlay) return;


    sheet.classList.remove("is-open");
    overlay.classList.remove("is-open");

    sheet.setAttribute("aria-hidden", "true");

    document.body.classList.remove("mobile-filter-open");
}

function bindMobileFilterGroups() {

    document
        .querySelectorAll("[data-mobile-filter-group]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const group =
                    button.closest(".mobile-filter-group");

                if (!group) return;

                group.classList.toggle("is-open");

            });

        });

}

function bindMobileFilterActions() {

    const openButton =
        document.getElementById("mobile-filter-open");

    const closeButton =
        document.getElementById("mobile-filter-close");

    const overlay =
        document.getElementById("mobile-filter-overlay");

    const applyButton =
        document.getElementById("mobile-filter-apply");

    const resetButton =
        document.getElementById("mobile-filter-reset");


    // -----------------------------------------------------
    // Open
    // -----------------------------------------------------

    if (openButton) {

        openButton.addEventListener("click", () => {
            openMobileFilterSheet();
        });

    }


    // -----------------------------------------------------
    // Close
    // -----------------------------------------------------

    if (closeButton) {

        closeButton.addEventListener("click", () => {
            closeMobileFilterSheet();
        });

    }


    if (overlay) {

        overlay.addEventListener("click", () => {
            closeMobileFilterSheet();
        });

    }


    // -----------------------------------------------------
    // Apply
    // -----------------------------------------------------

    if (applyButton) {

        applyButton.addEventListener("click", () => {

            listingState.currentPage = 1;

            renderListingPage();

            closeMobileFilterSheet();

        });

    }


    // -----------------------------------------------------
    // Clear all
    // -----------------------------------------------------

    if (resetButton) {

        resetButton.addEventListener("click", () => {

            listingState.filters.region.clear();
            listingState.filters.industry.clear();
            listingState.filters.type.clear();

            listingState.closingWithin30 = false;

            renderMobileFilterOptions();
            bindMobileFilterOptions();

            updateMobileFilterCounts();

        });

    }

}

// --- 6. Independent scroll: sidebar and results each get their own
// fixed height (viewport height minus their own top offset), so a
// scroll gesture over one panel never moves the other or the page.
// Desktop only — mobile/tablet keep the normal stacked, page-scroll
// layout untouched.
function syncListingPanelHeights() {
    const sidebar = document.querySelector(".sidebar");
    const results = document.querySelector(".results");
    if (!sidebar || !results) return;

    if (window.innerWidth < 993) {
        sidebar.style.removeProperty("height");
        results.style.removeProperty("height");
        return;
    }

    [sidebar, results].forEach((panel) => {
        const top = panel.getBoundingClientRect().top;
        const height = Math.max(300, window.innerHeight - top - 24);
        panel.style.height = `${height}px`;
    });
}

// --- Search bar clear button ---
function bindSearchClear() {
    const input = document.querySelector(".search-input input");
    const clearBtn = document.querySelector(".clear-search");
    if (!input || !clearBtn) return;
    clearBtn.addEventListener("click", () => {
        input.value = "";
        input.focus();
    });
}

// ===== Page init ===== //

document.addEventListener("DOMContentLoaded", () => {

    if (isTenderListingPage()) {

        bindClosing30Filter();

        renderListingPage();

        bindFilterCollapse();

        bindSortControl();

        // Mobile bottom-sheet filters
        bindMobileFilterActions();

        bindMobileFilterGroups();

        window.addEventListener(
            "resize",
            syncListingPanelHeights
        );
    }


    bindSearchClear();

});