const headerNav = $('.header__nav');
const navHeight = headerNav.height();
const mobileNav = $('.mobile-nav-container');

$('.menu-btn').click(() => {
  if ($(window).width() >= 800) {
    mobileNav.css('width', '40%');
  } else {
    headerNav.hide();
    mobileNav.css('width', '100%');
  }

  $('.back-to-top-btn').hide()
})

const closeMobileNav = () => {
  mobileNav.css('width', '0%');
  $('.back-to-top-btn').show();
  headerNav.show();
}

$('.close-btn').click(() => {
  closeMobileNav();
})

$('.mobile-nav__item').click(() => {
  closeMobileNav();
})

$(window).scroll(() => {
  if (window.scrollY > navHeight) {
    $('.header__links').hide();
    $('.header__social').hide();
    headerNav.css('background-color', '#202020');
  } else {
    if ($(window).width() >= 1040) {
      $('.header__links').show();
      $('.header__social').show();
    }
    headerNav.css('background-color', 'transparent');
  }
})

$("a").smoothScroll({ speed: 1000 });