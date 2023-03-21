import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react'
import { APICall } from '../api'

export default function Read () {

    const [ APIData, setAPIData ] = useState([]) // conterrà i dati dell'api 
    const [ isLoading, setIsLoading ] = useState(false)

    // load apidata on first rendering
    useEffect(() => {

        APICall.get() // richiesta GET
            .then((response) => {
                setAPIData(response.data)
                console.log('Dati caricati correttamente')
            })

    }, [])
    

    const setData = (data) => {
        
        let { id, firstName, lastName, mail, phone, address } = data // destructure object

        // save data in local storage
        localStorage.setItem('ID', id)
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('Last Name', lastName)
        localStorage.setItem('Email', mail)
        localStorage.setItem('Phone Number', phone)
        localStorage.setItem('Address', address)
        
    }

    const onDelete = (id) => {
        APICall.delete(id)
            .then(() => {
                getData() // after deleting data, reload data
            })

        localStorage.clear() // delete data in local storage
    }

    const getData = () => {
        APICall.get()
            .then((getData) => {
                setAPIData(getData.data) 
            })
    }
    
    // if API contains data, render it; otherwise show create button
    if (APIData.length > 0 ) {

        return (
            <>
                <div className="flex-menu-container">
                    <div className='read-button-container'>
                    </div>

                    <div className='homepage-button-container'>
                        <Link to="/">
                            <Button className='blue-text'>
                                Home <Icon className='arrow-icon' name='arrow left' />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className='table-container'>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>Phone</Table.HeaderCell>
                                <Table.HeaderCell>Mail</Table.HeaderCell>
                                <Table.HeaderCell>Address</Table.HeaderCell>
                                <Table.HeaderCell colSpan='2'>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
            
                        <Table.Body>
                            {APIData.map((data) => {
            
                                return (
            
                                    <Table.Row>
                                        <Table.Cell>{data.firstName}</Table.Cell>
                                        <Table.Cell>{data.lastName}</Table.Cell>
                                        <Table.Cell>{data.phone}</Table.Cell>
                                        <Table.Cell>{data.mail}</Table.Cell>
                                        <Table.Cell>{data.address}</Table.Cell>
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
                        <div className='create-button-container'>
                            <Link to="/create">
                                <Button className='blue-text'>
                                    Create <Icon className='plus-icon' name='plus' />
                                </Button>
                            </Link>
                        </div>
                </div>
            </>
        )

    } else {

        return (

            <div>
                No records in database. <Link to="/create"><Button className='blue-text'>Create Records</Button></Link>
            </div>
        
        )
    }
}