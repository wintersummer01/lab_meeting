function drawTable(data) {

    // var allRows = data.split();
    const table = document.getElementById('student_data');
    
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    newCell1.innerText = "김창혁";
    newCell2.innerText = "2020123456";

    alert(allRows[0])
}

function getData() {
    $.ajax({
        url: './data.csv',
        type: 'GET',
        dataType: 'text',
    }).done(drawTable);
}

function writeValue(name, number) {
    drawTable()
    return;

    if (name == "") {
        alert("이름을 입력해주세요.");
        return;
    }
    if (number == "") {
        alert("학번을 입력해주세요.");
        return;
    }
    num_val = parseInt($("#input_number").val())
    if (isNaN(num_val)) {
        alert("학번은 숫자로 입력해주세요!");
        return;
    }
    if (num_val < 2018001001 || num_val > 2024001001) {
        alert("학번이 좀 이상한데요...? 다시 확인해주세요!");
        return;
    }

    alert("저장 완료!")
}
   
function startRandom() {
    
    const table = document.getElementById('team_data');
    table.style.marginLeft = "20px";
    
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    newCell1.innerText = "김창혁";
    newCell2.innerText = "2020123456";

    num_val = parseInt($("#input_team_num").val())
    if (isNaN(num_val)) {
        alert("팀당 인원수는 숫자로 입력해주세요!");
        return;
    }
    if(confirm("팀 당 "+ num_val +"명으로 팀을 구성합니다") == false) {
        return;
    }
  
    alert("Random Start!")
}
    
function resetSheet() {
    if(confirm("진짜 스프레드시트 정보를 리셋할까요?") == false) {
        return;
    }
    
    alert("reset Sheet!")
}