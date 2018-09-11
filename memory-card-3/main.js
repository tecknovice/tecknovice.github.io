// const cards = $('.card');
const wrapper = $('.wrapper');
const progress = $('#progress');
const cardsWrapper = $('.cards-wrapper');
let str='';
let card1 = null, card2;
let point =0;
let remainTime = 0;
let images = ['img/alice.jpg','img/butterfly.png','img/chaugnar.jpg','img/cresht.jpg','img/dieuthuyen.jpg'];
images = images.concat(images);
images = shuffle(images);
for(index=0;index<images.length;index++){
    str +="<div class='card' name='"+images[index]+"'>";
    str +="<div class='back'>";
    str +="<img src='img/back.jpg'/>";
    str +="</div>";
    str +="<div class='front'>";
    str +="<img alt='hero' src='"+images[index]+"'/>";
    str +="</div>";
    str+="</div>";
}
str+="<div class='clear'></div>";
cardsWrapper.html(str);
const cards = $('.card');
for(index=0;index<cards.length;index++){
    card = $(cards[index]);
    card.on('click',handleEventClickCard);
}
function handleEventClickCard(e){
    $(this).toggleClass('flip');
    if(card1==null){
        card1=$(this);
        card1.css('pointer-events', 'none');
    }else{
        card2=$(this);
        card2.css('pointer-events', 'none');
        if(card1.attr('name')!=card2.attr('name')){
            setTimeout(function(){
                card1.toggleClass('flip');
                card2.toggleClass('flip');
                card1.css('pointer-events', 'auto');
                card2.css('pointer-events', 'auto');
                card1 = null;
                card2 = null;
            },1000);
        }else{
            setTimeout(function(){
                card1.css('opacity','0');
                card2.css('opacity','0');
                // card1.css('visibility','hidden');
                // card2.css('visibility','hidden');
                card1 = null;
                card2 = null;
            },1000);
        }
    }
}
reset();
function reset(){
    remainTime = 10;
    progress.attr('max',remainTime);
    progress.attr('value',remainTime);
}
let run = setInterval(function(){
    remainTime =remainTime-1;
    progress.attr('value',remainTime);
    if(remainTime==0){
        clearInterval(run);
        alert('time up');
    }
},1000);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }