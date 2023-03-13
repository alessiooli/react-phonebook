import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'


export default function Update () {

    const [ id, setID ] = useState(null)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ checkbox, setCheckbox ] = useState(false)
    const [ phone, setPhone ] = useState('')

    let navigate = useNavigate()

    useEffect(() => {

        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setCheckbox(localStorage.getItem('Checkbox Value'))
        setPhone(localStorage.getItem('Phone Number'))

    }, [])

    const updateAPIData = () => {

      axios.put(`https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
        phone
      })
        .then(() => {
          navigate('/read') // dopo aver caricato i dati, redireziona alla pagina read
        })

    }
    
    return (
    
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={ firstName } onChange={ (event) => setFirstName(event.target.value) }/> { /* l'oggetto event che passiamo alla funzione contiene tutte le informazioni riguardo l'evento di input, event.target restituisce l'elemento che ha triggerato l'evento, event.target.value restituisce il valore di quell'elemento */ }
        </Form.Field>
    
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={ lastName } onChange={ (event) => setLastName(event.target.value) } />
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input type={'tel'} placeholder='Phone Number' value={ phone } onChange={ (event) => setPhone(event.target.value) } />
        </Form.Field>
    
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={ checkbox } onChange={ (event) => setCheckbox(!checkbox) }/>
        </Form.Field>
    
        <Button type='submit' onClick={ updateAPIData }>Update</Button>
    
      </Form>
    
      )
    
    }
