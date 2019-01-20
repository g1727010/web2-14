
var number = Math.floor(Math.random()*9);

var answer = parseInt(window.prompt('０～９の数字を入力してください！これで今日の運勢が分かるよ！'));

var message;

if(answer === number){

  message1 = '★★★★☆';
  message2 = '★★★★☆';
  message3 = '★★★★☆';

}

else if(number - answer === 1 || number - answer === -1 ){

  message1 = '★★★☆☆';
  message2 = '★★★☆☆';
  message3 = '★★★☆☆';
}

else if(number - answer === 2 || number - answer === -2 ){

  message1 = '★★☆☆☆';
  message2 = '★★★★☆';
  message3 = '★☆☆☆☆';
}

else if(number - answer === 3 || number - answer === -3 ){

  message1 = '★★★★☆';
  message2 = '★☆☆☆☆';
  message3 = '★★☆☆☆';
}

else if(number - answer === 4 || number - answer === -4 ){

  message1 = '★☆☆☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★★★☆';
}

else if(number - answer === 5 || number - answer === -5 ){

  message1 = '★★☆☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★☆☆☆';
}

else if(number - answer === 6 || number - answer === -6 ){

  message1 = '★★☆☆☆';
  message2 = '★★★★★';
  message3 = '★★★☆☆';
}

else if(number - answer === 7 || number - answer === -7 ){

  message1 = '★★★★★';
  message2 = '★★★☆☆';
  message3 = '★★☆☆☆';
}

else if(number - answer === 8 || number - answer === -8 ){

  message1 = '★★★☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★★★★';
}

else if(number - answer === 9|| number - answer === -9 ){

  message1 = '★★★★★';
  message2 = '★★★★★';
  message3 = '★★★★★';
}

else{

  message1 = '☆☆☆☆☆';
  message2 = '☆☆☆☆☆';
  message3 = '☆☆☆☆☆';

}

document.getElementById('gold').textContent = message1;
document.getElementById('work').textContent = message2;
document.getElementById('love').textContent = message3;
