const $ = s => document.querySelector(s);
function card(g) { return `<a class="card" href="game.html?id=${g.id}"><div class="thumb" style="background:${g.color}33">${g.emoji}</div><div class="info"><b>${g.title}</b><small>${g.category}</small></div></a>` }
function fill(sel, list, msg) { const el = $(sel); if (el) el.innerHTML = list.length ? list.map(card).join("") : `<p class="empty">${msg || "More game coming soon!"}</p>` }
function common() {
  const cats = $("#cats");
  if (cats) {
    cats.innerHTML = `<span class="cat on" data-c="">All</span>` + CATEGORIES.map(c => `<span class="cat" data-c="${c}">${c}</span>`).join("");
    cats.onclick = e => {
      const c = e.target.dataset.c; if (c === undefined) return;
      document.querySelectorAll(".cat").forEach(x => x.classList.toggle("on", x === e.target));
      fill("#pop", GAMES.filter(g => !c || g.category === c)); $("#popTitle").textContent = c ? c + " Games" : "Popular Games"
    }
  }
  const lb = $("#lb"); if (lb) lb.innerHTML = LEADERS.map(l => `<li>${l[0]} - <b>${l[1]}</b></li>`).join("");
  const s = $("#search"); if (s) s.oninput = () => {
    const q = s.value.toLowerCase();
    if ($("#pop")) { fill("#pop", GAMES.filter(g => g.title.toLowerCase().includes(q)), "No games found."); $("#popTitle").textContent = q ? "Search Results" : "Popular Games" }
  };
}
function home() {
  const f = GAMES[0];
  $("#heroTitle").textContent = f.title; $("#heroDesc").textContent = f.desc;
  $("#heroArt").textContent = f.emoji; $("#heroBtn").href = "game.html?id=" + f.id;
  fill("#pop", GAMES.filter(g => g.popular)); fill("#new", GAMES.filter(g => g.isNew));
}
function gamePage() {
  const id = new URLSearchParams(location.search).get("id");
  const g = GAMES.find(x => x.id === id);
  if (!g) { $("#gameArea").innerHTML = "<p class='empty'>Game paoa jai ni. <a href='index.html'>Home e jao</a></p>"; return }
  document.title = g.title + " - PlayZone";
  $("#gTitle").textContent = g.title;
  $("#stage").innerHTML = `<iframe src="${g.file}" title="${g.title}" allowfullscreen></iframe>`;
  $("#gDesc").textContent = g.desc;
  fill("#more", GAMES.filter(x => x.id !== id));
}
document.addEventListener("DOMContentLoaded", () => { common(); if ($("#heroTitle")) home(); if ($("#stage")) gamePage() });
