let repo;
let qa;
let point;

const wrapper = document.getElementById('wrapper');

const qna = document.getElementById('qna');
const question = document.getElementById('question');
const answerFrame = document.getElementById('answer-frame');
const answerList = document.querySelectorAll('.answer > div');


const slider = document.getElementById('slider');
const logo = document.getElementById('logo');
const playButton = document.getElementById('play');

function QA(question,answer1,answer2,answer3,answer4,rightAnswer){
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.rightAnswer = rightAnswer;
}
qa0 = new QA('test','t','e','s','?','t');
qa1 = new QA('Mạnh vì..., bạo vì tiền','Gạo','Vàng','Bạc','Thể thao','Gạo');
qa2 = new QA('Ngôi chùa được đúc hoàn toàn bằng đồng tại Việt Nam','Chùa Hương', 'Chùa Trấn quốc', 'Chùa một cột', 'Chùa Đồng','Chùa Đồng');
qa3 = new QA('Người dựng nên nước Âu Lạc là ai?','An Dương Vương','Thục Phán','Ngô Quyền','Lý Thường Kiệt','Thục Phán');
qa4 = new QA('Tim người gồm bao nhiêu ngăn? ','1','2','3','4','4');
qa5 = new QA('Trạng gì quê đất Trung Am, Bạch Vân Cư Sĩ lấy làm hiệu riêng','Nguyễn Bỉnh Khiêm','Nguyễn Khuyến','Nguyễn Trãi','Nguyễn Huệ','Nguyễn Bỉnh Khiêm');
qa6 = new QA('Thăng Long Hà Nội 1000 tuổi vào năm nào?','2009','2010','2011','2012','2010');
qa7 = new QA('Silic là kim loại hay phi kim?','kim loại','phi kim','á kim','cả hai','á kim');
qa8 = new QA('Công thức hóa học của đá vôi','CaCo3','CaOH','CO2','CH2','CaCo3');
qa9 = new QA('Lớp phủ bên ngoài lá có tác dụng hạn chế thoát hơi nước là...','Cutin','Keratin','violin','silin','Cutin');
qa10 = new QA('Năm 1954, nước ta ký hiệp định nào với Pháp?','Giơ-ne-vơ','Paris','Tokyo','Hà nội','Giơ-ne-vơ');
qa11 = new QA('Biển có nồng độ muối lớn nhất thế giới?','Biển Chết','Biển Baltic','Biển Bắc','Biển Arab','Biển Chết');
qa12 = new QA('Ủy ban nhân dân do ai bầu ra? ','Hội đồng nhân dân','Mặt trận dân tộc','câu lạc bộ vì dân','hội cảm tử','Hội đồng nhân dân');
qa13 = new QA('Nhạc sĩ Sô Panh gắn liền với nhạc cụ nào?','Piano','Violin','Đàn bầu','Đàn tì bà','Piano');
qa14 = new QA('Đất nước nào là quê hương của ông già tuyết?','Hà Lan','Đức','Phần Lan','Ba Lan','Ba Lan');
qa15 = new QA('Phương tiện nào sau đây ít giống với những cái còn lại?','Máy bay','Máy phay','Máy bào','Máy kéo','Máy bay');
qa16 = new QA('Thức ăn nào sau đây thuộc nhóm thức ăn chứa nhiều bột đường','Gạo','Vừng','Dầu','mè','Gạo');
qa17 = new QA('Đại Ngu là quốc hiệu của triều đại nào?','Triều Ngô','Triều Hồ','Triều Nguyễn','Nhà Tây sơn','Triều Hồ');
qa18 = new QA('Các vua Hùng đặt quốc hiệu nước ta là gì?','Văn Lang','Âu Lạc','Đại Việt','Vạn Xuân','Văn Lang');
qa19 = new QA('Ai được bầu làm Tổng bí thư Đảng cộng sản Việt Nam tại Đại hội XI?','Nguyễn Phú Trọng','Nguyễn Sinh Hùng','Nguyễn Tấn Dũng','Trương Tấn Sang','Nguyễn Phú Trọng');
qa20 = new QA('Bùi Hữu Nghĩa, một trong bốn rồng vàng của vùng Đồng Nai xưa (tức là toàn Nam Bộ ngày nay) là tài năng ở lĩnh vực nào?','Họa','Phú','Đàn','Thi','Thi');//“Rồng vàng” đất Đồng Nai. Đồng Nai có bốn rồng vàng. Lộc họa, Lễ phú, Sang đàn, Nghĩa thi. 
qa21 = new QA('Cúm và sởi là những bệnh lây truyền qua đường nào?','Tiêu Hóa','Hô hấp','Sinh Dục','Máu','Hô hấp');
qa22 = new QA('Nước nào ở khu vực Đông Nam Á không có địa giới với bất kỳ nước khác?','Philippines','Malaysia','Lào','Thái lan','Philippines');
qa23 = new QA('Phổi, họng, thanh quản, khí quản, phế quản, phổi là những cơ quan thuộc hệ cơ quan nào trong cơ thể người?',
'Hệ tuần hoàn','hệ sinh dục','Hệ hô hấp','Hệ thần kinh','Hệ hô hấp');
qa24 = new QA('Loại vitamin nào mà cơ thể con người có thể tự tổng hợp được nhờ ánh sáng Mặt Trời?','A','C','D','E','D');
qa25 = new QA('Paracetamol thuộc nhóm thuốc nào sau đây?','Lợi tiểu','Hạ sốt, giảm đau, chông viêm','an thần','điều trị tăng huyết áp','Hạ sốt, giảm đau, chông viêm');
qa26 = new QA('Thung lũng nổi tiếng ở Mỹ với ngành công nghệ thông tin được đặt tên theo nguyên tố nào?','Silic','Sắt','Vàng','Thủy ngân','Silic');
qa27 = new QA('Tập hợp các số thực được ký hiệu bằng chữ cái nào?','N','Q','R','Z','R');
qa28 = new QA('Khí nào chiếm 80% thành phần không khí?','N2','O2','Co2','H2','N2');
qa29 = new QA('Loài hoa nào được chọn là Quốc hoa của Việt Nam?','Mai','Đào','Mơ','Sen','Sen');
qa30 = new QA('Bộ phim “The Social Network” về mạng xã hội nào đã đạt giải Quả cầu vàng 2011?','Facebook','Twitter','Google Plus','Tầm tay','Facebook');
qa31 = new QA(' Sau khi chiến thắng quân Nam Hán vào năm 938, Ngô Quyền đã đóng đô ở đâu? ','Hoa lư','Đại la','Phú Xuân','Cổ loa','Hoa lư');
qa32 = new QA('Eo biển nào sau đây là nơi phân cách giữa châu Âu và châu Phi?','Bosphorus','Bering','Gibraltar','Malacca','Gibraltar');
qa33 = new QA('Liên Hiệp Quốc đã tuyên bố lấy năm 2011 là Năm Quốc tế ...... trùng với dịp kỷ niệm 100 năm nhà khoa học Marie Curie nhận giải Nobel ......',
'Sinh học','Vật lý','Hóa học','Phân tâm học','Vật lý');
qa34 = new QA('Các trung tâm công nghiệp lớn như Tokyo, Kyoto, Yokohama, Nagoia, Osaka nằm trên hòn đảo nào có diện tích rộng nhất, dân số đông nhất và kinh tế phát triển nhất trong quần đảo Nhật Bản?',
'Hokkaido','Honsu','Shikoku','Kyushu','Honsu');
qa35 = new QA('Bệnh nào sau đây không phải bệnh truyền nhiễm?','Sởi','Quai bị','đậu mùa','tiểu đường','tiểu đường');
qa36 = new QA('Quốc gia nào sau đây có chung đường biên giới cả trên đất liên và trên biển với Việt Nam?','Thái lan','Lào','Trung Quốc','Indonesia','Trung quốc');

