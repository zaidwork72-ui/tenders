// auth.js

document.addEventListener('DOMContentLoaded', () => {
  const headerTarget = document.getElementById('site-header');
  if (headerTarget && typeof renderNavbar === 'function') {
    headerTarget.outerHTML = renderNavbar();
  }

  document.querySelectorAll('[data-next]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.next;
      if (next) {
        window.location.href = next;
      }
    });
  });

  document.querySelectorAll('.country-chip, .option-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('is-selected');
    });
  });

  document.querySelectorAll('.switch').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-on');
    });
  });

  document.querySelectorAll('.code-input').forEach((input, index, list) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 1);
      if (input.value && index < list.length - 1) {
        list[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && !input.value && index > 0) {
        list[index - 1].focus();
      }
    });
  });
});

function renderLocationOption(state) {
  return `<button class="option-chip${state.selected ? " is-selected" : ""}" type="button">${state.name}</button>`;
}

function renderLocationGroup(group) {
  return `
    <div class="toggle-row toggle-list" data-country="${group.country}">
      <div class="row-between">
        <span class="toggle-label">${group.country}</span>
        <button class="icon-pill" type="button" aria-label="Remove ${group.country}">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
 
      <div class="onboarding_field has-icon">
        <span class="material-symbols-rounded input-icon">search</span>
        <input type="text" placeholder="Search cities or states..." aria-label="Search ${group.country} states" />
      </div>
 
      <div class="toggle-label"><small>Popular</small></div>
      <div class="option-grid">${group.states.map(renderLocationOption).join("")}</div>
      ${group.more ? `<div class="toggle-label"><small>${group.more}</small></div>` : ""}
    </div>`;
}

function renderLocationGroups() {
  const container = document.getElementById("location-groups");
  if (!container) return;
  container.innerHTML = locationData.map(renderLocationGroup).join("");
 
  // event delegation - dynamic content hai isliye container par listener
  container.addEventListener("click", (event) => {
    const chip = event.target.closest(".option-chip");
    if (chip) {
      chip.classList.toggle("is-selected");
      return;
    }
 
    if (event.target.closest(".icon-pill")) {
      event.target.closest("[data-country]").remove();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLocationGroups();

  // event delegation - dynamic content hai isliye direct listener nahi lagega
  const groupsContainer = document.getElementById("location-groups");
  if (groupsContainer) {
    groupsContainer.addEventListener("click", (event) => {
      const option = event.target.closest(".location-option");
      if (option) {
        option.classList.toggle("is-selected");
        return;
      }

      const removeBtn = event.target.closest(".location-country__remove");
      if (removeBtn) {
        removeBtn.closest(".location-group").remove();
      }
    });
  }
});