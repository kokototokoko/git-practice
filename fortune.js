const fortuneResults = {
  money: [
    { stars: "★★★", detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？" },
    { stars: "★★", detail: "まずまず金運です！使いすぎには注意しましょう！" },
    { stars: "★", detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！" }
  ],
  work: [
    { stars: "★★★", detail: "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？" },
    { stars: "★★", detail: "まずまず仕事運です！普段通り仕事が進むでしょう！" },
    { stars: "★", detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう" }
  ],
  health: [
    { stars: "★★★", detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！" },
    { stars: "★★", detail: "まずまず健康運です！無理せず体を動かしましょう！" },
    { stars: "★", detail: "悪い傾向が見られます！ケガにご注意を・・・" }
  ]
};

function updateButtonText(button) {
  if (button.hasClass("again")) {
    button.removeClass("again").text("運勢を占う！");
    $(".result").fadeOut(2000);
  } else {
    button.addClass("again").text("もう一度占う！");
    $(".result").fadeIn(2000);
  }
}

$(".js-fortune-start").on("click", function () {
  const button = $(this);
  updateButtonText(button);

  if (button.hasClass("again")) {
    ["money", "work", "health"].forEach(function (category) {
      const result = fortuneResults[category];
      const randomIndex = Math.floor(Math.random() * result.length);
      const picked = result[randomIndex];
      $("." + category + " .stars").text(picked.stars);
      $("." + category + " .detail").text(picked.detail);
    });
  }
});
