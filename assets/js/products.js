const PRODUCTS = [
  { id:'followupdesk', name:'FollowUpDesk', category:'Sales', status:'available', statusLabel:'Available', tagline:'Focused follow-up management for customer actions and next steps.', description:'A practical follow-up management system for businesses that need to keep customer actions and next steps organized.', technologies:['.NET 8','ASP.NET Core','SQLite'], image:'assets/images/products/followupdesk/preview.svg', url:'products/followupdesk.html' },
  { id:'quotedesk', name:'QuoteDesk', category:'Operations', status:'coming-soon', statusLabel:'Coming Soon', tagline:'Quotation management around professional business workflows.', description:'Quotation management software designed around professional business quotation workflows.', technologies:['Business workflow','Web application'], image:'assets/images/products/quotedesk/preview.svg', url:'products/quotedesk.html' },
  { id:'assetdesk', name:'AssetDesk', category:'IT', status:'coming-soon', statusLabel:'Coming Soon', tagline:'Company asset records, assignments and operational information.', description:'Software for organizing company asset records, assignments and operational information.', technologies:['IT operations','Web application'], image:'assets/images/products/assetdesk/preview.svg', url:'products/assetdesk.html' }
];

function productCard(product){
  const statusClass=product.status==='available'?'badge-success':'badge-warning';
  return `<article class="product-card reveal">
    <a class="product-image" href="${product.url}" aria-label="Preview ${product.name}"><img src="${product.image}" alt="${product.name} product interface preview" loading="lazy"><span class="product-image-overlay"></span></a>
    <div class="product-body">
      <div class="product-meta"><span class="badge ${statusClass} badge-sm">${product.statusLabel}</span><span class="product-category">${product.category}</span></div>
      <h3><a href="${product.url}">${product.name}</a></h3>
      <p class="product-tagline">${product.tagline}</p><p class="product-description">${product.description}</p>
      <div class="product-technologies">${product.technologies.map(t=>`<span class="product-tech">${t}</span>`).join('')}</div>
      <a class="mt-7 inline-flex font-semibold text-primary hover:underline" href="${product.url}">${product.status==='available'?'View product':'View product direction'} <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function renderProducts(target,filter='all'){
  if(!target)return;
  const items=filter==='all'?PRODUCTS:PRODUCTS.filter(p=>p.status===filter||p.category.toLowerCase()===filter);
  target.innerHTML=items.map(productCard).join('');
  requestAnimationFrame(()=>target.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible')));
}

document.addEventListener('DOMContentLoaded',()=>{
  renderProducts(document.getElementById('featured-products'));
  const catalog=document.getElementById('product-catalog');
  if(!catalog)return;
  renderProducts(catalog);
  document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.remove('btn-primary');b.classList.add('btn-outline')});
    button.classList.add('btn-primary');button.classList.remove('btn-outline');renderProducts(catalog,button.dataset.filter);
  }));
});
