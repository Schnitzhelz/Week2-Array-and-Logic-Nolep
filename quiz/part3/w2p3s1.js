function cariMean(arr) {
    const total = Math.round(arr.reduce((acc, curr) => acc + curr, 0)/arr.length);
    return total
  }
  
  
  console.log(cariMean([1, 2, 3, 4, 5])); 
  console.log(cariMean([3, 5, 7, 5, 3])); 
  console.log(cariMean([6, 5, 4, 7, 3])); 
  console.log(cariMean([1, 3, 3])); 
  console.log(cariMean([7, 7, 7, 7, 7])); 
  