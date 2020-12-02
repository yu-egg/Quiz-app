window.addEventListener("DOMContentLoaded", () =>{

  'use strict';
  
  
  {
    const question = document.getElementById('eng-question');
    const choices = document.getElementById('eng-choices');
    const btn = document.getElementById('eng-btn');
    const result = document.getElementById('eng-result');
    const scoreLabel = document.querySelector('#eng-result > p');
    
    const quizSet = shuffle([
      {q: 'これは良い本です', c: ['This is a good book.']},
      {q: 'この辞書は良い', c: ['This dictionary is good.']},
      {q: 'あれは面白い本ですか？ーはい、そうです。', c: ['Is that an interesting book? -Yes, it is.']},
      {q: 'あの本は面白いですか？ーいえ、面白くないです。', c: ['Is that book interesting? -No, it is not']},
      {q: 'これは正しくない', c: ['This is not right.']},
      {q: 'あれは本物の花ではない', c: ['That is not a real flower.']},
      {q: 'このスープはあまり美味しくない', c: ['This soup is not very tasty.']},
      {q: 'これは塩ですか？それとも砂糖ですか？ー砂糖です', c: ['Is this salt or sugar? -It is sugar.']},
      {q: 'あの女性はフランス人ですか、それともイタリア人ですか？ーフランス人です', c: ['is that woman French or Italian? -She is French.']},
      {q: 'あの男性は日本人ですか、それとも中国人ですか？ー日本人です', c: ['Is that men Japanese or chinese? -He is Japanese.']},
      {q: '自動詞は？', c: ['Daniel smiled at Nancy.','She kissed him gently.']},
      {q: '他動詞は？', c: ['She kissed him gently.', 'Daniel smiled at Nancy.']},
      {q: '他動詞は？', c: ['She kissed him gently.', 'Daniel smiled at Nancy.']},
      {q: '他動詞は？', c: ['She kissed him gently.', 'Daniel smiled at Nancy.']},
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;
    
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
      return arr;
    }
    
    function checkAnswer(li) {
      if (isAnswered) {
        return;
      }
      isAnswered = true;
      
      if (li.textContent === quizSet[currentNum].c[0]) {
        li.classList.add('correct');
        score++;
      } else {
        li.classList.add('wrong');
      }
      
      btn.classList.remove('disabled')
    }
    
    function setQuiz() {
      isAnswered = false;
      
      question.textContent = quizSet[currentNum].q;
      
      while(choices.firstChild) {
        choices.removeChild(choices.firstElementChild);
      }
      
      const shuffledChoices = shuffle([...quizSet[currentNum].c]);
      shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
          checkAnswer(li);
        });
        choices.appendChild(li);
      });
      
      if (currentNum === quizSet.length - 1) {
        btn.textContent = 'Show Score';
      }
    }
    
    setQuiz();
    
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) {
        return;
      }
      btn.classList.add('disabled');
      
      if (currentNum === quizSet.length - 1) {
        scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
        result.classList.remove('hidden');
      } else {
        currentNum++;
        setQuiz();
      }
    });
  }
});