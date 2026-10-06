
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const safeUrl=u=>u && u!=="#" ? u : "#";

function card(x, type="link"){
  const tags=(x.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("");
  const action=type==="prompt"
    ? `<button class="smallbtn go copy" data-copy="${esc(x.desc)}">COPY PROMPT</button><span class="tag">${esc(x.tool||"")}</span>`
    : `<a class="smallbtn go" href="${safeUrl(x.url)}" ${x.url&&x.url!=="#"?'target="_blank" rel="noopener"':''}>OPEN</a>`;
  return `<article class="card searchable" data-text="${esc([x.name,x.category,x.desc,(x.tags||[]).join(" ")].join(" ").toLowerCase())}">
    <div class="icon">${esc(x.icon||"🔗")}</div><h3>${esc(x.name)}</h3><p>${esc(x.desc||"")}</p>
    <div class="tags">${tags}</div><div class="cardActions">${action}</div></article>`;
}
function render(){
  $("#taskGrid").innerHTML=SITE_DATA.tasks.map(x=>`<a class="chip" href="#tools">${esc(x)}</a>`).join("");
  $("#toolGrid").innerHTML=SITE_DATA.aiTools.map(x=>card(x)).join("");
  $("#teacherGrid").innerHTML=SITE_DATA.teacherTools.map(x=>card(x)).join("");
  $("#practiceGrid").innerHTML=SITE_DATA.practice.map(x=>card(x)).join("");
  $("#videoGrid").innerHTML=SITE_DATA.videos.map(x=>card(x)).join("");
  $("#promptGrid").innerHTML=SITE_DATA.prompts.map(x=>card(x,"prompt")).join("");
  $("#resourceGrid").innerHTML=SITE_DATA.resources.map(x=>card(x)).join("");
  $("#socialGrid").innerHTML=SITE_DATA.social.map(x=>`<a class="social" href="${safeUrl(x.url)}" ${x.url!=="#"?'target="_blank" rel="noopener"':''}><div class="icon">${esc(x.icon)}</div>${esc(x.name)}</a>`).join("");
  $("#appButtons").innerHTML=[
    ["OPEN APP",SITE_DATA.app.openUrl],["DOWNLOAD APP",SITE_DATA.app.downloadUrl],["WATCH DEMO",SITE_DATA.app.demoUrl]
  ].map(([n,u],i)=>`<a class="btn ${i===0?"primary":""}" href="${safeUrl(u)}" ${u!=="#"?'target="_blank" rel="noopener"':''}>${n}</a>`).join("");

  const cats=[...new Set(SITE_DATA.aiTools.map(x=>x.category).filter(Boolean))];
  $("#category").innerHTML+=cats.map(x=>`<option>${esc(x)}</option>`).join("");
}
render();

$("#menuBtn").onclick=()=>$("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
document.addEventListener("click",async e=>{
  if(e.target.classList.contains("copy")){
    try{await navigator.clipboard.writeText(e.target.dataset.copy);e.target.textContent="COPIED ✓";setTimeout(()=>e.target.textContent="COPY PROMPT",1200)}
    catch{alert("Copy unavailable. Select the prompt text manually.")}
  }
});
function filter(){
  const q=$("#search").value.toLowerCase().trim(), c=$("#category").value.toLowerCase();
  document.querySelectorAll(".searchable").forEach(el=>{
    const okq=!q||el.dataset.text.includes(q);
    const okc=c==="all"||el.dataset.text.includes(c);
    el.style.display=okq&&okc?"":"none";
  });
}
$("#search").addEventListener("input",filter);$("#category").addEventListener("change",filter);
$("#year").textContent=new Date().getFullYear();
