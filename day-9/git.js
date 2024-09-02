document.addEventListener('DOMContentLoaded',()=>{
    const searchForm = document.getElementById("searchForm")
    const searchInput = document.getElementById("searchInput")
    const light=document.querySelector(".light")
    const input=document.querySelector(".input")
    const button=document.querySelector(".btn")
    const image=document.querySelector(".image")
    const name=document.querySelector(".name")
    const username=document.querySelector(".username")
    const bio=document.querySelector(".bio")
    const date=document.querySelector(".date")
    const repos=document.querySelector(".repos")
    const following=document.querySelector(".following")
    const followers=document.querySelector(".followers")
    const location=document.querySelector(".location")
    const URL=document.querySelector(".URL")
    const twitter=document.querySelector(".twitter")
    const hub = document.querySelector(".hub")
    
    const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
};

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputValue = searchInput.value
        
        fetch(`https://api.github.com/users/${inputValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            image.src = data.avatar_url

            name.textContent = data.name

            username.textContent = `@${data.login}`
            bio.textContent = data.bio

            repos.textContent = data.public_repos
             following.textContent=data.following
             followers.textContent=data.followers
            location.textContent = `${data.location}`
            URL.textContent = data.html_url
            twitter.textContent =` ${ data.twitter_username } `
            hub.textContent = `@${data.company}`
            date.textContent=formatDate(data.created_at)



            
        })

    })
})

