/* Eventry analytics — shared by every page.
 * Loads Google Analytics 4 only if the visitor hasn't declined cookies,
 * shows the cookie banner on pages that don't have their own,
 * and records clicks on any element carrying a data-track attribute.
 */
(function () {
  var GA_ID = 'G-FM7R4KLD57';
  var KEY = 'eventry_cookie_consent';

  function getConsent() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  if (getConsent() === 'declined') {
    window['ga-disable-' + GA_ID] = true;
  } else {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // Send a custom event. Silently does nothing if the visitor declined.
  window.eventryTrack = function (name, params) {
    if (getConsent() === 'declined') return;
    try { gtag('event', name, params || {}); } catch (e) {}
  };

  function hideBanner() {
    var b = document.getElementById('cookieBanner');
    if (b) b.style.display = 'none';
  }
  window.eventryAcceptCookies = function () { setConsent('accepted'); hideBanner(); };
  window.eventryDeclineCookies = function () {
    setConsent('declined');
    window['ga-disable-' + GA_ID] = true;
    hideBanner();
  };

  // Banner for pages without their own (index.html keeps its existing banner).
  function injectBanner() {
    if (getConsent() || document.getElementById('cookieBanner')) return;
    var css = document.createElement('style');
    css.textContent =
      '#cookieBanner{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;' +
      'background:#0d0d0d;color:#fff;border-radius:12px;padding:14px 18px;font:14px/1.5 "DM Sans",sans-serif;' +
      'display:flex;gap:12px;align-items:center;justify-content:space-between;box-shadow:0 6px 24px rgba(0,0,0,.25)}' +
      '#cookieBanner p{margin:0}#cookieBanner a{color:#e8572a;font-weight:500;text-decoration:none;margin:0 4px}' +
      '#cookieBanner a:hover{text-decoration:underline}' +
      '@media(max-width:600px){#cookieBanner{flex-direction:column;text-align:center}}';
    document.head.appendChild(css);
    var b = document.createElement('div');
    b.id = 'cookieBanner';
    b.innerHTML = '<p>Eventry uses cookies to analyse traffic and improve your experience. ' +
      '<a href="#" data-cookie="accept">Accept</a> or <a href="#" data-cookie="decline">Decline</a>.</p>';
    b.addEventListener('click', function (e) {
      var a = e.target.closest('[data-cookie]');
      if (!a) return;
      e.preventDefault();
      if (a.getAttribute('data-cookie') === 'accept') window.eventryAcceptCookies();
      else window.eventryDeclineCookies();
    });
    document.body.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectBanner);
  else injectBanner();

  // Click tracking: <a data-track="register_click" data-listing-id="EVT-..." ...>
  // Every data-* attribute other than data-track becomes an event parameter
  // (data-listing-id -> listing_id).
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-track]');
    if (!el) return;
    var params = {};
    for (var k in el.dataset) {
      if (k === 'track') continue;
      params[k.replace(/[A-Z]/g, function (c) { return '_' + c.toLowerCase(); })] = el.dataset[k];
    }
    if (el.href && el.getAttribute('href') !== '#') params.link_url = el.href;
    window.eventryTrack(el.dataset.track, params);
  }, true);
})();
