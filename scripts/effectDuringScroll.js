export default function effectDuringScroll(){

   let ctrl = new ScrollMagic.Controller({
       globalSceneOptions: {
           triggerHook: 'onLeave'
       }
   });

   createEffectForPages();
   createEffectForElements();

    function createEffectForPages(){
        const pageFirst = document.querySelector('.section-firstPage');
        const pageWedo = document.querySelector('.section-we-do');
        //const pageTeam = document.querySelector('.section-our-team');
        const arrayOfSections = [pageFirst, pageWedo]; //, pageTeam
   
        arrayOfSections.forEach((item) => {
            new ScrollMagic.Scene({
                triggerElement: item
            })
            .setPin(item)
            .addTo(ctrl);
        });
    }

    function createEffectForElements(){
        const sectionClients = document.querySelector('.section-clients');
        const headerPageClients = sectionClients.querySelector('header');
        const columnClientsInfo = sectionClients.querySelector('.column-clients-info');
        const columnClientsPhoto = sectionClients.querySelector('.column-clients-photo');

        let effectHeaderPageClients =  new ScrollMagic.Scene({
                    triggerElement: sectionClients,
                })
                .setPin(headerPageClients)
                .addTo(ctrl);
        
        let effectColumnClientsInfo =  new ScrollMagic.Scene({
                triggerElement: sectionClients,
            })
            .setClassToggle(columnClientsInfo, "to-fix-column-clients-info")
            .addTo(ctrl);

        let effectColumnClientsPhoto =  new ScrollMagic.Scene({
                triggerElement: sectionClients,
            })
            .setClassToggle(columnClientsPhoto, "margin-left-column-clients-photo")
            .addTo(ctrl);
        
    }

}
