import React, { useState } from 'react'
import api from '../utils/api'
import Card from '../components/Card'
import { InputText, FullSectionImage, Alert } from '../elements'



const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
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
        console.log('form', user)
        let result = await api.post('/users', { ...user })
        console.log("result", result)
    };

    return (
        <FullSectionImage src="https://images.pexels.com/photos/442420/books-shelves-architecture-wood-442420.jpeg?cs=srgb&dl=pexels-skitterphoto-442420.jpg&fm=jpg">
            <form onSubmit={e => handleSubmit(e)}>
                <Card title="Register" button="send" link="Already have an account ?" url="./login">
                    <Alert type="alert" title="Error">We already know this email.</Alert>
                    <InputText type="text" name="firstName" onChange={e => handleChange(e)} placeholder="Name" required />
                    <InputText type="text" name="lastName" onChange={e => handleChange(e)} placeholder="Lastname" required />
                    <InputText type="email" name="email" onChange={e => handleChange(e)} placeholder="Email" required />
                    <InputText type="password" name="password" onChange={e => handleChange(e)} placeholder="Password" required />
                </Card>
            </form>
        </FullSectionImage>
    )
}

export default Register
