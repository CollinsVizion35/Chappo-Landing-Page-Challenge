const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const menu = document.getElementById('menu-list');

openMenu.addEventListener('click', () => {
    menu.classList.add('menu-active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-active');
})

// reveal on scroll
function reveal() {
    var sliderIns = document.querySelectorAll('.slide-in');
    var sliderInsFs = document.querySelectorAll('.slide-in-f');
    var sliderOuts = document.querySelectorAll('.slide-out');
    var zoomerIns = document.querySelectorAll('.zoom-in');
    var sliderUps = document.querySelectorAll('.slide-up')

    for (var i = 0; i < sliderIns.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sliderIns[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        sliderIns[i].classList.add("appear");
      } else {
        sliderIns[i].classList.remove("appear");
      }
    }

    for (var i = 0; i < sliderInsFs.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sliderInsFs[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        sliderInsFs[i].classList.add("appear");
      } else {
        sliderInsFs[i].classList.remove("appear");
      }
    }

    for (var i = 0; i < sliderOuts.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sliderOuts[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        sliderOuts[i].classList.add("appear");
      } else {
        sliderOuts[i].classList.remove("appear");
      }
    }

    for (var i = 0; i < zoomerIns.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = zoomerIns[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        zoomerIns[i].classList.add("appear");
      } else {
        zoomerIns[i].classList.remove("appear");
      }
    }

    for (var i = 0; i < sliderUps.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sliderUps[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        sliderUps[i].classList.add("appear");
      } else {
        sliderUps[i].classList.remove("appear");
      }
    }
  }

  window.addEventListener("scroll", reveal);
    reveal();

// switch crypto-boxes
const btcBox = document.querySelector('.btc-box');
const ethBox = document.querySelector('.eth-box');
const ltcBox = document.querySelector('.ltc-box');

const btnSM1 = document.querySelector('.btn-sM1');
const btnSM2 = document.querySelector('.btn-sM2');
const btnSM3 = document.querySelector('.btn-sM3');

const btn501 = document.querySelector('.btn50-1');
const btn502 = document.querySelector('.btn50-2');
const btn503 = document.querySelector('.btn50-3');

btcBox.addEventListener('click', () => {
    
    btnSM1.style.opacity = "1";
    btnSM1.style.display = "block";

    
    btn501.style.opacity = "0";
    btn501.style.display = "none";

    btn502.style.opacity = "1";
    btn502.style.display = "block";

    btn503.style.opacity = "1";
    btn503.style.display = "block";


    btnSM2.style.opacity = "0";
    btnSM2.style.display = "none";

    btnSM3.style.opacity = "0";
    btnSM3.style.display = "none";


    setTimeout(() => {
        btcBox.classList.add('active');
        ethBox.classList.remove('active');
        ltcBox.classList.remove('active');
    }, 300);
    
})

ethBox.addEventListener('click', () => {
    btnSM2.style.opacity = "1";
    btnSM2.style.display = "block";

    btn502.style.opacity = "0";
    btn502.style.display = "none";

    
    btn501.style.opacity = "1";
    btn501.style.display = "block";

    btn503.style.opacity = "1";
    btn503.style.display = "block";

    btnSM1.style.opacity = "0";
    btnSM1.style.display = "none";

    btnSM3.style.opacity = "0";
    btnSM3.style.display = "none";


    setTimeout(() => {
        btcBox.classList.remove('active');
        ethBox.classList.add('active');
        ltcBox.classList.remove('active');
    }, 300);
    
})

ltcBox.addEventListener('click', () => {
        btnSM3.style.opacity = "1";
        btnSM3.style.display = "block";
        
        btn503.style.opacity = "0";
        btn503.style.display = "none";

        btn501.style.opacity = "1";
        btn501.style.display = "block";
    
        btn502.style.opacity = "1";
        btn502.style.display = "block";
    
        btnSM1.style.opacity = "0";
        btnSM1.style.display = "none";
    
        btnSM2.style.opacity = "0";
        btnSM2.style.display = "none";
    
        
    

    setTimeout(() => {
        
        btcBox.classList.remove('active');
        ethBox.classList.remove('active');
        ltcBox.classList.add('active');
    }, 300);
    
})