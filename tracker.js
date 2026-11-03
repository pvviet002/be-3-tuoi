/* Theo dõi thời gian chơi + áp dụng cài đặt của phụ huynh.
   Dữ liệu chỉ lưu trong localStorage của thiết bị này, không gửi đi đâu. */
(function () {
  var PK = 'bePlay', SK = 'beSettings';
  var GAMES = {
    'hoc-chu': 'Học Chữ Cái', 'be-hoc-dem': 'Đếm Cùng Bé', 'be-phan-loai': 'Sắp Xếp Vui Vẻ',
    'hoc-do-vat': 'Bé Học Đồ Vật', 'tieng-con-vat': 'Tiếng Con Vật', 'hoc-mau': 'Học Màu Sắc', 'ghep_hinh': 'Ghép Hình', 'do_vat': 'Toán Câu Cá'
  };
  function load(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function dayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function settings() { return Object.assign({ limitMin: 0, disabled: [], pin: '' }, load(SK, {})); }
  function todaySec() {
    var d = load(PK, {})[dayKey()] || {}, t = 0;
    for (var g in d) t += d[g].sec || 0;
    return t;
  }
  function add(gid, field, n) {
    var data = load(PK, {}), k = dayKey();
    var d = data[k] = data[k] || {};
    var g = d[gid] = d[gid] || { sec: 0, rounds: 0, correct: 0 };
    g[field] = (g[field] || 0) + n;
    save(PK, data);
  }

  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  var isGame = Object.prototype.hasOwnProperty.call(GAMES, page);
  var blocked = false;

  function overlay(title, text) {
    if (document.getElementById('be-lock')) return;
    blocked = true;
    var o = document.createElement('div');
    o.id = 'be-lock';
    o.setAttribute('role', 'alertdialog');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(142,209,255,.97);display:flex;' +
      'flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;text-align:center;' +
      "font-family:'Baloo 2',system-ui,sans-serif;color:#4A4458";
    o.innerHTML = '<div style="font-size:84px">😴</div>' +
      '<div style="font-size:clamp(1.6rem,6vw,2.4rem);font-weight:800;color:#E84D89">' + title + '</div>' +
      '<div style="font-size:1.1rem;font-weight:700;max-width:420px">' + text + '</div>' +
      '<a href="parent.html" style="margin-top:8px;background:#fff;color:#2E86DB;font-weight:800;padding:10px 22px;' +
      'border-radius:99px;text-decoration:none;box-shadow:0 4px 0 rgba(0,0,0,.15)">👨‍👩‍👧 Dành cho phụ huynh</a>' +
      (page === 'index' ? '' : '<a href="index.html" style="color:#4A4458;font-weight:700">Về trang chủ</a>');
    (document.body || document.documentElement).appendChild(o);
  }

  function enforce() {
    var s = settings();
    if (isGame && s.disabled.indexOf(page) !== -1) {
      overlay('Trò chơi này đang tắt', 'Bố mẹ đã tạm tắt trò chơi này. Bé chọn trò khác nhé!');
      return;
    }
    if ((isGame || page === 'index') && s.limitMin > 0 && todaySec() >= s.limitMin * 60) {
      overlay('Hết giờ chơi hôm nay rồi!', 'Bé nghỉ ngơi, uống nước và chơi với bố mẹ nhé. Mai mình chơi tiếp!');
    }
  }

  function hideDisabledCards() {
    if (page !== 'index') return;
    var s = settings();
    var cards = document.querySelectorAll('a.card');
    for (var i = 0; i < cards.length; i++) {
      var id = (cards[i].getAttribute('href') || '').replace(/\.html$/, '');
      if (s.disabled.indexOf(id) !== -1) cards[i].style.display = 'none';
    }
  }

  function start() {
    hideDisabledCards();
    enforce();
    if (!isGame) return;
    setInterval(function () {
      if (document.hidden || blocked) return;
      add(page, 'sec', 2);
      enforce();
    }, 2000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  window.BeTracker = {
    GAMES: GAMES, PK: PK, SK: SK, load: load, save: save, dayKey: dayKey, settings: settings, todaySec: todaySec,
    /* Game gọi hàm này sau mỗi lượt trả lời: BeTracker.round(true/false) */
    round: function (ok) { if (isGame) { add(page, 'rounds', 1); if (ok) add(page, 'correct', 1); } }
  };
})();
