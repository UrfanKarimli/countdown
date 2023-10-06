const countdown = document.querySelector("#countdown")
const btnParent = document.querySelector("#btnLine")
const sendBtn = document.querySelector("#sendBtn")

sendBtn.addEventListener("click", () => {

    sendBtn.setAttribute("disabled", "")
    countdown.classList.remove("display")
const startmin = 3 
let time = startmin *60 

let timeInterval = setInterval(() => {
    time --;

    const minutes = Math.floor(time /60)
    let seconds = time % 60
    if (seconds<10) {
        seconds = "0" + seconds
    } else{
        seconds = seconds
    }
    if (minutes == 0 && seconds == 0) {
        sendBtn.removeAttribute("disabled")
        countdown.classList.add("display")
        clearInterval(timeInterval)
    }
    countdown.innerHTML=`${minutes} :${seconds}-dən sonra təkrar göndərə bilərsiniz`
},1000)
})







// !----------------------------------------------------------------

// let secondInterval = () => {
//     let i = 60;
//     setInterval(() => {
//         i--;
            
//             seconds.innerHTML = `${i} den sonra tekrar sinayin`
//             if(i == 0) {
//                 i = 60
//             }
//     },1000)
// }
// let minuteInterval = () => {
//     let j = 2;
//     setInterval(() => {
//         j--;
//         minutes.innerHTML = `${j}:`
//         if (j == 0) {
            
//         }
//     },60000)
// }