// ===== GAME LIST =====
// Notun game add korte: games/ folder e HTML file rakho, tarpor niche ekta line add koro.
// Remove korte: line ta delete koro. Order change korte: line upore/niche nao.
// category: Puzzle | Action | Racing | Arcade | Adventure | Brain Training
const CATEGORIES = ["Puzzle","Action","Racing","Arcade","Adventure","Brain Training"];
const GAMES = [
 {id:"snake", title:"Snake Classic", category:"Arcade", emoji:"🐍", color:"#22c993", file:"games/snake.html", popular:true, isNew:false, desc:"Arrow key diye shap chalao, food khao. Wall ba nijer body te lagle game over."},
 {id:"memory", title:"Memory Match", category:"Brain Training", emoji:"🧠", color:"#6c4cff", file:"games/memory.html", popular:true, isNew:true, desc:"Card ulte same jor milao. Kom move e sob milale tumi jitbe."},
 {id:"tictactoe", title:"Tic Tac Toe", category:"Puzzle", emoji:"❌", color:"#ff5c8a", file:"games/tictactoe.html", popular:true, isNew:false, desc:"Computer er biruddhe X O khelo. Tin ta ek line e milale jit."},
 {id:"dodge", title:"Car Dodge", category:"Racing", emoji:"🏎️", color:"#ff9a3d", file:"games/dodge.html", popular:false, isNew:true, desc:"Left/Right arrow diye gari chalao, samner gari ke eriye jao. Joto beshi tikbe score toto beshi."}
];
// Leaderboard (demo) - future e backend diye real kora jabe
const LEADERS = [["Rafi",980],["Nusrat",870],["Tanvir",760],["Mim",640],["Sakib",520]];
