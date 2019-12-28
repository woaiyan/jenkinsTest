export const toggleStatus = (name) => {      //改变数据为加载数据开始的状态，如是否正在加载的加载动画等
    return {
        type: 'MENU-STATUS-CHANGE',
        id:name
    }
}