import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { APICall } from '../api'

export default function Create () {

const [ firstName, setFirstName ] = useState('')
const [ lastName, setLastName ] = useState('')
const [ mail, setMail ] = useState('')
const [ phone, setPhone ] = useState('')
const [ address, setAddress ] = useState('')

let navigate = useNavigate()

const postData = () => {
    
    APICall.post(APICall.baseURL, /* 1° arg: endpoint dell'api OBBLIGATORIO */
        { /* 2° arg: un oggetto che contiene i campi del form */
            firstName,
            lastName,
            mail,
            phone,
            address
        })
          .then(() => {
          navigate('/read') // dopo che i dati sono stati inseriti, redireziona alla pagina navigate
        })

        console.log('Dati inseriti.')

}

return (

  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={ (event) => setFirstName(event.target.value) }/> { /* l'oggetto event che passiamo alla funzione contiene tutte le informazioni riguardo l'evento di input, event.target restituisce l'elemento che ha triggerato l'evento, event.target.value restituisce il valore di quell'elemento */ }
    </Form.Field>

    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={ (event) => setLastName(event.target.value) } />
    </Form.Field>

    <Form.Field>
      <label>Phone Number</label>
      <input type={'tel'} placeholder='Phone Number' onChange={ (event) => setPhone(event.target.value) } />
    </Form.Field>

    <Form.Field>
      <label>Email</label>
      <input type={'email'} placeholder='Email' onChange={ (event) => setMail(event.target.value) } />
    </Form.Field>

    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' onChange={ (event) => setAddress(event.target.value) } />
    </Form.Field>

    <Button type='submit' className='blue-text' onClick={ postData }>Submit</Button>

  </Form>

  )

}