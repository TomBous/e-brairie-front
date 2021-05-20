import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import api from '../utils/api'
import Card from '../components/Card'
import { InputText, FullSectionImage, Alert } from '../elements'
import { USER_IS_AUTHENTICATED } from '../store/actions'
import landingImage from 'url:../../assets/landing.jpg'


const Login = () => {
    const dispatch = useDispatch();
    const authenticated = useSelector(state => state.user.isAuthenticated)
    const [error, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await api.post('/user/authenticate', { ...user })
            if (result.data.success) {
                const { firstName, lastName } = result.data.user
                dispatch({ type: USER_IS_AUTHENTICATED, payload: { firstName, lastName } })
            } else {
                setError(result.data.error)
            }
            console.log('login result', result)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <FullSectionImage src={landingImage}>
            <form onSubmit={e => handleSubmit(e)}>
                <Card title="Login" button="ENTER" link="Don't have an account ?" url="./register">
                    {error && <Alert type="alert" title="Error">{error}</Alert>}
                    <InputText type="email" name="email" onChange={e => handleChange(e)} placeholder="Email" required />
                    <InputText type="password" name="password" onChange={e => handleChange(e)} placeholder="Password" required />
                </Card>
            </form>
            {authenticated && <Redirect to="/" />}
        </FullSectionImage>
    )
}

export default Login