var $display, $timer, $answer, $popUp, $themeSong, $muteImg, $stage;

var correct, incorrect, unanswered, score, time, timeRemaing, timer, responseTimeArray, 
averageResponseTime, sOrNot, correctAnswer, muteImgSource, themeObject, played, 
answerImageUrl, questions, questionTimeout, queue, levelSelected;

var audioPlaying = false;
var muted = false;
var introHtml = "Welcome to '90s TV Show Trivia! <br><br>"+
                "Please select a theme:";
var gameObj =  {
    theSimpsons:{
        name :
        "The Simpsons",
        themeSong: 
        'assets/audio/The Simpsons.mp3',
        backstretchArray:[
            'assets/images/simpsonsBkgd1.jpg',
            'assets/images/simpsonsBkgd2.jpeg',
            'assets/images/simpsonsBkgd3.jpg'
        ],
        level1: function(){
            questions = [                 
                {
                    question: "Who is the creator of the Simpsons?",
                    answer1: "Alec Baldwin",
                    answer2: "Stan Lee",
                    answer3: "Mark Wahlburg",
                    answer4: "Matt Groening",
                    correctAnswer: "Matt Groening",
                    image: 'assets/images/theSimpsons/level1/Groening.gif'
                },
                {
                    question: "What part of the opening credits tends to be different each week?",
                    answer1: "Bart riding his skateboard",
                    answer2: "Marge checking out in the grocery store",
                    answer3: "The family sitting on the couch",
                    answer4: "Homer driving the car",
                    correctAnswer: "The family sitting on the couch",
                    image: 'assets/images/theSimpsons/level1/couchGag.gif'
                },
                {
                    question: "What are the annual halloween episodes known as?",
                    answer1: "Nightmare on Evergreen Terrace",
                    answer2: "Treehouse of Horror",
                    answer3: "D'oh of the Dead",
                    answer4: "The Day Springfield Stood Still",
                    correctAnswer: "Treehouse of Horror",
                    image: 'assets/images/theSimpsons/level1/treehouseOfHorror.gif'
                }
            ];
        },
        level2: function(){
            questions = [                 
                {
                    question: "Who founded Springfield?",
                    answer1: "Arman Tamzarian",
                    answer2: "Abraham Simpson",
                    answer3: "Jebediah Springfield",
                    answer4: "Shelbyville Manhattan",
                    correctAnswer: "Jebediah Springfield",
                    image: 'assets/images/theSimpsons/level2/jebediahSpringfield.gif'
                },
                {
                    question: "Milhouse Van Houten is one of the few residents of Springfield with which of the following traits?",
                    answer1: "Eyebrows",
                    answer2: "Five fingers",
                    answer3: "Purple hair",
                    answer4: "Freckles",
                    correctAnswer: "Eyebrows",
                    image: 'assets/images/theSimpsons/level2/milhouseEyebrows.gif'
                },
                {
                    question: "What is the name of Ned Flanders' store at the Springfield Mall",
                    answer1: "Bible Blaster",
                    answer2: "Hi-Didly-Ho-Mart",
                    answer3: "The Leftorium",
                    answer4: "Ned's Beds",
                    correctAnswer: "The Leftorium",
                    image: 'assets/images/theSimpsons/level2/leftorium.gif'
                }
            ];
        },
        level3: function(){
            questions = [                 
                {
                    question: "The Simpsons originally appeared as a short on what show?",
                    answer1: "Matt Groening's Original Family",
                    answer2: "The Tracy Ullman Show",
                    answer3: "Married With Children",
                    answer4: "The Tonight Show",
                    correctAnswer: "The Tracy Ullman Show",
                    image: 'assets/images/theSimpsons/level3/simpsonsUllman.webp'
                },
                {
                    question: "What was the name of the first full length episode shown?",
                    answer1: "Tennis the Menace",
                    answer2: "Simpsons Roasting on an Open Fire",
                    answer3: "Kamp Krusty",
                    answer4: "The Crepes of Wrath",
                    correctAnswer: "Simpsons Roasting on an Open Fire",
                    image: 'assets/images/theSimpsons/level3/simpsonsChristmas.webp'
                },
                {
                    question: "What number is the current Snowball owned by the Simpson family?",
                    answer1: "Snowball I",
                    answer2: "Snowball IV",
                    answer3: "Snowball V",
                    answer4: "Snowball VII",
                    correctAnswer: "Snowball V",
                    image: 'assets/images/theSimpsons/level3/snowballV.gif'
                }
            ];
        }
    },
    seinfeld :  {
        name : 
        "Seinfeld",
        themeSong: 
        'assets/audio/Seinfeld.mp3',
        backstretchArray:
            [
            'assets/images/seinfeld/seinfeldBkgd1.jpeg',
            'assets/images/seinfeld/seinfeldBkgd2.jpeg',
            'assets/images/seinfeld/seinfeldBkgd3.jpeg',
            'assets/images/seinfeld/seinfeldBkgd4.jpeg'
            ],
        level1: function(){
            questions = [
                {
                    question: "What is Kramer's first name?",
                    answer1: 'Cosmo',
                    answer2: 'Martin',
                    answer3: 'George',
                    answer4: "Pablo",
                    correctAnswer: 'Cosmo',
                    image: 'assets/images/seinfeld/level1/seinfeldKramer.gif',
                },
                {
                    question: "Which of the following is NOT a reason Jerry or George have broken up with a woman?",
                    answer1: "She sucked on a peach pit",
                    answer2: "She beat them at chess",
                    answer3: 'She "shushed" them',
                    answer4: "She kept paying for dinner",
                    correctAnswer: "She kept paying for dinner",
                    image: 'assets/images/seinfeld/level1/seinfeldDating.webp',
                },
                {
                    question: "Who is the postman in Jerry's apartment building?",
                    answer1: "Mr. Hillman",
                    answer2: "Newman",
                    answer3: "Fred",
                    answer4: "Martin",
                    correctAnswer: "Newman",
                    image: 'assets/images/seinfeld/level1/Newman.webp',
                }
            ];
        },
        level2: function(){
            questions = [
                {
                    question: "The front of the restaurant that's known as Monk's on the show is actually the front of what restaurant?",
                    answer1: "Billson Diner and Restaurant",
                    answer2: "Tom's Restaurant",
                    answer3: "Danbury Restaurant",
                    answer4: "5th Street Restaurant",
                    correctAnswer: "Tom's Restaurant",
                    image: 'assets/images/seinfeld/level2/seinfeldCafe.webp',
                },
                {
                    question: "What was the name of Kramer's mother?",
                    answer1: "Ginny",
                    answer2: "Delores",
                    answer3: "Babs",
                    answer4: "Rita",
                    correctAnswer: "Babs",
                    image: 'assets/images/seinfeld/level2/seinfeldBabs.webp',
                },
                {
                    question: 'Which one of these characters befriends the "Soup Nazi"?',
                    answer1: "Elaine",
                    answer2: "Newman",
                    answer3: "Jerry",
                    answer4: "Kramer",
                    correctAnswer: "Kramer",
                    image: 'assets/images/seinfeld/level2/seinfeldSoup.webp',
                }
            ];
        },
        level3: function(){
            questions = [
                {
                    question: 'What apartment number is Jerry in for the last 5 seasons of "Seinfeld"?',
                    answer1: "Apartment 1223",
                    answer2: "Apartment 5A",
                    answer3: "Apartment 3-C",
                    answer4: "Apartment 12",
                    correctAnswer: "Apartment 5A",
                    image: 'assets/images/seinfeld/level3/seinfeld5A.webp',
                },
                {
                    question: "Who used the alias Art Vandelay?",
                    answer1: "George",
                    answer2: "Kramer",
                    answer3: "Newman",
                    answer4: "Jerry",
                    correctAnswer: "George",
                    image: 'assets/images/seinfeld/level3/seinfeldGeorge.webp',
                },
                {
                    question:  'Complete the quote: "By the way, they'+"re real and they're"+' ______."',
                    answer1: "Amazing",
                    answer2: "Mine",
                    answer3: "Off limits",
                    answer4: "Spectacular",
                    correctAnswer: "Spectacular",
                    image: 'assets/images/seinfeld/level3/seinfeldSpectacular.webp',
                },
            ];
        }
    },
    that70sShow:{
        name : 
        "That 70s Show",
        themeSong: 
        'assets/audio/that70sShow.mp3',
        backstretchArray:[
            'assets/images/that70sShow/that70sShowBkgd1.jpg',
            'assets/images/that70sShow/that70sShowBkgd2.jpg',
            'assets/images/that70sShow/that70sShowBkgd3.jpg'
        ],
        level1: function(){
            questions = [
                {
                    question: "What is the name of Eric's older sister?",
                    answer1: "Lauren",
                    answer2: 'Laurie',
                    answer3: 'Agatha',
                    answer4: 'Midge',
                    correctAnswer: 'Laurie',
                    image: 'assets/images/that70sShow/level1/that70sShowLaurie.webp',
                },
                {
                    question: "Where does the gang spend most of their time?",
                    answer1: "The Garage",
                    answer2: "Donna's House",
                    answer3: "The Hub",
                    answer4: "Foreman's Basement",
                    correctAnswer: "Foreman's Basement",
                    image: 'assets/images/that70sShow/level1/that70sShowBasement.webp',
                },
                {
                    question: 'Fes(z) is an acronym for what?',
                    answer1: 'Fake Engineering Student',
                    answer2: 'Foreign Exchange Student',
                    answer3: 'Fair Eyed Simpleton',
                    answer4: 'For Everything Simple',
                    correctAnswer: 'Foreign Exchange Student',
                    image: 'assets/images/that70sShow/level1/that70sShowFez.webp',
                },
            ];
        },
        level2: function(){
            questions = [
                {
                    question: 'How old was Mila Kunis when she auditioned for the show?',
                    answer1: 'Fourteen',
                    answer2: 'Sixteen',
                    answer3: 'Twelve',
                    answer4: 'Seventeen',
                    correctAnswer: 'Fourteen',
                    image: 'assets/images/that70sShow/level2/that70sShowJackie.webp',
                },
                {
                    question: 'Which car did the Foreman family own?',
                    answer1: 'Volkswagon Van',
                    answer2: 'Ford Pinto',
                    answer3: 'Oldsmobile Vista Cruiser',
                    answer4: 'Dodge Monaco',
                    correctAnswer: 'Oldsmobile Vista Cruiser',
                    image: 'assets/images/that70sShow/level2/that70sShowVistaCruiser.webp',
                },
                {
                    question: "What is Red's favorite insult?",
                    answer1: "Idiot",
                    answer2: "Dumbass",
                    answer3: "Fool",
                    answer4: "Moron",
                    correctAnswer: "Dumbass",
                    image: 'assets/images/that70sShow/level2/that70sShowRed.webp',
                }
            ];
        },
        level3: function(){
            questions = [
                {
                    question: "What was Donna's nickname when she worked at the WFPP radio station?",
                    answer1: "Double D",
                    answer2: "Dangerous Donna",
                    answer3: "Hot Donna",
                    answer4: "Delicious Donna",
                    correctAnswer: "Hot Donna",
                    image: 'assets/images/that70sShow/level3/that70sShowHotDonna.webp',
                },
                {
                    question: 'Where did Hyde work when he met Leo, who was played by Tommy Chong?',
                    answer1: "Bargain Bob's",
                    answer2: "Price Mart",
                    answer3: "Spinnin' Records",
                    answer4: "Foto Hut",
                    correctAnswer: "Foto Hut",
                    image: 'assets/images/that70sShow/level3/that70sShowChong.webp',
                },
                {
                    question: "What is Eric's favorite movie?",
                    answer1: "The Godfather",
                    answer2: "Jaws",
                    answer3: "Star Wars",
                    answer4: "Taxi Driver",
                    correctAnswer: "Star Wars",
                    image: 'assets/images/that70sShow/level3/that70sShowStarWars.webp',
                }
            ];      
        }
    }
}

