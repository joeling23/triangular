function a(){
  function b(){
    function c(){ 
      console.log("brinquen");
      b();
      return c; 
    } 
    console.log("casa");
    c();
    return b;
  }
  console.log("jungla");
  b();
  return a;
}
a();
b();
c();

