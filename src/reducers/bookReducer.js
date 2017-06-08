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
        case 'TRADE_BOOK':
            return {
                items: state.items.map(item=>{
                    if (item._id==action.payload.book) {
                        return {
                            ...item,
                            requested: {
                                by: action.payload.user,
                                value: true
                            }
                        }
                    }
                    return item;
                })
            }
        case 'TRY_DENY':
            return {
                items: state.items.map(item=>{
                    if (item._id==action.payload) {
                        return {
                            ...item,
                            requested: {
                                by: '',
                                value: false
                            }
                        }
                    }
                    return item;
                })
            }
        case 'TRY_CONFIRM':
            return {
                items: state.items.map(item=>{
                    if (item._id==action.payload) {
                        return {
                            ...item,
                            owner: item.requested.by,
                            requested: {
                                by: '',
                                value: false
                            }
                        }
                    }
                    return item;
                })
            }

        default:
            return state;
    }
};