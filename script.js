var currentpoints = 0;
var redscore = 0;
var bluescore = 0;
var currentAwns = "";

var point100q = ["Q1 100", "Q2 100", "Q3 100", "Q4 100", "Q5 100"];
var point100a = ["A1 100", "A2 100", "A3 100", "A4 100", "A5 100"];

var point200q = ["Q1 200", "Q2 200", "Q3 200", "Q4 200", "Q5 200"];
var point200a = ["A1 200", "A2 200", "A3 200", "A4 200", "A5 200"];

var point300q = ["Q1 300", "Q2 300", "Q3 300", "Q4 300", "Q5 300"];
var point300a = ["A1 300", "A2 300", "A3 300", "A4 300", "A5 300"];

var point400q = ["Q1 400", "Q2 400", "Q3 400", "Q4 400", "Q5 400"];
var point400a = ["A1 400", "A2 400", "A3 400", "A4 400", "A5 400"];

var point500q = ["Q1 500", "Q2 500", "Q3 500", "Q4 500", "Q5 500"];
var point500a = ["A1 500", "A2 500", "A3 500", "A4 500", "A5 500"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function question(num){
    if(num == 1){
        var randint1 =getRndInteger(0, point100q.length-1);
        openques(point100q[randint1], point100a[randint1], 100);
    }else if(num == 2){
        var randint2 =getRndInteger(0, point200q.length-1);
        openques(point200q[randint2], point200a[randint2], 200);
    }else if(num == 3){
        var randint3 =getRndInteger(0, point300q.length-1);
        openques(point300q[randint3], point300a[randint3], 300);
    }else if(num == 4){
        var randint4 =getRndInteger(0, point400q.length-1);
        openques(point400q[randint4], point400a[randint4], 400);
    }else if(num == 5){
        var randint5 =getRndInteger(0, point500q.length-1);
        openques(point500q[randint5], point500a[randint5], 500);
    }
}

function openques(ques, awns, points){
    currentpoints = points;
    currentAwns = awns;

    let quesText = document.querySelector(".question-text-h1");
    quesText.innerHTML = ques;

    let quesWindow = document.querySelector(".question");
    quesWindow.style.bottom = "100vh";
}

function closeques(){
    let quesWindow = document.querySelector(".question");
    quesWindow.style.bottom = "0vh";
}

function showAwns(){
    let awnsText = document.querySelector(".question-text-h1");
    awnsText.innerHTML = currentAwns;

    currentAwns = "";
}

function assignPoints(teamid){
    if (teamid == "red"){
        redscore += currentpoints;
        document.querySelector(".red h1").innerHTML = redscore;
        closeques();
    }else if (teamid == "blue"){
        bluescore += currentpoints;
        document.querySelector(".blue h1").innerHTML = bluescore;
        closeques();
    }

    currentpoints = 0;
    let quesWindow = document.querySelector(".question");
    quesWindow.style.bottom = "0vh";
}