const hamburger = document.getElementsByClassName('ham');

const navigation_links = document.querySelector('.navlinks');

hamburger[0].addEventListener('click',function(){
    navigation_links.classList.toggle('open');
})

// navigation_links.addEventListener('blur', () => {

//     navigation_links.classList.toggle('open');
// });

const nav_links = document.querySelectorAll('.navlinks li');
// console.log(nav_links)
nav_links.forEach(element => {
    element.addEventListener('click',function(){
        if(navigation_links.classList.contains('open')){
            navigation_links.classList.remove('open');
        }
        
    })
});