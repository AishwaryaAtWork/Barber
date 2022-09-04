var menuBtn=document.getElementById('menuBtn');
var navbar=document.getElementById('side-nav');
var menu=document.getElementById('menu');

menuBtn.addEventListener('click',()=>{
   if(navbar.style.right=='-100%'){
    navbar.style.right='0';
    menu.src='src/close.png';
   }
   else{
    navbar.style.right='-100%'
    menu.src='src/menu.png';
   }
});