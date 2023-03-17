import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Icon } from 'semantic-ui-react'
import { APICall } from '../api'


export default function Update () {

    const [ id, setID ] = useState(null)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ mail, setMail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress ] = useState('')

    let navigate = useNavigate()

    useEffect(() => {

        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setMail(localStorage.getItem('Email'))
        setPhone(localStorage.getItem('Phone Number'))
        setAddress(localStorage.getItem('Address'))

    }, [])

    const updateAPIData = () => {

      APICall.put(id, {
        firstName,
        lastName,
        mail,
        phone,
        address
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
          <label>Email</label>
          <input type={'email'} placeholder='Email' value={ mail } onChange={ (event) => setMail(event.target.value) } />
        </Form.Field>

        <Form.Field>
          <label>Address</label>
          <input placeholder='Address' value={ address } onChange={ (event) => setAddress(event.target.value) } />
        </Form.Field>
    
        <Button type='submit' onClick={ updateAPIData } className='blue-text'>Update<Icon className='plus-icon' name='pencil' /></Button>
    
      </Form>
    
      )
    
    }