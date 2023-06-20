var firstElementChild = document.firstElementChild;
if (firstElementChild) {
  var savedTheme = localStorage.getItem("hytorium_theme-preference");
  var savedCodeTheme = localStorage.getItem("hytorium_code-theme-preference");
  var theme;
  var codeTheme;

  if (savedTheme) {
    theme = savedTheme.replace(/{"val":"/g, "").replace(/"}/g, "");
  }
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  if (savedCodeTheme) {
    codeTheme = savedCodeTheme.replace(/{"val":"/g, "").replace(/"}/g, "");
  }
  firstElementChild.classList.add(theme);
  document.documentElement.style.setProperty("color-scheme", theme);

  if (codeTheme) {
    firstElementChild.setAttribute("data-code-theme", codeTheme);
  }
}