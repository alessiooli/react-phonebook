import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function Create () {

const [ firstName, setFirstName ] = useState('')
const [ lastName, setLastName ] = useState('')
const [ checkbox, setCheckbox ] = useState(false)
const [ phone, setPhone ] = useState('')

let navigate = useNavigate()

const postData = () => {
    
    axios.post(
        `https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData`, /* 1° arg: endpoint dell'api */
        { /* 2° arg: un oggetto che contiene i campi del form */
            firstName,
            lastName,
            checkbox,
            phone
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
      <Checkbox label='I agree to the Terms and Conditions' onChange={ (event) => setCheckbox(!checkbox) }/>
    </Form.Field>

    <Button type='submit' className='blue-text' onClick={ postData }>Submit</Button>

  </Form>

  )

}