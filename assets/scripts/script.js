'use strict';

{
  // 回答一覧
  const CORRECT_ANSWERS = [
    {
      index: 1,
      value: '約79万人'
    },
    {
      index: 2,
      value: 'X-TECH'
    },
    {
      index: 0,
      value: 'Internet of Things'
    },
    {
      index: 0,
      value: 'Society 5.0'
    },
    {
      index: 0,
      value: 'Web3.0'
    },
    {
      index: 1,
      value: '約5倍'
    }
  ];

  // すべての問題を取得
  const allQuiz  = document.querySelectorAll('.js-quiz');

  // buttonタグにdisabledを付与  // L65
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;  // ~.disabled = true で無効にする
    })
  }
  // trueかfalseで出力する文字列を出し分ける // L73
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
    // isCorrect -> L66  // 条件式 ? trueの処理 : falseの処理
  }
  const setClassName = (target, isCorrect) => {  // L74
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    // isCorrect -> L66  // 条件式 ? trueの処理 : falseの処理
  }

  // self
  // let points = 0;
  // const addPoint = (isCorrect) => {
  //   if (isCorrect === true) {
  //     points = points + 1;
  //   }
  // }

  // 各問題の中での処理  // data-quizだからquiz??
  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');  // どれが正解か
    // getAttribute メソッドは指定した属性名の属性値を取得  // Number()で数値化
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));  // どの問題か  // data-quizはクイズの属性値 0から5
    const answerBox = quiz.querySelector('.js-answerBox');  // 答え全体
    const answerTitle = quiz.querySelector('.js-answerTitle');  // 正解か不正解か
    const answerText = quiz.querySelector('.js-answerText');  // 正解

    // self
    // const score = document.querySelector('.quiz_score_inner_text');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        // classList.add('')でクラスを追加、classList.remove('')でクラスを削除
        answer.classList.add('is-selected');

        // getAttribute メソッドは指定した属性名の属性値を取得  // Number()で数値化  // data-answerは選択肢の属性値 0から2
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        // 全てのボタンを非活性化
        setDisabled(answers);  // L36

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;  // L42 & L46

        // 回答欄にテキストやclass名を付与
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);  // L42
        setClassName(answerBox, isCorrect);  // L46

        // self
        // addPoint(isCorrect);
      })
    })
  })

  // if (selectedQuiz === 5) {
  // const score = document.querySelector('.quiz_score_inner_text');
  // score.innerText = points;
  // }
}