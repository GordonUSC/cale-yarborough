(() => {
  const looks = {
    diaries: {label:'B / Pizza Baby Diaries', image:'assets/pizza-diaries.webp', alt:'Illustrated pizza kingdom with a pink polka-dot pony and cowgirl pizza slices.', caption:'Blush, olive & a little cowgirl mischief.', name:'Pizza Baby Diaries', hash:'diaries'},
    press: {label:'A / Box Press', image:'assets/pizza-press.webp', alt:'A concept illustration of a pizza slice wrapped like a newborn in a striped blanket.', caption:'Tomato red. Big opinions. Born a meme.', name:'Box Press', hash:'boxpress'}
  };
  const choices = document.querySelectorAll('[data-pizza]');
  choices.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.pizza, look = looks[key];
    choices.forEach(choice => choice.setAttribute('aria-pressed',String(choice===button)));
    document.querySelector('#pizza-stage').dataset.look = key;
    document.querySelector('#pizza-label').textContent = look.label;
    const img = document.querySelector('#pizza-image'); img.src = look.image; img.alt = look.alt;
    document.querySelector('#pizza-caption').textContent = look.caption;
    document.querySelector('#pizza-note').textContent = `Previewing ${look.name}. The site opens in this look.`;
    const link = document.querySelector('#pizza-open');
    link.href = 'https://gordonusc.github.io/pizza-baby/#' + look.hash;
    link.textContent = 'Explore ' + look.name + ' ↗';
  }));
  document.querySelector('#copy-link').addEventListener('click', async () => {
    const url = 'https://gordonusc.github.io/cale-yarborough/for-cale/';
    const status = document.querySelector('#copy-status');
    let copied=false;
    try { await navigator.clipboard.writeText(url); copied=true; } catch {}
    status.replaceChildren();
    status.append(document.createTextNode(copied?'Invitation copied. ':'Here’s the invitation: '));
    const a=document.createElement('a');a.href=url;a.textContent='Open or copy the invitation link';status.append(a);
  });
})();
