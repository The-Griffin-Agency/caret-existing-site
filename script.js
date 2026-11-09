// Keep index.html at the same URL. Update this map for each new image filename.
const pages = {
  'homepage': { label: 'Homepage', file: '261109_homepage-v1.png', height: 6500 },
  'hub': { label: 'Hub', file: '261109_product_hub_v1.png', height: 5770 },
  'capture': { label: 'Capture', file: '261109_product_capture_v1.png', height: 6000 },
  'command': { label: 'Command', file: '261109_product_command_v1.png', height: 5770 },
  'court-rules': { label: 'Court Rules', file: '261109_product_court-rules-v1.png', height: 6000 },
  'caret-why': { label: 'CARET Why', file: '261109_caret_why_v1.png', height: 6300 }
};
// Increment this when replacing images without changing their filenames.
const IMAGE_VERSION = "20261109-latest";
const canvas = document.getElementById('canvas');
const mockup = document.getElementById('mockup');
const error = document.getElementById('error');
function showPage() {
  const key = Object.hasOwn(pages, location.hash.slice(1)) ? location.hash.slice(1) : 'hub';
  const page = pages[key];
  error.hidden = true;
  mockup.hidden = false;
  mockup.alt = page.label + ' page design';
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
