const editableProducts = [
  { name: 'Sunburn Graphic Tee', price: '$48', tag: 'Bestseller', image: 'images/product-tee.svg' },
  { name: 'Rattlesnake Work Pants', price: '$96', tag: 'Heavy cotton', image: 'images/product-pants.svg' },
  { name: 'Mirage Mesh Jersey', price: '$74', tag: 'Limited', image: 'images/product-jersey.svg' },
  { name: 'Desert Motel Tote', price: '$42', tag: 'Accessory', image: 'images/product-tote.svg' }
];

const productGrid = document.querySelector('#productGrid');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

function renderProducts() {
  productGrid.innerHTML = editableProducts.map((product) => `
    <article class="product-card reveal">
      <div class="absolute left-4 top-4 z-10 rounded-full bg-night/80 px-3 py-2 text-xs font-black uppercase tracking-widest text-sand">${product.tag}</div>
      <img src="${product.image}" alt="${product.name}" data-comment="// CHANGE IMAGE HERE" />
      <div class="p-5 pt-0">
        <h3 class="text-2xl font-black">${product.name}</h3>
        <div class="mt-5 flex items-center justify-between gap-3">
          <span class="text-xl font-black text-sand">${product.price}</span>
          <button class="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-night hover:bg-sand" data-comment="// CHANGE LINK HERE">Купить</button>
        </div>
      </div>
    </article>
  `).join('');
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initMagneticButtons() {
  document.querySelectorAll('.magnetic-btn').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.18}px)`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

renderProducts();
observeReveals();
initMagneticButtons();
