import React from 'react';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div className="wrapper-form">
    <h1>{title}</h1>
    <div className="wrapper-input">{children}</div>
  </div>
);

export default Form;
