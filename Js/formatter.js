const formatData = (questionData) => {

    const result = questionData.map(item => {
    const questionObj = { question: item.question};
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    questionObj.aswers = answers;
    questionObj.correctAnswerIndex = correctAnswerIndex;
    return questionObj;
});

    return result;
}

export default formatData;