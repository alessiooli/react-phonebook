import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

  // const [formData, setFormData] = useState({});

  // const updateData = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formData);
  // };

  // from React Hook form | needed to validate the form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // set defaultValues otherwise the form asks you to refil all the fields even if they are already filled
      firstName: { firstName },
      lastName: { lastName },
      phone: { phone },
      email: { mail },
      address: { address },
    },
  });

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
            placeholder={"First Name"}
            required
            value={firstName}
            {...register("firstName", {
              onChange: (event) => setFirstName(event.target.value),
              required: "Required",
              pattern: {
                value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                message: "invalid First Name",
              },
            })}
          />
          <div className="error-message">
            {errors.firstName && errors.firstName.message}
          </div>
          {/* the event object we pass to the function contains all the information about the input event, event.target returns the element that triggered the event, event.target.value returns the value of that element */}
        </Form.Field>

        <Form.Field required>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            required
            value={lastName}
            {...register("lastName", {
              onChange: (event) => setLastName(event.target.value),
              required: "Required",
              pattern: {
                value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                message: "invalid Last Name",
              },
            })}
          />
          <div className="error-message">
            {errors.lastName && errors.lastName.message}
          </div>
        </Form.Field>

        <Form.Field required>
          <label>Phone Number</label>
          <input
            type={"tel"}
            placeholder="Phone Number"
            required
            value={phone}
            {...register("phone", {
              onChange: (event) => setPhone(event.target.value),
              required: "Required",
              pattern: {
                value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "invalid phone number",
              },
            })}
          />
          <div className="error-message">
            {errors.phone && errors.phone.message}
          </div>
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <input
            type={"email"}
            placeholder="Email"
            required
            value={mail}
            {...register("email", {
              onChange: (event) => setMail(event.target.value),
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <div className="error-message">
            {errors.email && errors.email.message}
          </div>
        </Form.Field>

        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Field>

        <Button
          type="submit"
          onClick={handleSubmit(updateAPIData)}
          className="blue-text"
        >
          Update
          <Icon className="plus-icon" name="pencil" />
        </Button>
      </Form>
    </>
  );
}
