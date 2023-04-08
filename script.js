const hamburger = document.getElementsByClassName('ham');
console.log(hamburger)
const navigation_links = document.querySelector('.navlinks');
console.log(navigation_links)
hamburger[0].addEventListener('click',function(){
    navigation_links.classList.toggle('open');
})