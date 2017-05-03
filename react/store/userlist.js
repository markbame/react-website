export default function(state=[], action) {
    switch(action.type) {
        case "FETCHED_USERS": {
            return action.data
            BREAK;
         }
     }
    return state
}
