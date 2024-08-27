console.log("good morning");
fetch("https://jsonplaceholder.typicode.com/user").then
(function(res){
    console.log(res.json());
});