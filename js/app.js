QUIZ_DATA = [
    {
        question: 'What term did pioneering 20th-century French composer Erik Satie give to music which “will be part of the noises of the environment?”',
        img: 'satie.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'What instrument was critical in the proliferation and development of ambient music?',
        img: 'studio.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'Who coined the term, “ambient music” in the mid-1970’s and released the album “Ambient 1: Music for Airports” in 1978?',
        img: 'airports.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'Which 1990’s electronic artist was considered as a part of the “Ambient Techno” subgenre and a pioneer of “Intelligent Dance Music?',
        img: 'afx.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'Under the moniker, GAS, ambient techno musician Wolfgang Voigt created a music style that avant-garde music magazine The Wire described as:',
        img: 'gas.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'What 1960’s music style is considered to have played a part in paving the way for the rise of ambient music in the 1970’s-80’s?',
        img: 'midcentury.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'Which is NOT usually a theme of ambient music?',
        img: 'loop.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'Who was one of the first rock and pop artists to experiment with ambient music?',
        img: 'posters.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'What other genre of music did artist Brian Eno create in the early 1970’s, before pioneering modern “ambient music”?',
        img: 'mixing.jpg',
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
        reason: "The answer is this because"
    },
    {
        question: 'What might be a common benefit of listening to ambient music?',
        img: 'rothko.jpg',
        choices: [
            {
                text: 'To pump you up before a tough workout',
                key: false },
            { 
                text: 'To help you focus and minimize distractions',
                key: true },
            { 
                text: 'To make you breakdance to ',
                key: false } ,
            { 
                text: 'To sing in the shower to',
                key: false },
        ],
        reason: "..."
    },
    
]

CORRECT_ICON = "assets/icons/checkmark.png"
INCORRECT_ICON = "assets/icons/xmark.png"




let count = 0;
let correct = 0;

const getCoverScreen = (start, numCorrectAnswers) => {
    const results = finalResult(numCorrectAnswers);
    
    const startTemp = 
    $(`
    <div class="cover-container">
        <div class="cover-text--wrapper">
            <div class="final-results-container">
                <h1 class="main-header"></h1>
            </div>
            <p class="cover-text">This quiz has ${QUIZ_DATA.length} questions. </p>
        </div>
        <div class="cover-btn--wrapper">
            <div class="quiz-trigger" onclick=startQuiz()><p>start</p></div>
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
        <div class="quiz-trigger" onclick=startQuiz()><p>try again</p></div>
        </div>
    </div>
    `)
    return (start) ? startTemp : endTemp;
}

