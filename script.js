const stages={
 learn:{badge:'L',step:'LEARNER',colour:'#dc3b35',title:'Learn the Road',tagline:'Build understanding before speed.',how:['Understand what AI can and cannot do.','Understand the Change Management fundamentals AI is supporting.','Know responsible-use, privacy and quality expectations.','Recognise where human judgement must take over.'],outcome:'Outcome: Safe, informed and responsible AI use.'},
 practise:{badge:'P',step:'PROVISIONAL',colour:'#f2b942',title:'Practise in Real Conditions',tagline:'Turn knowledge into experience.',how:['Apply AI to real Change Management problems.','Compare outputs with our standards, evidence and business context.','Learn through peer review, experimentation and shared experience.','Test small proofs of concept and keep what creates genuine value.'],outcome:'Outcome: Confidence, experience and consistent quality.'},
 drive:{badge:'✓',step:'FULL LICENCE',colour:'#2e8b57',title:'Drive with Judgement',tagline:'AI becomes part of how we practise change.',how:['Reduce repeatable and administrative effort.','Turn change information and data into useful insight.','Redirect capacity to stakeholder engagement, influence and adoption.','Own the final decision, quality and outcome instead of relying blindly on AI.'],outcome:'Outcome: More capacity, better insight and stronger adoption.'}
};
const card=document.getElementById('detailCard');
const badge=document.getElementById('cardBadge');
const step=document.getElementById('cardStep');
const title=document.getElementById('cardTitle');
const tagline=document.getElementById('cardTagline');
const list=document.getElementById('cardList');
const outcome=document.getElementById('cardOutcome');
const close=document.getElementById('closeCard');
const hotspots=[...document.querySelectorAll('.hotspot')];
let active=null;
function render(stageName){const d=stages[stageName];card.style.setProperty('--accent',d.colour);badge.textContent=d.badge;step.textContent=d.step;title.textContent=d.title;tagline.textContent=d.tagline;list.replaceChildren(...d.how.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));outcome.textContent=d.outcome;}
function positionCard(button){const r=button.getBoundingClientRect();const w=Math.min(430,window.innerWidth-28);card.style.width=w+'px';let left=r.left+r.width/2-w/2;left=Math.max(14,Math.min(left,window.innerWidth-w-14));let top=r.bottom+20;card.style.left=left+'px';card.style.top=top+'px';requestAnimationFrame(()=>{const h=card.offsetHeight;if(top+h>window.innerHeight-14){top=Math.max(14,r.top-h-20);card.style.top=top+'px';}});}
function show(button){render(button.dataset.stage);hotspots.forEach(h=>h.classList.remove('active'));button.classList.add('active');active=button;card.classList.add('visible');card.setAttribute('aria-hidden','false');positionCard(button);}
function hide(){card.classList.remove('visible');card.setAttribute('aria-hidden','true');hotspots.forEach(h=>h.classList.remove('active'));active=null;}
hotspots.forEach(button=>{button.addEventListener('mouseenter',()=>show(button));button.addEventListener('focus',()=>show(button));button.addEventListener('click',e=>{e.stopPropagation();active===button&&card.classList.contains('visible')?hide():show(button);});});
card.addEventListener('click',e=>e.stopPropagation());close.addEventListener('click',hide);document.addEventListener('click',e=>{if(!e.target.closest('.hotspot'))hide();});document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});window.addEventListener('resize',()=>{if(active)positionCard(active);});
