var now = 0;
var alerady = [];

var names = [
  "최동하",
  "박건우",
  "박상하",
  "현해웅",
  "문형주",
  "최진영",
  "김용휘",
  "김윤태",
  "민석기",
  "김혜원",
  "양시윤",
  "전동수",
  "황상준",
];
var old_num = new Array(names.length).fill(0).map((_, i) => i + 1);
var new_num = new Array(names.length).fill(0).map((_, i) => 100);
let theHJYoo = 1;
let freshmanNum = 3;
let obStart = theHJYoo + freshmanNum + 1;

var coeff = 1.5;

function showNow() {
  beforeRow1 = Math.floor((now * 2) / 10);
  beforeRow2 = Math.floor((now * 2 + 1) / 10);
  beforeCell1 = (now * 2) % 10;
  beforeCell2 = (now * 2 + 1) % 10;
  now++;
  nowRow1 = Math.floor((now * 2) / 10);
  nowRow2 = Math.floor((now * 2 + 1) / 10);
  nowCell1 = (now * 2) % 10;
  nowCell2 = (now * 2 + 1) % 10;

  const rawNameTable = document.getElementById("raw_name");

  if (now != names.length + 1) {
    rawNameTable.rows[beforeRow1].cells[beforeCell1].bgColor = "#888888";
    rawNameTable.rows[beforeRow2].cells[beforeCell2].bgColor = "#888888";
  }
  if (now != names.length) {
    rawNameTable.rows[nowRow1].cells[nowCell1].bgColor = "#FFFF00";
    rawNameTable.rows[nowRow2].cells[nowCell2].bgColor = "#FFFF00";
  }

  myName = rawNameTable.rows[nowRow2].cells[nowCell2].innerText;
  nowName = document.getElementById("who");
  nowName.innerText = "<" + myName + "> 번호 :";
  if (now == names.length) {
    nowName.innerText = "DONE";
  }
}

function writeValue(number) {
  const clickBtn = document.getElementById("input_number");
  clickBtn.value = "";

  if (number == "" && now != names.length) {
    alert("숫자를 입력해주세요");
    return;
  }
  if (now == names.length) {
    for (let i = 0; i < now; i++) {
      const resultTable = document.getElementById("result");
      resultTable.rows[obStart + i].cells[0].bgColor = "#FFFFFF";
      resultTable.rows[obStart + i].cells[1].bgColor = "#FFFFFF";
      resultTable.rows[obStart + i].cells[2].bgColor = "#FFFFFF";
      resultTable.rows[obStart + i].cells[3].bgColor = "#FFFFFF";
      resultTable.rows[obStart + i].cells[4].bgColor = "#FFFFFF";
      const rawNameTable = document.getElementById("raw_name");
    }
    return;
  }
  if (number >= names.length + 1 || number <= 0) {
    alert("숫자가 이상해요");
    return;
  }
  if (alerady.includes(number)) {
    alert("이미 나온 숫자에요");
    return;
  }

  alerady.push(number);
  nowRow1 = Math.floor((number - 1) / 5);
  nowCell1 = (number - 1) % 5;
  const rawNumTable = document.getElementById("raw_number");
  rawNumTable.rows[nowRow1].cells[nowCell1].bgColor = "#888888";

  showNow();
  new_num[now - 1] = number;

  sort_indice = [];
  help_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < names.length; i++) {
    min_weight = 1000;
    min_idx = 0;
    for (let j = 0; j < names.length; j++) {
      if (old_num[j] + coeff * new_num[j] + help_array[j] < min_weight) {
        min_weight = old_num[j] + coeff * new_num[j];
        min_idx = j;
      }
    }
    sort_indice.push(min_idx);
    help_array[min_idx] = 2000;
    if (min_idx == now - 1) {
      now_ord = i;
    }
  }

  const resultTable = document.getElementById("result");
  for (let i = 0; i < now; i++) {
    idx = sort_indice[i];
    resultTable.rows[obStart + i].cells[1].innerText = names[idx];
    resultTable.rows[obStart + i].cells[2].innerText = old_num[idx];
    resultTable.rows[obStart + i].cells[3].innerText = new_num[idx];
    resultTable.rows[obStart + i].cells[4].innerText =
      old_num[idx] + coeff * new_num[idx];
    resultTable.rows[obStart + i].cells[0].bgColor = "#FFFFFF";
    resultTable.rows[obStart + i].cells[1].bgColor = "#FFFFFF";
    resultTable.rows[obStart + i].cells[2].bgColor = "#FFFFFF";
    resultTable.rows[obStart + i].cells[3].bgColor = "#FFFFFF";
    resultTable.rows[obStart + i].cells[4].bgColor = "#FFFFFF";
  }

  resultTable.rows[obStart + now_ord].cells[0].bgColor = "#88FFFF";
  resultTable.rows[obStart + now_ord].cells[1].bgColor = "#88FFFF";
  resultTable.rows[obStart + now_ord].cells[2].bgColor = "#88FFFF";
  resultTable.rows[obStart + now_ord].cells[3].bgColor = "#88FFFF";
  resultTable.rows[obStart + now_ord].cells[4].bgColor = "#88FFFF";
}
