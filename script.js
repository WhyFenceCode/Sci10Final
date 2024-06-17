var currentpoints = 0;
var redscore = 0;
var bluescore = 0;
var currentAwns = "";

var point100q = ["At what point does the cruise stage separate?","How hot will the outside of the MLV get during entry?","What does MLV stand for?","Name a rover that the MLV was used for:","What part separates after the parachute deploys?","How low can the engines throttle (percentage)?"];
var point100a = ["10 minutes prior to atmospheric entry","1300C","Mars Landing Vehicle","Perseverance or Curiosity","Heat shield separation","They can go down to almost 1%"];

var point200q = ["How hot will the inside of the MLV get during entry?","What occurs just after atmospheric entry?","How fast is the MLV moving when it deploys its parachute?","Is the MLV parachute supersonic or subsonic in design?","How wide is the parachute of the MLV?","How many propellant tanks does the MLV have?"];
var point200a = ["Room temperature","Small thrusters guide the MLV back on course","1600km/h","Supersonic","21.5 meters","4"];

var point300q = ["During what procedure is the MLV moving at it’s slowest?","What is the procedure called when the Skycrane drops free of the MLV?","When does the Skycrane maneuver begin?","Before the Skycrane maneuver begins what speed does the MLV decelerate to?","Is it environmentally friendly to send MLV’s to mars?","What will the engine do if it goes bellow 1% throttle?"];
var point300a = ["Skycrane Maneuver","Back shell separation","The Skycrane maneuver begins when the MLV is around 20 meters from the ground","The MLV decelerates itself to a speed of 2km/hour","We feel that it is not, but neither are any other solutions humanity has for sending rovers to mars","It will shut down"];

var point400q = ["Are there large propellant margins on the MLV?","What is the throttle range of the engines on the MLV?","What fuel do the engines burn?","What occurs at heat shield separation other than the heat shield leaving?","How high is the MLV when it deploys its parachute?","What is the cruise stage that is attached to the MLV?"];
var point400a = ["No, they are very small","400 – 3060 newtons","Hydrazine","The radar turns on and guidance begins","11km above the surface"," The systems needed for the 9-month journey to mars"];

var point500q = ["Does the MLV have its own flight computer?","How much fuel will the MLV carry?","What is an inquiry question about the MLV?","What would a way be to maker the lander more economical?","What is an option to replace the rocket motors?","What can be done to improve MLV?"];
var point500a = ["No, it uses the rover’s computer for its computations","It will carry 390 kg of propellant","What impact does the MLV have on the scientific evidence collected by its rovers through the environmental impacts it causes?","Making it out of carbon fiber would reduce the costs to launch the vehicle into space","As mars has an atmosphere it may be possible to make the landers relies on a helicopter-like design to lower it down to the ground","Skycrane could be improved by making it reusable, so that it does not crash onto the surface and instead returns to earth"];

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
