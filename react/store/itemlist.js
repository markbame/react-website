export default function(state=[], action) {
    switch(action.type) {
        case "FETCHED_ITEMS": {
            return action.data
            BREAK;
         }
     }
    return state
}