window.onload = start;
// start();
for(i=0;i<4;i++){
    answerList[i].addEventListener('click',answerQuestion);
}
playButton.addEventListener('click',handleEventClickButton);

function handleEventClickButton(e){
    reset();
    showQuestion();
}

function reset(){
   repo = [qa0,qa1,qa2,qa3,qa4,qa5,qa6,qa7,qa8,qa9,qa10,qa11,qa12,qa13,qa14,qa15,qa16,qa17,qa18,qa19,qa20,
    qa21,qa22,qa23,qa24,qa25,qa26,qa27,qa28,qa29,qa30,qa31,qa32,qa33,qa34,qa35,qa36];
    wrapper.style.backgroundImage = 'url("img/stage.png")';    
   qna.style.display='block';
   slider.style.visibility='hidden';
   slider.style.top= '-100%';
   point = 0;
   qa = null;
}
function start(){
    wrapper.style.backgroundImage = 'url("img/start.png")';  
    qna.style.display='none';
    slider.style.visibility='visible';
    slider.style.top= '470px';
    // playButton.innerText = 'Play';
}
function fail(){
    var event = new Event('build');
    document.dispatchEvent(event);
    // playButton.innerText = 'Play again';
}
function showQuestion(){
    random = Math.random();
    index = (repo.length-1)*random;
    index = Math.round(index);
    qa_array = repo.splice(index,1);
    qa = qa_array[0];
    question.innerText = qa.question;
    answerList[0].innerText = capFirstChar(qa.answer1);
    answerList[1].innerText = capFirstChar(qa.answer2);
    answerList[2].innerText = capFirstChar(qa.answer3);
    answerList[3].innerText = capFirstChar(qa.answer4);
}
function answerQuestion(e){
    answer = this.innerText;
    if(qa.rightAnswer.toLowerCase()===answer.toLowerCase()&&point<15){
        point +=1;
        showQuestion();
    }
    else if(point==15){
        window.location.href='congrat.html';
    }
    else{
        fail();
    }
}
function capFirstChar(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}
function hover(element) {
    element.setAttribute('src', 'img/active_arrow.png');
}

function unhover(element) {
    element.setAttribute('src', 'img/arrow.png');
}
// Listen for the event.
document.addEventListener('build', function (e) {  
    wrapper.style.backgroundImage = 'url("img/start.png")';  
    qna.style.display='none';
    slider.style.visibility='visible';
    slider.style.top= '470px';
}, false);