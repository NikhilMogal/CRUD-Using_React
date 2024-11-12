import React, { useState,useEffect } from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Update = () => {

    const navigate=useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [ID,setId]=useState()
    console.log(firstName)
    console.log(lastName)
  

    const sendData = () => {
        axios.put(`https://65b35435770d43aba47987fb.mockapi.io/Crud/${ID}`, {

            firstName,
            lastName

        }).then(()=>{

            navigate('/read')
        })
    }

    useEffect(() => {

        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'))
        setId(localStorage.getItem('ID'))
}, []);

    return (
        <div>
            <Form>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name'
                    value={lastName}
                     onChange={(e) => setLastName(e.target.value)} />
                </FormField>
                <Button type='submit' onClick={sendData}>Update</Button>
            </Form>
        </div>
    )
}

export default Update

