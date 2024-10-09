import React from 'react';
import InputField from '../components/Input/InputField';

const InputPage: React.FC = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Input Page</h2>
      
      <InputField
        type="text"
        label="Username"
        placeholder="Enter your username"
        required
        minLength={3}
        maxLength={15}
      />
      
      <InputField
        type="email"
        label="Email"
        placeholder="Enter your email"
        required
        pattern={/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/}
      />
      
      <InputField
        type="password"
        label="Password"
        placeholder="•••••••••••"
        required
        minLength={6}
      />

      <InputField
        type="number"
        label="Age"
        placeholder="Enter your age"
        minLength={1}
        maxLength={3}
      />

      <InputField
        type="date"
        label="Date of Birth"
        required
      />
      
      <InputField
        type="text"
        label="Read Only Field"
        placeholder="Can't edit this"
        readOnly
        value="Read-only value"
      />
      
      <InputField
        type="text"
        label="Disabled Field"
        placeholder="Can't edit this"
        disabled
      />

      <InputField
        type="text"
        label="No placeholder"
        />

    </div>
  );
};

export default InputPage;