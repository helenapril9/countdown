const timer = document.getElementById("timer")            
intervalId = setInterval(()=>{  
    timer.textContent = Number(timer.textContent)-1;   
    if (Number(timer.textContent) === 0){        
        clearInterval(intervalId);       
        alert(`Вы победили в конкурсе!`); 
    }   
    }          
, 1000)


// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log('Hello World');
//   counter += 1;
// if (counter === 5) {
//     console.log('Done');
//     clearInterval(intervalId);
//   }
// }, 1000);