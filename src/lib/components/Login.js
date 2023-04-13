import React from "react";
import "./login.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import "./login.css";
import { useState } from "react";
const Login = (props) => {
  const { schema, uiSchema } = props;
  const [formData, setFormData] = useState("");

  const onChange = (e) => {
    setFormData(e.formData);
  };

  const handleSubmit = (e) => {};
  return (
    <div className="">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onChange={onChange}
        formData={formData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default Login;
