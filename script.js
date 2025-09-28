// Theme toggle, year, and mobile nav
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ root.classList.toggle('dark', saved === 'dark'); }
  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', () => {
      const visible = navLinks.style.display === 'flex';
      navLinks.style.display = visible ? 'none' : 'flex';
    });
  }
})();
