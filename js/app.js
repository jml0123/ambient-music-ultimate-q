QUIZ_DATA = [
    {
        question: 'What term did pioneering 20th-century French composer Erik Satie give to music which “will be part of the noises of the environment?”',
        img: 'satie.jpg',
        alt: 'Erik Satie',
        choices: [
            {
                text: '“syndicated music”',
                key: false },
            { 
                text: '“ambient music”',
                key: false },
            { 
                text: '“environmental music”',
                key: false } ,
            { 
                text: '“furniture music”',
                key: true },
        ],
        reason: "A predescessor to ambient music, Erik Satie's 'furniture music' accentuated atmosphere and texture over traditional form and movement."
    },
    {
        question: 'What instrument was critical in the proliferation and development of ambient music?',
        img: 'studio.jpg',
        alt: 'Studio',
        choices: [
            {
                text: 'FM Synthesizer',
                key: true },
            { 
                text: 'Theremin',
                key: false },
            { 
                text: 'Hammond organ',
                key: false } ,
            { 
                text: 'Roland TR-808',
                key: false },
        ],
        reason: "The continued development of the synthesizer, namely the FM synthesizer, was instrumental in the maturing of ambient music throughout the 1980s."
    },
    {
        question: 'Who coined the term, “ambient music” in the mid-1970’s and released the album “Ambient 1: Music for Airports” in 1978?',
        img: 'airports.jpg',
        alt: 'Music For Airports',
        choices: [
            {
                text: 'Prince',
                key: false },
            { 
                text: 'Rob Kardashian',
                key: false },
            { 
                text: 'Brian Eno',
                key: true },
            { 
                text: 'David Bowie',
                key: false },
        ],
        reason: "The English producer Brian Eno is credited with coining the term 'ambient music' in the mid-1970s."
    },
    {
        question: 'Which 1990s electronic artist was considered as a part of the “Ambient Techno” subgenre and a pioneer of “Intelligent Dance Music?',
        img: 'afx.jpg',
        alt: 'AFX',
        choices: [
            {
                text: 'Aphex Twin',
                key: true },
            { 
                text: 'DJ Halitosis',
                key: false },
            { 
                text: 'George Benson',
                key: false } ,
            { 
                text: 'Fatboy Slim',
                key: false },
        ],
        reason: "Aphex Twin is best known for his idiosyncratic work in electronic styles such as techno and ambient music in the 1990s."
    },
    {
        question: 'Under the moniker, "GAS", Wolfgang Voigt created what music magazine, The Wire, described as:',
        img: 'gas.jpg',
        alt: 'Wolfang Voigt',
        choices: [
            {
                text: '“a plastic bag, floating through the air in the middle of a dense and crowded city”',
                key: false },
            { 
                text: '“an anomalous mass, pulsating from an ancient forest floor”',
                key: false },
            { 
                text: '“a steel drawer, clanging and thudding the table inside a dimly lit room”',
                key: false } ,
            { 
                text: '"an outdoor rave, heard floating through the air from a neighboring village"',
                key: true },
        ],
        reason: "The Wire described the characteristic GAS sound as 'an outdoor rave, heard floating through the air from a neighboring village'."
    },
    {
        question: 'What music style is considered to have played a part in paving the way for the rise of ambient music?',
        img: 'midcentury.jpg',
        alt: 'Mid-century Furniture',
        choices: [
            {
                text: 'Motown',
                key: false },
            { 
                text: 'Surf',
                key: false },
            { 
                text: 'Folk',
                key: false } ,
            { 
                text: 'Minimal',
                key: true },
        ],
        reason: "Ambient music was heavily inspired by the ideas of minimalist composers including John Cage, Terry Riley and Erik Satie."
    },
    {
        question: 'Which is NOT usually a theme of ambient music?',
        img: 'loop.jpg',
        alt: 'Liner Notes',
        choices: [
            {
                text: 'Use of loops',
                key: false },
            { 
                text: 'Sampling',
                key: false },
            { 
                text: 'Use of snare drums',
                key: true } ,
            { 
                text: 'Use of synthesizers',
                key: false },
        ],
        reason: "Traditional ambient music has less defined percussive elements, so using snare drums are rare."
    },
    {
        question: 'Who was one of the first rock and pop artists to experiment with ambient music?',
        img: 'posters.jpg',
        alt: 'Vintage Band Posters',
        choices: [
            {
                text: 'David Bowie',
                key: true },
            { 
                text: 'George Harrison',
                key: false },
            { 
                text: 'Madonna',
                key: false } ,
            { 
                text: 'Billie Eilish',
                key: false },
        ],
        reason: "David Bowie worked with Brian Eno and experimented with ambient music on his 1977 album, Low."
    },
    {
        question: 'What other genre of music did artist Brian Eno create in the early 1970’s, before pioneering modern “ambient music”?',
        img: 'mixing.jpg',
        alt: 'Mixing Desk',
        choices: [
            {
                text: 'Contemporary Classical',
                key: false },
            { 
                text: 'Modal Jazz',
                key: false },
            { 
                text: 'Religious Music',
                key: false } ,
            { 
                text: 'Glam Rock',
                key: true },
        ],
        reason: "Brian Eno's musical debut came in the form of Glam Rock."
    },
    {
        question: 'What might be a common benefit of listening to ambient music?',
        img: 'rothko.jpg',
        alt: 'Modern Art',
        choices: [
            {
                text: 'To provide background music to your daily walk',
                key: true },
            { 
                text: 'To help you focus and minimize distractions',
                key: true },
            { 
                text: 'To calm you down',
                key: true } ,
            { 
                text: 'To ponder about your life in the shower',
                key: true },
        ],
        reason: "You can listen to ambient music for anything."
    },
    
]

