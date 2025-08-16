// Basic interactivity for menu, fake search, and fake form submit
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

if(menuBtn && navList){
  menuBtn.addEventListener('click', () => {
    const open = navList.style.display === 'flex' || navList.style.display === 'block';
    navList.style.display = open ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

function fakeSearch(e){
  e.preventDefault();
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const cards = Array.from(document.querySelectorAll('[data-keywords]'));
  let matches = 0;
  cards.forEach(el => {
    const keys = el.getAttribute('data-keywords') || '';
    const show = !q || keys.includes(q);
    el.style.opacity = show ? '1' : '0.25';
    el.style.filter = show ? 'none' : 'grayscale(100%)';
    if(show) matches++;
  });
  alert(q ? `Showing items matching “${q}” (${matches} found).` : 'Cleared search filter.');
  return false;
}

function fakeSubmit(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  if(status){
    status.textContent = 'Inquiry sent! We will email you within 24 hours.';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}
