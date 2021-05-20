import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../utils/api'
import Card from '../components/Card'
import { InputText, FullSectionImage, Alert } from '../elements'
import landingImage from 'url:../../assets/landing.jpg'



const Register = () => {
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    })
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
        try {
            let result = await api.post('/users', { ...user })
            setStatus({ ...status, error: null }) // INFO reset message d'erreur
            if (result.data.success) {
                setStatus({ ...status, success: true })
            } else {
                setStatus({ ...status, error: result.data.error })
            }
            console.log('register result', result)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <FullSectionImage src={landingImage}>
            <form onSubmit={e => handleSubmit(e)}>
                <Card title="Register" button="send" link="Already have an account ?" url="./login">
                    {status.error && <Alert type="alert" title="Error">{status.error}</Alert>}
                    <InputText type="text" name="firstName" onChange={e => handleChange(e)} placeholder="Name" required />
                    <InputText type="text" name="lastName" onChange={e => handleChange(e)} placeholder="Lastname" required />
                    <InputText type="email" name="email" onChange={e => handleChange(e)} placeholder="Email" required />
                    <InputText type="password" name="password" onChange={e => handleChange(e)} placeholder="Password" required />
                </Card>
            </form>
            {status.success && <Redirect to="/login" />}
        </FullSectionImage>
    )
}

export default Register
