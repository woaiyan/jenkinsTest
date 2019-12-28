import fetch from "cross-fetch";
import {getPictureSync} from "../Picture/action";

export const getFileData = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-FILEDATA',
        data:data
    }
}
export const changeType = (type) => {        //改变数据为加载完成的状态
    return {
        type: 'CHANGE-TYPE',
        data:type
    }
}
export function getFileDataSync(){
    return function(dispatch){
        return fetch("/api/file").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getFileData(data || []))
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addFileDataSync(formData){
    return function(dispatch){
        var opts = {
            method: 'PUT',
            body: formData
        }
        return fetch("/api/file",opts).then(()=>{
            dispatch(getFileDataSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deleteFileDataSync(id){
    return function(dispatch){
        var opts = {
            method:"DELETE"   //请求方法
        }
        return fetch("/api/file?id="+id,opts).then(()=>{
            dispatch(getFileDataSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}