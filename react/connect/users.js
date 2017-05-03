import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/users'
import { connect } from 'react-redux'
import Signup from '../components/signup/signup'
import Account from '../components/account/account'
import Login from '../components/login/login'
import Head from '../components/layout/views/head'
import Items from '../components/utils/item'
import Uploaded from '../components/utils/uploaded'
import Dropzone from '../components/utils/dropzone'
import NewItem from '../components/items/newitem'
import Home from '../components/home/home'

function mapStateToProps(state) {
  return {
    userlist: state.userlist,
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export const SignupMap  = connect(mapStateToProps, mapDispatchToProps)(Signup)
export const LoginMap   = connect(mapStateToProps, mapDispatchToProps)(Login)
export const HeadMap    = connect(mapStateToProps, mapDispatchToProps)(Head)
export const AccountMap = connect(mapStateToProps, mapDispatchToProps)(Account)
export const NewItemMap = connect(mapStateToProps, mapDispatchToProps)(NewItem)
export const HomeMap    = connect(mapStateToProps, mapDispatchToProps)(Home)
export const UploadedMap= connect(mapStateToProps, mapDispatchToProps)(Uploaded)
export const DropzoneMap= connect(mapStateToProps, mapDispatchToProps)(Dropzone)
