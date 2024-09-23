import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personalInfo">
      <div className="username-container">
        <label htmlFor="userName">Username:</label>
        <input
          placeholder="username"
          name="username"
          id="username"
          type="username"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
      </div>

      <div className="email-container">
        <label htmlFor="email">Email Address:</label>
        <input
          placeholder="email"
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>

      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input
          placeholder="********"
          name="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
