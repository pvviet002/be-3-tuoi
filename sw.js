/* Service worker đơn giản: lưu trang vào bộ nhớ đệm để chơi được cả khi mất mạng. */
const CACHE = 'san-choi-be-v33';
const FILES = ['./', 'index.html', 'hoc-chu.html', 'be-hoc-dem.html', 'be-phan-loai.html',
  'hoc-do-vat.html', 'tieng-con-vat.html', 'hoc-mau.html', 'hinh-khoi.html', 'hoc-tieng-anh.html', 'so-vui.html', 'tap-viet-so.html', 'tap-viet-chu.html', 'tap-viet-abc.html', 'lat-the.html', 'glyphs.js', 'ghep_hinh.html', 'do_vat.html', 'parent.html', 'tracker.js', 'icon.svg', 'fit.css', 'manifest.webmanifest',
  'vendor/confetti.browser.min.js', 'vendor/tailwind.css', 'vendor/react.production.min.js',
  'vendor/react-dom.production.min.js', 'vendor/ghep_hinh.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Ưu tiên mạng (để luôn có bản mới), mất mạng thì dùng bản đã lưu. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
