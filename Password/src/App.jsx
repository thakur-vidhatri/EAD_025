import React, { useState } from "react";
import './App.css';

function Password() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const check = () => {
    let strength_count = 0;

    // Check each condition independently
    if (/.{8,}/.test(password)) strength_count++; // At least 8 characters
    if (/[A-Z]/.test(password)) strength_count++; // At least one uppercase letter
    if (/[a-z]/.test(password)) strength_count++; // At least one lowercase letter
    if (/[0-9]/.test(password)) strength_count++; // At least one digit
    if (/[^A-Za-z0-9]/.test(password)) strength_count++; // At least one special character

    // Determine strength based on count
    if (strength_count < 2) {
      setStrength("Weak");
    } else if (strength_count === 2) {
      setStrength("Moderate");
    } else if (strength_count === 3) {
      setStrength("Strong");
    } else {
      setStrength("Very Strong");
    }
  };

  const handleInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    check(); // Check password strength
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Enter your password</label>
        </div>
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={handleInput}
          value={password}
        />
        <div>
          <div>Strength of the password: {strength}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Password;
