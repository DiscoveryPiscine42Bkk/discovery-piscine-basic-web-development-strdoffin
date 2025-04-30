function popUpInput(){
    console.log('test')
    let todo = prompt('Enter your todo')
    let list = getCookie()
    console.log(list)
    if(todo != null || todo != " "){
        if(list[0] == ""){
            setCookie(0,todo,2)
        }else{
            let data = list.at(-1)
            data = data.split('=')
            data = parseInt(data[0])+1
            setCookie(data,todo,2)
        }
        location.reload()
    }
}
function setCookie(name,value,exday){
    const date = new Date();
    date.setTime(date.getTime() + (exday*(24*60*60*1000)))
    let expire = "expires="+date.toUTCString();
    document.cookie= name+"="+value+";"+expire+";path=/";
}

function getCookieLen(){
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    return decodedCookie.length
}

function getCookie(){
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    console.log(decodedCookie)
    return decodedCookie
}

function loadList(){
    let data = getCookie()
    for(let i=0;i<getCookieLen();i++){
        if(data[i] != ''){
            const node = document.createElement("div");
            const textnode = document.createTextNode(`${data[i].split('=')[1]}`);
            node.appendChild(textnode);
            document.getElementById('ft_list').appendChild(node)
            let text = data[i].split('=')
            node.addEventListener('click',()    =>{
                removeCookie(text[0])
            })
        }
    }
}

getCookie()
loadList()
function removeCookie(x){
    if(confirm('Are you sure to Delete')){
        document.cookie = `${x}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        location.reload()
    }
}
