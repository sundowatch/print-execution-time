let start = new Date();
let simulateTime = 5;

exports.print = () => {
    setTimeout(function (argument) {
        let end = new Date() - start;
        console.info('Execution time: %dms', end)
    }, simulateTime)
}



