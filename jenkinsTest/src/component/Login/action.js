import {setCookie} from "../../asset/util"
import fetch from "cross-fetch";
import {getCommonNetSync} from "../CommonNet/action";

export const getLoginStatus = (data) => {      //改变数据为加载数据开始的状态，如是否正在加载的加载动画等
    return {
        type: 'LOGIN-STATAUS',
        data:data
    }
}
export function login(params){
    return function(dispatch){
        var opts = {
            method:"POST",   //请求方法
            body:JSON.stringify(params),   //请求体
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/login",opts).then((data)=>{
            return data.text();
        },(err)=>{
            console.log(err)
        }).then((username)=>{
            dispatch(getLoginStatus(username || ""))
            setCookie("username",username,1800)
        }) .catch(err => {
            console.error(err);
        });
    }
}