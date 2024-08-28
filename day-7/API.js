// console.log("good morning");
// fetch("https://jsonplaceholder.typicode.com/user").then
// .then((res)=> (res.json()))
// .then ((data)=>console.log(data));
// const data={
//     title:"this  is title",
//     body:"this is post body",
//     userID:2
// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
// method:"POST",
// body : JSON.stringify(data),
// headers:{
//     "content-type":"application/json"
// }
// }).then((res)=> res.json())
// .then((data) => console.log(data));


//creating my first blogging system
document.addEventListener("DOMContentLoaded",()=>{
const blogcontainer=document.querySelector(".blog");
fetch("https:///notpadd.vercel.app/api/public",
 {
    headers:{
    USER_KEY:"dXNlcl8ybEZBRTVjMzVlQ01nb2h3eFVWQlljdWZlNzQ ",
    USER_SECRET:"YzRkN2ZmNzYtMjUyZi00Mjk2LTgzYjAtZTVlOGIzZjBjMzA5 ",
    public_only:true
}}
).then((res) => res.json())
.then(data=>{
    const blogElement=document.createElement("div")
    data.forEach(item => {
        blogElement.classList.add("item");
        blogElement.innerHTML=`<img src="${item.displayImage}"/> <h3>${item.title}<h3/> <p>${item.description}<p/>`
        
    });
    blogcontainer.appendChild(blogElement)
})
.catch(error=>{
    blogcontainer.innerHTML=`<p>something went wrong${error}</p>`
})
})
