export default function preloaderPageEffects(){

    const preloaderPage = document.querySelector(".preloader");
    const imagePreloader = document.querySelector(".image-preloader");

    document.body.style.overflowY = 'hidden';

    setTimeout( () => imagePreloader.src = "./img/icons/Headphone_JD.png", 400);
    setTimeout( () => imagePreloader.src = "./img/icons/star_big.png", 800);
    setTimeout( hidePreloaderAndTurnOnScroll , 1000);

    function hidePreloaderAndTurnOnScroll(){
        TweenLite.to(preloaderPage, 1, {
            height:"0"
        });
        document.body.style.overflowY = 'visible';
        //document.body.style.overflowX = 'hidden';
    }
}