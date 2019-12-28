import fetch from 'cross-fetch'
export const GetListEnd = (datas) => {      //改变数据为加载数据开始的状态，如是否正在加载的加载动画等
    return {
        type: 'GOOD_LIST_END',
        goodList:datas
    }
}
export const GetListStart = () => {        //改变数据为加载完成的状态
    return {
        type: 'GOOD_LIST_START',
    }
}

export function getList(){
    return function(dispatch){
        dispatch(GetListStart());
        return fetch("/api/goods.json").then((json)=>{
          return json.json();
        },(err)=>{
            console.log(err)
        }).then(data=>{
            dispatch(GetListEnd(data ||[]))
        }) .catch(err => {
            console.error(err);
        });
    }
}