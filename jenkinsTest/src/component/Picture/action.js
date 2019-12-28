import fetch from "cross-fetch";

export const getPicture = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-PICTURE',
        data:data
    }
}
export const changeCurrten = (index) => {        //改变数据为加载完成的状态
    return {
        type: 'CHANGE-CURRENT',
        index:index
    }
}
export function getPictureSync(){
    return function(dispatch){
        return fetch("/api/picture").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getPicture(data || []))
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deletePicture(params){
    return function(dispatch){
        var opts = {
            method:"DELETE",   //请求方法
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/picture?name="+params,opts).then(()=>{
            dispatch(getPictureSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addPicture(formData){
    return function(dispatch){
        var opts = {
            method: 'PUT',
            body: formData
        }
        return fetch("/api/picture",opts).then(()=>{
            dispatch(getPictureSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}