$(document).ready(selectTheme);
    
function selectTheme(){ 
    //played will stop the user from being greeted more than once
    played = false;
    //displays popup for selecting theme
    showThemePopup();
    //makes title2 larger before theme selection
    addPopUpCSS();
    clickThemeOrLevel(gamePlay);
};

function addPopUpCSS(){
    $stage = $('#stage');
    $('#title2').addClass('title2');
};

function showThemePopup(){
    $popUp = $('<div>').attr('class','popUp themePopUp text-center').html(introHtml);
    var buttonContainer = $('<div>').attr('class','buttonContainer');
    for (key in gameObj){
        $('<button>').attr('class','btn button difficulty').text(gameObj[key].name).appendTo(buttonContainer);   
    };
    buttonContainer.appendTo($popUp);
    $('#header').append($popUp);
};
//main play function for selected theme
function gamePlay(){
    //makes title2 smaller once theme dictates title1
    $('#title2').removeClass('title2');
    //jquery and 
    defineVariables();
    backstretch();
    displayTitle();
    themeSong();
    muteControl();
    selectDifficulty(runQuestions);
};

function backstretch(){
    $('.backstretch').remove();  
    $.backstretch(
        themeObject.backstretchArray,
        {
            duration: 10000,
            fade:900 
        }
    );
};

