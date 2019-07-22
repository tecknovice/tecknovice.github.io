const cards = document.getElementsByClassName('card');
// console.log(cards);
const images = ['img/alice.jpg','img/butterfly.png','img/chaugnar.jpg','img/cresht.jpg','img/dieuthuyen.jpg'];
for(index=0;index<cards.length;index++){
    img = cards[index].children[1].children[0];
    i = Math.round(Math.random()*(images.length-1));
    src = images.splice(i,1);
    img.src=src;
    cards[index].addEventListener("click",handleEventClickCard);
}
function handleEventClickCard(e){
    this.children[0].style.transform = 'rotateY(180deg)';
    this.children[1].style.transform = 'rotateY(0deg)';
}
