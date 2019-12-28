import fetch from "cross-fetch";

export const getCommonNet = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-CSSITEM',
        data:data
    }
}
export function getCssItemSync(callback){
    return function(dispatch){
        return fetch("/api/filedown").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getCommonNet(data || []))
            callback(data || [])
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addCssItemSync(params,callback){
    return function(dispatch){
        var opts = {
            method:"PUT",   //请求方法
            body:JSON.stringify(params),   //请求体
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/upload",opts).then(()=>{
            dispatch(getCssItemSync(callback))
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deleteCssItemSync(id,callback){
    return function(dispatch){
        var opts = {
            method:"DELETE"   //请求方法
        }
        return fetch("/api/deleteCssItem?id="+id,opts).then(()=>{
            dispatch(getCssItemSync(callback))
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}