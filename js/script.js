//Event Handling
// const close = document.querySelector('.close');
// const tim = document.querySelector('.tim');

// close.addEventListener('click', function(){
//  tim.style.display = 'none';
// });

//DOM Traversal
const close = document.querySelectorAll('.close');

/*
for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(e){
        // close[i].parentElement.style.display = 'none';
        // console.log(e.target);//Ambil dari hasil console
        e.target.parentElement.style.display = 'none';
    });
}
*/

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});