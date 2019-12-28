const Menu = (state = {
    CommonNet:false,
    CssItem:false,
    Picture:false,
    SvgEdit:false,
    FileDtaEdit:false,
    Accounts:false,
    Login:false
}, action) => {
    switch (action.type) {
        case 'MENU-STATUS-CHANGE':
            return  Object.assign({},state,{[action.id]:!state[action.id]});
        default:
            return state
    }
}
export default Menu