//nav
function upnav () {
    document.addEventListener('scroll', onScroll, { passive: true });
    let last = 0;
    const gap = 1;
    const nav = document.querySelector('nav');
    const headerheight = document.querySelector('header').clientHeight;
    function onScroll(){
    
    const scrollposition = pageYOffset;
  
    if (Math.abs(last - scrollposition) <= gap) return;
    else if (scrollposition > last || scrollposition<= headerheight)
    {
      nav.classList.remove("downdown");
    }
    else if (scrollposition<last)
    { 
        nav.classList.add("downdown");  
    }
  
    last = scrollposition;
  }
}
upnav();



//메뉴부분
function toggleMenu() {
  var overlay = document.getElementById("overlay");
  var menuContent = document.getElementById("menuContent");

  if (overlay.style.height === "100%") {
      menuContent.style.transition = "top 0.5s ease-in-out";

      // 천천히 움직이다가 4분의 1 정도 사라졌을 때 다시 정상적인 속도로 사라지게 함
      setTimeout(function() {
          menuContent.style.top = "-25%";
          setTimeout(function() {
              overlay.style.height = "0";
              menuContent.style.top = "-100%";
              menuContent.style.transition = "top 0.5s";
          }, 200);
      }, 200);
  } else {
      overlay.style.height = "100%";
      menuContent.style.top = "0";
  }
}


/*마우스*/
var dot = document.getElementById("dot");
var textmouse = document.getElementById("textmouse");
var imageContainer = document.getElementById("imageContainer");

function moveDot(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var offsetX = (mouseX - dot.offsetWidth / 2) + "px";
  var offsetY = (mouseY - dot.offsetHeight / 2) + "px";

  dot.style.transform = "translate(" + offsetX + ", " + offsetY + ")";
  
  // 이미지 안에 점이 있는지 확인
  if (isInsideImage()) {
    // 점이 이미지 안에 있으면 텍스트 표시
    textmouse.style.opacity = 1;
    // 점의 크기를 키우기
    dot.style.transform += "scale(2)";
  } else {
    // 이미지 밖에 있으면 텍스트 숨김
    textmouse.style.opacity = 0;
    // 점의 크기를 초기화
    dot.style.transform = dot.style.transform.replace("scale(2)", "");
  }
}

function isInsideImage() {
  var dotRect = dot.getBoundingClientRect();
  var imageRect = imageContainer.getBoundingClientRect();

  return (
    dotRect.left >= imageRect.left &&
    dotRect.right <= imageRect.right &&
    dotRect.top >= imageRect.top &&
    dotRect.bottom <= imageRect.bottom
  );
}

function handleScroll() {
  // 스크롤 이벤트가 발생했을 때도 moveDot 함수 호출
  moveDot({ clientX: event.clientX, clientY: event.clientY });
}

document.addEventListener("mousemove", moveDot);
window.addEventListener("scroll", handleScroll);






/*이미지 슬라이드*/
const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragging = false;
let startScrollX;
let startX;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = carousel.children[0].offsetWidth + 14;
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX || e.touches[0].pageX;
  startScrollX = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  let currentX = e.pageX || e.touches[0].pageX;
  let diffX = startX - currentX;
  carousel.scrollLeft = startScrollX + diffX;
  showHideIcons();
};

const dragStop = () => {
  isDragging = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
document.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
document.addEventListener("touchend", dragStop);






/*페이드 인 아웃 */
let mainText = document.querySelector("#section_1 .inner4 #card #tom")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText.style.animation="disappaer 1s ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText.style.animation= "disappaer 1s ease-out forwards";
      
    }
    else{
      mainText.style.animation= `slide 1s ease-out`;
      
    }
})
let mainText1 = document.querySelector("#section_1 .inner4 #card #pable")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText1.style.animation="disappaer1 1s ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText1.style.animation= "disappaer1 1s ease-out forwards";
      
    }
    else{
      mainText1.style.animation= `slide1 1s ease-out`;
      
    }
})
let mainText2 = document.querySelector("#section_1 .inner4 #card #tom_h1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText2.style.animation="disappaer2 2s ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText2.style.animation= "disappaer2 2s ease-out forwards";
      
    }
    else{
      mainText2.style.animation= `slide2 2s ease-out`;
      
    }
})

