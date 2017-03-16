function a(){
  function b(){
    function c(){ 
      console.log("c");
    } 
    c();
    console.log("b");
  }
  console.log("a");
}
c();

