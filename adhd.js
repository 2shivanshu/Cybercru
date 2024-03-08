function calculateADHDScore() {
    const scores = [];
    for (let i = 1; i <= 10; i++) {
        const questionId = `question${i}`;
        const selectedValue = document.getElementById(questionId).value;
        scores.push(parseInt(selectedValue));
    }

    const totalScore = scores.reduce((sum, score) => sum + score, 0);

    if (totalScore >= 20) {
        // alert("You might be depressed and need to start taking consultancy as soon as possible.");
        window.open('/adhded.html');
    } else {
        alert("You are safe. If you are unsure, you can take the test again.");
    }
}