CORRECT_ICON = "assets/icons/checkmark.png"
INCORRECT_ICON = "assets/icons/xmark.png"




let count = 0;
let correct = 0;

// Returns a cover screen (start screen end screen) based on quiz state and user choices
const getCoverScreen = (start, numCorrectAnswers) => {
    const results = finalResult(numCorrectAnswers);

    const startTemp = 
    $(`
    <div class="cover-container">
        <div class="cover-text--wrapper">
            <div class="final-results-container">
                <h1 class="main-header"></h1>
            </div>
            <p class="cover-text">Think you know about the eccentric<br> genre known as ambient music? <br><br>
            Take this  ${QUIZ_DATA.length} question quiz to find out. </p>
        </div>
        <div class="cover-btn--wrapper">
            <div class="quiz-trigger" onkeypress=startQuiz() onclick=startQuiz()><p tabindex="0">start</p></div>
        </div>
    </div>
    `)

    const endTemp = 
    $(`
    <div class="cover-container">
        <div class="cover-text--wrapper">
            <div class="final-results-container">
                <h1 class="main-header">${numCorrectAnswers} out of ${QUIZ_DATA.length}.</h1>
            </div>
            <p class="cover-text">You answered ${results.percentScore}% of the quiz correctly.<br><br>${results.caption}</p>
        </div>
        <div class="cover-btn--wrapper">
        <div class="quiz-trigger" onkeypress=startQuiz() onclick=startQuiz()><p tabindex="0">try again</p></div>
        </div>
    </div>
    `)

    return (start) ? startTemp : endTemp;
}

// Render Cover Page
const renderCoverPage = (start, correct) => {
    $("html body").css({backgroundColor:'#FAFAFA'})
    $(".heading-container").css({color:'#000000'})
    $(".final-results-container ").css({color:'#000000'})
    $(".app-container").empty()
    $(".cover-screen").append(getCoverScreen(start, correct).fadeIn("slow"));
 
}

// Parses final result and comments based on number of correct answers
const finalResult = (numCorrectAnswers) => {
    
    const calculatedScore = (numCorrectAnswers / QUIZ_DATA.length);

    let results = {
        percentScore: calculatedScore * 100,
        caption: ""
    };
    if (calculatedScore == 1) {
        results.caption = `
            Wow -- Eno your stuff.<br>
            You are truly an ambient music connoseuir.<br>
            Is it even real music though?
        `
    }
    else if (calculatedScore > 0.8 && calculatedScore < 1) {
        results.caption = `
        Satiesfactory.<br>
        You seem to know ambient music pretty well.<br>
        Well done!
    `
    }
    else if (calculatedScore > 0.49 && calculatedScore <= 0.8 ) {
        results.caption = `
            Not bad!<br>
            You did alright for guessing!<br>
        `
    }
    else {
        results.caption = `
            It ain't for everyone!<br>
            Can you even call this music?
        `
    }
    return results;
}




// Retrieves question from QUIZ_DATA and current quiz state (count), then return an html template
const getQuestion = (count) => {
    return  `
    <div class="question--wrapper">
        <div class="question-img-container">
            <img src= "assets/img/${QUIZ_DATA[count].img}" class="question-img" alt=${QUIZ_DATA[count].alt}>
            <div class="mask"></div>
        </div>
            <!--<lottie-player
            src="https://assets5.lottiefiles.com/datafiles/uqakNon119TO2A2/data.json"  background="transparent"  speed="0.93"  style="width: 100%; height: 100%;"  loop  autoplay >
            </lottie-player>-->
            <p class="user-status">Question ${count + 1} out of ${QUIZ_DATA.length}</p>
            <p class="q-value">${QUIZ_DATA[count].question}</p>
    </div>
    `
}

