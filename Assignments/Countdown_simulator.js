// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
console.log("OTP requested")
console.log("OTP Sent Successfully")
let countdown = 5;
let timer = setInterval(()=>{
    console.log("Resending OTP in ",countdown,"sec")
    countdown--
    if(countdown === 0){
        console.log("Resend OTP")
        clearInterval(timer)
    }
})
        
//         Allow resend only after countdown ends