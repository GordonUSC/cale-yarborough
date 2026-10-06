(()=>{
const states={idea:{text:'A spark, a possibility, a “what if.” Start with what you want people to experience.',subject:'An idea to explore',body:'Hi Cale,\n\nI have an idea I would love to explore.\n\nThe audience:\nThe experience I am imagining:\nThe rough timing:\n\n'},brief:{text:'Bring the audience, ambition, timing and the shape of the brief. A clear starting point helps the right conversation happen.',subject:'A live experience brief',body:'Hi Cale,\n\nI would love to talk about a live experience brief.\n\nOur goal and audience:\nThe location and timing:\nThe scope and budget range:\n\n'},partner:{text:'Already moving? Share where the project stands, what your team has covered and where a partner could make the difference.',subject:'A production partnership',body:'Hi Cale,\n\nI am looking for a production partner.\n\nThe project:\nThe current team and stage:\nWhere we could use help:\n\n'}};
function update(value){const s=states[value];document.querySelector('#phase-response').textContent=s.text;document.querySelector('#email-draft').href='mailto:cale@yarborough.me?subject='+encodeURIComponent(s.subject)+'&body='+encodeURIComponent(s.body)}
document.querySelectorAll('input[name="phase"]').forEach(r=>r.addEventListener('change',()=>update(r.value)));update('idea');
document.querySelector('.inquiry fieldset').disabled=false;
// Keep direct case-study links useful, including a closed details element.
function revealHash(){const hash=location.hash;if(!hash)return;const el=document.getElementById(hash.slice(1));if(!el)return;if(el.matches('details'))el.open=true;if(el.id==='gryphus-sheet')el.querySelector('details').open=true;let p=el.parentElement;while(p){if(p.matches('details'))p.open=true;p=p.parentElement}}
window.addEventListener('hashchange',revealHash);revealHash();
})();
// The review tool belongs in the gift footer, never over the portfolio.
(()=>{
const host=document.querySelector('#professional-review');
const dock=document.querySelector('.nf-dock');
if(host&&dock)host.appendChild(dock);
const review=document.querySelector('.nf-send');
if(review){const count=review.querySelector('i');review.textContent='Review notes';if(count)review.appendChild(count)}
// Shared notes.js owns focus entry and return for every page.
})();
