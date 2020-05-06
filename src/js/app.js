// ===================================================
// Global JS
// Copyright Date
window.onload = function () {
   document.getElementById('coprDate').textContent = new Date().getFullYear();
};

/* --- Toggle Button --- */
var toggleButton = document.getElementById('toggleBtn');
var navTop = document.getElementById('jsNavTop');

toggleButton.addEventListener('click', function () {
   toggleButton.classList.toggle('toggle-btn-change');
   navTop.classList.toggle('slidedown');
});

/* --- Modal Gallery --- */
// caption
var captionArr = [];
var captionInfo = document.querySelectorAll('.img-info');
var caption = document.getElementById('caption');
for (var i = 0; i < captionInfo.length; i++) {
   var captionValue = captionInfo[i];
   var captionValueText =
      captionValue.querySelector('h3').textContent.trim() +
      ' | ' +
      captionValue.querySelector('h4').textContent.trim();
   captionArr.push(captionValueText);
}

// Modal Images
var modal = document.getElementById('modalContainer');
var modalImg = document.getElementById('modalImg');
var imgArr = document.querySelectorAll('.img-container .img');
var currentIndex;

function imgDisplay(img, i) {
   img.onclick = function () {
      var backgroundImage = img.style.backgroundImage.slice(4, -1).replace(/"/g, '');
      modal.style.display = 'block';
      modalImg.src = backgroundImage;
      currentIndex = i;
      modalImg.alt = captionArr[i];
      caption.innerHTML = captionArr[i];
      modalImg.style.animation = 'fadeInLeft .4s both';
   };
}

for (var i = 0; i < imgArr.length; i++) {
   var img = imgArr[i];
   imgDisplay(img, i);
}

// previous and next buttons
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);
modalImg.addEventListener('click', nextImage);

function animate(i) {
   modalImg.src = imgArr[i].style.backgroundImage.slice(4, -1).replace(/"/g, '');
   caption.innerHTML = captionArr[currentIndex];
   modalImg.alt = captionArr[currentIndex];
   modalImg.style.animationName = 'fadeInLeft';
}

function nextImage() {
   currentIndex = (currentIndex + 1) % imgArr.length;
   animate(currentIndex);
}

function prevImage() {
   currentIndex = (currentIndex + imgArr.length - 1) % imgArr.length;
   animate(currentIndex);
}

modalImg.addEventListener('animationend', function () {
   modalImg.style.animationName = 'none';
});

// close the modal
var closeModal = document.getElementsByClassName('modal-close')[0];
var marginTB = document.getElementsByClassName('modal-container-close')[0];
var marginLR = document.getElementsByClassName('modal-container-close')[1];

closeModal.addEventListener('click', close);
marginTB.addEventListener('click', close);
marginLR.addEventListener('click', close);

function close() {
   modal.style.display = 'none';
}

/* --- NiceScroll --- */
$(window).ready(function () {
   $('.frame').css('overflow', 'visible');
   var nice = $('.frame').niceScroll({
      cursorborder: '',
      cursorcolor: '#959595',
      cursorwidth: '4px',
      cursorminheight: 100,
      cursorfixedheight: false,
      zindex: [2],
      autohidemode: true,
      smoothscroll: true,
      boxzoom: false,
      emulatetouch: false,
      disableoutline: true,
   });
});
