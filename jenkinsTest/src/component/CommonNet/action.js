import fetch from "cross-fetch";

export const getCommonNet = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-COMMONNT',
        data:data
    }
}
export function getCommonNetSync(){
    return function(dispatch){
        return fetch("/api/CommonNet").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getCommonNet(data || []))
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addCommonNetSync(params){
    return function(dispatch){
        var opts = {
            method:"PUT",   //请求方法
            body:JSON.stringify(params),   //请求体
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/CommonNet",opts).then(()=>{
            dispatch(getCommonNetSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deleteCommonNetSync(id){
    return function(dispatch){
        var opts = {
            method:"DELETE"   //请求方法
        }
        return fetch("/api/CommonNet?id="+id,opts).then(()=>{
            dispatch(getCommonNetSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}