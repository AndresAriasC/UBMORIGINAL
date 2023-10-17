addEventListener('DOMContentLoaded', () => {
    let btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            let list = document.querySelector('.list')
            list.classList.toggle('show')
        })
    }
})
/*vdvdfvdfvdfvdfv*/
addEventListener('DOMContentLoaded', () =>{
    let menuBtn = document.querySelector('.btn_menu');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
     if(!menuOpen){
          menuBtn.classList.add('open');
          menuOpen = true;
 }else{
         menuBtn.classList.remove('open');
         menuOpen = false;
  }
})
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down',window.scrollY > 0);
});
