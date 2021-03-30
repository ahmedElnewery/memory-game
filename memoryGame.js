// var images = document.getElementById("memoryGame").children
// var countOfClick =0
// var firstElement;
// var secElement;
// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", function(){

//         countOfClick ++
//         if(countOfClick === 1 ) {
//             firstElement = this.firstElementChild
//             this.firstElementChild.src ="./images/memory Game/"+ this.firstElementChild.getAttribute("data-index")+".gif"
//         }
//         if (countOfClick === 2 ) {
//             this.firstElementChild.src ="./images/memory Game/"+ this.firstElementChild.getAttribute("data-index")+".gif"
//             secElement = this.firstElementChild
//             if(firstElement.getAttribute("data-index") === secElement.getAttribute("data-index") ){
//                 if( firstElement.getAttribute("data-name") !== secElement.getAttribute("data-name") ){
//                     countOfClick = 0
//                 } else {
//                     countOfClick =1
//                 }

//             } else{
//                 countOfClick =0
//                 setTimeout( function() {
//                     firstElement.src = "./images/memory Game/Moon.gif";
//                     secElement.src = "./images/memory Game/Moon.gif"

//                 },500)
//             }
//         }

//         console.log(countOfClick)
//       })

// }


var level = getCookie("level")
var time;
switch (level) {
    case "Easy":
        time= 1
        break;
        case "Medium":
            time= .5
            break;
        case "Hard":
            time= .2
            break;
    default:
        time =1
        break;
}
/**************************************************************************/
var images = document.getElementById("memoryGame").children;
var countOfClick = 0;
var firstElement;
var secElement;
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {

    countOfClick++;

    if (countOfClick === 1) {
      firstElement = this;
      firstElement.setAttribute(
        "style",
        `background-image:url("./images/memoryGame/${this.getAttribute("data-index")}.gif"); `
      );
    }


    if (countOfClick === 2) {
      secElement = this;
      secElement.setAttribute(
        "style",
        `background-image:url("./images/memoryGame/${this.getAttribute("data-index")}.gif"); `
      );

      if ( firstElement.getAttribute("data-index") ===secElement.getAttribute("data-index")) {
        if (firstElement.getAttribute("data-name") !==secElement.getAttribute("data-name")){

          countOfClick = 0;

        } else {
          countOfClick = 1;
        }
      } else {
          countOfClick = 0;
          setTimeout (function(){

              firstElement.setAttribute(
                "style",
                `background-image:url("./images/memoryGame/Moon.gif");
                  transition: background-image ${time}s ;
      
                  `
              );
              secElement.setAttribute(
                "style",
                `background-image:url("./images/memoryGame/Moon.gif");
                  transition: background-image ${time}s 
                  `
              );
          },100)
      }
    }

  });
}