function defineVariables(){
    correct = 0, incorrect = 0, unanswered = 0; time = 0; levelSelected = false, responseTimeArray = []; 
    $display = $('#questionContainer'), $timer = $('#timer'), $answer = $('.answer'),  $muteImg = $('<img>'), $title = $('#title');
    introHtml = "Welcome to " + themeObject.name + " Trivia! <br><br>"+
                "Please select a difficulty level:";
    if (played)
        introHtml = "Please select a difficulty level:";
};

function displayTitle(){
    $title.html(themeObject.name);
};

function themeSong(){
    if (!audioPlaying){
    $themeSong = $('<audio>').attr({
        'src': themeObject.themeSong,
        'style':'display:none',
        'loop':true})
        .prop('volume', 0.1)
        .appendTo($('body'))
        .trigger('play');
    };

    if (muted){
        $('audio').prop('muted', true);
    };
};

function muteControl(){
    var source = (muted) ? 'assets/images/mute.png' : 'assets/images/unmute.png';
    $muteImg.attr({'id':'muteControl', 'src': source }).appendTo($stage).on('click', mute);
};

function mute(){
    muted = true;
    $muteImg.attr('src', 'assets/images/mute.png');
    $('audio').prop('muted', true);
    $muteImg.off().on('click', unmute);
};

