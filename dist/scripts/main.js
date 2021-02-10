var myApp =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/changeOnPageOurTeam.js":
/*!****************************************!*\
  !*** ./scripts/changeOnPageOurTeam.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlerOnPageOurTeam; });\nfunction handlerOnPageOurTeam(){\n    const pageOurTeam = document.querySelector(\".section-our-team\");\n    const footerPageOurTeam = pageOurTeam.querySelector('footer');\n    const arrayPhotosTeam = pageOurTeam.querySelectorAll(\".photoTeam\");\n    const buttonPrev = pageOurTeam.querySelector(\".button-previous\");\n    const buttonNext = pageOurTeam.querySelector(\".button-next\");\n\n    const sourcePhotosTeam = [\n        \"./img/photo/team1.png\",\n        \"./img/photo/team2.png\",\n        \"./img/photo/team3.png\",\n        \"./img/photo/team4.png\",\n    ];\n    const amountPhotosTeam = sourcePhotosTeam.length;\n    let previousViewPhotosTeam = sourcePhotosTeam.concat();\n\n    const arrayOfButton = [buttonPrev, buttonNext];\n\n    //arrayOfButton.forEach((item) => item.addEventListener(\"click\", listenerButtonsSlides));\n    footerPageOurTeam.addEventListener('mouseenter', listenerMouseOverFooter);\n    footerPageOurTeam.addEventListener('mouseleave', listenerMouseOutFooter);\n    createSlidesEffect();\n\n    function createSlidesEffect(){\n\n        let glide = new Glide('.glide', {\n            type: \"carousel\",\n            startAt: 1,\n            perView: 4,\n            breakpoints:{\n                560:{\n                    perView: 3\n                }\n            }\n        });\n        glide.mount();\n\n    }\n    function listenerMouseOverFooter (){\n        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');\n        footerArrow.style.transform = 'rotate(45deg)';\n        footerArrow.style.transitionDuration = '0.5s';\n        footerArrow.style.transitionProperty = 'transform';\n    }\n    function listenerMouseOutFooter (){\n        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');\n        footerArrow.style.transform = 'rotate(0deg)';\n        footerArrow.style.transitionDuration = '0.5s';\n        footerArrow.style.transitionProperty = 'transform';\n    }   \n    function listenerButtonsSlides(event){\n        let currentViewPhotosTeam;\n        switch (event.target.className){\n            case \"button-previous\":\n                let photosTeamWithoutLast = previousViewPhotosTeam.slice(0, amountPhotosTeam);\n                currentViewPhotosTeam = [ previousViewPhotosTeam[amountPhotosTeam-1], ...photosTeamWithoutLast];\n                break;\n            case \"button-next\":\n                currentViewPhotosTeam = previousViewPhotosTeam.slice(1);\n                currentViewPhotosTeam.push(previousViewPhotosTeam[0]);\n                break;\n            default: break;\n        }\n        arrayPhotosTeam.forEach((item, index) => {\n            item.src = currentViewPhotosTeam[index];\n        });\n        previousViewPhotosTeam = currentViewPhotosTeam.concat();\n    }\n}\n\n//# sourceURL=webpack://myApp/./scripts/changeOnPageOurTeam.js?");

/***/ }),

/***/ "./scripts/changeOnPageWeDo.js":
/*!*************************************!*\
  !*** ./scripts/changeOnPageWeDo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlerToChangeOnPageWeDo; });\nfunction handlerToChangeOnPageWeDo(){\n\n    const arrayOfCards = document.querySelectorAll('.item-container-cards');\n    arrayOfCards.forEach((item) => item.addEventListener('click', listenerItemCardClick) );\n    \n    function listenerItemCardClick(event){\n        const matchCardToText = {\n            \"image-gear-red-wedo\": \"Channel Operation and Management\",\n            \"image-stars-small\": \"Creative Services for Influencers\",\n            \"image-graphik-small\": \"Graphic Design & Photography\",\n            \"image-lupa-small\": \"Business Development\",\n            \"image-hlopushka-small\": \"Lyric Videos & Animation\",\n            \"image-headphone-small\": \"Brand Campaigns\",\n        };\n        const matchCardToImg = {\n            \"image-gear-red-wedo\": \"./img/bigIcons/gear2.png\",\n            \"image-stars-small\": \"./img/bigIcons/star_big.png\",\n            \"image-graphik-small\": \"./img/bigIcons/graphik_big.png\",\n            \"image-lupa-small\": \"./img/bigIcons/Lupa_big.png\",\n            \"image-hlopushka-small\": \"./img/bigIcons/CLAQUETA_basica.png\",\n            \"image-headphone-small\": \"./img/bigIcons/Headphone_JD.png\",\n        };\n\n        const paragraphWeDoActions = document.querySelector('.paragraph-we-do-actions');\n        const imgWeDoActions = document.querySelector('.image-we-do-actions');\n        const linkLearnMore = document.querySelector('.link-learn-more');\n       \n        paragraphWeDoActions.textContent = \"\";\n        linkLearnMore.text = \"\";\n        setTimeout( () => imgWeDoActions.src = matchCardToImg[event.target.className] , 200);\n        setTimeout( () => linkLearnMore.text = \"learn more\" , 300);\n        setTimeout( () => paragraphWeDoActions.textContent = matchCardToText[event.target.className] , 400);\n    }\n}\n\n//# sourceURL=webpack://myApp/./scripts/changeOnPageWeDo.js?");

/***/ }),

