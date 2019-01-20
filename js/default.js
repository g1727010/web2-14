
var number = Math.floor(Math.random()*9);

var answer = parseInt(window.prompt('０～９の数字を入力してください！これで今日の運勢が分かるよ！'));

var message;

if(answer === number){

  message1 = '★★★★☆';
  message2 = '★★★★☆';
  message3 = '★★★★☆';
  message4 = 'とてもいい一日になるでしょう！';
  message5 = '臨時収入があって気分が上がりそう。ただし、衝動買いには注意。';
  message6 = '大胆に攻めて吉と出る日。どんな勝負、駆け引きも今日なら、あなたに軍配があがるでしょう。';
  message7 = '充実した恋をすることができそうです。異性に対してもルックスにこだわると吉。';

}

else if(number - answer === 1 || number - answer === -1 ){

  message1 = '★★★☆☆';
  message2 = '★★★☆☆';
  message3 = '★★★☆☆';
  message4 = '特に良くも悪くもない一日になるでしょう！';
  message5 = 'ネットショッピングにツキあり。じっくり時間をかけた分だけ、お得な買い物ができるでしょう。';
  message6 = '事の上での偉い人、あこがれの人にバッタリ会うかも。きちんと挨拶して、存在をアピールしては？';
  message7 = '魅力を発揮できる日。さわやかな色っぽさを意識すれば、異性をトリコにすることもできそうです。';

}

else if(number - answer === 2 || number - answer === -2 ){

  message1 = '★★☆☆☆';
  message2 = '★★★★☆';
  message3 = '★☆☆☆☆';
  message4 = '仕事が上手くいく一日になるでしょう！';
  message5 = 'クーポンをかなり有効に使えそうな日。';
  message6 = '大胆に攻めて吉と出る日。どんな勝負、駆け引きも今日なら、あなたに軍配があがるでしょう。';
  message7 = '異性の気持ちがつかみにくく、不安が募りそうです。表面に惑わされず、きちんと見極めるようにしましょう。';
}

else if(number - answer === 3 || number - answer === -3 ){

  message1 = '★★★★☆';
  message2 = '★☆☆☆☆';
  message3 = '★★☆☆☆';
  message4 = '思わぬところから収入が入る一日になるでしょう！';
  message5 = '臨時収入があって気分が上がりそう。ただし、衝動買いには注意。';
  message6 = '裏目になることが多い日。物事をしっかり考えてから行動しよう。';
  message7 = '今日は他の人から影響を受けやすいようです。相手のリアクションにおどおどせず、自分のペースを取り戻すことに集中してください。';
}

else if(number - answer === 4 || number - answer === -4 ){

  message1 = '★☆☆☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★★★☆';
  message4 = '恋が発展する一日になるでしょう！';
  message5 = '思わぬところから金銭トラブルが。お金の使い方には、気を付けよう。';
  message6 = 'あなたの立場が変わるようなウワサが流れそう。気にせず、目の前のことに集中して。';
  message7 = '充実した恋をすることができそうです。異性に対してもルックスにこだわると吉。';

}

else if(number - answer === 5 || number - answer === -5 ){

  message1 = '★★☆☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★☆☆☆';
  message4 = '全体的にうまくいかない一日になるでしょう！';
  message5 = 'クーポンをかなり有効に使えそうな日。';
  message6 = 'あなたの立場が変わるようなウワサが流れそう。気にせず、目の前のことに集中して。';
  message7 = '今日は他の人から影響を受けやすいようです。相手のリアクションにおどおどせず、自分のペースを取り戻すことに集中してください';

}

else if(number - answer === 6 || number - answer === -6 ){

  message1 = '★★☆☆☆';
  message2 = '★★★★★';
  message3 = '★★★☆☆';
  message4 = '仕事がとてもうまくいく一日になるでしょう！';
  message5 = 'クーポンをかなり有効に使えそうな日。';
  message6 = '大きな利益を生む仕事を任されるかもしれません。ものおじせずに突き進んでください。';
  message7 = '魅力を発揮できる日。さわやかな色っぽさを意識すれば、異性をトリコにすることもできそうです。';

}

else if(number - answer === 7 || number - answer === -7 ){

  message1 = '★★★★★';
  message2 = '★★★☆☆';
  message3 = '★★☆☆☆';
  message4 = 'お金持ちになるチャンスがやってくる一日になるでしょう！';
  message5 = '金運アップの情報を得られそう。古くからの友人や異性の知り合いに連絡を入れてみましょう。';
  message6 = '事の上での偉い人、あこがれの人にバッタリ会うかも。きちんと挨拶して、存在をアピールしては？';
  message7 = '今日は他の人から影響を受けやすいようです。相手のリアクションにおどおどせず、自分のペースを取り戻すことに集中してください。';

}

else if(number - answer === 8 || number - answer === -8 ){

  message1 = '★★★☆☆';
  message2 = '★★☆☆☆';
  message3 = '★★★★★';
  message4 = '恋が大いに発展する一日になるでしょう！';
  message5 = 'ネットショッピングにツキあり。じっくり時間をかけた分だけ、お得な買い物ができるでしょう。';
  message6 = 'あなたの立場が変わるようなウワサが流れそう。気にせず、目の前のことに集中して。';
  message7 = '思い切って冒険できそうです。あこがれの人に接近すれば、あなたの思いを受け止めてもらえるでしょう。';

}

else if(number - answer === 9|| number - answer === -9 ){

  message1 = '★★★★★';
  message2 = '★★★★★';
  message3 = '★★★★★';
  message4 = '最高の一日になるでしょう！';
  message5 = '金運アップの情報を得られそう。古くからの友人や異性の知り合いに連絡を入れてみましょう。';
  message6 = '大きな利益を生む仕事を任されるかもしれません。ものおじせずに突き進んでください。';
  message7 = '思い切って冒険できそうです。あこがれの人に接近すれば、あなたの思いを受け止めてもらえるでしょう。';

}

else{

  message1 = '☆☆☆☆☆';
  message2 = '☆☆☆☆☆';
  message3 = '☆☆☆☆☆';
  message4 = '指定された数字をいれてね';
  message5 = '';
  message6 = '';
  message7 = '';


}

document.getElementById('gold').textContent = message1;
document.getElementById('work').textContent = message2;
document.getElementById('love').textContent = message3;
document.getElementById('comment1').textContent = message4;
document.getElementById('comment2').textContent = message5;
document.getElementById('comment3').textContent = message6;
document.getElementById('comment4').textContent = message7;
