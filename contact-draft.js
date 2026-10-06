/* Keep a selectable starter alongside the mail-app link. No draft is stored or sent. */
(function () {
  'use strict';
  var link = document.querySelector('#email-draft, #brief-link');
  if (!link) return;
  var fallback = document.createElement('details');
  fallback.className = 'contact-draft';
  fallback.innerHTML = '<summary>Use webmail? Copy the email starter</summary>' +
    '<label for="contact-draft-text">Email starter</label><textarea id="contact-draft-text" readonly></textarea>' +
    '<button type="button">Copy email starter</button><p role="status" aria-live="polite"></p>';
  var helper = link.nextElementSibling;
  (helper || link).insertAdjacentElement('afterend', fallback);
  var text = fallback.querySelector('textarea');
  var status = fallback.querySelector('[role="status"]');
  function refresh() {
    var url = new URL(link.href);
    text.value = 'To: ' + decodeURIComponent(url.pathname) + '\nSubject: ' +
      (url.searchParams.get('subject') || '') + '\n\n' + (url.searchParams.get('body') || '');
    status.textContent = '';
  }
  function selectText() { text.focus(); text.select(); }
  fallback.querySelector('button').addEventListener('click', async function () {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text.value);
      status.textContent = 'Copied. Paste into your email service, then edit and send when ready.';
    } catch (error) {
      selectText();
      status.textContent = 'Select and copy the starter above, then paste it into your email service.';
    }
  });
  new MutationObserver(refresh).observe(link, { attributes: true, attributeFilter: ['href'] });
  refresh();
})();