function unmute(){
    muted = false;
    $muteImg.attr('src','assets/images/unmute.png');
    $('audio').prop('muted', false);
    $muteImg.off().on('click', mute);
}

function selectDifficulty(callback){
    showPopup();
    clickThemeOrLevel(callback);
};

function showPopup(){
    $popUp = $('<div>').attr('class','popUp  text-center').html(introHtml);
    var buttonContainer = $('<div>').attr('class','buttonContainer');
    for (i=1;i<4;i++){
        $('<button>').attr('class','btn button  difficulty').text("Level "+ i).appendTo(buttonContainer);   
    };
    buttonContainer.appendTo($popUp);
    $('#header').append($popUp);
};

function clickThemeOrLevel(callback){
    $popUp.on('click','.difficulty',function(){
        var Selected = $(this).text();
        assignThemeOrLevel(Selected);
        $popUp.off().remove();
        callback();
    })
};

function assignThemeOrLevel(selected){
    for (key in gameObj){
        if (selected == gameObj[key].name){
            themeObject = gameObj[key];
            return;
        };
    }
    if (selected == 'Level 1')
        themeObject.level1();
    else if (selected == 'Level 2')
        themeObject.level2();
    else 
        themeObject.level3();        
};    

function runQuestions(callback){
    answerClick();
    var nextQuestion = questions.shift();     
    if (nextQuestion){ 
        startTimer();
        displayQuestion(nextQuestion);       
        questionTimeout = setTimeout(outOfTime, 20*1000, runQuestions);
        }
    else{
        resultScreen();
        }
};

function alertTimeLow(){
    var $timer = $('.timer');
    $timer.attr('style','color: brown');
    if (timeRemaining < 10)
        $timer.attr('style','color: red');
        
};

function resultScreen(){
    calculateAverageResponseTime();
    calculateScore();
    clearStage();
    $timer.html($('<h4>').addClass('result auto font-adjust').text("Here's how you did:"));
    $('<div>').addClass('result auto').html('Score: ' + score+"%").appendTo($display);
    $('<div>').addClass('result auto').html('Correct: ' + correct).appendTo($display);
    $('<div>').addClass('result auto').html('Incorrect: ' + incorrect).appendTo($display);
    $('<div>').addClass('result auto').html('Unanswered: ' + unanswered).appendTo($display);
    $('<div>').addClass('result auto').html('Average Response Time: ' + averageResponseTime +' second' + sOrNot).appendTo($display);
    playAgain(); 
};

