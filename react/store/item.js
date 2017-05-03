export default function item(state=[], action) {

    switch(action.type) {
        case "FETCHED_ITEM": {
            return action.data
            BREAK;
         }
        case "DELETE_ITEM": {
            throw new Error('error catch it middleware')
            BREAK;
         }
     }
    return state
}
