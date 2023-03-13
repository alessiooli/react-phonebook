import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'

export default function Read () {

    const [ APIData, setAPIData ] = useState([]) // contiene i dati dell'api 

    // quando l'app si carica, carica anche i dati
    useEffect(() => {
        axios.get(`https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData`) // richiesta GET
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
        axios.delete(`https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData() // dopo aver eliminato i dati, ricarica i dati
            })

        localStorage.clear() // elimina i dati ancora salvati in local storage
    }

    const getData = () => {
        axios.get(`https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData`)
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
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Create</Table.HeaderCell>
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
                                        <Button className='blue-text' onClick={() => { setData(data) }}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='blue-text' onClick={() => { onDelete(data.id) }}>Delete</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to="/create">
                                        <Button className='blue-text'>Create one more</Button>
                                    </Link>
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