/* --- Toggle Button --- */
$("#toggleBtn").click(function() {
  $("#jsNavTop").toggleClass("slidedown slideup");
});

function toggleButton(x) {
  x.classList.toggle("toggle-btn-change");
}

/* --- Modal Gallery --- */
// caption
var captionArr = [];
var captionInfo = document.querySelectorAll(".img-info");
var caption = document.getElementById("caption");
for (var i = 0; i < captionInfo.length; i++) {
  var captionValue = captionInfo[i];
  var captionValueText =
    captionValue.querySelector("h3").textContent.trim() +
    " | " +
    captionValue.querySelector("h4").textContent.trim();
  // console.log(captionValueText);
  captionArr.push(captionValueText);
}

// Modal Images
var modal = document.getElementById("modalContainer");
var modalImg = document.getElementById("modalImg");
var imgArr = document.querySelectorAll(".img-container .img");
var currentIndex;

imgArr.forEach(function(img, i) {
  img.onclick = function() {
    var backgroundImage = img.style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "");
    modal.style.display = "block";
    modalImg.src = backgroundImage;
    currentIndex = i;
    modalImg.alt = captionArr[i];
    // console.log(modalImg.alt);
    caption.innerHTML = captionArr[i];
    modalImg.style.animation = "fadeInLeft .4s both";
  };
});

// previous and next buttons
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);
modalImg.addEventListener("click", nextImage);

function animate(i) {
  modalImg.src = imgArr[i].style.backgroundImage.slice(4, -1).replace(/"/g, "");
  caption.innerHTML = captionArr[currentIndex];
  modalImg.style.animationName = "fadeInLeft";
  modalImg.alt = captionArr[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imgArr.length;
  animate(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex + imgArr.length - 1) % imgArr.length;
  animate(currentIndex);
}

modalImg.addEventListener("animationend", function() {
  modalImg.style.animationName = "none";
});

// close the modal
var closeModal = document.getElementsByClassName("modal-close")[0];
var marginTB = document.getElementsByClassName("modal-container-close")[0];
var marginLR = document.getElementsByClassName("modal-container-close")[1];

closeModal.addEventListener("click", close);
marginTB.addEventListener("click", close);
marginLR.addEventListener("click", close);

function close() {
  modal.style.display = "none";
}

/* --- NiceScroll --- */
$(window).ready(function() {
  $(".frame").css("overflow", "visible");
  var nice = $(".frame").niceScroll({
    cursorborder: "",
    cursorcolor: "#959595",
    cursorwidth: "4px",
    cursorminheight: 100,
    cursorfixedheight: false,
    zindex: [0],
    autohidemode: true,
    smoothscroll: true,
    boxzoom: false,
    emulatetouch: false,
    disableoutline: true
  });
});