function calculateAverageResponseTime(){
    var total = 0;
    for (var index in responseTimeArray){
        total += responseTimeArray[index];
    };
    averageResponseTime = Math.round(total/responseTimeArray.length);
    sOrNot = (averageResponseTime > 1) ? "s" : "";
};

function calculateScore(){
    score = Math.round((correct / (correct+ incorrect + unanswered))*100);
};

function playAgain(){
    $('<button>').attr('class','btn button playAgain').text("Play Again").appendTo($display);
    $('<button>').attr('class','btn button changeTheme').text("Change Theme").appendTo($display);
    $display.off().on('click','.playAgain', function(){
        played = true, audioPlaying = true;
        resetBoard(gamePlay);
    })
    .on('click','.changeTheme', function(){
        $('.backstretch').animate({opacity: 0}, 500);
        $themeSong.animate({volume: 0}, 500);
        $title.html('');
        introHtml = "Please select a theme:";
        resetBoard(selectTheme);
    });
};

function resetBoard(callback){
    $muteImg.remove();
    $display.empty();
    $timer.empty();
    callback();
};

function startTimer(){
    time = 0;
    displayTimer();
    timer = setInterval(displayTimer, 1000);
};

function displayTimer(){
    timeRemaining = 20-time;
    $timer.html($('<div>').addClass('timer auto').text(timeRemaining + " seconds left!"));
    alertTimeLow();
    time++;
};
    
function displayQuestion(object){
    $display.empty();
    $('<div>').attr('class', 'question auto').html(object.question).appendTo($display);
    $('<div>').attr('class', 'answer auto').html(object.answer1).appendTo($display);
    $('<div>').attr('class', 'answer auto').html(object.answer2).appendTo($display);
    $('<div>').attr('class', 'answer auto').html(object.answer3).appendTo($display);
    $('<div>').attr('class', 'answer auto').html(object.answer4).appendTo($display);
    correctAnswer = object.correctAnswer;
    answerImageUrl = object.image;
};

function outOfTime(callback){
    unanswered++;
    prepareStageForDisplay();
    $timer.html($('<h3>').addClass('auto incorrect').text('Out of Time!'));
    displayCorrectWas();    
    setTimeout(callback, 5*1000);
};

function answerClick(){
    $display.on('click', '.answer', checkAnswer);
};

function checkAnswer(){
    prepareStageForDisplay();
    var selectedAnswer = $(this).text();
    if (selectedAnswer == correctAnswer)
        replyCorrect(runQuestions);
    else
        replyIncorrect(runQuestions);
};  

function prepareStageForDisplay(){
    dropToBottom();
    clearStage();
    answerClickOff();
};
    
function clearStage(){
    recordResponseTime();
    clearTimeout(questionTimeout);
    clearInterval(timer);
    $timer.html('');
    $display.empty();
};    

function dropToBottom(){
    document.body.scrollIntoView(false);
};

function recordResponseTime(){
    responseTimeArray.push(time);
};

function answerClickOff(){
    $display.off();
};

function replyCorrect(callback){
    correct++;
    displayCorrect();
    setTimeout(callback, 4*1000);
};

function displayCorrect(){
    $('<h2>').addClass('auto correct').text('Correct!').appendTo($display);
    $('<div>').addClass('answer answerPad correct auto').text(correctAnswer).appendTo($display);
    $('<img>').attr({'src': answerImageUrl,'class': 'answerImg'}).appendTo($display);
};

function replyIncorrect(callback){
    incorrect++;
    displayIncorrect();
    setTimeout(callback, 4*1000);
}; 

function displayIncorrect(){
    $('<h2>').addClass('auto incorrect').text('Incorrect!').appendTo($timer);
    displayCorrectWas();
};

function displayCorrectWas(){
    $('<h3>').addClass('auto font-adjust').text('The Correct answer was:').appendTo($display);
    $('<div>').addClass('answer answerPad correct auto').text(correctAnswer).appendTo($display);
    $('<img>').attr({'src': answerImageUrl,'class': 'answerImg'}).appendTo($display);
};


