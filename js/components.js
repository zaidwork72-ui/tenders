const pagePath = window.location.pathname;

// Compute a stable root path relative to the current page so asset
// URLs resolve correctly from any nested folder.
const segments = pagePath.split('/').filter(Boolean);
let rootPath = './';
if (segments.length > 1) {
  // number of directory levels above the current file (exclude the file itself)
  const ups = segments.length - 1;
  rootPath = Array(ups).fill('..').join('/') + '/';
}

const icons = {
    navbarChevron: '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.646 5.646a.5.5 0 0 1 .707.707l-4 4a.5.5 0 0 1-.707 0l-4-4a.5.5 0 1 1 .707-.707L8 9.293l3.646-3.647Z" fill="#000513"/></svg>',
    loginUser: '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14v-1.333a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V14a.667.667 0 1 1-1.333 0v-1.333A3.333 3.333 0 0 1 6 9.333h4a3.333 3.333 0 0 1 3.333 3.334V14A.667.667 0 0 1 12 14Z" fill="#000514"/><path d="M10 4.667a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm1.333 0a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z" fill="#000"/></svg>',
    blueChevron: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293Z" fill="#2B62F5"/></svg>',
    searchIcon: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.75 15.75-3.255-3.255M14.25 8.25a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke="#3B72F6" stroke-width="2" stroke-linecap="round"/></svg>',
    circleTick: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#2B62F5"><path d="M8.575.942a9.166 9.166 0 0 1 6.008 1.116.833.833 0 1 1-.833 1.443 7.5 7.5 0 1 0 3.6 4.999.834.834 0 0 1 1.634-.333A9.166 9.166 0 1 1 8.575.942Z"/><path d="M17.744 2.744a.833.833 0 1 1 1.178 1.179l-8.333 8.333a.833.833 0 0 1-1.178 0l-2.5-2.5a.833.833 0 1 1 1.178-1.178l1.91 1.91 7.745-7.744Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
    bulb: '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.666 10.667a6.666 6.666 0 0 0-13.333 0c0 1.072.185 2.299 1.61 3.724 1.008 1.008 2.022 2.303 2.364 4.014a1.333 1.333 0 0 1-2.614.523c-.191-.955-.778-1.794-1.636-2.652-2.042-2.042-2.39-4.015-2.39-5.61a9.334 9.334 0 1 1 18.666 0c0 2.042-.779 4.128-2.392 5.609l.002.001c-.979.979-1.443 1.686-1.636 2.652a1.333 1.333 0 0 1-2.614-.523c.34-1.7 1.21-2.86 2.364-4.014l.05-.049c1.02-.916 1.56-2.272 1.56-3.675Zm-2.666 12a1.333 1.333 0 1 1 0 2.666h-8a1.333 1.333 0 0 1 0-2.666h8ZM18.667 28a1.333 1.333 0 0 1 0 2.667h-5.334a1.333 1.333 0 0 1 0-2.667h5.334Z" fill="#fff"/></svg>',
    fresh: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 20V4a3 3 0 0 1 3-3h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 21 7v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm2 0a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7.414L14.586 3H6a1 1 0 0 0-1 1v16Z" fill="#fff"/><path d="M13 6V2a1 1 0 1 1 2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3Z" fill="#fff"/><path d="M10 8a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2h2Zm6 4a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h8Zm0 4a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h8Z" fill="#FAF2F2"/></svg>',
    evaluate: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6V2a1 1 0 1 1 2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3Z" fill="#fff"/><path d="M3 7V4a3 3 0 0 1 3-3h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 21 7v13a3 3 0 0 1-3 3H5.992a3 3 0 0 1-2.59-1.5 1 1 0 1 1 1.732-1 1 1 0 0 0 .863.5H18a1 1 0 0 0 1-1V7.414L14.586 3H6a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0Z" fill="#fff"/><path d="M6.793 15.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 1 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Z" fill="#FAF2F2"/><path d="M7 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#FAF2F2"/></svg>',
    pay: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 13a1 1 0 0 0-1-1h-3c-.389 0-.543.124-.6.2a1.003 1.003 0 0 1-.106.12l-5.6 5.4a1 1 0 0 1-1.388-1.44l5.556-5.358C8.407 10.256 9.22 10 10 10h3a3 3 0 0 1 0 6h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1Z" fill="#fff"/><path d="M20.11 8.944a3.004 3.004 0 0 1 2.916 3.086 3 3 0 0 1-.936 2.092L17.515 18.5C16.6 19.517 15.329 20 14 20h-4c-.388 0-.543.124-.6.2a.967.967 0 0 1-.141.152l-1.6 1.4a1 1 0 0 1-1.317-1.504L7.879 18.9c.544-.649 1.348-.9 2.121-.9h4c.853 0 1.563-.305 2.048-.859l.06-.064 4.601-4.4.004-.003a1.002 1.002 0 0 0-1.3-1.522l-.083.07-4.2 3.9a1 1 0 0 1-1.36-1.465l4.193-3.893a3.003 3.003 0 0 1 2.146-.82Z" fill="#fff"/><path d="M1.293 15.293a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414ZM17.9 9a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0Zm2 0a3.9 3.9 0 1 1-7.8 0 3.9 3.9 0 0 1 7.8 0ZM8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#FAF2F2"/></svg>',
    built: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 19V5a3 3 0 0 1 3-3h10.214a3 3 0 0 1 2.092.894v-.001l3.801 3.8A3 3 0 0 1 22 8.786V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm2 0a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.814l-.006-.098a1 1 0 0 0-.294-.602l-.008-.007L15.886 4.3a1 1 0 0 0-.602-.294L15.185 4H5a1 1 0 0 0-1 1v14Z" fill="#fff"/><path d="M16 21v-7H8v7a1 1 0 1 1-2 0v-7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7a1 1 0 1 1-2 0Z" fill="#fff"/><path d="M6 7V3a1 1 0 0 1 2 0v4h7a1 1 0 1 1 0 2H8a2 2 0 0 1-2-2Z" fill="#FAF2F2"/></svg>',
    longArrow: '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.529 4.862c.26-.26.682-.26.943 0l2.666 2.667c.26.26.26.682 0 .942l-2.666 2.667a.667.667 0 0 1-.943-.943L13.724 8 11.53 5.805a.666.666 0 0 1 0-.943Z" fill="#2B62F5"/><path d="M14.666 7.333a.667.667 0 1 1 0 1.334H1.333a.667.667 0 0 1 0-1.334h13.334Z" fill="#2B62F5"/></svg>',
    facebook: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.538 4.888v2.29H5.86v2.8h1.678v8.321h3.445V9.98h2.313s.216-1.343.321-2.811h-2.62V5.253c0-.286.375-.671.747-.671h1.878V1.667H11.07c-3.617 0-3.53 2.802-3.53 3.22Z" fill="#E8EAF4"/></svg>',
    twitter: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.333 4.922a6.91 6.91 0 0 1-1.963.531 3.392 3.392 0 0 0 1.503-1.861 6.958 6.958 0 0 1-2.172.816 3.434 3.434 0 0 0-2.496-1.062c-1.889 0-3.42 1.508-3.42 3.366 0 .264.03.521.089.767a9.757 9.757 0 0 1-7.047-3.517 3.303 3.303 0 0 0-.461 1.691 3.35 3.35 0 0 0 1.52 2.803 3.46 3.46 0 0 1-1.549-.423v.042c0 1.632 1.18 2.992 2.742 3.302a3.515 3.515 0 0 1-.9.118c-.22 0-.435-.02-.644-.063a3.414 3.414 0 0 0 3.193 2.34 6.927 6.927 0 0 1-4.246 1.439 7.31 7.31 0 0 1-.816-.047 9.773 9.773 0 0 0 5.241 1.515c6.29 0 9.728-5.13 9.728-9.58l-.012-.436a6.772 6.772 0 0 0 1.71-1.74Z" fill="#E8EAF4"/></svg>',
    linkedin: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.299 11.432v6.15h-3.565v-5.738c0-1.442-.516-2.425-1.806-2.425-.985 0-1.572.663-1.829 1.304-.094.23-.118.549-.118.87v5.989H7.414s.048-9.717 0-10.725h3.567v1.52l-.024.035h.024v-.035c.473-.729 1.319-1.771 3.213-1.771 2.346 0 4.105 1.533 4.105 4.826ZM3.684 1.688c-1.22 0-2.018.8-2.018 1.853 0 1.029.776 1.853 1.971 1.853h.024c1.244 0 2.016-.824 2.016-1.853-.021-1.053-.771-1.853-1.992-1.853h-.001ZM1.878 17.582h3.565V6.857H1.878v10.725Z" fill="#E8EAF4"/></svg>',
    youtube: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.415 5.783A2.494 2.494 0 0 0 16.875 4.14c-1.48-.4-7.417-.4-7.417-.4s-5.936 0-7.417.4A2.494 2.494 0 0 0 .5 5.783a26.23 26.23 0 0 0 0 8.434 2.494 2.494 0 0 0 1.54 1.642c1.481.4 7.417.4 7.417.4s5.937 0 7.417-.4a2.494 2.494 0 0 0 1.54-1.642c.4-1.4.4-4.517.4-4.517s0-3.117-.4-4.517ZM8.6 13.1V7.9l5.067 2.6L8.6 13.1Z" fill="#E8EAF4"/></svg>',
    instagram: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.333 2.667h7.334A3.667 3.667 0 0 1 17.333 6.333v7.334a3.667 3.667 0 0 1-3.666 3.666H6.333A3.667 3.667 0 0 1 2.667 13.667V6.333A3.667 3.667 0 0 1 6.333 2.667Zm0 1.666A2 2 0 0 0 4.333 6.333v7.334a2 2 0 0 0 2 2h7.334a2 2 0 0 0 2-2V6.333a2 2 0 0 0-2-2H6.333Zm8.334 1.5a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334ZM10 6.833a3.167 3.167 0 1 1 0 6.334 3.167 3.167 0 0 1 0-6.334Zm0 1.667a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" fill="#E8EAF4"/></svg>',
    menu: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 18h18M3 6h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

function renderNavbar() {
    const navLinks = Array.isArray(homepageData?.navLinks) ? homepageData.navLinks : [];
    const links = navLinks.map((link) => `
    <li>
      <a class="nav-link" href="${link.href}">
        ${link.label}
        ${link.hasChevron ? `<span class="nav-link__chevron">${icons.navbarChevron}</span>` : ""}
      </a>
    </li>
  `).join("");

    return `
    <div class="shellNavbar">
      <header class="site-header">
        <nav class="navbar" aria-label="Primary">
          <a class="brand" href="${rootPath}index.html" aria-label="Tenders & Bids">
            <img src="${rootPath}assets/logos/navbarLogo.svg" alt="Tenders & Bids" width="159" height="29">
          </a>

          <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>

          <div class="navbar__right">
            <ul class="nav-list">${links}</ul>
            <div class="nav-actions">
              <a class="nav-login" href="${rootPath}pages/auth/login.html">
                <span>Login</span>
                ${icons.loginUser}
              </a>
              <a class="nav-trial primary-btn" href="${rootPath}pages/auth/register.html">Start 7-day free trial</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  `;
}

function renderFooter() {
  const footerColumns = Array.isArray(homepageData?.footerColumns) ? homepageData.footerColumns : [];
  const columns = footerColumns.map((column) => `
    <div class="footer-col">
      <p class="footer-col__title">${column.title}</p>
      <ul>
        ${column.links.map((item) => `<li><a href="#">${item}</a></li>`).join("")}
      </ul>
    </div>
  `).join("");

  return `
  <div class = shellFooter>
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="${rootPath}index.html" aria-label="Tenders & Bids">
            <img src="${rootPath}assets/logos/footerLogo.svg" alt="" width="130" height="23">
          </a>
          <p class="footer-brand__text">TendersAndBids is backed by first-generation technocrats with over 50 years of combined expertise in tendering and public procurement. Our mission is to provide accurate, up-to-date global tender information at an affordable cost to suppliers across industries</p>
          <p class="footer-col__title">CONNECT WITH US</p>
          <div class="social-row">
            <a href="#" aria-label="YouTube">${icons.youtube}</a>
            <a href="#" aria-label="Facebook">${icons.facebook}</a>
            <a href="#" aria-label="X">${icons.twitter}</a>
            <a href="#" aria-label="Instagram">${icons.instagram}</a>
            <a href="#" aria-label="LinkedIn">${icons.linkedin}</a>
          </div>
        </div>
        ${columns}
      </div>
      <div class = line><span class = actual-line></span></div>
      <div class="shell footer-bottom">
        <p>Copyright © 2026 TendersAndBids. All Rights Reserved.</p>
        <p class="footer-secure">Payment secured by: <img src="${rootPath}assets/images/stripe.png" alt="stripe" width="50" height="21"></p>
      </div>
    </footer>
   </div>
  `;
}


document.querySelectorAll('[data-icon]').forEach((element) => {
  const iconName = element.dataset.icon;

  if (icons[iconName]) {
    element.innerHTML = icons[iconName];
  }
});