// Retrieves choices from QUIZ_DATA and current quiz state (count), then return an html template
const getAnswers = (count) => {
    return  `
    <div class="answer--wrapper">
        <form class="answers">
            <div class="choice">
                <input type="radio" value=${QUIZ_DATA[count].choices[0].key} class="answer" id="val-1" name="option">
                <label for="val-1" class="answer-container">
                    <span class="choice-text">${QUIZ_DATA[count].choices[0].text}
                    </span>
                    <span class="custom-button">A</span>
                </label>
            </div>
            <div class="choice">
                <input type="radio" value=${QUIZ_DATA[count].choices[1].key}  class="answer" id="val-2" name="option">
                <label for="val-2" class="answer-container">
                    <span class="choice-text">${QUIZ_DATA[count].choices[1].text}
                    </span>
                    <span class="custom-button">B</span>
                </label>
            </div>
            <div class="choice">
                <input type="radio" value=${QUIZ_DATA[count].choices[2].key}  class="answer" id="val-3" name="option">
                <label for="val-3" class="answer-container">
                    <span class="choice-text">${QUIZ_DATA[count].choices[2].text}
                    </span>
                    <span class="custom-button">C</span>
                </label>
            </div>
            <div class="choice">
                <input type="radio" value=${QUIZ_DATA[count].choices[3].key} class="answer" id="val-4" name="option" chec>
                <label for="val-4" class="answer-container">
                    <span class="choice-text">${QUIZ_DATA[count].choices[3].text}</span>
                    <span class="custom-button">D</span>
                </label>
            </div>
        </form>
        <div class="user-report--wrapper">
            <div class="user-answer-report">
                <div class="user-answer-report--wrapper">
                </div>
            </div>
            <div class="user-score--wrapper"><h2 class="user-report tally">${correct}/${count} correct.</h2></div>
        </div>
    </div>
    `
 
}


// Add event listener to radio buttons (keyboard / mouse click friendly)
const addListener = () => {
    let clickedByMouse = false;
    $("input[type='radio']").on("keypress", (e) => {
        if (e.keyCode == 32) assignValues()
    })
    $('label, input[type="radio"]').mouseup(function(e) {
        $(this).focus();
        assignValues()
    });
    $('input[type="radio"]').click(function() {
        if(clickedByMouse){
            console.log("mouse");
            clickedByMouse = false;
        }else{
            console.log("keyboard");
        }
    });
};


// When event is triggered, callback to assign values
const assignValues = () => {
    // remove event handlers to disable multiclick 
    $('label, input[type="radio"]').off();
    let choice =  $("input[type='radio']:focus")
    let label = $(choice).siblings("label")
    let answered = label.children(".choice-text").text();
    if (answered.length > 32) {    
        answered = (`${answered.slice(0,32)}...'`)
    }
    processAnswer(choice, label, answered)
}


// Process user's answer
const processAnswer = (choice, label, answered) => {
    
    // If answer is correct
    if (choice.val() == "true") {
        addIcon(CORRECT_ICON)
        label.children(".choice-text").addClass("highlight-correct")
        correct++
    }
    // If answer is incorrect
    else {
        addIcon(INCORRECT_ICON)
        label.children(".choice-text").addClass("highlight-incorrect")
        // Mark the correct answer
        $("input[value='true']").siblings("label").children(".choice-text").addClass("highlight-correct")
    }
    
    // Show what user answered
    answerTemp = `<h2 class="user-report">You answered: ${answered}</h2>`
    $(".user-answer-report--wrapper").append(answerTemp)
    $(".q-value").text(QUIZ_DATA[count].reason)

    // Move to next question
    count++
    $(".tally").text(`${correct}/${count} correct.`)
    nextQuizState(count);
}


const addIcon = (src) => {
    imgTemp = `<img src=${src} class="status-icon">`
    $(".user-answer-report--wrapper").append(imgTemp)
}

// Render question on screen
const renderQuestion = (count) => {
    $("html body").css({backgroundColor:'#2D3E39'})
    $(".heading-container").css({color:'#FFFFFF'})
    $(".final-results-container ").css({color:'#FFFFFF'})
    $(".app-container")
        .hide()
        .append(getQuestion(count))
        .append(getAnswers(count))
        .fadeIn(217);
    addListener()
}

// Move to next quiz state after user answers question
const nextQuizState = (count) => {
    $(".app-container").delay(4200).fadeOut(300);
    if (count < QUIZ_DATA.length) {
        setTimeout(() => {
            //alert(count)
            $(".app-container").empty();
            renderQuestion(count)
        }, 4500);
    }
    else 
    setTimeout(() => {
        //alert(count)
        renderCoverPage(false, correct)   
        }, 4500);
}

// Initialize quiz 
const startQuiz = () => {
    $(".cover-screen").empty();
    $(".app-container").empty();
    count = 0;
    correct = 0;
    renderQuestion(count);
}

const main = () => {
    renderCoverPage(true)
}

main()



// BONUS: Randomize questions upon restart