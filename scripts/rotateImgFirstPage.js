export default function handlerToRotateImagesOnFirstPage(){

    const sectionFirstPage = document.querySelector('.section-firstPage');
    const textCreative = document.querySelector('.creative');
    const imageForYou = document.querySelector('.image-for-you');

    const MAX_ANGLE = 10;
    const TRANSITION_DURATION = 0.7;
    const CENTER_BOTTOM = "center bottom";
    const CENTER_TOP = "center top";
    const currentWidthDevice = document.documentElement.clientWidth;
    const currentHeightDevice = document.documentElement.clientHeight;
    const coordinatesMiddleTextCreative = getCoordsMiddle(textCreative);
    const middleDiagonal = getDistanceBetweenPoints({x:0, y:0},{x:currentWidthDevice/2, y:currentHeightDevice/2});
    
    let amountOfRotation = {
        x:0,
        y:0.5,
        z:0,
        angle:0
    };

    //TODO use requestAnimationFrame() for optimize animation !
    sectionFirstPage.addEventListener('mouseenter', hintBrowser);
    sectionFirstPage.addEventListener('mouseleave', removeHint);
    sectionFirstPage.addEventListener('mousemove', listenerToRotateImagesOnFirstPage);

    function listenerToRotateImagesOnFirstPage(event){
        const coordinatesMouse = {
            x: event.clientX,
            y: event.clientY
        };
        
        const distanceMouseTextCreative = getDistanceBetweenPoints(coordinatesMiddleTextCreative, coordinatesMouse);
        amountOfRotation.angle = MAX_ANGLE * distanceMouseTextCreative / middleDiagonal;

        if((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){
           
            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);
            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);
           
        }
        else if((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){

            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);
            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);
        
        }
        else if ((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){
            
            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);
            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);

        }
        else if ((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){
           
            elementRotate3d(textCreative, TRANSITION_DURATION, amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);
            elementRotate3d(imageForYou, TRANSITION_DURATION, amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);

        }
    }

    function hintBrowser() {
        // The optimizable properties that are going to change
        // in the animation's keyframes block
        this.style.willChange = 'top, left, transform, opacity';
    }
      
    function removeHint() {
        this.style.willChange = 'auto';
    }
    
    function elementRotate3d(element, duration, rotationX, rotationY, rotationZ, transformOrigin = "center center"){

        TweenMax.to(element, duration, {
            rotationX: rotationX, 
            rotationY: rotationY,
            rotationZ: rotationZ,
            transformOrigin: transformOrigin
        });
        //return `rotate3d(${amountOfRotation.x}, ${amountOfRotation.y}, ${amountOfRotation.z}, ${amountOfRotation.angle}deg)`;
    }
    
    function getCoordsMiddle(elem) {
        let box = elem.getBoundingClientRect();
    
        return {
          y: box.top + pageYOffset + box.height/2,
          x: box.left + pageXOffset + box.width/2
        };
    }
    
    function getDistanceBetweenPoints(p1, p2){
        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
    }
}