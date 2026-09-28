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

const searchIcon = document.querySelector(".search-bar__icon");
if (searchIcon) searchIcon.innerHTML = icons.search;

renderList("searchBar", homepageData.searchBar, (item) => `
    <div class="upSearch">
        <div class = "country-dropdown">
            <select> 
                <option> All Countries </option>
                <option> America </option>
                <option> Saudi </option>
                <option> Dubai </option>
                <option> Kuwait </option>
            </select>
            ${icons[item.downIcon]}
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