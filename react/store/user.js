export default function user(state=[], action) {

    switch(action.type) {
        case "FETCHED_USER": {
            return action.data
            BREAK;
         }
        case "USER_SAVED": {
            return action.data
            BREAK;
         }
        case "USER_AUTH": {
            return action.data
            BREAK;
         }
        case "USER_SAVE_FAILED": {
              return action.data
              BREAK;
           }
        case "DELETE_USER": {
            throw new Error('error catch it middleware')
            BREAK;
         }
     }
    return state
}
