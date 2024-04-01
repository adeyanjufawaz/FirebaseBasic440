import React, { useEffect, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});
  const handleInput = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <form className="flex flex-col  gap-5 max-w-64">
      <h1>Register</h1>
      <div className="flex flex-col">
        <h2>Username: </h2>
        <input type="text" className="border-2" onChange={handleInput} name="username" />
      </div>
      <div className="flex flex-col">
        <h2>Password: </h2>
        <input type="text" className="border-2" onChange={handleInput} name="password" />
          </div>
          <button>Submit</button>
    </form>
  );
};

export default Register;
