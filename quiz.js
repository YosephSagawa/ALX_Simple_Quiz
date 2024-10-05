function checkAnswer(){
    const correctAnswer = "4";
    const radio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = radio.value;
    
    if(userAnswer === correctAnswer){
        const feedback = document.getElementById('feedback');
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
};

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click',checkAnswer);

