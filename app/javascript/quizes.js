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
        {q: 'ネットワークトポロジの説明として正しいものは?', c: ['端末やネットワーク機器をどのように接続しているのか、その接続形態のこと', '基幹となるケーブルに各ノードを接続する接続形態のこと']},
        {q: 'バス型の説明で正しいものは?', c: ['基幹となるケーブルに各ノードを接続する接続形態のこと', '隣接しているノードを円状に接続する接続形態']},
        {q: 'リンク型の説明で正しいものは?', c: ['隣接しているノードを円状に接続する接続形態', '中央の集線装置に各ノードを接続する接続形態']},
        {q: 'スター型の説明として正しいものは?', c: ['中央の集線装置に各ノードを接続する接続形態', 'ノード間をそれぞれ接続する接続形態’']},
        {q: 'メッシュ型の説明として正しいものは?', c: ['ノード間をそれぞれ接続する接続形態', 'ネットワークトポロジを複数組み合わせた接続形態']},
        {q: 'ハイブリット型の説明として正しいものは?', c: ['ネットワークトポロジを複数組み合わせた接続形態', '端末やネットワーク機器をどのように接続しているのか、その接続形態のこと']},
        {q: 'ユニキャストの説明で正しいものは?', c: ['1対1での通信', '1対多での通信']},
        {q: 'ブロードキャストの説明で正しいものは?', c: ['1対多での通信', '1対グループでの通信']},
        {q: 'マルチキャストの説明で正しいものは?', c: ['1対グループでの通信', '1対1での通信']},
        {q: 'プロトコルとは?', c: ['データをどのような形式でどのような手順で送るか、または受け取るかを決める規則を定めたもの', 'ネットワーク上での通信の手順や規約を定めたもの']},
        {q: '通信プロトコルとは?', c: ['ネットワーク上での通信の手順や規約を定めたもの', '複数の通信規則を階層的に構成したもの']},
        {q: 'プロトコルスタックとは?', c: ['複数の通信規則を階層的に構成したもの', 'データをどのような形式でどのような手順で送るか、または受け取るかを決める規則を定めたもの']},
        {q: 'CPUとは?', c: ['制御と演算を担当し、人間で言うと頭脳に当たる部分', 'コンピュータの動作に必要なデータを記憶する部分']},
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