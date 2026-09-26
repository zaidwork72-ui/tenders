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
        All Countries
        ${icons[item.downIcon]}
    </div>
`);

renderList("container-cards", homepageData.containerCards, (item)) => `
    <div>
        <div>
            ${item.number}
    </div>
`