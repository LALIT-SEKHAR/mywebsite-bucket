( () => {
    const inputnum = process.argv.slice(2)[0];
    let isprimenum = true;
    if (inputnum === 1) {
        return console.log("1 is not considered");
    }
    if (inputnum === 2) {
        return console.log("2 is a prime number");
    }
    for (let index = 2; index < inputnum; index++) {
        if (inputnum%index === 0) {
            isprimenum = false;
        }
    }
    isprimenum ? console.log(inputnum,'is a prime number') : console.log(inputnum,'is not a prime number')
})()