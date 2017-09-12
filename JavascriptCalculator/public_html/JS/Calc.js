/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 * Storage for  Number
 */

class Calculator {
  
    constructor () {
this.currentNumber = "" ;
this.totalNumber ="" ;
this.sign ="";
                   }
    /********************************/
   addition() {
       
       this.sign="+";
       
   } 
   /**************************/
   substraction ()
   {
     
        this.sign="-";
       
   }
   /**********************/
   division ()
   {
     
        this.sign="/";
       
   }
   /*******************/
  multiplication()
   {
      
       this.sign="*"; 
       
   }
   
   
   /*****************************/
   moduloRest()
   {
      
       this.sign="%"; 
       
   }
   
   allClear (){
       this.totalNumber="" ;
       
   }
    
  entityClear(){
      
       this.currentNumber="" ; 
      
  }  
  
  addNumber(num){
      
  this.currentNumber+=num;    
      
  }   
  
  
  
    
}
/*****************************/

$()
