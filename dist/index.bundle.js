"use strict";
(self["webpackChunkknightmoves"] = self["webpackChunkknightmoves"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightMoves */ "./src/knightMoves.js");


console.log("running baaaaaby")
let b = (0,_knightMoves__WEBPACK_IMPORTED_MODULE_0__["default"])([2,3],[4,3]);
console.log(b)
// knightMoves([3,3],[4,3]);
    // [3,3]
    // [4,5]
    // [2,4]
    // [4,3]

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _possibleSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./possibleSteps */ "./src/possibleSteps.js");


// export default function checkSteps(knightPosition, finish, FinishPossibleSteps = null){
//   let itsEqual = false;
//   if(knightPosition[0] === finish[0] && knightPosition[1] === finish[1]) return knightPosition;
//   if (!FinishPossibleSteps){
//     FinishPossibleSteps = possibleSteps(finish);
//   }
//   FinishPossibleSteps.forEach(possibleStep => {
//     //console.log({possibleStep, knightPosition});
//     if (possibleStep[0] === knightPosition[0] && possibleStep[1] === knightPosition[1]){
//       console.log(true)
//       itsEqual = `[${knightPosition}] => [${finish}]`;
//     }
//   });  
//   if (itsEqual) return itsEqual;

//   const knightPossibleSteps = possibleSteps(knightPosition);
//   knightPossibleSteps.forEach( knightPossibleStep => {
//     FinishPossibleSteps.forEach(possibleStep => {
//       if (possibleStep[0] === knightPossibleStep[0] && possibleStep[1] === knightPossibleStep[1]){
//         console.log(true)
//         itsEqual = `[${knightPosition}] => [${possibleStep}] => [${finish}]`;
//       }
//     });
//   });
//   return (itsEqual) ? itsEqual : false;
//   /*
//   if (itsEqual){
//     return itsEqual;
//   } else{
//     return knightPossibleSteps.forEach(
//   }
//   */
// }

function knightMoves(knightPosition, target, visited = []){ 
  let steps = null;
  let queue = [knightPosition];

  //console.log(possibleSteps(knightPosition, knightPosition)); 
  while(queue.length > 0){
    // const newStep = queue.shift();
    //console.log(queue); 
    let step = queue.shift();
    if(step[0] == target[0] && step[1]== target[1] ) {
      //console.log(step);
      steps = (!step[2]) ? step : `${step[2]} => ${step[0]},${step[1]}`;
      break;
    }else{
      //console.log((!step[2]) ? [step] : step[2]);
      visited = visited.concat([step]);
      queue = queue.concat((0,_possibleSteps__WEBPACK_IMPORTED_MODULE_0__["default"])(step, visited, (!step[2]) ? step : `${step[2]} => ${step[0]},${step[1]}`));
    }
    //console.log(queue)
  }
  //console.log(queue);
  return steps;
}

/***/ }),

/***/ "./src/possibleSteps.js":
/*!******************************!*\
  !*** ./src/possibleSteps.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ possibleSteps)
/* harmony export */ });


/**
 *   posible steps
 *    X   |    Y 
 1    -2  |   +1 
 2    -2  |   -1   
 3    -1  |   +2 
 4    -1  |   -2
 5    +1  |   +2
 6    +1  |   -2
 7    +2  |   +1
 8    +2  |   -2
 */


