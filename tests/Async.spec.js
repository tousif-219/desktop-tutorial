function processdata(callback) {
    setTimeout(() => {
        console.log("This message is displayed after 2 seconds.");
        const data = "Data is ready";
        callback(data);
    }, 2000);
}

function fetchdata(data) {
    console.log("Fetch data", data);
}

function Execute(data) {
    console.log("execute data", data);
}

processdata(fetchdata)
processdata(Execute)

