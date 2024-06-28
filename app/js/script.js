const author = document.getElementById('author');
const links= document.getElementById('links');
const shareBtn = document.getElementById('shareBtn');
const closeBtn = document.getElementById('closeBtn');
const tooltip = document.getElementById('tooltip');
const minWidth = 1024;

shareBtn.addEventListener('click', function(){
    console.log('clicked');

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth >= minWidth) {
        if (shareBtn.classList.contains('dark-button')) {
            shareBtn.classList.remove('dark-button');
            tooltip.style.visibility = 'hidden';
        } else {
            shareBtn.classList.add('dark-button');

            tooltip.style.visibility = 'visible';
            const buttonRect = shareBtn.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            tooltip.style.left = `${buttonRect.left - tooltipRect.width/2 + buttonRect.width/2}px`;
            tooltip.style.top = `${buttonRect.top - 64 - 16}px`;
            tooltip.style.visibility = 'visible';
        }
    } else {
        author.style.display= 'none';
        links.style.display= 'flex';
    }
});

closeBtn.addEventListener('click', function(){
    console.log('closed');

    author.style.display= 'flex';
    links.style.display= 'none';
})

window.addEventListener('resize', function() {
    shareBtn.classList.remove('dark-button');
    tooltip.style.visibility = 'hidden';
    author.style.display= 'flex';
    links.style.display= 'none';
});