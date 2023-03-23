import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { APICall } from "../api";

export default function Update() {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setMail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone Number"));
    setAddress(localStorage.getItem("Address"));
  }, []);

  const updateAPIData = () => {
    APICall.put(id, {
      firstName,
      lastName,
      mail,
      phone,
      address,
    }).then(() => {
      navigate("/read"); // after loading data redirect to read page
    });
  };

  return (
    <>
      <div className="flex-menu-container">
        <div className="read-button-container">
          <Link to="/read">
            <Button className="blue-text">
              Read <Icon className="eye-icon" name="eye" />
            </Button>
          </Link>
        </div>

        <div className="homepage-button-container">
          <Link to="/">
            <Button className="blue-text">
              Home <Icon className="arrow-icon" name="arrow left" />
            </Button>
          </Link>
        </div>
      </div>

      <Form className="create-form">
        <Form.Field required>
          <label>First Name</label>
          <input
            placeholder="First Name"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />{" "}
          {/* l'oggetto event che passiamo alla funzione contiene tutte le informazioni riguardo l'evento di input, event.target restituisce l'elemento che ha triggerato l'evento, event.target.value restituisce il valore di quell'elemento */}
        </Form.Field>

        <Form.Field required>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Field>

        <Form.Field required>
          <label>Phone Number</label>
          <input
            type={"tel"}
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <input
            type={"email"}
            placeholder="Email"
            required
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={updateAPIData} className="blue-text">
          Update
          <Icon className="plus-icon" name="pencil" />
        </Button>
      </Form>
    </>
  );
}
