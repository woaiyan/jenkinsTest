export function getCookie(key){
    let result = "";
    let cookies = document.cookie.split(";");
    for(let i=0;i<cookies.length;i++){
        let name = cookies[i].split("=")[0];
        if(key === name){
            result = cookies[i].split("=")[1];
            break;
        }
    }
    return result;

}
export function setCookie(key,value,expires){

    if (expires){
        var date = new Date();
        date.setTime(date.getTime()+expires*1000);
        var expiresStr = "expires=" + date.toDateString() + ';' ;
    } else {
        var expiresStr = '';
    }
    document.cookie = key+'='+ value +';' + expiresStr;
}