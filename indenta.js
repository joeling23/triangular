function a(){
  function b(){
    function c(){ 
      console.log("brinquen");
      return c; 
    } 
    console.log("casa");
    return b;
  }
  return a;
}
b();

