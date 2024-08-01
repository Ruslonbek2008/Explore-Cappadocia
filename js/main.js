let mobileNav = document.querySelector('.mobile-nav-list-wrapp');
let xmark = document.querySelector('.xmark-icon');
let menuBtn = document.querySelector('.hamburger-btn');

menuBtn.addEventListener('click', function() {
    mobileNav.classList.add('open');
})

xmark.addEventListener('click', function() {
    if(mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open')
    }
})

if(mobileNav.classList.contains('open')) {
    document.documentElement.style.overflow = 'hidden'; 
}