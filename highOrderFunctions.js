function master(numa,numb,f) {
  return f(numa,numb)
}

function numSum(numa,numb) {
  return numa + numb
}

function numDiff(numa,numb) {
  return numa-numb
}

console.log(master(5,4,numSum),master(5,4,numDiff));
