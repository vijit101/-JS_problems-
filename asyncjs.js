console.log("called normally");
setTimeout(()=>{console.log("testing async code ")},5000);
console.log("called after set timeout");

// set interval

setInterval(() => {
    console.log("test set Interval");
}, 6000);