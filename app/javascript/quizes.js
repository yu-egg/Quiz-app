  window.addEventListener("DOMContentLoaded", () =>{

    'use strict';
    
    
    {
      const question = document.getElementById('question');
      const choices = document.getElementById('choices');
      const btn = document.getElementById('btn');
      const result = document.getElementById('result');
      const scoreLabel = document.querySelector('#result > p');
      
      const quizSet = shuffle([
        {q: 'Rubyのフレームワークといえば?', c: ['Ruby On Rails', 'Node.js']},
        {q: 'JavaScriptの特徴は?', c: ['インタプリタ言語', 'コンパイラ言語']},
        {q: '次のうち最初にリリースされた言語は?', c: ['Python', 'JavaScript']},
        {q: 'インタプリタ言語の特徴は?', c: ['コードを一行一行機械語に翻訳して実行していく', '一度すべてのコードを機械語に翻訳してから実行する']},
        {q: 'コンパイラ言語の特徴は?', c: ['一度すべてのコードを機械語に翻訳してから実行する', 'コードを一行一行機械語に翻訳して実行していく']},
        {q: 'turbolinksの説明で正しいのは?', c: ['自動的にページを取ってきてbody要素を入れ替えてhead要素にくっつけるという作業をしている', 'リンク先の全てのページを読み込む']},
        {q: 'Reactはどの言語のライブラリですか?', c: ['JavaScript', 'Ruby']},
        {q: 'ネットワークを構成する要素は?', c: ['ノード', 'トラフィック']},
        {q: 'ノードとノードを結ぶ線をなんという?', c: ['リンク', 'フロー']},
        {q: 'リンク上のデータの流れをなんという?', c: ['フロー', 'ノード']},
        {q: 'LANの説明で正しいものは?', c: ['家庭、企業、ビルといった１つの建物や施設内と言った程度の範囲で利用されているネットワーク', '本社と支社といった地域的に離れたLANとLANを接続するネットワーク']},
        {q: 'WANの説明で正しいものは?', c: ['本社と支社といった地域的に離れたLANとLANを接続するネットワーク', '数多くのネットワークを接続した地球規模の巨大なネットワークのこと']},
        {q: 'インターネットの説明で正しいものは?', c: ['数多くのネットワークを接続した地球規模の巨大なネットワークのこと', '家庭、企業、ビルといった１つの建物や施設内と言った程度の範囲で利用されているネットワーク']},
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