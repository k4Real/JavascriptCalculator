/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * double value = Double.parseDouble(text);
 * Storage for  Number
 * 
 * add Comments
 * Check for duplicates
 * make output textfield has a limited width,so if you type a lot of numbers It isn't getting out of it.
 * Classes javascript + JQUery
 */

class Calculator {
  
    constructor () {
this.currentNumber = "" ;
this.totalNumber = [] ;
this.sign =['+'];
                   }
    /********************************/
   addition() {
     
       this.sign.push("+");
       this.totalNumber.push(this.currentNumber) ;
       this.currentNumber = '';
   } 
   /**************************/
   substraction ()
   {
        
         this.sign.push("-");
       this.totalNumber.push(this.currentNumber) ;
       this.currentNumber = '';
   }
   /**********************/
   division ()
   {
      
         this.sign.push("/");
       this.totalNumber.push(this.currentNumber) ;
       this.currentNumber = '';
   }
   /*******************/
  multiplication()
   {
       
         this.sign.push("*");
       this.totalNumber.push(this.currentNumber) ;
       this.currentNumber = '';
   }
   
   
   /*****************************/
   moduloRest()
   {
      
       this.sign.push("%");
       this.totalNumber.push(this.currentNumber) ;
       this.currentNumber = '';
   }
   /***********************************/
   allClear (){
       this.sign = ['+'];
       this.totalNumber =[] ;
        this.currentNumber="" ;
       
   }
   /************************************************/ 
  entityClear(){
      
       this.currentNumber="" ; 
      
  }  
  /****************************************/
  addNumberOrDot(num){
      //test that there are less than 13 characters, else it is going to leave the screen
      if(this.currentNumber.length <13) {
  this.currentNumber +="" +num; 
      }
  
      
  }  
  /******************************************/
   calculate(){
      let result = 0.0;
      this.totalNumber.push(this.currentNumber) ;
      console.log(myCalc.sign+" " +myCalc.totalNumber );
      for ( let i=0; i<this.totalNumber.length;i++ ) {
 
        switch (this.sign[i]){
            
            case "+":
                
             result += parseFloat(this.totalNumber[i])  ;
             break;
           
            
            case "-":
           result -= parseFloat(this.totalNumber[i])  ;
             break;
            
            case "*":
            result *= parseFloat(this.totalNumber[i]) ;
             break;
            
            
             case "/":
            result /= parseFloat(this.totalNumber[i]) ;
             break;
           
            
            case "%":
           result %= parseFloat(this.totalNumber[i])  ;
            
        }
        
    }
   
     
    this.currentNumber="" +result; 
     //make sure 12 number limit is respected
    
        if (this.currentNumber.length > 12){
            
            this.currentNumber = 'out of memory' ;
        
            setTimeout(()=>{
                
              this.currentNumber=''; 
               document.getElementById("outputText").innerHTML = myCalc.currentNumber;
            },500) ;
        }
       
        
        
       
     this.sign = ['+'];
       this.totalNumber =[] ;   
   
  
  
    
         }
         
         
         /*-***********/
}
/*****************************/

let myCalc = new Calculator();



/********************************/
$('#num0').on('click', ()=>{
  myCalc.addNumberOrDot(0);  
});
$('#num1').on('click', ()=>{
  myCalc.addNumberOrDot(1);  
});
$('#num2').on('click', ()=>{
  myCalc.addNumberOrDot(2);  
}) ;
$('#num3').on('click', ()=>{
  myCalc.addNumberOrDot(3);  
});
$('#num4').on('click', ()=>{
  myCalc.addNumberOrDot(4);  
});
$('#num5').on('click', ()=>{
  myCalc.addNumberOrDot(5);  
});
$('#num6').on('click', ()=>{
  myCalc.addNumberOrDot(6);  
});
$('#num7').on('click', ()=>{
  myCalc.addNumberOrDot(7);  
}) ;
$('#num8').on('click', ()=>{
  myCalc.addNumberOrDot(8);  
});
$('#num9').on('click', ()=>{
  myCalc.addNumberOrDot(9);  
});



$('#AC').on('click', ()=>{
  myCalc.allClear(); 
  document.getElementById("outputText").innerHTML = myCalc.currentNumber;  
});
$('#CE').on('click', ()=>{
  myCalc.entityClear(); 
  document.getElementById("outputText").innerHTML = myCalc.currentNumber;    
});


/*************Update   **********************/
$('button').bind('click', ()=>{
  document.getElementById("outputText").innerHTML = myCalc.currentNumber;  
});

/*********************************/

$('#equalsSign').on('click', ()=>{
  myCalc.calculate();  
 document.getElementById("outputText").innerHTML = myCalc.currentNumber ;
 
});

$('#dotSign').on('click', ()=>{
    if( !myCalc.currentNumber.includes('.') ) {
  myCalc.addNumberOrDot(".");
  document.getElementById("outputText").innerHTML = myCalc.currentNumber;  
    }
});

$('#multiSign').on('click', ()=>{
    // to make sure the sign is only pressed once
    if(myCalc.currentNumber !== '') {
  myCalc.multiplication();  
    }
});

$('#divSign').on('click', ()=>{
    if(myCalc.currentNumber !== '') {
  myCalc.division();  
    }
});


$('#plusSign').on('click', ()=>{
    if(myCalc.currentNumber !== '') {
  myCalc.addition();  
    }
});

$('#subsSign').on('click', ()=>{
    if(myCalc.currentNumber !== '') {
  myCalc.substraction();  
    }
});

$('#moduloSign').on('click', ()=>{
    if(myCalc.currentNumber !== '') {
  myCalc.moduloRest()(); 
    }
});

/*********************/

