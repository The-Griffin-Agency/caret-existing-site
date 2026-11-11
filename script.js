// Keep index.html at the same URL. Update this map for each new image filename.
const pages = {
  'homepage-a': { label: 'Homepage A', file: 'homepage-v2a.png', height: 6500 },
  'homepage-b': { label: 'Homepage B', file: 'homepage-v2b.png', height: 6500 },
  'homepage-c': { label: 'Homepage C', file: 'homepage-v2c.png', height: 6500 },
  'hub': { label: 'Hub', file: '261109_product_hub_v1.png', height: 5770 },
  'capture': { label: 'Capture', file: '261109_product_capture_v1.png', height: 6000 },
  'command': { label: 'Command', file: '261111_product_command.png', height: 7000 },
  'court-rules': { label: 'Court Rules', file: '261109_product_court-rules-v1.png', height: 6000 },
  'caret-why': { label: 'CARET Why', file: '261109_caret_why_v1.png', height: 6300 },
  'fall-email-desktop': { label: 'Fall Email: Desktop', file: 'CARET_2026_Fall_Email_Wide_V1.png', width: 1020, height: 2500 },
  'fall-email-mobile': { label: 'Fall Email: Mobile', file: 'CARET_2026_Fall_Email_Narrow_V1.png', width: 375, height: 3391 }
};
// Increment this when replacing images without changing their filenames.
const IMAGE_VERSION = "2";
const canvas = document.getElementById('canvas');
const mockup = document.getElementById('mockup');
const error = document.getElementById('error');
function showPage() {
  const requested = location.hash.slice(1) === 'homepage' ? 'homepage-a' : location.hash.slice(1);
  const key = Object.hasOwn(pages, requested) ? requested : 'hub';
  const page = pages[key];
  error.hidden = true;
  mockup.hidden = false;
  mockup.alt = page.label + ' page design';
  mockup.width = page.width || 1600;
  mockup.style.setProperty("--mockup-width", (page.width || 1600) + "px");
  mockup.height = page.height;
  mockup.src = 'images/' + page.file + '?v=' + IMAGE_VERSION;
  document.title = page.label + ' | CARET Product Review';
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === key) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
  canvas.scrollLeft = 0;
}
mockup.addEventListener('error', () => { mockup.hidden = true; error.hidden = false; });
function setSize(actual) {
  canvas.classList.toggle('actual', actual);
  document.getElementById('fit').setAttribute('aria-pressed', String(!actual));
  document.getElementById('actual').setAttribute('aria-pressed', String(actual));
}
document.getElementById('fit').addEventListener('click', () => setSize(false));
document.getElementById('actual').addEventListener('click', () => setSize(true));
window.addEventListener('hashchange', showPage);
showPage();
