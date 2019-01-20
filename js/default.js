
var number = Math.floor(Math.random()*3);

var answer = parseInt(window.prompt('数あてゲーム。０～２の数字を入力してください！'));

var message;

if(answer === number){

  message1 = '★★★★★';
  message2 = '★★★★★';
  message3 = '★★★★★'

}

else if(answer < number){

  message1 = '残念！もっと大きいです';
  message2 = '青';

}

else if(answer > number){

  message1 = '残念！もっと小さいです';
　message2 = '黄';
}

else{

  message1 = '０～２の数字を入力してください';
  message2 = '入力が正しくないので表示されません';

}

document.getElementById('choice').textContent = message1;
document.getElementById('color').textContent = message2;
