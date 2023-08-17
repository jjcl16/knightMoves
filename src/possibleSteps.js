

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

 export default function possibleSteps(position=[1,1], visited = null, precesor= null){
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