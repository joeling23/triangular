function a(){
  function b(){
    function c(){ 
      console.log("brinquen");
      return c; 
    } 
    console.log("casa");
    return b;
  }
  console.log("jungla");
  b();
  return a;
}
a();
c();

