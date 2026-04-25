// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”
setTimeout(()=>{
    console.log("Evaluating answers…")

},2000)
setTimeout(()=>{
    console.log("Result: Pass")

},4000)

console.log("“Exam submitted successfully”")

