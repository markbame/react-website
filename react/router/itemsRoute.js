import React from 'react'
import { Router, Route, BrowserRouter ,Link } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Home from '../components/home/home'
import Pages from '../components/pages/pages'
import SignUp from '../components/signup/signup'
import { ItemMap } from '../connect/items'
import { SignupMap, LoginMap, AccountMap, NewItemMap, HomeMap } from '../connect/users'

class itemsRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route exact path="/"  component={HomeMap} />
                    <Route exact path="/pages/:id" component={Pages} />
                    <Route exact path="/user/login" component={LoginMap} />
                    <Route exact path="/user/signup" component={SignupMap} />
                    <Route exact path="/item/:id" component={ItemMap} />
                    <Route exact path="/:username/newitem" component={NewItemMap} />
                    <Route exact path="/:username" component={AccountMap} />
                </Layout>
            </BrowserRouter>
        )
    }
}
export default itemsRoute;
