
console.log("Hello")

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Aminath is currently completing a PhD in:",
        answers: {
          a: "Computer coding",
          b: "Human-computer interaction",
          c: "Interactive programming languages",
          d: "Education",
        },
        correctAnswer: "d"
    },
    {
        question: "Aminath studies at:",
      answers: {
          a: "Queensland Health",
          b: "Qeensland University of Technology",
          c: "University of Technology in Sydney",
          d: "All of the above",          
        },
      correctAnswer: "b"

    },
    {
        question: "Aminath has which of the research skills?:",
        answers: {
            a: "Leadership",
            b: "Planning and scheduling",
            c: "Coding",
            d: "Programming languages",            
        },
        correctAnswer: "b"
    },
    {
        question: "Aminath is super passionate about:",
        answers: {
            a: "Acting",
            b: "Modelling",
            c: "Researching ways to identify how technology can be used in teaching and learning",
            d: "All of the above and more!",            
        },
        correctAnswer: "c"
    },   

]

function buildQuiz(){
        // variable to store the HTML output
    const output = []
    for(i=0; i<quizQuestions.length; i++){
        // variable to store the list of possible answers
        const answers = [];
        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ':'
                + quizQuestions[i].answers[letter]
                +'</label>'
                );
            }
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + quizQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        // combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(){
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        // keep track of user's answers
        var numCorrect = 0;
        var userAnswer = '';
        // for each question ...
        for(i=0; i<quizQuestions.length; i++){
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            // if answer is correct
            if(userAnswer===quizQuestions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
        // show number of correct answers out of total
        if (numCorrect === 0) {
            resultsContainer.innerHTML = "That was not your best effort - you did not get a single answer correct.";                       
            }
        if (numCorrect === 1) {
            resultsContainer.innerHTML = "There is room for improvement there! You only got one correct answer.";
            }
        if (numCorrect === 2) {
            resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
            }
        if (numCorrect === 3) {
            resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Aminath pretty well!.";
            }
        if (numCorrect === 4) {
            resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Aminath so well!.";
            }
    
        }

        //load quiz
    buildQuiz();
    submitButton.onclick = function() {
    showResults();
    }

