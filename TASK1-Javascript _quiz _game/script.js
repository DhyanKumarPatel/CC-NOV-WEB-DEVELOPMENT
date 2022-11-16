// Questions will be asked
const Questions = [{
    id: 0,
   q: "What country has the highest life expectancy?",

    a: [{ text: "India", isCorrect: false },
        { text: "U.S.A", isCorrect: false },
        { text: "Hong-kong", isCorrect: true },
        { text: "Africa", isCorrect: false }
    ]
},
{
    id: 1,
    q: "How many heart does octopus has?",
    a: [{ text: "2", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "1", isCorrect: false }
    ]
},
{
    id: 2,
    q: "How many colors are used in the South African flag",
    a: [{ text: "12", isCorrect: false },
        { text: "9", isCorrect: false },
        { text: "6", isCorrect: true },
        { text: "5", isCorrect: false }
    ]
},
{
    id: 3,
    q: "How many stripes are there on the US flag? ",
    a: [{ text: "12", isCorrect: false },
        { text: "13", isCorrect: true },
        { text: "14", isCorrect: false },
        { text: "15", isCorrect: false }
    ]
},
{
    id: 4,
    q: "How many seasons of the Game of Thrones series are there?",
    a: [{ text: "4", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "8", isCorrect: true }
    ]
},
{
    id: 5,
    q: "Which of the following statements is true?",
    a: [{ text: "Jon Snow’s real name is Aegon", isCorrect: true },
        { text: "Jon Snow is Ned Stark’s son", isCorrect: false },
        { text: "Jon Snow defeats Cersei in the war", isCorrect: false },
        { text: "Jon Snow is the head of Iron Bank", isCorrect: false }
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op3.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op4.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op4.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op2.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op2.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op3.style.backgroundColor = " rgba(243, 239, 239, 0.2)";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
      /*  result[0].style.backgroundColor = " rgb(0, 255, 0,0.5)"*/
        result[0].style.weight = " bold "
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    /*    result[0].style.backgroundColor = " rgb(255, 0, 0,0.5)"*/
        result[0].style.weight = " bold "
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 6) {
    id++;
    iterate(id);
    console.log(id);
}

})