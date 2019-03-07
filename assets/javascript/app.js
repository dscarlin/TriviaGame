var $stage, $display, $timer, $answer, $popUp, $themeSong, $muteImg

var correct, incorrect, unanswered, time, timeRemaing, timer, responseTimeArray, 
averageResponseTime, sOrNot,correctAnswer, muted, muteImgSource,
answerImageUrl, questions, questionTimeout, queue, levelSelected;

var introHtml = "Welcome to Simpsons Trivia! <br><br>"+
                "Please select a difficulty level:";



$(document).ready(gamePlay)
    function selectTheme(){
        }

    function gamePlay(){
        backstretch();
        defineVariables();
        themeSong();
        muteControl();
        selectDifficulty(runQuestions);
        }

   
    function backstretch(){
        $.backstretch(
            [
            'assets/images/simpsonsBkgd1.jpg',
            'assets/images/simpsonsBkgd2.jpeg',
            'assets/images/simpsonsBkgd3.jpg'
            ],
            {
            duration: 10000,
            fade:900 
            }
            )
        }

    function defineVariables(){
        correct = 0, incorrect = 0, unanswered = 0; time = 0; levelSelected = false, responseTimeArray = [], muted = false; 
        $display = $('#questionContainer'), $timer = $('#timer'), $answer = $('.answer'), $stage = $('#stage'), $muteImg = $('<img>');
        }

    function themeSong(){
        $themeSong = $('<audio>').attr({'src':'assets/audio/The Simpsons.mp3','style':'display:none','Autoplay':true}).appendTo($('body')).trigger('play');
            }
    
    function muteControl(){
        $muteImg.attr({'id':'muteControl', 'src': 'assets/images/unmute.png' }).appendTo($stage).on('click', mute);
        }

    function mute(){
        muted = true
        $muteImg.attr('src', 'assets/images/mute.png')
        $('audio').prop('muted', true)
        $muteImg.off().on('click', unmute)
        console.log('mute')
        }
    
    function unmute(){
        muted = false;
        $muteImg.attr('src','assets/images/unmute.png')
        $('audio').prop('muted', false)
        $muteImg.off().on('click', mute)

        }

    function selectDifficulty(callback1,callback2){
        showPopup();
        clickLevel(callback1,callback2);
        }

    function showPopup(){
        $popUp = $('<div>').attr('class','popUp text-center').html(introHtml);
        var buttonContainer = $('<div>').attr('class','buttonContainer');
        for (i=1;i<4;i++){
            $('<button>').attr('class','btn button difficulty').text("Level "+ i).appendTo(buttonContainer);   
        }
        buttonContainer.appendTo($popUp);
        $('#header').append($popUp);
        }
    
    function clickLevel(callback1, callback2){
        $('.popUp').on('click','.difficulty',function(){
            var levelSelected = $(this).text();
            assignLevel(levelSelected);
            $popUp.off().remove();
            callback1(callback2);
            })
        }

    function assignLevel(level){
        if (level == 'Level 1')
            level1();
        else if (level == 'Level 2')
            level2();
        else 
            level3();        
        }    

    function level1(){
        questions = [                 
            {
            question: "Who is the creator of the Simpsons?",
            answer1: "Alec Baldwin",
            answer2: "Stan Lee",
            answer3: "Mark Wahlburg",
            answer4: "Matt Groening",
            correctAnswer: "Matt Groening",
            image: 'assets/images/level1/Groening.gif'
            },
            {
            question: " question 2",
            answer1: " answer1",
            answer2: " answer2",
            answer3: " answer3",
            answer4: "answer 4",
            correctAnswer: "answer1"
            },
            {
            question: " question 3",
            answer1: " answer1",
            answer2: " answer2",
            answer3: " answer3",
            answer4: "answer 4",
            correctAnswer: "answer1"
            }
            ];
        console.log('level 1 selected'); // log
        }

    function level2(){
        questions = [                 //question bank
            {
            question: " question 1",
            answer1: " answer1",
            answer2: " answer2",
            answer3: " answer3",
            answer4: "answer 4",
            correctAnswer: "answer1"
            },
            {
            question: " question 2",
            answer1: " answer1",
            answer2: " answer2",
            answer3: " answer3",
            answer4: "answer 4",
            correctAnswer: "answer1"
            },
            {
            question: " question 3",
            answer1: " answer1",
            answer2: " answer2",
            answer3: " answer3",
            answer4: "answer 4",
            correctAnswer: "answer1"
            }
            ];
        console.log('level 2 selected');
        }

    function level3(){
        console.log('level 3 selected'); //log

        }

    function runQuestions(callback){
        answerClick();
        var nextQuestion = questions.shift()     
        if (nextQuestion){ 
            startTimer()   
            displayQuestion(nextQuestion)       
            questionTimeout = setTimeout(outOfTime, 20*1000, runQuestions);
            }
        else{
            resultScreen();
            }
        }

    function alertTimeLow(){
        var $timer = $('.timer')
        $timer.attr('style','color: brown');
        if (timeRemaining < 5)
            $timer.attr('style','color: red');
            
        }
    
    function resultScreen(){
        calculateAverageResponseTime();
        clearStage();
        $timer.html($('<h4>').addClass('result auto font-adjust').text("Here's how you did:"));
        $('<div>').addClass('result auto').html('Correct: ' + correct).appendTo($display);
        $('<div>').addClass('result auto').html('Incorrect: ' + incorrect).appendTo($display);
        $('<div>').addClass('result auto').html('Unanswered: ' + unanswered).appendTo($display);
        $('<div>').addClass('result auto').html('Average Response Time: ' + averageResponseTime +' second' + sOrNot).appendTo($display);
        introHtml = "Please select a difficulty level:";
        playAgain() 
        }

    function calculateAverageResponseTime(){
        var total = 0
        for (var index in responseTimeArray){
            total += responseTimeArray[index];
        }
        averageResponseTime = Math.floor(total/responseTimeArray.length)
        sOrNot = (averageResponseTime > 1) ? "s" : "";
        }
    function playAgain(){
        $('<button>').attr('class','btn button playAgain').text("Play Again").appendTo($display);
        $display.off().on('click', '.playAgain', resetBoard);
        }
    
    function resetBoard(){
        $display.empty();
        $timer.empty();
        gamePlay();
        }
    
    function startTimer(){
        time = 0;
        displayTimer();
        timer = setInterval(displayTimer, 1000);
        }

    function displayTimer(){
        timeRemaining = 20-time;
        $timer.html($('<div>').addClass('timer auto').text(timeRemaining + " seconds left!"));
        alertTimeLow();
        time++;
        }
        
    function displayQuestion(object){
        $display.empty();
        $('<div>').attr('class', 'question auto').html(object.question).appendTo($display);
        $('<div>').attr('class', 'answer auto').html(object.answer1).appendTo($display);
        $('<div>').attr('class', 'answer auto').html(object.answer2).appendTo($display);
        $('<div>').attr('class', 'answer auto').html(object.answer3).appendTo($display);
        $('<div>').attr('class', 'answer auto').html(object.answer4).appendTo($display);
        correctAnswer = object.correctAnswer
        answerImageUrl = object.image
        }
    
    function outOfTime(callback){
        unanswered++;
        prepareStageForDisplay();
        $timer.html($('<h3>').addClass('auto incorrect').text('Out of Time!'))
        displayCorrectWas();    
        setTimeout(callback, 3*1000);
        }

    function answerClick(){
        $display.on('click', '.answer', checkAnswer);
        }

    function checkAnswer(){
        prepareStageForDisplay();
        var selectedAnswer = $(this).text();
        if (selectedAnswer == correctAnswer)
            replyCorrect(runQuestions)
        else
            replyIncorrect(runQuestions)
        }  

    function prepareStageForDisplay(){
        dropToBottom()
        clearStage();
        answerClickOff();
        }
        
    function clearStage(){
        recordResponseTime();
        clearTimeout(questionTimeout);
        clearInterval(timer);
        $timer.html('');
        $display.empty();
        }    

    function dropToBottom(){
        document.body.scrollIntoView(false);
    }

    function recordResponseTime(){
        responseTimeArray.push(time)
        }

    function answerClickOff(){
        $display.off();
        }
    
    function replyCorrect(callback){
        correct++;
        displayCorrect();
        setTimeout(callback, 3*1000);
        }
    
    function displayCorrect(){
        $('<h2>').addClass('auto correct').text('Correct!').appendTo($display)
        $('<div>').addClass('answer answerPad correct auto').text(correctAnswer).appendTo($display)
        $('<img>').attr({'src': answerImageUrl,'class': 'answerImg'}).appendTo($display)
    }

    function replyIncorrect(callback){
        incorrect++;
        displayIncorrect();
        setTimeout(callback, 3*1000).onSuccess;

        } 

    function displayIncorrect(){
        $('<h2>').addClass('auto incorrect').text('Incorrect!').appendTo($timer);
        displayCorrectWas();
        }
    
    function displayCorrectWas(){
        $('<h3>').addClass('auto font-adjust').text('The Correct answer was:').appendTo($display)
        $('<div>').addClass('answer answerPad correct auto').text(correctAnswer).appendTo($display)
        $('<img>').attr({'src': answerImageUrl,'class': 'answerImg'}).appendTo($display)
    }


