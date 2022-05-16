window.addEventListener('scroll',function(){
    let navbar=document.getElementById('menu-bar')
    if(this.window.pageYOffset>=269)
    {
       navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }

});