export default function handlerOnPageOurTeam(){
    const pageOurTeam = document.querySelector(".section-our-team");
    const footerPageOurTeam = pageOurTeam.querySelector('footer');
    const arrayPhotosTeam = pageOurTeam.querySelectorAll(".photoTeam");
    const buttonPrev = pageOurTeam.querySelector(".button-previous");
    const buttonNext = pageOurTeam.querySelector(".button-next");

    const sourcePhotosTeam = [
        "./img/photo/team1.png",
        "./img/photo/team2.png",
        "./img/photo/team3.png",
        "./img/photo/team4.png",
    ];
    const amountPhotosTeam = sourcePhotosTeam.length;
    let previousViewPhotosTeam = sourcePhotosTeam.concat();

    const arrayOfButton = [buttonPrev, buttonNext];

    //arrayOfButton.forEach((item) => item.addEventListener("click", listenerButtonsSlides));
    footerPageOurTeam.addEventListener('mouseenter', listenerMouseOverFooter);
    footerPageOurTeam.addEventListener('mouseleave', listenerMouseOutFooter);
    createSlidesEffect();

    function createSlidesEffect(){

        let glide = new Glide('.glide', {
            type: "carousel",
            startAt: 1,
            perView: 4,
            breakpoints:{
                560:{
                    perView: 3
                }
            }
        });
        glide.mount();

    }
    function listenerMouseOverFooter (){
        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');
        footerArrow.style.transform = 'rotate(45deg)';
        footerArrow.style.transitionDuration = '0.5s';
        footerArrow.style.transitionProperty = 'transform';
    }
    function listenerMouseOutFooter (){
        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');
        footerArrow.style.transform = 'rotate(0deg)';
        footerArrow.style.transitionDuration = '0.5s';
        footerArrow.style.transitionProperty = 'transform';
    }   
    function listenerButtonsSlides(event){
        let currentViewPhotosTeam;
        switch (event.target.className){
            case "button-previous":
                let photosTeamWithoutLast = previousViewPhotosTeam.slice(0, amountPhotosTeam);
                currentViewPhotosTeam = [ previousViewPhotosTeam[amountPhotosTeam-1], ...photosTeamWithoutLast];
                break;
            case "button-next":
                currentViewPhotosTeam = previousViewPhotosTeam.slice(1);
                currentViewPhotosTeam.push(previousViewPhotosTeam[0]);
                break;
            default: break;
        }
        arrayPhotosTeam.forEach((item, index) => {
            item.src = currentViewPhotosTeam[index];
        });
        previousViewPhotosTeam = currentViewPhotosTeam.concat();
    }
}