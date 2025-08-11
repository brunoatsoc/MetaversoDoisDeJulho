function finalizarQuiz() {
    const total = 5;
    let score = 0;
    let feedback = "";

    for (let i = 1; i <= total; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const questionDiv = document.querySelector(`.question:nth-of-type(${i})`);
        const correctLabel = questionDiv.querySelector(`input[value="1"]`).parentElement;

        if (selected) {
            const userAnswer = selected.value;
            if (userAnswer === "1") {
                score++;
                correctLabel.style.color = "green";
                feedback += `<p style="color:green;">✔ Pergunta ${i} correta!</p>`;
            } else {
                selected.parentElement.style.color = "red";
                correctLabel.style.color = "green";
                feedback += `<p style="color:red;">✘ Pergunta ${i} incorreta.</p>`;
            }
        } else {
            feedback += `<p style="color:red;">✘ Pergunta ${i} não respondida.</p>`;
            correctLabel.style.color = "green";
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `
        <p><strong>Você acertou ${score} de ${total} perguntas.</strong></p>
        ${feedback}
    `;
}