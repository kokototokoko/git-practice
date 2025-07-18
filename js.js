for (let i = 1; i <= 50; i++) {

  if (i % 10 === 0) {
    console.log( '今' + i + ' 回ループしました。');
  }

  if (i % 4 === 0) {
    console.log('4で割れる数です。' + i);
  }

  if (i === 50) {
    alert('50回カウントが終わりました。');
  }
}
