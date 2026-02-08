/* Tabs + exhibition filters */
(function(){
  // Tabs
  document.querySelectorAll("[data-tabs]").forEach((root)=>{
    const tabs = root.querySelectorAll(".tab");
    const panels = root.querySelectorAll(".tab-content");
    const activate = (id)=>{
      tabs.forEach(t=>t.classList.toggle("active", t.dataset.tab === id));
      panels.forEach(p=>p.classList.toggle("active", p.dataset.panel === id));
    };
    tabs.forEach(t=>t.addEventListener("click", ()=>activate(t.dataset.tab)));
    if(tabs[0]) activate(tabs[0].dataset.tab);
  });

  // Exhibitions filter
  const grid = document.querySelector("[data-project-grid]");
  const chips = document.querySelectorAll("[data-chip]");
  if(grid && chips.length){
    const cards = Array.from(grid.querySelectorAll("[data-tags]"));
    const setActive = (tag)=>{
      chips.forEach(c=>c.classList.toggle("active", c.dataset.chip === tag));
      cards.forEach(card=>{
        const tags = (card.dataset.tags||"").split(",").map(s=>s.trim());
        const show = tag === "All" || tags.includes(tag);
        card.style.display = show ? "" : "none";
      });
    };
    chips.forEach(c=>c.addEventListener("click", ()=>setActive(c.dataset.chip)));
    setActive("All");
  }
})();
