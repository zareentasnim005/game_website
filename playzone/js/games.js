// ===== GAME LIST =====
// Notun game add korte: games/ folder e HTML file rakho, tarpor niche ekta line add koro.
// Remove korte: line ta delete koro. Order change korte: line upore/niche nao.
// category: Puzzle | Action | Racing | Arcade | Adventure | Brain Training
const CATEGORIES = ["Puzzle", "Action", "Racing", "Arcade", "Adventure", "Brain Training"];
const GAMES = [
    { id: "snake", title: "Snake Classic", category: "Arcade", emoji: "🐍", color: "#22c993", file: "games/snake.html", popular: true, isNew: false, desc: "Use the arrow keys to move the snake and eat the food. The game ends if you hit a wall or your own body." },
    { id: "memory", title: "Memory Match", category: "Brain Training", emoji: "🧠", color: "#6c4cff", file: "games/memory.html", popular: true, isNew: true, desc: "Flip the cards and find the matching pairs. Match all the cards in as few moves as you can to win." },
    { id: "tictactoe", title: "Tic Tac Toe", category: "Puzzle", emoji: "❌", color: "#ff5c8a", file: "games/tictactoe.html", popular: true, isNew: false, desc: "Play X and O against the computer. Get three in a row to win." },
    { id: "dodge", title: "Car Dodge", category: "Racing", emoji: "🏎️", color: "#ff9a3d", file: "games/dodge.html", popular: false, isNew: true, desc: "Use the left and right arrow keys to steer your car and avoid the traffic. The longer you survive, the higher your score." }
];
// Leaderboard (demo) - future e backend diye real kora jabe
const LEADERS = [["Rafi", 980], ["Nusrat", 870], ["Tanvir", 760], ["Mim", 640], ["Sakib", 520]];