/**
 *    Structures
 *   knight[X , Y]
 *   Target[X , Y]
 */

 function possibleSteps(position=[1,1], visited = null, precesor= null){
  // console.log(position);
  const steps= [ [-2,1] , [-2,-1] , [-1,2] , [-1,-2] , [1,2] , [1,-2] , [2,1] , [2,-1] ];
  let allowsSteps = [];
  steps.forEach(step => {
    const x = position[0] + step[0];
    const y = position[1] + step[1];
    if(x>0 && x< 9 && y<9 && y>0){
      allowsSteps.push([x,y,(!precesor) ? null : precesor]);
    }
  });
  return allowsSteps;
  // for (let indexStep = 0; indexStep < visited.length; indexStep++) {
  //   if(visited[indexStep][0] === 8 && visited[indexStep][1] === 8){
  //    // newAllows.splice(allowsStepsIndex,1);
  //    console.log("[8,8]");
  //    console.log(position, visited);
  //   }        
  // }

  // // console.log(allowsSteps, visited);
  // if(!visited){
  //   return allowsSteps;
  // }else{
  //   let newAllowsSteps = [];
  //   for (let indexAllows = 0; indexAllows < allowsSteps.length; indexAllows++) {
  //     newAllowsSteps.push(allowsSteps[indexAllows]);
  //     // console.log(newAllowsSteps[indexAllows]);
  //     for (let indexStep = 0; indexStep < visited.length; indexStep++) {
  //       if(visited[indexStep][0] === allowsSteps[indexAllows][0] && visited[indexStep][1] === allowsSteps[indexAllows][1]){
  //         newAllowsSteps.pop();
  //       }        
  //     }
      
  //   }
    
  //   return newAllowsSteps;
  // }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVDRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZSxRQUFRLE9BQU87QUFDdEQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZSxRQUFRLGFBQWEsUUFBUSxPQUFPO0FBQzdFO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTLEtBQUssUUFBUSxHQUFHLFFBQVE7QUFDdEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQiwwREFBYSx1Q0FBdUMsU0FBUyxLQUFLLFFBQVEsR0FBRyxRQUFRO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUNBQWlDLGtDQUFrQztBQUNuRTtBQUNBO0FBQ0EsaUNBQWlDLDRCQUE0QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodG1vdmVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodG1vdmVzLy4vc3JjL2tuaWdodE1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodG1vdmVzLy4vc3JjL3Bvc3NpYmxlU3RlcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtuaWdodE1vdmVzIGZyb20gXCIuL2tuaWdodE1vdmVzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcInJ1bm5pbmcgYmFhYWFhYnlcIilcclxubGV0IGIgPSBrbmlnaHRNb3ZlcyhbMiwzXSxbNCwzXSk7XHJcbmNvbnNvbGUubG9nKGIpXHJcbi8vIGtuaWdodE1vdmVzKFszLDNdLFs0LDNdKTtcclxuICAgIC8vIFszLDNdXHJcbiAgICAvLyBbNCw1XVxyXG4gICAgLy8gWzIsNF1cclxuICAgIC8vIFs0LDNdIiwiaW1wb3J0IHBvc3NpYmxlU3RlcHMgZnJvbSBcIi4vcG9zc2libGVTdGVwc1wiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tTdGVwcyhrbmlnaHRQb3NpdGlvbiwgZmluaXNoLCBGaW5pc2hQb3NzaWJsZVN0ZXBzID0gbnVsbCl7XHJcbi8vICAgbGV0IGl0c0VxdWFsID0gZmFsc2U7XHJcbi8vICAgaWYoa25pZ2h0UG9zaXRpb25bMF0gPT09IGZpbmlzaFswXSAmJiBrbmlnaHRQb3NpdGlvblsxXSA9PT0gZmluaXNoWzFdKSByZXR1cm4ga25pZ2h0UG9zaXRpb247XHJcbi8vICAgaWYgKCFGaW5pc2hQb3NzaWJsZVN0ZXBzKXtcclxuLy8gICAgIEZpbmlzaFBvc3NpYmxlU3RlcHMgPSBwb3NzaWJsZVN0ZXBzKGZpbmlzaCk7XHJcbi8vICAgfVxyXG4vLyAgIEZpbmlzaFBvc3NpYmxlU3RlcHMuZm9yRWFjaChwb3NzaWJsZVN0ZXAgPT4ge1xyXG4vLyAgICAgLy9jb25zb2xlLmxvZyh7cG9zc2libGVTdGVwLCBrbmlnaHRQb3NpdGlvbn0pO1xyXG4vLyAgICAgaWYgKHBvc3NpYmxlU3RlcFswXSA9PT0ga25pZ2h0UG9zaXRpb25bMF0gJiYgcG9zc2libGVTdGVwWzFdID09PSBrbmlnaHRQb3NpdGlvblsxXSl7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRydWUpXHJcbi8vICAgICAgIGl0c0VxdWFsID0gYFske2tuaWdodFBvc2l0aW9ufV0gPT4gWyR7ZmluaXNofV1gO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pOyAgXHJcbi8vICAgaWYgKGl0c0VxdWFsKSByZXR1cm4gaXRzRXF1YWw7XHJcblxyXG4vLyAgIGNvbnN0IGtuaWdodFBvc3NpYmxlU3RlcHMgPSBwb3NzaWJsZVN0ZXBzKGtuaWdodFBvc2l0aW9uKTtcclxuLy8gICBrbmlnaHRQb3NzaWJsZVN0ZXBzLmZvckVhY2goIGtuaWdodFBvc3NpYmxlU3RlcCA9PiB7XHJcbi8vICAgICBGaW5pc2hQb3NzaWJsZVN0ZXBzLmZvckVhY2gocG9zc2libGVTdGVwID0+IHtcclxuLy8gICAgICAgaWYgKHBvc3NpYmxlU3RlcFswXSA9PT0ga25pZ2h0UG9zc2libGVTdGVwWzBdICYmIHBvc3NpYmxlU3RlcFsxXSA9PT0ga25pZ2h0UG9zc2libGVTdGVwWzFdKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0cnVlKVxyXG4vLyAgICAgICAgIGl0c0VxdWFsID0gYFske2tuaWdodFBvc2l0aW9ufV0gPT4gWyR7cG9zc2libGVTdGVwfV0gPT4gWyR7ZmluaXNofV1gO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gICByZXR1cm4gKGl0c0VxdWFsKSA/IGl0c0VxdWFsIDogZmFsc2U7XHJcbi8vICAgLypcclxuLy8gICBpZiAoaXRzRXF1YWwpe1xyXG4vLyAgICAgcmV0dXJuIGl0c0VxdWFsO1xyXG4vLyAgIH0gZWxzZXtcclxuLy8gICAgIHJldHVybiBrbmlnaHRQb3NzaWJsZVN0ZXBzLmZvckVhY2goXHJcbi8vICAgfVxyXG4vLyAgICovXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtuaWdodE1vdmVzKGtuaWdodFBvc2l0aW9uLCB0YXJnZXQsIHZpc2l0ZWQgPSBbXSl7IFxyXG4gIGxldCBzdGVwcyA9IG51bGw7XHJcbiAgbGV0IHF1ZXVlID0gW2tuaWdodFBvc2l0aW9uXTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhwb3NzaWJsZVN0ZXBzKGtuaWdodFBvc2l0aW9uLCBrbmlnaHRQb3NpdGlvbikpOyBcclxuICB3aGlsZShxdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgIC8vIGNvbnN0IG5ld1N0ZXAgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhxdWV1ZSk7IFxyXG4gICAgbGV0IHN0ZXAgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgaWYoc3RlcFswXSA9PSB0YXJnZXRbMF0gJiYgc3RlcFsxXT09IHRhcmdldFsxXSApIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhzdGVwKTtcclxuICAgICAgc3RlcHMgPSAoIXN0ZXBbMl0pID8gc3RlcCA6IGAke3N0ZXBbMl19ID0+ICR7c3RlcFswXX0sJHtzdGVwWzFdfWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vY29uc29sZS5sb2coKCFzdGVwWzJdKSA/IFtzdGVwXSA6IHN0ZXBbMl0pO1xyXG4gICAgICB2aXNpdGVkID0gdmlzaXRlZC5jb25jYXQoW3N0ZXBdKTtcclxuICAgICAgcXVldWUgPSBxdWV1ZS5jb25jYXQocG9zc2libGVTdGVwcyhzdGVwLCB2aXNpdGVkLCAoIXN0ZXBbMl0pID8gc3RlcCA6IGAke3N0ZXBbMl19ID0+ICR7c3RlcFswXX0sJHtzdGVwWzFdfWApKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2cocXVldWUpXHJcbiAgfVxyXG4gIC8vY29uc29sZS5sb2cocXVldWUpO1xyXG4gIHJldHVybiBzdGVwcztcclxufSIsIlxyXG5cclxuLyoqXHJcbiAqICAgcG9zaWJsZSBzdGVwc1xyXG4gKiAgICBYICAgfCAgICBZIFxyXG4gMSAgICAtMiAgfCAgICsxIFxyXG4gMiAgICAtMiAgfCAgIC0xICAgXHJcbiAzICAgIC0xICB8ICAgKzIgXHJcbiA0ICAgIC0xICB8ICAgLTJcclxuIDUgICAgKzEgIHwgICArMlxyXG4gNiAgICArMSAgfCAgIC0yXHJcbiA3ICAgICsyICB8ICAgKzFcclxuIDggICAgKzIgIHwgICAtMlxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogICAgU3RydWN0dXJlc1xyXG4gKiAgIGtuaWdodFtYICwgWV1cclxuICogICBUYXJnZXRbWCAsIFldXHJcbiAqL1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc3NpYmxlU3RlcHMocG9zaXRpb249WzEsMV0sIHZpc2l0ZWQgPSBudWxsLCBwcmVjZXNvcj0gbnVsbCl7XHJcbiAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gIGNvbnN0IHN0ZXBzPSBbIFstMiwxXSAsIFstMiwtMV0gLCBbLTEsMl0gLCBbLTEsLTJdICwgWzEsMl0gLCBbMSwtMl0gLCBbMiwxXSAsIFsyLC0xXSBdO1xyXG4gIGxldCBhbGxvd3NTdGVwcyA9IFtdO1xyXG4gIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICBjb25zdCB4ID0gcG9zaXRpb25bMF0gKyBzdGVwWzBdO1xyXG4gICAgY29uc3QgeSA9IHBvc2l0aW9uWzFdICsgc3RlcFsxXTtcclxuICAgIGlmKHg+MCAmJiB4PCA5ICYmIHk8OSAmJiB5PjApe1xyXG4gICAgICBhbGxvd3NTdGVwcy5wdXNoKFt4LHksKCFwcmVjZXNvcikgPyBudWxsIDogcHJlY2Vzb3JdKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gYWxsb3dzU3RlcHM7XHJcbiAgLy8gZm9yIChsZXQgaW5kZXhTdGVwID0gMDsgaW5kZXhTdGVwIDwgdmlzaXRlZC5sZW5ndGg7IGluZGV4U3RlcCsrKSB7XHJcbiAgLy8gICBpZih2aXNpdGVkW2luZGV4U3RlcF1bMF0gPT09IDggJiYgdmlzaXRlZFtpbmRleFN0ZXBdWzFdID09PSA4KXtcclxuICAvLyAgICAvLyBuZXdBbGxvd3Muc3BsaWNlKGFsbG93c1N0ZXBzSW5kZXgsMSk7XHJcbiAgLy8gICAgY29uc29sZS5sb2coXCJbOCw4XVwiKTtcclxuICAvLyAgICBjb25zb2xlLmxvZyhwb3NpdGlvbiwgdmlzaXRlZCk7XHJcbiAgLy8gICB9ICAgICAgICBcclxuICAvLyB9XHJcblxyXG4gIC8vIC8vIGNvbnNvbGUubG9nKGFsbG93c1N0ZXBzLCB2aXNpdGVkKTtcclxuICAvLyBpZighdmlzaXRlZCl7XHJcbiAgLy8gICByZXR1cm4gYWxsb3dzU3RlcHM7XHJcbiAgLy8gfWVsc2V7XHJcbiAgLy8gICBsZXQgbmV3QWxsb3dzU3RlcHMgPSBbXTtcclxuICAvLyAgIGZvciAobGV0IGluZGV4QWxsb3dzID0gMDsgaW5kZXhBbGxvd3MgPCBhbGxvd3NTdGVwcy5sZW5ndGg7IGluZGV4QWxsb3dzKyspIHtcclxuICAvLyAgICAgbmV3QWxsb3dzU3RlcHMucHVzaChhbGxvd3NTdGVwc1tpbmRleEFsbG93c10pO1xyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyhuZXdBbGxvd3NTdGVwc1tpbmRleEFsbG93c10pO1xyXG4gIC8vICAgICBmb3IgKGxldCBpbmRleFN0ZXAgPSAwOyBpbmRleFN0ZXAgPCB2aXNpdGVkLmxlbmd0aDsgaW5kZXhTdGVwKyspIHtcclxuICAvLyAgICAgICBpZih2aXNpdGVkW2luZGV4U3RlcF1bMF0gPT09IGFsbG93c1N0ZXBzW2luZGV4QWxsb3dzXVswXSAmJiB2aXNpdGVkW2luZGV4U3RlcF1bMV0gPT09IGFsbG93c1N0ZXBzW2luZGV4QWxsb3dzXVsxXSl7XHJcbiAgLy8gICAgICAgICBuZXdBbGxvd3NTdGVwcy5wb3AoKTtcclxuICAvLyAgICAgICB9ICAgICAgICBcclxuICAvLyAgICAgfVxyXG4gICAgICBcclxuICAvLyAgIH1cclxuICAgIFxyXG4gIC8vICAgcmV0dXJuIG5ld0FsbG93c1N0ZXBzO1xyXG4gIC8vIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==