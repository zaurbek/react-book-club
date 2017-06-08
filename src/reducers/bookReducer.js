export default (state = {}, action) => {
    switch (action.type) {
        case 'BOOKS_DATA':
            return {
                items: [...state.items,action.payload]
            }
        case 'BOOKS_FETCH':
            return {
                items: action.payload
            }
        case 'TRY_DELETE':

            return {
                items: state.items.filter(item=>{
                    return item._id!==action.payload
                        })
            }



        default:
            return state;
    }
};