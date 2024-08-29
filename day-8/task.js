
let array = []
const Task = {
    name: "taskname",
    date: "deadline",
    priority: "priority",
    status: "status",
}

console.log(Task);


const formData = document.querySelector("#form")
formData.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const taskname = document.querySelector(".task-name").value
    const taskpriority = document.querySelector(".task-priority").value
    const taskdeadline = document.querySelector(".task-deadline").value
    const tackstatus = document.querySelector(".task-status").value
    const task = { taskname, taskpriority, taskdeadline, tackstatus }
    array.push(task)
    const tacknameSet = new Set()
    tacknameSet.add(array)
    const activity = document.querySelector(".activities")
    const Activitylist = document.createElement("div")
    Activitylist.innerHTML = `<h2> task:${taskname}</h2> <p>deadline:${taskdeadline}</p> <p>priority:${taskpriority}</p>`
    activity.appendChild(Activitylist)
})
