let multiNestedArray = [
    [1, 2, 3],
    [
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [10, 11, [16, [[16, 17, 18], 17, 18], 18]],
      [13, 14, 15],
      [16, 17, 18]
    ]
  ];
  
  let count=0;
  
  for(let i=0;i<multiNestedArray.length;i++){
      if(Array.isArray(multiNestedArray[i])){
          count++
           for(let j=0;j<multiNestedArray[i].length;j++){
              if(Array.isArray(multiNestedArray[i][j])){
            count++
           }
           }   
         
      }
  }
  console.log(count)