let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let counting = document.querySelector("#count");
let start = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let m = 0o0;
let s = 0o0;
let count = 0o0;
let timer = false;


function stopWatch(){
    if(timer){
        count++;

        if(count == 100){
          s++;
          count = 0;
        }
    
       if(s == 60){
        m++;
        s = 0;
        count=0;
        }


         let minStr = m;
         let secStr = s;
         let countStr = count;

         if(m < 10){
         minStr = '0'+ minStr;
         }
         if(s < 10){
         secStr = '0'+ secStr;
         }
         if(count < 10){
         countStr = '0'+ countStr;
         }
    
    
         min.innerHTML = minStr;
         sec.innerHTML = secStr;
         counting.innerHTML = countStr;
         setTimeout(stopWatch,10);
}
}


start.addEventListener("click",()=>{
    timer = true;
    stopWatch();
});

stopBtn.addEventListener("click",()=>{
    timer = false;
});


reset.addEventListener("click",()=>{
    timer = false;
    m = 0;
    s = 0;
    count = 0;
    min.innerHTML = "00";
    sec.innerHTML = "00";
    counting.innerHTML = "00";
});
