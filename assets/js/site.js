(() => {
  const path = window.location.pathname;
  const nested = path.includes('/products/');
  const root = nested ? '../' : './';

  // Global visual correction layer: keeps text contrast and product media consistent.
  // Versioned URL prevents stale CSS from GitHub Pages/browser cache.
  if (!document.querySelector('link[data-theme-fixes]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${root}assets/css/theme-fixes.css?v=20260825-2`;
    link.dataset.themeFixes = 'true';
    document.head.appendChild(link);
  }

  const nav = [
    ['About', 'about.html'], ['Projects', 'projects.html'], ['Services', 'services.html'], ['Products', 'products.html'], ['Contact', 'contact.html']
  ];
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `<header class="site-nav"><nav class="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8" aria-label="Primary">
      <a href="${root}" class="brand"><span class="brand-mark">DB</span><span>Darshan Bane</span></a>
      <div class="hidden items-center gap-7 md:flex">${nav.map(([label, href]) => `<a class="nav-link" href="${root}${href}">${label}</a>`).join('')}</div>
      <div class="flex items-center gap-2"><a class="btn btn-primary btn-sm hidden sm:inline-flex" href="${root}contact.html">Work With Me</a><button id="menu-toggle" class="btn btn-ghost btn-square md:hidden" type="button" aria-label="Open menu" aria-expanded="false">☰</button></div>
    </nav><div id="mobile-menu" class="hidden border-t border-base-300 bg-base-100 md:hidden"><div class="mx-auto max-w-7xl px-5 py-3">${nav.map(([label, href]) => `<a class="mobile-link" href="${root}${href}">${label}</a>`).join('')}<a class="mobile-link font-semibold text-primary" href="${root}contact.html">Work With Me</a></div></div></header>`;
    const toggle = document.getElementById('menu-toggle'); const menu = document.getElementById('mobile-menu');
    toggle?.addEventListener('click', () => { const open = menu.classList.toggle('hidden') === false; toggle.setAttribute('aria-expanded', String(open)); });
  }
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `<footer class="border-t border-base-300 bg-base-200/25"><div class="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8"><div><a href="${root}" class="font-display text-lg font-bold">Darshan Bane</a><p class="mt-2 max-w-md text-sm text-base-content/50">Full Stack .NET developer building useful software for businesses and practical software products.</p></div><div class="text-sm text-base-content/45"><p>Build software. Build for businesses. Build products.</p><p class="mt-2">© <span id="year"></span> Darshan Bane</p></div></div></footer>`;
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
