/* ==========================================================
   TANAKA SR. — y2k-skin.js
   Monta as peças de "site de compras do ano 2000" em volta
   da loja que já existe (sem trocar ids nem a lógica):
   barra de utilidades, abas, faixa de busca, caixinhas da
   lateral (contador de visitas e selos), rodapé e o Tanaka
   no canto com a rádio TANAKA FM.
   ========================================================== */
(function () {
  'use strict';
  if (window.__y2k) return; window.__y2k = true;
  function $(s, r) { return (r || document).querySelector(s); }
  function el(t, c, h) { var n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; }
  function click(sel) { var b = $(sel); if (b) b.click(); }

  var LINES = [
    '<b>Irasshaimase!</b> Bem-vindo à minha loja!',
    'Tudo tem seu preço. <b>Tudo.</b>',
    'Só aceito <b>ienes</b>. Em dinheiro vivo.',
    'Sem devoluções. O presidente está de olho!',
    'Promoção relâmpago? Depende da sua cara.',
    'Já experimentou a <b>maleta surpresa</b>?',
    'Não faça perguntas sobre a procedência.',
    'Compre agora antes que a polícia… digo, o estoque acabe!'
  ];

  function build() {
    var header = $('.header'), shell = $('main.shell');
    if (!header || !shell) return false;
    document.body.classList.add('y2k');

    /* página centralizada */
    var page = el('div', 'y2k-page');
    header.parentNode.insertBefore(page, header);

    var util = el('div', 'y2k-util',
      '<span>Bem-vindo(a) à <b>Tanaka Sr. Online</b>! Você está em: <a href="#" data-y2k="home">Página inicial</a></span>' +
      '<span><button type="button" data-y2k="hist">Minha conta</button> <span class="sep">|</span> <button type="button" data-y2k="cart">Minha cesta (<b data-y2k-n>0</b>)</button> <span class="sep">|</span> <button type="button" data-y2k="help">Ajuda</button></span>');
    page.appendChild(util);
    page.appendChild(header);
    var tabs = el('nav', 'y2k-tabs'); tabs.setAttribute('aria-label', 'Departamentos');
    page.appendChild(tabs);
    var strip = el('div', 'y2k-search', '<b>🔍 BUSCA RÁPIDA:</b>');
    var right = $('.shopbar-right'); if (right) strip.appendChild(right);
    strip.appendChild(el('small', '', 'Frete grátis para Shinjuku* · *retirada no balcão, à meia-noite'));
    page.appendChild(strip);
    page.appendChild(shell);

    /* lateral: contador e selos */
    var rail = $('.left-rail');
    if (rail) {
      var n = 104729; try { n = Number(localStorage.getItem('tanaka-y2k-hits') || 104728) + 1; localStorage.setItem('tanaka-y2k-hits', n); } catch (e) {}
      var digits = String(n).padStart(7, '0').split('').map(function (d) { return '<i>' + d + '</i>'; }).join('');
      var box = el('div', 'y2k-box', '<h4>VISITANTES</h4><div class="y2k-in">Você é o visitante nº<br><span class="y2k-counter">' + digits + '</span><br><small>desde 01/01/2000</small></div>');
      var box2 = el('div', 'y2k-box', '<h4>PAGAMENTO</h4><div class="y2k-in">Aceitamos:<br><b style="color:#d10a2e;font-size:14px">¥ DINHEIRO VIVO</b><br><small>Não aceitamos cartão, cheque<br>ou perguntas.</small></div>');
      var box3 = el('div', 'y2k-box', '<h4>SELOS</h4><div class="y2k-in y2k-badges">' +
        '<span class="y2k-badge ie"><span>e</span><em>Melhor visto no Internet Explorer 5</em></span>' +
        '<span class="y2k-badge ssl"><span>🔒</span><em>Site seguro 128-bit*</em></span>' +
        '<span class="y2k-badge yen"><span>¥</span><em>Só ienes · cash only</em></span>' +
        '<span class="y2k-badge made"><span>T</span><em>Made with Notepad</em></span>' +
        '</div>');
      rail.appendChild(box); rail.appendChild(box2); rail.appendChild(box3);
    }

    /* rodapé */
    var foot = $('.footer');
    if (foot) foot.appendChild(el('div', 'y2k-foot',
      '<a href="#" data-y2k="home">Página inicial</a>|<a href="#" data-y2k="cart">Cesta</a>|<a href="#" data-y2k="hist">Pedidos</a>|<a href="#" data-y2k="help">Política de devolução</a>|<a href="#" data-y2k="help">Fale conosco</a><br>' +
      '© 2000 Tanaka Enterprises Co., Ltd. Todos os direitos reservados. · Site otimizado para 800×600 · Internet Explorer 5.0 ou Netscape 4.7'));

    /* Tanaka no canto + rádio */
    var src = ($('.tanaka-portrait') || {}).src || '';
    var w = el('aside', 'y2k-tanaka');
    w.innerHTML = '<div class="y2k-bubble" aria-live="polite"></div>' +
      '<div class="y2k-card"><div class="y2k-card-t"><span>社長 TANAKA</span><button type="button" data-y2k="min" aria-label="Minimizar">_</button></div>' +
      '<div class="y2k-face">' + (src ? '<img src="' + src + '" alt="Presidente Tanaka">' : '') + '<span>ON-LINE!</span></div>' +
      '<div class="y2k-radio"><div class="y2k-lcd"><span>TANAKA FM 76.2 ♪ Tanaka\'s Amazing Commodities ♪ Remix Robots ♪</span></div>' +
      '<div class="y2k-ctl"><button type="button" data-y2k="play">▶</button><span class="y2k-eq"><i></i><i></i><i></i><i></i></span><input type="range" min="0" max="100" aria-label="Volume da rádio"></div></div></div>';
    document.body.appendChild(w);
    var bubble = $('.y2k-bubble', w), li = 0;
    function say() { bubble.innerHTML = LINES[li++ % LINES.length]; bubble.style.animation = 'none'; void bubble.offsetWidth; bubble.style.animation = ''; }
    say(); setInterval(say, 9000);

    var audio = document.getElementById('tanakaBackgroundMusic'), vol = document.getElementById('bgmVolume'), rv = $('input[type="range"]', w), pb = $('[data-y2k="play"]', w);
    function paintRadio() { var on = audio && !audio.paused; pb.textContent = on ? '❚❚' : '▶'; pb.classList.toggle('on', on); w.classList.toggle('playing', on); }
    if (audio) { audio.addEventListener('play', paintRadio); audio.addEventListener('pause', paintRadio); }
    if (vol) { rv.value = vol.value; rv.addEventListener('input', function () { vol.value = rv.value; vol.dispatchEvent(new Event('input', { bubbles: true })); vol.dispatchEvent(new Event('change', { bubbles: true })); }); }
    paintRadio(); setInterval(paintRadio, 1500);

    /* ações */
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-y2k]'); if (!t) return;
      var k = t.dataset.y2k; e.preventDefault();
      if (k === 'home') { var all = $('.cat-btn[data-cat="all"]'); if (all) all.click(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      else if (k === 'cart') click('#cartTop');
      else if (k === 'hist') click('#historyTop');
      else if (k === 'help') bubble.innerHTML = '<b>Ajuda?</b> Escolha, coloque na cesta e pague em ienes. Devolução? Hahaha.';
      else if (k === 'play') click('#bgmToggle');
      else if (k === 'min') { w.classList.toggle('min'); t.textContent = w.classList.contains('min') ? '□' : '_'; }
      else if (k.indexOf('cat:') === 0) { var b = $('.cat-btn[data-cat="' + k.slice(4) + '"]'); if (b) b.click(); }
      else if (k === 'terminal') click('#terminalTop');
    });

    /* abas a partir dos departamentos */
    function paintTabs() {
      var cats = Array.prototype.slice.call(document.querySelectorAll('#categoryNav .cat-btn'));
      var h = cats.map(function (c) {
        var lab = (c.querySelector('span') || c).textContent.trim();
        if (c.dataset.cat === 'all') lab = 'Início';
        return '<button type="button" data-y2k="cat:' + c.dataset.cat + '" class="' + (c.classList.contains('active') ? 'on' : '') + '">' + lab.charAt(0).toUpperCase() + lab.slice(1).toLowerCase() + '</button>';
      }).join('');
      h += '<button type="button" class="hot" data-y2k="hist">Meus pedidos</button>';
      if ($('#terminalTop')) h += '<button type="button" data-y2k="terminal">Terminal</button>';
      if (tabs.innerHTML !== h) tabs.innerHTML = h;
      var c = document.getElementById('headerCartCount'), n = document.querySelector('[data-y2k-n]');
      if (c && n) n.textContent = c.textContent;
    }
    paintTabs();
    var nav = document.getElementById('categoryNav');
    if (nav && 'MutationObserver' in window) new MutationObserver(paintTabs).observe(nav, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    var cc = document.getElementById('headerCartCount');
    if (cc && 'MutationObserver' in window) new MutationObserver(paintTabs).observe(cc, { childList: true, characterData: true, subtree: true });
    return true;
  }
  function init() { if (!build()) setTimeout(init, 200); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
