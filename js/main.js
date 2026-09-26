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

const searchBar = `
    <div class="top-bar">
        <div class="country">
            All Countries
            <span></span>
        </div>
    </div>
`;

document.getElementById("searchBar").innerHTML = searchBar;