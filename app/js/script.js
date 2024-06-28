const author = document.getElementById('author');
const links= document.getElementById('links');
const shareBtn = document.getElementById('shareBtn');
const closeBtn = document.getElementById('closeBtn');

shareBtn.addEventListener('click', function(){
    console.log('clicked');
    author.style.display= 'none';
    links.style.display= 'flex';
});

closeBtn.addEventListener('click', function(){
    console.log('closed');
    author.style.display= 'flex';
    links.style.display= 'none';
})