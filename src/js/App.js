import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { APP_INIT, APP_READY, APP_RESET, USER_IS_ADMIN } from './store/actions'

import Layout from './layout/Layout'
// ROUTER COMPONENTS
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'


const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {

        dispatch({ type: APP_INIT })

        setTimeout(() => {
            dispatch({ type: APP_READY })
        }, 2000)
        setTimeout(() => {
            dispatch({ type: USER_IS_ADMIN })
        }, 3000)
    }, [])

    console.log('APP global state : ', appState)

    return (
        <Router>
            <Switch>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Layout>
                    <Route path="/" exact component={Home} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default App