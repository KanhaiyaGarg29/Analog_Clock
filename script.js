const body=document.querySelector("body"),
      hourHand=document.querySelector(".hour"),
      minuteHand=document.querySelector(".min"),
      secHand=document.querySelector(".sec");


const updateTime=()=>{
    //get current time and calculate degrees for clock hands
    let date=new Date();
    secToDeg=(date.getSeconds()/60)*360;
    minToDeg=(date.getMinutes()/60)*360;
    hourToDeg=(date.getHours()/12)*360;
  
   //rotate the clock hands to the appropriate degree based on current time
    secHand.style.transform=`rotate(${secToDeg}deg)`;
    minuteHand.style.transform=`rotate(${minToDeg}deg)`;
    hourHand.style.transform=`rotate(${hourToDeg}deg)`;
}
//call updateTime to set clock hands every second
setInterval(updateTime,1000);

//call updateTime function on page reload
updateTime();