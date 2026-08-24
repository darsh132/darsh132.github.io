const PRODUCTS = [
  { id: 'followupdesk', name: 'FollowUpDesk', category: 'Sales', status: 'available', statusLabel: 'Available', tagline: 'Focused follow-up management for customer actions and next steps.', description: 'A practical follow-up management system for businesses that need to keep customer actions and next steps organized.', technologies: ['.NET 8', 'ASP.NET Core', 'SQLite'], url: 'products/followupdesk.html' },
  { id: 'quotedesk', name: 'QuoteDesk', category: 'Operations', status: 'coming-soon', statusLabel: 'Coming Soon', tagline: 'Quotation management around professional business workflows.', description: 'Quotation management software designed around professional business quotation workflows.', technologies: ['Business workflow', 'Web application'], url: 'products/quotedesk.html' },
  { id: 'assetdesk', name: 'AssetDesk', category: 'IT', status: 'coming-soon', statusLabel: 'Coming Soon', tagline: 'Company asset records, assignments and operational information.', description: 'Software for organizing company asset records, assignments and operational information.', technologies: ['IT operations', 'Web application'], url: 'products/assetdesk.html' }
];

function productCard(product) {
  const statusClass = product.status === 'available' ? 'badge-success' : 'badge-warning';
  return `<article class="product-card reveal">
    <div class="flex items-center justify-between gap-3"><span class="badge ${statusClass} badge-sm">${product.statusLabel}</span><span class="text-xs uppercase tracking-widest text-base-content/40">${product.category}</span></div>
    <h3>${product.name}</h3><p class="font-medium text-base-content/80">${product.tagline}</p><p>${product.description}</p>
    <div class="mt-5 flex flex-wrap gap-2">${product.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
    <a class="mt-7 inline-flex font-semibold text-primary hover:underline" href="${product.url}">${product.status === 'available' ? 'View product' : 'View product direction'} <span aria-hidden="true">→</span></a>
  </article>`;
}

function renderProducts(target, filter = 'all') {
  if (!target) return;
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.status === filter || p.category.toLowerCase() === filter);
  target.innerHTML = items.map(productCard).join('');
  requestAnimationFrame(() => target.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(document.getElementById('featured-products'));
  const catalog = document.getElementById('product-catalog');
  if (!catalog) return;
  renderProducts(catalog);
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('btn-primary'); b.classList.add('btn-outline'); });
      button.classList.add('btn-primary'); button.classList.remove('btn-outline');
      renderProducts(catalog, button.dataset.filter);
    });
  });
});