let mainText3 = document.querySelector("#section_1 .inner4 #card #tom_p")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText3.style.animation="disappaer3 2s ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText3.style.animation= "disappaer3 2s ease-out forwards";
      
    }
    else{
      mainText3.style.animation= `slide3 2s ease-out`;
      
    }
})
let mainText4 = document.querySelector("#section_1 .inner4 #card #tom_h2")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText4.style.animation="disappaer4 2.5s  ease-out forwards";
      
    }
    else if(value < 1600){ //등장하기
      mainText4.style.animation= "disappaer4 2.5s  ease-out forwards";
      
    }
    else{
      mainText4.style.animation= `slide4 2.5s ease-out`;
      
    }
})

let mainText5 = document.querySelector("#section_1 .inner4 #card #pable_h1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText5.style.animation="disappaer5 2s  ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText5.style.animation= "disappaer5 2s  ease-out forwards";
      
    }
    else{
      mainText5.style.animation= `slide5 2s ease-out`;
      
    }
})

let mainText6 = document.querySelector("#section_1 .inner4 #card #pable_p")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText6.style.animation="disappaer6 2s  ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText6.style.animation= "disappaer6 2s  ease-out forwards";
      
    }
    else{
      mainText6.style.animation= `slide6 2s ease-out`;
      
    }
})

let mainText7 = document.querySelector("#section_1 .inner4 #card #pable_h2")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText7.style.animation="disappaer7 2.5s  ease-out forwards";
      
    }
    else if(value < 1600){ //등장하기
      mainText7.style.animation= "disappaer7 2.5s  ease-out forwards";
      
    }
    else{
      mainText7.style.animation= `slide7 2.5s ease-out`;
      
    }
})

let mainText8 = document.querySelector("#section_1_1 .inner4_1 #card_1 #tom_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText8.style.animation="disappaer8 1s ease-out forwards";
      
    }
    else if(value < 1800){ //등장하기
      mainText8.style.animation= "disappaer8 1s ease-out forwards";
      
    }
    else{
      mainText8.style.animation= `slide8 1s ease-out`;
      
    }
})

let mainText9 = document.querySelector("#section_1_1 .inner4_1 #card_1 #pable_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText9.style.animation="disappaer9 1s ease-out forwards";
      
    }
    else if(value < 1800){ //등장하기
      mainText9.style.animation= "disappaer9 1s ease-out forwards";
      
    }
    else{
      mainText9.style.animation= `slide9 1s ease-out`;
      
    }
})


let mainText10 = document.querySelector("#section_1_1 .inner4_1 #card_1 #tom_h1_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText10.style.animation="disappaer10 2s ease-out forwards";
      
    }
    else if(value < 1800){ //등장하기
      mainText10.style.animation= "disappaer10 2s ease-out forwards";
      
    }
    else{
      mainText10.style.animation= `slide10 2s ease-out`;
      
    }
})

let mainText11 = document.querySelector("#section_1_1 .inner4_1 #card_1 #tom_p_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText11.style.animation="disappaer11 2s ease-out forwards";
      
    }
    else if(value < 1900){ //등장하기
      mainText11.style.animation= "disappaer11 2s ease-out forwards";
      
    }
    else{
      mainText11.style.animation= `slide11 2s ease-out`;
      
    }
})

let mainText12 = document.querySelector("#section_1_1 .inner4_1 #card_1 #tom_h2_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText12.style.animation="disappaer12 2.5s ease-out forwards";
      
    }
    else if(value < 1900){ //등장하기
      mainText12.style.animation= "disappaer12 2.5s ease-out forwards";
      
    }
    else{
      mainText12.style.animation= `slide12 2.5s ease-out`;
      
    }
})

let mainText13 = document.querySelector("#section_1_1 .inner4_1 #card_1 #pable_h1_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText13.style.animation="disappaer13 2s ease-out forwards";
      
    }
    else if(value < 1500){ //등장하기
      mainText13.style.animation= "disappaer13 2s ease-out forwards";
      
    }
    else{
      mainText13.style.animation= `slide13 2s ease-out`;
      
    }
})
let mainText14 = document.querySelector("#section_1_1 .inner4_1 #card_1 #pable_p_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText14.style.animation="disappaer14 2s ease-out forwards";
      
    }
    else if(value < 1600){ //등장하기
      mainText14.style.animation= "disappaer14 2s ease-out forwards";
      
    }
    else{
      mainText14.style.animation= `slide14 2s ease-out`;
      
    }
})

let mainText15 = document.querySelector("#section_1_1 .inner4_1 #card_1 #pable_h2_1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2700){ //없어지기
      mainText15.style.animation="disappaer15 2.5s ease-out forwards";
      
    }
    else if(value < 1700){ //등장하기
      mainText15.style.animation= "disappaer15 2.5s ease-out forwards";
      
    }
    else{
      mainText15.style.animation= `slide15 2.5s ease-out`;
      
    }
})