/***/ "./scripts/changeOnPreloader.js":
/*!**************************************!*\
  !*** ./scripts/changeOnPreloader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return preloaderPageEffects; });\nfunction preloaderPageEffects(){\n\n    const preloaderPage = document.querySelector(\".preloader\");\n    const imagePreloader = document.querySelector(\".image-preloader\");\n\n    document.body.style.overflowY = 'hidden';\n\n    setTimeout( () => imagePreloader.src = \"./img/icons/Headphone_JD.png\", 400);\n    setTimeout( () => imagePreloader.src = \"./img/icons/star_big.png\", 800);\n    setTimeout( hidePreloaderAndTurnOnScroll , 1000);\n\n    function hidePreloaderAndTurnOnScroll(){\n        TweenLite.to(preloaderPage, 1, {\n            height:\"0\"\n        });\n        document.body.style.overflowY = 'visible';\n        //document.body.style.overflowX = 'hidden';\n    }\n}\n\n//# sourceURL=webpack://myApp/./scripts/changeOnPreloader.js?");

/***/ }),

/***/ "./scripts/effectDuringScroll.js":
/*!***************************************!*\
  !*** ./scripts/effectDuringScroll.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return effectDuringScroll; });\nfunction effectDuringScroll(){\n\n   let ctrl = new ScrollMagic.Controller({\n       globalSceneOptions: {\n           triggerHook: 'onLeave'\n       }\n   });\n\n   createEffectForPages();\n   createEffectForElements();\n\n    function createEffectForPages(){\n        const pageFirst = document.querySelector('.section-firstPage');\n        const pageWedo = document.querySelector('.section-we-do');\n        //const pageTeam = document.querySelector('.section-our-team');\n        const arrayOfSections = [pageFirst, pageWedo]; //, pageTeam\n   \n        arrayOfSections.forEach((item) => {\n            new ScrollMagic.Scene({\n                triggerElement: item\n            })\n            .setPin(item)\n            .addTo(ctrl);\n        });\n    }\n\n    function createEffectForElements(){\n        const sectionClients = document.querySelector('.section-clients');\n        const headerPageClients = sectionClients.querySelector('header');\n        const columnClientsInfo = sectionClients.querySelector('.column-clients-info');\n        const columnClientsPhoto = sectionClients.querySelector('.column-clients-photo');\n\n        let effectHeaderPageClients =  new ScrollMagic.Scene({\n                    triggerElement: sectionClients,\n                })\n                .setPin(headerPageClients)\n                .addTo(ctrl);\n        \n        let effectColumnClientsInfo =  new ScrollMagic.Scene({\n                triggerElement: sectionClients,\n            })\n            .setClassToggle(columnClientsInfo, \"to-fix-column-clients-info\")\n            .addTo(ctrl);\n\n        let effectColumnClientsPhoto =  new ScrollMagic.Scene({\n                triggerElement: sectionClients,\n            })\n            .setClassToggle(columnClientsPhoto, \"margin-left-column-clients-photo\")\n            .addTo(ctrl);\n        \n    }\n\n}\n\n\n//# sourceURL=webpack://myApp/./scripts/effectDuringScroll.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rotateImgFirstPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotateImgFirstPage.js */ \"./scripts/rotateImgFirstPage.js\");\n/* harmony import */ var _changeOnPageWeDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeOnPageWeDo.js */ \"./scripts/changeOnPageWeDo.js\");\n/* harmony import */ var _effectDuringScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effectDuringScroll.js */ \"./scripts/effectDuringScroll.js\");\n/* harmony import */ var _changeOnPageOurTeam_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeOnPageOurTeam.js */ \"./scripts/changeOnPageOurTeam.js\");\n/* harmony import */ var _changeOnPreloader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeOnPreloader.js */ \"./scripts/changeOnPreloader.js\");\n\n\n\n\n\n\nwindow.addEventListener(\"load\", mainScript);\n\nfunction mainScript(){\n    Object(_rotateImgFirstPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_changeOnPageWeDo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    Object(_changeOnPageOurTeam_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    Object(_changeOnPreloader_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    Object(_effectDuringScroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n\n//# sourceURL=webpack://myApp/./scripts/index.js?");

