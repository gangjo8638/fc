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

//모달1 시작
var modal = document.getElementById("myModal");
        
function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal() {
    modal.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}

// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
//모달 끝


//모달2 시작
var modal2 = document.getElementById("myModal2");
        
function openModal2() {
    modal2.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal2.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal2() {
    modal2.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
      modal2.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}

// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal2) {
        closeModal2();
    }
}
//모달 끝


//모달3 시작
var modal3 = document.getElementById("myModal3");
        
function openModal3() {
  modal3.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal3.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal3() {
  modal3.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
    modal3.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}

//모달4 시작
var modal4 = document.getElementById("myModal4");
        
function openModal4() {
  modal4.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal4.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal4() {
  modal4.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
    modal4.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}



// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal4) {
        closeModal4();
    }
}
//모달 끝


//모달5 시작
var modal5 = document.getElementById("myModal5");
        
function openModal5() {
  modal5.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal5.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal5() {
  modal5.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
    modal5.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}



// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal5) {
        closeModal5();
    }
}
//모달 끝



//모달6 시작
var modal6 = document.getElementById("myModal6");
        
function openModal6() {
  modal6.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal6.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal6() {
  modal6.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
    modal6.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}



// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal6) {
        closeModal6();
    }
}
//모달 끝



//모달7 시작
var modal7 = document.getElementById("myModal7");
        
function openModal7() {
  modal7.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 막기
    modal7.animate([{opacity: 0}, {opacity: 1}], 300); // 모달 애니메이션
}

function closeModal7() {
  modal7.animate([{opacity: 1}, {opacity: 0}], 300).onfinish = function() {
    modal7.style.display = "none";
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 복원
    };
}



// 모달 영역 외 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal7) {
        closeModal7();
    }
}
//모달 끝


//보이기
//플라이급
function openCloseToc() {
    if(document.getElementById('toc-content').style.display === 'block') {
      document.getElementById('toc-content').style.display = 'none';
      document.getElementById('toc-toggle').textContent = ' ↓';
      
    } else {
      document.getElementById('toc-content').style.display = 'block';
      document.getElementById('toc-toggle').textContent = '↑';
    }
}

//밴텀급
function openCloseToc1() {
    if(document.getElementById('toc-content1').style.display === 'block') {
      document.getElementById('toc-content1').style.display = 'none';
      document.getElementById('toc-toggle1').textContent = ' ↓';
      
    } else {
      document.getElementById('toc-content1').style.display = 'block';
      document.getElementById('toc-toggle1').textContent = '↑';
    }
}

//페더급
function openCloseToc2() {
  if(document.getElementById('toc-content2').style.display === 'block') {
    document.getElementById('toc-content2').style.display = 'none';
    document.getElementById('toc-toggle2').textContent = ' ↓';
    
  } else {
    document.getElementById('toc-content2').style.display = 'block';
    document.getElementById('toc-toggle2').textContent = '↑';
  }
}


//라이트급
function openCloseToc3() {
  if(document.getElementById('toc-content3').style.display === 'block') {
    document.getElementById('toc-content3').style.display = 'none';
    document.getElementById('toc-toggle3').textContent = ' ↓';
    
  } else {
    document.getElementById('toc-content3').style.display = 'block';
    document.getElementById('toc-toggle3').textContent = '↑';
  }
}




let mainText = document.querySelector("#move")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 3200){ //없어지기
      mainText.style.animation="disappaer 1s ease-out forwards";
      
    }
    else if(value < 200){ //등장하기
      mainText.style.animation= "disappaer 1s ease-out forwards";
      
    }
    else{
      mainText.style.animation= `slide 1s ease-out`;
      
    }
})