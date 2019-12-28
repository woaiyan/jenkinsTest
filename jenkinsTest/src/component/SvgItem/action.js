import fetch from "cross-fetch";

export const getSvg = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-SVG',
        data:data
    }
}
export function getSvgSync(){
    return function(dispatch){
        return fetch("/api/svg").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getSvg(data || []))
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deleteSvg(params){
    return function(dispatch){
        var opts = {
            method:"DELETE",   //请求方法
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/svg?id="+params,opts).then(()=>{
            dispatch(getSvgSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addSvg(formData){
    return function(dispatch){
        var opts = {
            method: 'PUT',
            body: formData
        }
        return fetch("/api/svg",opts).then(()=>{
            dispatch(getSvgSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}