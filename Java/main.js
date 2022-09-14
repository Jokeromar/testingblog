
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