import React, { useState } from 'react'
import api from '../utils/api'
import Card from '../components/Card'
import { InputText, FullSectionImage, Alert } from '../elements'



const Login = () => {
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
        let result = await api.post('/user/authenticate', { ...user })
        console.log('result', result)
    };

    return (
        <FullSectionImage src="https://images.pexels.com/photos/442420/books-shelves-architecture-wood-442420.jpeg?cs=srgb&dl=pexels-skitterphoto-442420.jpg&fm=jpg">
            <form onSubmit={e => handleSubmit(e)}>
                <Card title="Login" button="ENTER" link="Don't have an account ?" url="./register">
                    <Alert type="alert" title="Error">Mot de passe ou email incorrect</Alert>
                    <InputText type="email" name="email" onChange={e => handleChange(e)} placeholder="Email" required />
                    <InputText type="password" name="password" onChange={e => handleChange(e)} placeholder="Password" required />
                </Card>
            </form>
        </FullSectionImage>
    )
}

export default Login