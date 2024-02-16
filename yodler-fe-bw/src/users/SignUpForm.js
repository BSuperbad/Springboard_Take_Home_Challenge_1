import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
};
  const [formData, setFormData] = useState(INITIAL_STATE);

/** Update form data field */
  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData(data=> ({
        ...data,
        [name] : value
    }))
}
 /** Handle form submit:
   *
   * Calls signup func prop and, if successful, redirect to /spaces.
   */


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { email, firstName, lastName} = formData;
    try {
        await signup({
            email,
            firstName,
            lastName
        });
        navigate("/");
        setFormData(INITIAL_STATE);
    }catch(error){
        console.error("Registration failed", error)
    }

  };

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
  );



  return (
    <div>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">First Name </label>
    <input 
    id="firstName" 
    type="text" 
    name="firstName"
    value={formData.firstName} 
    onChange={handleChange}
    />
    <br/>

    <label htmlFor="password">Last Name </label>
    <input 
    type="lastName" 
    name="lastName"
    id="lastName" value={formData.lastName} 
    onChange={handleChange}
    />
<br/>
    <label htmlFor="email">Email </label>
    <input 
    type="email" 
    name="email"
    id="email" value={formData.email} 
    onChange={handleChange}
    />
    <br/>
    <button className="btn btn-light">Submit</button>
</form>
</div>
  );
}

export default SignupForm;