const girdtrans = document.querySelector('.gird-trans');

window.addEventListener('scroll',function(){ 
            const value1 =-16.05 + window.scrollY-45;
            girdtrans.style.translate3d = "skewy(" + value1 + "deg)";
        })