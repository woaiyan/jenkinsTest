import fetch from "cross-fetch";

export const getAccounts = (data) => {        //改变数据为加载完成的状态
    return {
        type: 'GET-ACCOUNTS',
        data:data
    }
}
export function getAccountsSync(){
    return function(dispatch){
        return fetch("/api/accounts").then((json)=>{
            return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(getAccounts(data || []))
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function addAccountSync(params){
    return function(dispatch){
        var opts = {
            method:"POST",   //请求方法
            body:JSON.stringify(params),   //请求体
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch("/api/accounts",opts).then(()=>{
            dispatch(getAccountsSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}
export function deleteAccount(id){
    return function(dispatch){
        var opts = {
            method:"DELETE"   //请求方法
        }
        return fetch("/api/accounts?id="+id,opts).then(()=>{
            dispatch(getAccountsSync())
        },(err)=>{
            console.log(err)
        }) .catch(err => {
            console.error(err);
        });
    }
}