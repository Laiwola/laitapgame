var tablinks= document.getElementsByClassName("sub-three2");
var tabcontents= document.getElementsByClassName("middle-con");
var tabpages= document.getElementsByClassName("sub-seg");
var count3 = document.getElementById("count3");
var con1= document.querySelector(".con1")
var con2= document.querySelector(".con2")
var con3= document.querySelector(".con3")
var con4= document.querySelector(".con4")
var con5= document.querySelector(".con5")
var con6= document.querySelector(".con6")
var con7= document.querySelector(".con7")
var con8= document.querySelector(".con8")
var con9= document.querySelector(".con9")

 let count2=localStorage.getItem("counte");

 var interval;

let count=localStorage.getItem("counter");

 var output = document.getElementById("count2");
 var underscore = document.getElementById("underscore");
var roller = document.querySelector(".rol");

var to = document.getElementById("sp3");
var total = document.getElementById("sp2");
var pcalim = document.getElementsByClassName("claim");






interval = setInterval(()=>{
    localStorage.getItem("counte");
    count2 = parseFloat(count2);

    localStorage.setItem("counte",count2);

    if(count2 == 500){
        return(interval);
      
    }else{
        count2 = count2 + 1;
    };
    underscore.innerHTML=count2
}, 1000);






total.innerHTML=count;

to.innerHTML=count;



to.innerText=touch;

localStorage.setItem("toucher",touch);


  
  function countscore(){
  
 count++;
   
 localStorage.setItem("counter",count);

   output.innerText=count;
  
   localStorage.setItem("counter",count);
    if(count2 < 1){
        alert("Energy exhausted");
    }else{
        count2 = count2 - 1;
    }; 
    con1.classList.toggle("con1-tran");
    con2.classList.toggle("con2-tran");
    con3.classList.toggle("con3-tran");
    con4.classList.toggle("con4-tran");
    con5.classList.toggle("con5-tran");
    con6.classList.toggle("con6-tran");
    con7.classList.toggle("con7-tran");

};





function openpage(tabname){
    for(tabpage of tabpages){
        tabpage.classList.remove("active-page");
    };
   
    event.currentTarget.classList.add("active-page");
 
};





function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

  function claim(){
  var claimer = pclaim.innerText;
  
  };



  
 
  





