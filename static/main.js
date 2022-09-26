/* ___________________________ navbar on small screens _____________________ */
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("smallNav").style.width = "100%";
  document.getElementById("sn_menu_bar").style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("smallNav").style.width = "0%";
  document.getElementById("sn_menu_bar").style.display = "initial";
}

/* open/close dropdowns on click in small navbar */
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
function sn_dropdownFnc1() {
  if ((counter1%=2) == 0) {
    document.getElementById("sn_dropdown1").style.display = "initial";
    document.getElementById("sn_arrow1").style.transform = "rotate(180deg)";
    counter1 += 1;
  }
  else {
    document.getElementById("sn_dropdown1").style.display = "none";
    document.getElementById("sn_arrow1").style.transform = "rotate(0deg)";
    counter1 += 1;
  }
}
function sn_dropdownFnc2() {
  if ((counter2%=2) == 0) {
    document.getElementById("sn_dropdown2").style.display = "initial";
    document.getElementById("sn_arrow2").style.transform = "rotate(180deg)";
    counter2 += 1;
  }
  else {
    document.getElementById("sn_dropdown2").style.display = "none";
    document.getElementById("sn_arrow2").style.transform = "rotate(0deg)";
    counter2 += 1;
  }
}
function sn_dropdownFnc3() {
  if ((counter3%=2) == 0) {
    document.getElementById("sn_dropdown3").style.display = "initial";
    document.getElementById("sn_arrow3").style.transform = "rotate(180deg)";
    counter3 += 1;
  }
  else {
    document.getElementById("sn_dropdown3").style.display = "none";
    document.getElementById("sn_arrow3").style.transform = "rotate(0deg)";
    counter3 += 1;
  }
}
function sn_dropdownFnc4() {
  if ((counter4%=2) == 0) {
    document.getElementById("sn_dropdown4").style.display = "initial";
    document.getElementById("sn_arrow4").style.transform = "rotate(180deg)";
    counter4 += 1;
  }
  else {
    document.getElementById("sn_dropdown4").style.display = "none";
    document.getElementById("sn_arrow4").style.transform = "rotate(0deg)";
    counter4 += 1;
  }
}
function sn_dropdownFnc5() {
  if ((counter5%=2) == 0) {
    document.getElementById("sn_dropdown5").style.display = "initial";
    document.getElementById("sn_arrow5").style.transform = "rotate(180deg)";
    counter5 += 1;
  }
  else {
    document.getElementById("sn_dropdown5").style.display = "none";
    document.getElementById("sn_arrow5").style.transform = "rotate(0deg)";
    counter5 += 1;
  }
}

/* ______________________________ slick-sliders __________________________ */
/* footer-carousel */
$(document).ready(function logo_slider() {
  $('.logo_carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    // speed: 8000,
    cssEase: 'ease-out',
    arrows: false,
    dots: false,
    pauseOnHover: false,

    responsive: [{
      breakpoint: 1439,
      settings: {
        autoplay: true,
        slidesToShow: 4
      }
    }, {
      breakpoint: 1000,
      settings: {
        autoplay: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 605,
      settings: {
        autoplay: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 390,
      settings: {
        autoplay: true,
        slidesToShow: 1
      }
    }]
  });
});

/* team-modal-footer-carousel */
$(document).ready(function team_modal_footer_slider() {
  $('.team_modal_footer_carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2700,
    cssEase: 'ease-out',
    arrows: false,
    dots: false,
    pauseOnHover: false,
  });
});

/* ___________________ animate elements scrolling in viewport _______________ */
/* left to right */
const observerL = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("txt_anim_in_from_left");
    }
  });
});
/* all obj that have this animation */
observerL.observe(document.querySelector(".txt_anim_in_from_left_obj"));
observerL.observe(document.querySelector(".txt_anim_in_from_left_obj2"));
observerL.observe(document.querySelector(".txt_anim_in_from_left_obj3"));

/* right to left */
const observerR = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("txt_anim_in_from_right");
    }
  });
});
/* all obj that have this animation */
observerR.observe(document.querySelector(".txt_anim_in_from_right_obj"));
observerR.observe(document.querySelector(".txt_anim_in_from_right_obj2"));

/* __ mp_description transform flipcard on click (for mobile device/small screens) __ */
var mp_flipcard1 = document.getElementById("mp_flipcard1");
var mp_flipcard_checker1 = 0;
var mp_flipcard2 = document.getElementById("mp_flipcard2");
var mp_flipcard_checker2 = 0;
var mp_flipcard3 = document.getElementById("mp_flipcard3");
var mp_flipcard_checker3 = 0;
var mp_flipcard4 = document.getElementById("mp_flipcard4");
var mp_flipcard_checker4 = 0;
var mp_flipcard5 = document.getElementById("mp_flipcard5");
var mp_flipcard_checker5 = 0;

mp_flipcard1.addEventListener("click", mp_desc_flipcard_transform);
mp_flipcard2.addEventListener("click", mp_desc_flipcard2_transform);
mp_flipcard3.addEventListener("click", mp_desc_flipcard3_transform);
mp_flipcard4.addEventListener("click", mp_desc_flipcard4_transform);
mp_flipcard5.addEventListener("click", mp_desc_flipcard5_transform);

function mp_desc_flipcard_transform() {
  if (mp_flipcard_checker1 == 0) {
    mp_flipcard1.style.transform = "rotateY(180deg)";
    mp_flipcard_checker1 += 1;
  }
  else {
    mp_flipcard1.style.transform = "rotateY(0deg)";
    mp_flipcard_checker1 -= 1;
  }
}
function mp_desc_flipcard2_transform() {
  if (mp_flipcard_checker2 == 0) {
    mp_flipcard2.style.transform = "rotateY(180deg)";
    mp_flipcard_checker2 += 1;
  }
  else {
    mp_flipcard2.style.transform = "rotateY(0deg)";
    mp_flipcard_checker2 -= 1;
  }
}
function mp_desc_flipcard3_transform() {
  if (mp_flipcard_checker3 == 0) {
    mp_flipcard3.style.transform = "rotateY(180deg)";
    mp_flipcard_checker3 += 1;
  }
  else {
    mp_flipcard3.style.transform = "rotateY(0deg)";
    mp_flipcard_checker3 -= 1;
  }
}
function mp_desc_flipcard4_transform() {
  if (mp_flipcard_checker4 == 0) {
    mp_flipcard4.style.transform = "rotateY(180deg)";
    mp_flipcard_checker4 += 1;
  }
  else {
    mp_flipcard4.style.transform = "rotateY(0deg)";
    mp_flipcard_checker4 -= 1;
  }
}
function mp_desc_flipcard5_transform() {
  if (mp_flipcard_checker5 == 0) {
    mp_flipcard5.style.transform = "rotateY(180deg)";
    mp_flipcard_checker5 += 1;
  }
  else {
    mp_flipcard5.style.transform = "rotateY(0deg)";
    mp_flipcard_checker5 -= 1;
  }
}
