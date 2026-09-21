// year
document.getElementById('yr').textContent = new Date().getFullYear();

// sticky header
const hdr = document.getElementById('hdr');
addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 30));

// mobile menu
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('show');
  burger.setAttribute('aria-expanded', 'false');
}));

// dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
  themeToggle.setAttribute('aria-pressed', storedTheme === 'dark');
}
themeToggle.addEventListener('click', () => {
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-pressed', next === 'dark');
});

// expandable expertise cards
document.querySelectorAll('.card .more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card'), rev = card.querySelector('.reveal');
    const open = card.classList.toggle('open');
    rev.style.maxHeight = open ? rev.scrollHeight + 'px' : 0;
    btn.childNodes[0].textContent = open ? 'Show less ' : 'Read more ';
  });
});

// expandable certification cards
document.querySelectorAll('.cert-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.cert-card'), rev = card.querySelector('.cert-reveal');
    const open = card.classList.toggle('open');
    rev.style.maxHeight = open ? rev.scrollHeight + 'px' : 0;
    btn.childNodes[0].textContent = open ? 'Show less ' : 'Details ';
  });
});

// expandable experience schedule rows
document.querySelectorAll('.gt-head').forEach(h => {
  h.addEventListener('click', () => {
    const row = h.closest('.gt-row'), body = row.querySelector('.gt-body');
    const open = row.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
  });
});

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .14 });
document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));

// skill bars
const skillsBox = document.getElementById('skills');
const sio = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) {
    e.target.querySelectorAll('.bar i').forEach(i => i.style.width = i.dataset.w + '%');
    sio.unobserve(e.target);
  }});
}, { threshold: .3 });
if (skillsBox) sio.observe(skillsBox);

// animated counters
const nums = document.querySelectorAll('.stat .num');
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } });
}, { threshold: .5 });
nums.forEach(n => cio.observe(n));
function count(el) {
  const to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || 0), span = el.querySelector('span');
  let s = 0, step = to / 60;
  const t = setInterval(() => {
    s += step;
    if (s >= to) { s = to; clearInterval(t); }
    span.textContent = dec ? s.toFixed(dec) : Math.floor(s);
  }, 18);
}
