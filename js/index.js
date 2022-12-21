// Dom object -> 데이터 정리
const h4 = document.querySelector('#modal h4');
const img = document.querySelector('#modal figure>img');
const day = document.querySelector('#modal dl .year');
const pro = document.querySelector('#modal dl .program');
const url = document.querySelector('#modal dl .link>a');
const content = document.querySelector('#modal dl .text');
let num = 1;


// 객체 생성자 함수 
function Modal(title,pic,year,program,href,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.href = href;
  this.text = text;
}

// console.log(img)
//  매서드
Modal.prototype.action = function(){
  h4.innerHTML = this.title;
  // document.querySelector('#modal h4').innerHTML = this.title
  img.setAttribute('src',this.pic);
  day.innerHTML = this.year;
  pro.innerHTML = this.program;
  url.setAttribute('href',this.href);
  url.innerHTML = this.href;
  content.innerHTML = this.text;
}

//  인스턴스
let myModal = [
  new Modal('title1','./images/pic01.png','2022','프로그램1','http://aaa1.com','내용1'),
  new Modal('title2','./images/pic02.png','2021','프로그램2','http://aaa2.com','내용2'),
  new Modal('title3','./images/pic03.png','2023','프로그램3','http://aaa3.com','내용3'),
  new Modal('title4','./images/pic04.png','2024','프로그램4','http://aaa4.com','내용4'),
  new Modal('title5','./images/pic01.png','2025','프로그램5','http://aaa5.com','내용5'),
  new Modal('title6','./images/pic02.png','2026','프로그램6','http://aaa6.com','내용6'),
]

//  event -> 작업 -> click  -> figure, figure>img, #modal>.close

const open = document.querySelectorAll('#all>figure');
// console.log(open)
const close = document.querySelector('#modal>.close');
// console.log(close)
const modal = document.querySelector('#modal')

// open.onclick -> 첫번째
open.forEach(function(item,index){
  item.onclick = function(){
    modal.style.display = 'block';
    myModal[index].action();
  }
})
close.onclick = function(){
  modal.style.display = 'none';
}