const renderCoverPage = (start, correct) => {
    $("html body").css({backgroundColor:'#FAFAFA'})
    $(".heading-container").css({color:'#000000'})
    $(".final-results-container ").css({color:'#000000'})
    $(".app-container").empty()
    $(".cover-screen").append(getCoverScreen(start, correct).fadeIn("slow"));
 
}

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
            Well done!
        `
    }
    else if (calculatedScore > 0.49 && calculatedScore <= 0.8 ) {
        results.caption = `
            Not bad!
        `
    }
    else {
        results.caption = `
            Terrible.
        `
    }
    return results;
}


const addListener = () => {
        $("input[type='radio']").on("click", (e) => {
            let choice =  $("input[name='option']:checked")
            let parent = $(choice).closest("div")
            let answered = parent.text()
            alert(`clicked ${choice.val()}`);
            processAnswer(choice, parent, answered)
        });
    }

const addIcon = (src) => {
        imgTemp = `<img src=${src}>`
        $(".user-answer-report--wrapper").append(imgTemp)
    }

const getQuestion = (count) => {
    return  $(`
    <div class="question--wrapper">
        <div class="question-img-container">
            <img src= "assets/img/${QUIZ_DATA[count].img}" class="question-img">
            <div class="mask"></div>
        </div>
            <!--<lottie-player
            src="https://assets5.lottiefiles.com/datafiles/uqakNon119TO2A2/data.json"  background="transparent"  speed="0.93"  style="width: 100%; height: 100%;"  loop  autoplay >
            </lottie-player>-->
            <p class="user-status">Question ${count + 1} out of ${QUIZ_DATA.length}</p>
            <p class="q-value">${QUIZ_DATA[count].question}</p>
    </div>
    `).hide()
}

const getAnswers = (count) => {
    return  $(`
    <div class="answer--wrapper">
        <form class="answers">
            <div class="choice"><input type="radio" value=${QUIZ_DATA[count].choices[0].key} class="answer" id="val-1" name="option"><label for="val-1">${QUIZ_DATA[count].choices[0].text}</label></div>
            <div class="choice"><input type="radio" value=${QUIZ_DATA[count].choices[1].key}  class="answer" id="val-2" name="option"><label for="val-2">${QUIZ_DATA[count].choices[1].text}</label></div>
            <div class="choice"><input type="radio" value=${QUIZ_DATA[count].choices[2].key}  class="answer" id="val-3" name="option"><label for="val-3">${QUIZ_DATA[count].choices[2].text}</label></div>
            <div class="choice"><input type="radio" value=${QUIZ_DATA[count].choices[3].key} class="answer" id="val-4" name="option"><label for="val-4">${QUIZ_DATA[count].choices[3].text}</label></div>
        </form>
        <div class="user-report--wrapper">
            <div class="user-answer-report">
                <div class="user-answer-report--wrapper">
                </div>
            </div>
            <div class="user-score--wrapper"><h2 class="user-report tally">${correct}/${count} correct.</h2></div>
        </div>
    </div>
    `).hide()
 
}


const renderQuestion = (count) => {
    $("html body").css({backgroundColor:'#2D3E39'})
    $(".heading-container").css({color:'#FFFFFF'})
    $(".final-results-container ").css({color:'#FFFFFF'})
    $(".app-container")
        .append(getQuestion(count).fadeIn(217))
        .append(getAnswers(count).fadeIn(217));
    addListener()
}

const processAnswer = (choice, parent, answered) => {

    if (choice.val() == "true") {
        addIcon(CORRECT_ICON)
        parent.addClass("highlight-correct")
        correct++
    }
    else {
        addIcon(INCORRECT_ICON)
        parent.addClass("highlight-incorrect")
        // Mark the correct answer
        $("input[value='true']").closest("div").addClass("highlight-correct")
    }

    answerTemp = `<h2 class="user-report">You answered: ${answered}</h2>`
    $(".user-answer-report--wrapper").append(answerTemp)
    $(".q-value").text(QUIZ_DATA[count].reason)

    count++
    $(".tally").text(`${correct}/${count} correct.`)
    nextQuizState(count);

}

const nextQuizState = (count) => {
    $(".question-img").delay(3100).fadeOut(300);
    $(".question--wrapper").delay(3150).fadeOut(250);
    $(".answer--wrapper").delay(3150).fadeOut(250);
    if (count < QUIZ_DATA.length) {
        setTimeout(() => {
            //alert(count)
            $(".app-container").empty();
            renderQuestion(count)
        }, 3400);
    }
    else 
    setTimeout(() => {
        //alert(count)
        renderCoverPage(false, correct)   
        }, 3400);
}

const startQuiz = () => {
    $(".cover-screen").empty();
    $(".app-container").empty();
    count = 0;
    correct = 0;
    renderQuestion(count);
}
// render start screen
// add event listener to cover page
// render question when user clicks start
// when QUIZ DATA IS USED, end screen
// clear results and restart quiz

// BONUS: Randomize questions upon restart

const main = () => {
    renderCoverPage(true)
}

main()


/*

        <div class="cover-container">
            <div class="cover-text--wrapper">
                <div class="final-results-container">
                    <h1 class="main-header">10 out of 10.</h1>
                </div>
                <p class="cover-text">Think you know about the eccentric genre known as ambient music? <br><br>
                    Take this quiz to find out.</p>
            </div>
            <div class="cover-btn--wrapper">
                <div class="quiz-trigger"><p>start</p></div>
            </div>
        </div>

*/

