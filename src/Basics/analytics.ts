console.log("Sending data");
function addAndHandle1(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  // console.log(combineValues(8, 8));
  // addAndHandle(10,20,()=> {})  // ()=> {} is anonymous function
  addAndHandle1(10,20,(result)=> {
      console.log(result)
  })
  
  function clickHandler(message:string){
    console.log('Clicked! ' + message);
  }
  const button = document.querySelector('button')!;
  if(button){
    button.addEventListener('click',clickHandler.bind(null,"You are welcome"))
  }
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  
