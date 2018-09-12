// const cards = $('.card');
const wrapper = $('.wrapper');
const progress = $('#progress');
const cardsWrapper = $('.cards-wrapper');
const modal = $('.modal');
let str;
let card1, card2;
let point;
let remainTime;
let images;
let total;
let found;
let run;
let cards;
function flip(e){
    $(e).toggleClass('flip');
    $(e).css('pointer-events', 'none');
    if(card1==null){
        card1=$(e);
    }else{
        card2=$(e);
        for(index=0;index<cards.length;index++){
            card = $(cards[index]);
                card.css('pointer-events', 'none');
        }
        if(card1.attr('name')!=card2.attr('name')){
            setTimeout(function(){
                card1.toggleClass('flip');
                card2.toggleClass('flip');
                for(index=0;index<cards.length;index++){
                    card = cards[index];
                    if(found.index(card)==-1){
                        $(card).css('pointer-events', 'auto');
                    }
                }
                card1 = null;
                card2 = null;
            },500);
        }else{
            c1 = card1.get(0);
            c2 = card2.get()[0];
            found = found.add(c1).add(c2);
            point ++;
            console.log(point);
            setTimeout(function(){
                card1.css('opacity','0');
                card2.css('opacity','0');
                for(index=0;index<cards.length;index++){
                    card = cards[index];
                    if(found.index(card)==-1){
                        $(card).css('pointer-events', 'auto');
                    }
                }
                card1 = null;
                card2 = null;
                if(point==total){
                    clearInterval(run);
                    setTimeout(function(){
                        modal.css('display', 'block');
                        $('.modal-play').css('display', 'none');
                        $('.modal-loss').css('display', 'none');
                        $('.modal-win').css('display', 'block');
                    },1000);
                }
            },500);
        }
    }
}
$(function(){
    modal.css('display', 'block');
    $('.modal-play').css('display', 'block');
    $('.modal-loss').css('display', 'none');
    $('.modal-win').css('display', 'none');
});
function play(){
    reset();
    modal.css('display','none');
}
function reset(){
     str='';
     card1 = null, card2 = null;
     point = 0;
     remainTime = 0;
     images = ['img/alice.jpg','img/butterfly.png','img/cresht.jpg',
            'img/dieuthuyen.jpg','img/fennik.jpg','img/kahlli_.jpg','img/krixi.jpg',
            'img/nakroth.jpg','img/veera.jpg','img/valhein.jpg','img/trieuvan.jpg','img/taara.jpg'];
     total = images.length;
     found = $();
     run = null;
    remainTime = 120;
    progress.attr('max',remainTime);
    progress.attr('value',remainTime);
    images = images.concat(images);
    images = shuffle(images);
    for(index=0;index<images.length;index++){
        str +="<div class='card' name='"+images[index]+"' onclick='flip(this);'>";
        str +="<div class='back'>";
        str +="<img src='img/back.jpg'/>";
        str +="</div>";
        str +="<div class='front'>";
        str +="<img alt='hero' src='"+images[index]+"'/>";
        str +="</div>";
        str+="</div>";
    }
    str +="<div class='clear'></div>";
    cardsWrapper.html(str);
    cards = $('.card');
    run = setInterval(function(){
        remainTime =remainTime-1;
        progress.attr('value',remainTime);
        if(remainTime==0){
            clearInterval(run);
            modal.css('display', 'block');
            $('.modal-play').css('display', 'none');
            $('.modal-loss').css('display', 'block');
            $('.modal-win').css('display', 'none');
        }
    },1000);
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }