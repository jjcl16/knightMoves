import possibleSteps from "./possibleSteps";

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

export default function knightMoves(knightPosition, target, visited = []){ 
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
      queue = queue.concat(possibleSteps(step, visited, (!step[2]) ? step : `${step[2]} => ${step[0]},${step[1]}`));
    }
    //console.log(queue)
  }
  //console.log(queue);
  return steps;
}