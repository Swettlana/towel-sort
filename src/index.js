
// You should implement your task here.

module.exports = function towelSort (matrix) {
  for (i=1; i<matrix[0].length; i+=2){
    for(j=0; j<matrix[1].length/2; j++){
      let temp=matrix[i][j];
      matrix[i][j]=matrix[i][matrix[1].length-j-1];
      matrix[i][matrix[1].length-j-1]=temp;
    }
  }
  let newArr=matrix.flat();
  return newArr;
}

