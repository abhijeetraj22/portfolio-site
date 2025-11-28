// theme toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  if (theme === 'light') {
    root.style.setProperty('--bg', '#f7f9fb');
    root.style.setProperty('--card', '#ffffff');
    root.style.setProperty('--text', '#0d1220');
    root.style.setProperty('--muted', '#52606d');
    root.style.setProperty('--accent', '#0066cc');
    document.querySelectorAll('.btn').forEach(b => b.style.background = '#0066cc');
    document.body.classList.add('light');
  } else {
    root.style.setProperty('--bg', '#0d0d0f');
    root.style.setProperty('--card', '#121212');
    root.style.setProperty('--text', '#e9eef5');
    root.style.setProperty('--muted', '#9aa0a6');
    root.style.setProperty('--accent', '#00aaff');
    document.body.classList.remove('light');
  }
  localStorage.setItem('theme', theme);
}

applyTheme(saved);

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// optional: basic form success feedback (Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // basic UI feedback - allow native action to proceed (Formspree will handle)
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.innerText = 'Sending...';
    btn.disabled = true;
    // allow form to submit normally; you can implement AJAX post if you prefer
  });
}
