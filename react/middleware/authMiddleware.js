import { applyMiddleware } from 'redux'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { setAuthorization } from '../utils/authorization'

exports.authmiddleware = (store)=>(next)=>(action)=>{
    try {
        if(action.type == "LOGOUT_USER") {
          localStorage.removeItem('atoken')
          const data = {'login':0}
          store.dispatch({type:'USER_AUTH',data})
        }

        if(action.type == "CHECK_LOCAL_STORAGE") {
          const localtoken = localStorage.getItem('atoken')
          if(localtoken) { console.log(localtoken)
            var localuser = jwt.decode(localtoken)
            const data = {'status':202, 'userid':localuser.userid, 'username':localuser.username, 'login':1}
            store.dispatch({type:'USER_AUTH',data})
          } else {
            const data = {'login':0}
            store.dispatch({type:'USER_AUTH',data})
          }
        }

        if(action.type == "LOGIN_USER") {
            setAuthorization(true)
            const request = axios.post(process.env.REACT_API + '/auth', action).then(res => {
                const token = res.data.token;
                localStorage.setItem('atoken', token);
                var user = jwt.decode(token);
                const data = {'status':202, 'userid':user.userid, 'username':user.username, 'login':1}
                store.dispatch({type:'USER_AUTH',data})
            }).catch(function (error) {

            });
        }

        if(action.type == "ADD_USER") {
            const request = axios.post(process.env.REACT_API + '/signup', action).then(function (response) {
                if(response.status == 200) {
                }
                  const data = {'status':201}
                  store.dispatch({type:'USER_SAVED',data})
            }).catch(function (error) {
              const data = {'status':409}
               store.dispatch({type:'USER_SAVE_FAILED',data})
               console.log("auth", error);
            });
        }
        next(action)
    } catch(e){
        console.log('error:', e)
    }

}