/***/ }),

/***/ "./scripts/rotateImgFirstPage.js":
/*!***************************************!*\
  !*** ./scripts/rotateImgFirstPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handlerToRotateImagesOnFirstPage; });\nfunction handlerToRotateImagesOnFirstPage(){\n\n    const sectionFirstPage = document.querySelector('.section-firstPage');\n    const textCreative = document.querySelector('.creative');\n    const imageForYou = document.querySelector('.image-for-you');\n\n    const MAX_ANGLE = 10;\n    const TRANSITION_DURATION = 0.7;\n    const CENTER_BOTTOM = \"center bottom\";\n    const CENTER_TOP = \"center top\";\n    const currentWidthDevice = document.documentElement.clientWidth;\n    const currentHeightDevice = document.documentElement.clientHeight;\n    const coordinatesMiddleTextCreative = getCoordsMiddle(textCreative);\n    const middleDiagonal = getDistanceBetweenPoints({x:0, y:0},{x:currentWidthDevice/2, y:currentHeightDevice/2});\n    \n    let amountOfRotation = {\n        x:0,\n        y:0.5,\n        z:0,\n        angle:0\n    };\n\n    //TODO use requestAnimationFrame() for optimize animation !\n    sectionFirstPage.addEventListener('mouseenter', hintBrowser);\n    sectionFirstPage.addEventListener('mouseleave', removeHint);\n    sectionFirstPage.addEventListener('mousemove', listenerToRotateImagesOnFirstPage);\n\n    function listenerToRotateImagesOnFirstPage(event){\n        const coordinatesMouse = {\n            x: event.clientX,\n            y: event.clientY\n        };\n        \n        const distanceMouseTextCreative = getDistanceBetweenPoints(coordinatesMiddleTextCreative, coordinatesMouse);\n        amountOfRotation.angle = MAX_ANGLE * distanceMouseTextCreative / middleDiagonal;\n\n        if((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){\n           \n            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);\n            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);\n           \n        }\n        else if((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){\n\n            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);\n            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);\n        \n        }\n        else if ((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){\n            \n            elementRotate3d(textCreative, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);\n            elementRotate3d(imageForYou, TRANSITION_DURATION, -amountOfRotation.angle, -amountOfRotation.angle, amountOfRotation.angle);\n\n        }\n        else if ((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){\n           \n            elementRotate3d(textCreative, TRANSITION_DURATION, amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);\n            elementRotate3d(imageForYou, TRANSITION_DURATION, amountOfRotation.angle, amountOfRotation.angle, -amountOfRotation.angle);\n\n        }\n    }\n\n    function hintBrowser() {\n        // The optimizable properties that are going to change\n        // in the animation's keyframes block\n        this.style.willChange = 'top, left, transform, opacity';\n    }\n      \n    function removeHint() {\n        this.style.willChange = 'auto';\n    }\n    \n    function elementRotate3d(element, duration, rotationX, rotationY, rotationZ, transformOrigin = \"center center\"){\n\n        TweenMax.to(element, duration, {\n            rotationX: rotationX, \n            rotationY: rotationY,\n            rotationZ: rotationZ,\n            transformOrigin: transformOrigin\n        });\n        //return `rotate3d(${amountOfRotation.x}, ${amountOfRotation.y}, ${amountOfRotation.z}, ${amountOfRotation.angle}deg)`;\n    }\n    \n    function getCoordsMiddle(elem) {\n        let box = elem.getBoundingClientRect();\n    \n        return {\n          y: box.top + pageYOffset + box.height/2,\n          x: box.left + pageXOffset + box.width/2\n        };\n    }\n    \n    function getDistanceBetweenPoints(p1, p2){\n        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));\n    }\n}\n\n//# sourceURL=webpack://myApp/./scripts/rotateImgFirstPage.js?");

/***/ })

/******/ });