import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { APICall } from "../api";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // from React Hook form | needed to validate the form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // routes
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

    console.log("Data inserted.");
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
            type={"text"}
            {...register("firstName", {
              onChange: (event) => setFirstName(event.target.value),
              required: "Required",
              pattern: {
                value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                message: "invalid First Name",
              },
            })}
          />
          <div className='error-message'>
            {errors.firstName && errors.firstName.message}
          </div>
          {/* the event object we pass to the function contains all the information about the input event, event.target returns the element that triggered the event, event.target.value returns the value of that element */}
        </Form.Field>

        <Form.Field required>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            required
            type={"text"}
            {...register("lastName", {
              onChange: (event) => setLastName(event.target.value),
              required: "Required",
              pattern: {
                value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                message: "invalid Last Name",
              },
            })}
          />
          <div className='error-message'>
            {errors.lastName && errors.lastName.message}
          </div>
        </Form.Field>

        <Form.Field required>
          <label>Phone Number</label>
          <input
            type={"tel"}
            placeholder='Phone Number'
            required
            {...register("phone", {
              onChange: (event) => setPhone(event.target.value),
              required: "Required",
              pattern: {
                value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "invalid phone number",
              },
            })}
          />
          <div className='error-message'>
            {errors.phone && errors.phone.message}
          </div>
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <input
            type={"email"}
            placeholder='Email'
            required
            {...register("email", {
              onChange: (event) => setMail(event.target.value),
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <div className='error-message'>
            {errors.email && errors.email.message}
          </div>
        </Form.Field>

        <Form.Field>
          <label>Address</label>
          <input
            placeholder='Address'
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Field>

        <Button
          type='submit'
          className='blue-text'
          onClick={handleSubmit(postData)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
