function startTimer(){
    let count =0; 

    function call(){
        count++;
        console.log(count);
        setTimeout(call, 1000);
    }
    call();
}

startTimer()