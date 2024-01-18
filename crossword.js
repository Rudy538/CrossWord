const crossWord = document.getElementById("crossWord");
const questionfield = document.getElementById("questionfield");
const questionFieldInput = document.getElementsByClassName("questionFieldInput");
const passwordAtLine = 6;

let questionList = [
    {
        "offset": 6,
        "answer": "PYTHON",
        "question": "Popularny język używany w analizie danych"
    },
    {
        "offset": 2,
        "answer": "ALGORITHM",
        "question": "Krokowa procedura rozwiązująca problem w programowaniu"
    },
    {
        "offset": 5,
        "answer": "CODING",
        "question": "Proces pisania kodu źródłowego"
    },
    {
        "offset": 2,
        "answer": "DEBUGGING",
        "question": "Proces znajdowania i naprawiania błędów w kodzie"
    },
    {
        "offset": 0,
        "answer": "JAVASCRIPT",
        "question": "Skryptowy język programowania używany przede wszystkim do tworzenia stron internetowych"
    },
    {
        "offset": 5,
        "answer": "JAVA",
        "question": "Obiektowy język programowania"
    },
    {
        "offset": 4,
        "answer": "HTML",
        "question": "Język do tworzenia struktur stron internetowych"
    },
    {
        "offset": 5,
        "answer": "COMPILER",
        "question": "Program tłumaczący kod źródłowy na język maszynowy"
    },
    {
        "offset": 1,
        "answer": "FRAMEWORK",
        "question": "Zestaw narzędzi ułatwiający tworzenie aplikacji"
    },
    {
        "offset": 5,
        "answer": "VARIABLE",
        "question": "Symbol reprezentujący wartość w programowaniu"
    },
    {
        "offset": 0,
        "answer": "VERSIONCONTROL",
        "question": "System zarządzania wersjami kodu źródłowego"
    },
    {
        "offset": 6,
        "answer": "INTERFACE",
        "question": "Punkt komunikacyjny pomiędzy dwoma elementami systemu"
    },
    {
        "offset": 4,
        "answer": "IDE",
        "question": "integrated development enviroment"
    },
]

function drawRows() {
    const row = document.getElementsByClassName("row");
    for (let j in questionList) {
        crossWord.innerHTML += '<div class="row">';
        for (let i = 0; i < questionList[j].offset; i++) row[j].innerHTML += '<div class="offset"></div>';
        for (let i = 0; i < questionList[j].answer.length; i++) row[j].innerHTML += '<div class="letters"></div>';
        crossWord.innerHTML += '</div>';
    }
    for (let i = 0; i < row.length; i++) if (row[i].children.item(passwordAtLine).classList.contains("letters")) row[i].children.item(passwordAtLine).classList.add("passwordLine");
}

function drawQuestionsField() {
    for (let i in questionList) {
        questionfield.innerHTML += '<p>' + questionList[i].question + '</p>';
        questionfield.innerHTML += '<input type="text" oninput="check(' + i + ')" class="questionFieldInput" placeholder="Odpowiedź">'; //DEBUG
    }
}

function check(id) {
    const inputValue = questionFieldInput[id].value;
    let row = document.getElementsByClassName("row")[id];
    if (inputValue.toUpperCase() == questionList[id].answer) {
        row.classList.add("answerRight");
        questionFieldInput[id].disabled = 1;
    } /* else{
        row.classList.add("answerWrong");
    } */

    let rowletters = document.getElementsByClassName("row")[id].getElementsByClassName("letters");
    for (let i in inputValue) {
        if(rowletters[i]) rowletters[i].innerHTML = inputValue[i].toUpperCase();
    };

}



drawQuestionsField();
drawRows();