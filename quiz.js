function checkAnswer(){
    const correctAnswer = "4";
    const radio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = radio.value; //This is used to access the value attribute of the selected radio button
    const feedback = document.getElementById('feedback');

    //Add space before the if clause and the brackets to make it more readable andd to make it reviewable 
    if (userAnswer === correctAnswer){ 
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
    }
};

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click',checkAnswer);

