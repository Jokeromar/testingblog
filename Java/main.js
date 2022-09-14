
$(document).ready(function() {
    $('.filter-item').click(function() {
        const value= $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else{
            $('.post-box').not('.'+value).hide('500');
            $('.post-box').filter('.'+value).show('500');
        }
    });
    //remove hover from old selection
    $('.filter-item').click(function() {
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});
// corebrains logo header change
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
})
const telegram = document.querySelector('.telegram');
const twitter = document.querySelector('.twitter');
const whatsapp = document.querySelector('.whatsapp');
const hrl= location.href;
const message= 'This website Blog have great articles on features technologies';
const telegramAPI = "https://t.me/share/url?url={https://jokeromar.github.io/testingblog/}&text={This website Blog have great articles on features technologies}";
const twitterAPI =   'https://twitter.com/intent/tweet?text=This website Blog have great articles on features technologies https://jokeromar.github.io/testingblog/' ;
const whatsappAPI = 'whatsapp://send?text=This website Blog have great articles on features technologies https://jokeromar.github.io/testingblog/';

telegram.addEventListener('click',()=>{
    window.open(url=telegramAPI,target='blank')
});

twitter.addEventListener('click',()=>{
    window.open(url=twitterAPI,target='blank')

});

whatsapp.addEventListener('click',()=>{
    window.open(url=whatsappAPI,target='blank')

});
