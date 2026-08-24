const PRODUCTS = [
  { id:'followupdesk', name:'FollowUpDesk', category:'Sales', status:'available', statusLabel:'Available', tagline:'Focused follow-up management for customer actions and next steps.', description:'A practical follow-up management system for businesses that need to keep customer actions and next steps organized.', technologies:['.NET 8','ASP.NET Core','SQLite'], image:'assets/images/products/followupdesk/preview.svg', mediaLabel:'Workflow preview', url:'products/followupdesk.html' },
  { id:'quotedesk', name:'QuoteDesk', category:'Operations', status:'coming-soon', statusLabel:'Coming Soon', tagline:'Quotation management around professional business workflows.', description:'Quotation management software designed around professional business quotation workflows.', technologies:['Business workflow','Web application'], image:'assets/images/products/quotedesk/preview.svg', mediaLabel:'Quotation workspace', url:'products/quotedesk.html' },
  { id:'assetdesk', name:'AssetDesk', category:'IT', status:'coming-soon', statusLabel:'Coming Soon', tagline:'Company asset records, assignments and operational information.', description:'Software for organizing company asset records, assignments and operational information.', technologies:['IT operations','Web application'], image:'assets/images/products/assetdesk/preview.svg', mediaLabel:'Asset operations', url:'products/assetdesk.html' }
];

function productCard(product){
  const statusClass=product.status==='available'?'badge-success':'badge-warning';
  return `<article class="product-card reveal">
    <button class="product-image product-preview-trigger" type="button" data-preview="${product.image}" data-title="${product.name}" aria-label="Open ${product.name} preview"><img src="${product.image}" alt="${product.name} product interface preview" loading="lazy"><span class="product-image-overlay"></span><span class="preview-chip">Preview <span aria-hidden="true">↗</span></span></button>
    <div class="product-body">
      <div class="product-meta"><span class="badge ${statusClass} badge-sm">${product.statusLabel}</span><span class="product-category">${product.category}</span></div>
      <h3><a href="${product.url}">${product.name}</a></h3>
      <p class="product-tagline">${product.tagline}</p><p class="product-description">${product.description}</p>
      <div class="product-technologies">${product.technologies.map(t=>`<span class="product-tech">${t}</span>`).join('')}</div>
      <div class="mt-auto flex items-center justify-between gap-3 pt-7"><span class="media-label">${product.mediaLabel}</span><a class="font-semibold text-primary hover:underline" href="${product.url}">${product.status==='available'?'Explore':'Product direction'} <span aria-hidden="true">→</span></a></div>
    </div>
  </article>`;
}

function renderProducts(target,filter='all'){
  if(!target)return;
  const items=filter==='all'?PRODUCTS:PRODUCTS.filter(p=>p.status===filter||p.category.toLowerCase()===filter);
  target.innerHTML=items.map(productCard).join('');
  requestAnimationFrame(()=>target.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible')));
  target.querySelectorAll('.product-preview-trigger').forEach(button=>button.addEventListener('click',()=>openPreview(button.dataset.preview,button.dataset.title)));
}

function openPreview(src,title){
  let modal=document.getElementById('product-preview-modal');
  if(!modal){
    modal=document.createElement('div');modal.id='product-preview-modal';modal.className='product-preview-modal';
    modal.innerHTML=`<div class="product-preview-backdrop" data-close-preview></div><div class="product-preview-dialog" role="dialog" aria-modal="true" aria-label="Product preview"><button class="preview-close" type="button" data-close-preview aria-label="Close preview">×</button><div class="preview-dialog-head"><span>PRODUCT PREVIEW</span><strong id="preview-dialog-title"></strong></div><img id="preview-dialog-image" alt=""><p>Concept interface preview. Replace this visual with a real screenshot or demo recording when the product is ready.</p></div>`;
    document.body.appendChild(modal);modal.querySelectorAll('[data-close-preview]').forEach(el=>el.addEventListener('click',closePreview));
  }
  modal.querySelector('#preview-dialog-title').textContent=title;modal.querySelector('#preview-dialog-image').src=src;modal.classList.add('is-open');document.body.classList.add('preview-lock');
}
function closePreview(){document.getElementById('product-preview-modal')?.classList.remove('is-open');document.body.classList.remove('preview-lock');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePreview();});

document.addEventListener('DOMContentLoaded',()=>{
  renderProducts(document.getElementById('featured-products'));
  const catalog=document.getElementById('product-catalog');if(!catalog)return;
  renderProducts(catalog);
  document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.remove('btn-primary');b.classList.add('btn-outline')});button.classList.add('btn-primary');button.classList.remove('btn-outline');renderProducts(catalog,button.dataset.filter);}));
});
