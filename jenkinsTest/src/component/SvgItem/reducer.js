const SvgList = (state = {list:[]}, action) => {
    switch (action.type) {
        case 'GET-SVG':
            return {list:action.data}
        default:
            return state
    }
}
export default SvgList