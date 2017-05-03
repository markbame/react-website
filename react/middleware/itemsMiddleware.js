import { applyMiddleware } from 'redux'
import axios from 'axios'
import { setAuthorization } from '../utils/authorization'

exports.itemsmiddleware = (store)=>(next)=>(action)=>{
  try {
      if(action.type == "GET_ITEMS_USER") {
          if(localStorage.jwtToken) {
            setAuthorization(localStorage.jwtToken)
          }
          const request = axios.get(process.env.REACT_API+'/getitems').then(({data}) => {
              store.dispatch({type:'FETCHED_ITEMS', data})
          }).catch(function (error) {
            console.log("error", error);
          });
      }

      if(action.type == "GET_ITEM") {
          const request = axios.get(process.env.REACT_API+'/getitem/1').then(({data}) => {
              store.dispatch({type:'FETCHED_ITEM', data})
          }).catch(function (error) {
            console.log("error", error);
          });
      }

      next(action)
    } catch(e){
        console.log('error:', e)
    }
}
