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



var ii = 1;
var getimgno = document.getElementById("fig_img1");
var getimgno1 = document.getElementById("fig_img2");
function clickright() {
if (ii < 2) {
    ii++;
    getimgno.setAttribute(
    "src",
    "img/알메이다" +
    ii +
        ".png"
    );
    getimgno1.setAttribute(
      "src",
      "img/루이스" +
      ii +
          ".png"
      );
    
    console.log(ii);
} else if ((ii = 2)) {
    ii = 1;
    getimgno.setAttribute(
    "src",
    "img/알메이다" +
        ii +
        ".png"
    );
    getimgno1.setAttribute(
      "src",
      "img/루이스" +
          ii +
          ".png"
      );
    console.log(ii);
}
}
function clickleft() {
if (ii > 0) {
    ii--;
    getimgno.setAttribute(
    "src",
    "img/알메이다" +
        ii +
        ".png"
    );
    getimgno1.setAttribute(
      "src",
      "img/루이스" +
          ii +
          ".png"
      );
    
    console.log(ii);
} else if ((ii = 1)) {
    ii = 2;
    getimgno.setAttribute(
    "src",
    "img/알메이다" +
        ii +
        ".png"
    );
    getimgno1.setAttribute(
      "src",
      "img/루이스" +
          ii +
          ".png"
      );
    console.log(ii);
} 

}
function clickdot(n) {
getimgno.setAttribute(
    "src",
    "img/알메이다" + n + ".png"
);
getimgno1.setAttribute(
    "src",
    "img/루이스" + n + ".png"
);
}





var ii_1 = 1;
var getimgno_1 = document.getElementById("fig_img1_1");
var getimgno1_1 = document.getElementById("fig_img2_1");
function clickright1() {
if (ii_1 < 2) {
  ii_1++;
    getimgno_1.setAttribute(
    "src",
    "img/프로하츠카" +
    ii_1 +
        ".png"
    );
    getimgno1_1.setAttribute(
      "src",
      "img/페레이라" +
      ii_1 +
          ".png"
      );
    
    console.log(ii_1);
} else if ((ii_1 = 2)) {
  ii_1 = 1;
    getimgno_1.setAttribute(
    "src",
    "img/프로하츠카" +
    ii_1 +
        ".png"
    );
    getimgno1_1.setAttribute(
      "src",
      "img/페레이라" +
      ii_1 +
          ".png"
      );
    console.log(ii_1);
}
}
function clickleft1() {
if (ii_1 > 0) {
  ii_1--;
    getimgno_1.setAttribute(
    "src",
    "img/프로하츠카" +
    ii_1 +
        ".png"
    );
    getimgno1_1.setAttribute(
      "src",
      "img/페레이라" +
      ii_1 +
          ".png"
      );
    
    console.log(ii_1);
} else if ((ii_1 = 1)) {
  ii_1 = 2;
    getimgno_1.setAttribute(
    "src",
    "img/프로하츠카" +
    ii_1 +
        ".png"
    );
    getimgno1_1.setAttribute(
      "src",
      "img/페레이라" +
      ii_1 +
          ".png"
      );
    console.log(ii_1);
} 

}
function clickdot1(n) {
  getimgno_1.setAttribute(
    "src",
    "img/프로하츠카" + n + ".png"
);
getimgno1_1.setAttribute(
    "src",
    "img/페레이라" + n + ".png"
);
}




var ii_2 = 1;
var getimgno_2 = document.getElementById("fig_img1_2");
var getimgno1_2 = document.getElementById("fig_img2_2");
function clickright2() {
if (ii_2 < 2) {
  ii_2++;
  getimgno_2.setAttribute(
    "src",
    "img/브랜든" +
    ii_2 +
        ".png"
    );
    getimgno1_2.setAttribute(
      "src",
      "img/폴" +
      ii_2 +
          ".png"
      );
    
    console.log(ii_2);
} else if ((ii_2 = 2)) {
  ii_2 = 1;
  getimgno_2.setAttribute(
    "src",
    "img/브랜든" +
    ii_2 +
        ".png"
    );
    getimgno1_2.setAttribute(
      "src",
      "img/폴" +
      ii_2 +
          ".png"
      );
    console.log(ii_2);
}
}
function clickleft2() {
if (ii_2 > 0) {
  ii_2--;
  getimgno_2.setAttribute(
    "src",
    "img/브랜든" +
    ii_2 +
        ".png"
    );
    getimgno1_2.setAttribute(
      "src",
      "img/폴" +
      ii_2 +
          ".png"
      );
    
    console.log(ii_2);
} else if ((ii_2 = 1)) {
  ii_2 = 2;
  getimgno_2.setAttribute(
    "src",
    "img/브랜든" +
    ii_2 +
        ".png"
    );
    getimgno1_2.setAttribute(
      "src",
      "img/폴" +
      ii_2 +
          ".png"
      );
    console.log(ii_2);
} 

}
function clickdot2(n) {
  getimgno_2.setAttribute(
    "src",
    "img/브랜든" + n + ".png"
);
getimgno1_2.setAttribute(
    "src",
    "img/폴" + n + ".png"
);
}




var ii_3 = 1;
var getimgno_3 = document.getElementById("fig_img1_3");
var getimgno1_3 = document.getElementById("fig_img2_3");
function clickright3() {
if (ii_3 < 2) {
  ii_3++;
  getimgno_3.setAttribute(
    "src",
    "img/리온" +
    ii_3 +
        ".png"
    );
    getimgno1_3.setAttribute(
      "src",
      "img/콜비" +
      ii_3 +
          ".png"
      );
    
    console.log(ii_3);
} else if ((ii_3 = 2)) {
  ii_3 = 1;
  getimgno_3.setAttribute(
    "src",
    "img/리온" +
    ii_3 +
        ".png"
    );
    getimgno1_3.setAttribute(
      "src",
      "img/콜비" +
      ii_3 +
          ".png"
      );
    console.log(ii_3);
}
}
function clickleft3() {
if (ii_3 > 0) {
  ii_3--;
  getimgno_3.setAttribute(
    "src",
    "img/리온" +
    ii_3 +
        ".png"
    );
    getimgno1_3.setAttribute(
      "src",
      "img/콜비" +
      ii_3 +
          ".png"
      );
    
    console.log(ii_3);
} else if ((ii_3 = 1)) {
  ii_3 = 2;
  getimgno_3.setAttribute(
    "src",
    "img/리온" +
    ii_3 +
        ".png"
    );
    getimgno1_3.setAttribute(
      "src",
      "img/콜비" +
      ii_3 +
          ".png"
      );
    console.log(ii_3);
} 

}
function clickdot3(n) {
  getimgno_3.setAttribute(
    "src",
    "img/리온" + n + ".png"
);
getimgno1_3.setAttribute(
    "src",
    "img/콜비" + n + ".png"
);
}