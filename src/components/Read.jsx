import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react'
import { APICall } from '../api'

export default function Read () {

    const [ APIData, setAPIData ] = useState([]) // conterrà i dati dell'api 

    // quando l'app si carica, carica anche i dati
    useEffect(() => {

        APICall.get() // richiesta GET
            .then((response) => {
                setAPIData(response.data)
                console.log('Dati caricati correttamente')
            })

    }, [])
    // console.log(APIData) // contiene i dati dell'API

    const setData = (data) => {
        
        let { id, firstName, lastName, checkbox, phone } = data // destrutturiamo l'oggetto

        // conserviamo i dati nel local storage, li salviamo nella memoria del browser
        localStorage.setItem('ID', id)
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('Last Name', lastName)
        localStorage.setItem('Checkbox Value', checkbox)
        localStorage.setItem('Phone Number', phone)
        
    }

    const onDelete = (id) => {
        APICall.delete(id)
            .then(() => {
                getData() // dopo aver eliminato i dati, ricarica i dati
            })

        localStorage.clear() // elimina i dati ancora salvati in local storage
    }

    const getData = () => {
        APICall.get()
            .then((getData) => {
                setAPIData(getData.data) 
            })
    }

    // se l'API contiene dati, renderizzali; altrimenti, mostra il pulsante crea
    if (APIData.length > 0 ) {

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Privacy</Table.HeaderCell>
                        <Table.HeaderCell colSpan='2'>Actions</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Link to="/create">
                                <Button className='blue-text'>
                                    Create <Icon className='plus-icon' name='plus' />
                                </Button>
                            </Link></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
    
                <Table.Body>
                    {APIData.map((data) => {
    
                        return (
    
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.phone}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <Link to="/update">
                                        <Button className='blue-text' onClick={() => { setData(data) }}>
                                            Update <Icon className='plus-icon' name='pencil' />
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='blue-text' onClick={() => { onDelete(data.id) }}>
                                        Delete <Icon className='plus-icon' name='trash alternate' />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        )

    } else {

        return (

            <div>
                No records in database. <Link to="/create"><Button className='blue-text'>Create Records</Button></Link>
            </div>
        
        )
    }
}