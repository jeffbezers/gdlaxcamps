// Mobile menu
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Scrolling word banner (edit the words here)
const WORDS = ['Growth', 'Development'];
const track = document.getElementById('marquee-track');
if (track) {
  const wave = '<svg viewBox="0 0 68 26" aria-hidden="true"><path d="M5 15 C 13 3, 23 3, 34 13 S 55 23, 63 11" fill="none" stroke="#3d3d3d" stroke-width="7" stroke-linecap="round"/></svg>';
  const group = WORDS.map(w => `<div class="marquee-item"><span>${w}</span>${wave}</div>`).join('');
  // repeat enough to fill wide screens, then duplicate for a seamless loop
  const half = group.repeat(4);
  track.innerHTML = half + half;
}

// Email signup: send in the background and show a thank-you message
document.querySelectorAll('form[data-ajax], #signup-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    try {
      const url = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const res = await fetch(url, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.closest('section, .form-wrap').classList.add('sent');
    } catch {
      form.submit(); // fall back to a normal form post
    }
  });
});
