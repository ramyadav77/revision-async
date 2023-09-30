// callback
function greet(name, callback){
    console.log(`hello,${name}`);
    callback();
}
function byebye(){
    console.log('see you soon ');
}
greet('ram',byebye);
// promises
const promise =new Promise((resolve,reject)=>{
    const isSuccessful=true;
    if(isSuccessful){
        resolve('operation was successful');
    }else{
        reject('operation failed');
    }
});
promise
.then((result)=>{
    console.log("success:" ,result);
})
.catch((error)=>{
    console.error("Erroe:",error);
});
// promises
const fetchDataFromAPI=new Promise((resolve,reject)=>{
    const isSuccessful=false;
    if(isSuccessful){
        const data={id:1,name:"john"};
        resolve(data);
    }else{
        const error="api request failed";
        reject(error);
    }
});
fetchDataFromAPI
.then((result)=>{
    console.log("data fetched sucessfully:",result)
})
.catch((error)=>{
    console.error("error:",error)
});
// Async Await
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data fetched successfully");
        },2000);
    })
}
async function fetchDataWithAsyncAwait(){
    try{
        console.log('fetching data...');
        const result=await fetchData();
        console.log(result);
    }catch(error){
        console.log('Error:',error)
    }
}
fetchDataWithAsyncAwait();

