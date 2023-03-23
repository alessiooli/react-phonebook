import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { APICall } from "../api";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    APICall.post(APICall.baseURL /* 1° arg: API endpoint MANDATORY */, {
      /* 2° arg: object containing form fields */ firstName,
      lastName,
      mail,
      phone,
      address,
    }).then(() => {
      navigate("/read"); // after data has been inserted redirect to navigate page
    });

    console.log("Dati inseriti.");
  };

  return (
    <>
      <div className='flex-menu-container'>
        <div className='read-button-container'>
          <Link to='/read'>
            <Button className='blue-text'>
              Read <Icon className='eye-icon' name='eye' />
            </Button>
          </Link>
        </div>

        <div className='homepage-button-container'>
          <Link to='/'>
            <Button className='blue-text'>
              Home <Icon className='arrow-icon' name='arrow left' />
            </Button>
          </Link>
        </div>
      </div>

      <Form className='create-form'>
        <Form.Field required>
          <label>First Name</label>
          <input
            placeholder='First Name'
            required
            onChange={(event) => setFirstName(event.target.value)}
          />{" "}
          {/* l'oggetto event che passiamo alla funzione contiene tutte le informazioni riguardo l'evento di input, event.target restituisce l'elemento che ha triggerato l'evento, event.target.value restituisce il valore di quell'elemento */}
        </Form.Field>

        <Form.Field required>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Field>

        <Form.Field required>
          <label>Phone Number</label>
          <input
            type={"tel"}
            placeholder='Phone Number'
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <input
            type={"email"}
            placeholder='Email'
            required
            onChange={(event) => setMail(event.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Address</label>
          <input
            placeholder='Address'
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Field>

        <Button type='submit' className='blue-text' onClick={postData}>
          Submit
        </Button>
      </Form>
    </>
  );
}
