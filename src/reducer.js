export default(state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            if (state < 2) {
                return state + 1
            } else {
                return state
            }
        case 'DECREASE':
            if (state > 0) {
                return state - 1
            }
        default:
            return state
    }
}
