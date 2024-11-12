import React, { useState } from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate=useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    console.log(firstName)
    console.log(lastName)

    const sendData = () => {
        axios.post(`https://65b35435770d43aba47987fb.mockapi.io/Crud`, {

            firstName,
            lastName

        }).then(()=>{
            navigate('/read')
        })


    }

    return (
        <div>
            <Form>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </FormField>
                <Button type='submit' onClick={sendData}>Submit</Button>
            </Form>
        </div>
    )
}

export default Create

