function popUpInput() {
    let todo = prompt('Enter your todo')
    let list = getCookie()
    if (todo != null || todo != " ") {
        if (list[0] == "") {
            setCookie(0, todo, 2)
        } else {
            let data = list.at(-1)
            data = data.split('=')
            data = parseInt(data[0]) + 1
            setCookie(data, todo, 2)
        }
        location.reload()
    }
}
function setCookie(name, value, exday) {
    const date = new Date();
    date.setTime(date.getTime() + (exday * (24 * 60 * 60 * 1000)))
    let expire = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expire + ";path=/";
}

function getCookieLen() {
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    return decodedCookie.length
}

function getCookie() {
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    console.log(decodedCookie)
    return decodedCookie
}

function loadList() {
    let data = getCookie()
    for (let i = 0; i < getCookieLen(); i++) {
        if (data[i] != '') {
            $("#ft_list").append(`<div class="todo" id="${data[i].split('=')[0]}">${data[i].split('=')[1]}</div>`)
        }
    }
}

getCookie()
loadList()
function removeCookie(x) {
    if (confirm('Are you sure to Delete')) {
        document.cookie = `${x}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        location.reload()
    }
}

let todos = document.getElementsByClassName("todo")
for(let i=0;i<todos.length;i++){
    todos[i].addEventListener('click',()=>{
        removeCookie(todos[i].id.split("=")[0])
    })
}