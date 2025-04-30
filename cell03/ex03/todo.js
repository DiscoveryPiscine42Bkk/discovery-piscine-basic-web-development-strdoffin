function popUpInput(){
    console.log('test')
    let todo = prompt('Enter your todo')
    if(todo != null || todo != " "){
        let len = getCookieLen()
        if(len == 1){
            setCookie(len-1,todo,2)
        }else{
            
        }
        // setCookie(len,todo,2)
    }
}
function setCookie(name,value,exday){
    const date = new Date();
    date.setTime(date.getTime() + (exday*(24*60*60*1000)))
    let expire = "expires="+date.toUTCString();
    document.cookie= name+"="+value+";"+expire+";path=/";
}

function getCookieLen(){
    // let index = name+"="
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    console.log(decodedCookie.length)
    return decodedCookie.length
}

function getCookie(){
    // let index = name+"="
    let decodedCookie = decodeURIComponent(document.cookie)
    decodedCookie = decodedCookie.split('; ')
    console.log(decodedCookie)
}


// document.cookie = "undefined=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
getCookie()

