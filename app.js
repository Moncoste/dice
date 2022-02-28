// Тоглогчийн ээлжийг хадгалах хувьсагч , 1-р тоглогчийг 0,2р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын хадгалсан оноог цуглуулах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусны хадгалах хувьсагч хэрэгтэй,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//Тоглоом эхлэхэд бэлтгэе.
var dice = Math.floor(Math.random() * 6) + 1;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
