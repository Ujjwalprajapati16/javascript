const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls , cryptographic, network, etc

    setTimeout(function () {
        console.log('Promise One is running...');
        resolve('Promise One completed!');
    }, 1000);
});

promiseOne.then(function() {
    console.log('Promise One Consumed!');
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Promise Two is running...');
        resolve('Promise Two completed!');
    }, 1000);
}).then(function () {
    console.log('Promise Two Consumed!');
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Promise Three is running...');
        resolve({username : "Pikachu", password : "12345"});
        // reject('Promise Three failed!');
    }, 1000);
});

promiseThree.then(function(result) {
    console.log('Promise Three Consumed! Result:', result);
}).catch(function(error) {
    console.log('Promise Three Failed! Error:', error);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error){
            reject("Error " + error);
        } else {
            resolve({username : "Pikachu", password : "12345"});
        }
    }, 1000);
});

promiseFour.then(function(result){
    console.log('Promise Four Consumed! Result:', result);
    return result.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log('Promise Four Failed! Error:', error);
});

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(error){
            reject("JS went wrong!!");
        } else {
            resolve({username : "Javascript", password : "js"});
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log('Promise Five Consumed! Result:', response);
    } catch(error){
        console.log('Promise Five Failed! Error:', error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if (!response.ok) {
        throw new Error('HTTP error!');
    }
    return response.json();
})
.then((data) => {
    console.log(data);
});