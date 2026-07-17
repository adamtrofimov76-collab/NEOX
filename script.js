const editableUpdates = [
  {
    title: 'Большой летний ивент',
    text: 'Новые задания, редкие награды, ночные гонки и временные активности для всех игроков.',
    image: 'images/update-race.svg'
  },
  {
    title: 'Фракции и профессии',
    text: 'Полицейские, медики, таксисты, механики и криминальные группировки получили свежие сценарии.',
    image: 'images/update-factions.svg'
  },
  {
    title: 'Город стал живее',
    text: 'Добавлены точки интереса, улучшенная карта, бизнесы, новые интерьеры и ambient-анимации.',
    image: 'images/update-city.svg'
  }
];

const updateGrid = document.querySelector('#updateGrid');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const onlineCounter = document.querySelector('#onlineCounter');

function renderUpdates() {
  updateGrid.innerHTML = editableUpdates.map((item) => `
    <article class="update-card reveal">
      <img src="${item.image}" alt="${item.title}" data-comment="// CHANGE IMAGE HERE" />
      <div>
        <h3>${item.title}</h3>
        <p class="mt-3">${item.text}</p>
        <button class="ghost-btn mt-6" data-comment="// CHANGE LINK HERE">Подробнее</button>
      </div>
    </article>
  `).join('');
}

function initRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function animateOnlineCounter() {
  let current = 0;
  const target = 100;
  const timer = setInterval(() => {
    current += 4;
    onlineCounter.textContent = String(Math.min(current, target));
    if (current >= target) clearInterval(timer);
  }, 35);
}

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

renderUpdates();
initRevealAnimation();
animateOnlineCounter();
