function testpromise() {
    return new Promise((resolve, reject) => {
        console.log("data has been fetched");
        //resolve("success");
        reject("error");
    });
}

testpromise().then((res) => {
        console.log("data received");
    })
.catch((err) => {
        console.log("Error");
    });
    