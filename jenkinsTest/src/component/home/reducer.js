const Home = (state = {
    menuShow:true
}, action) => {
    switch (action.type) {
        case 'HOME_STATUE_TOGGLE':
            return  Object.assign({},state,{menuShow:!state.menuShow});
        default:
            return state
    }
}
export default Home