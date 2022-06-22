// import React from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};
const handler = () => {
  console.log('click');
};

const NameComponent = (props: NameComponentPropsType) => {
  const { lastName, firstName } = props;
  return (
    <div className="wrapper">
      <p className="text">{firstName}</p>
      <p className="text">{lastName}</p>
      <button type="button" onClick={handler}>
        Click
      </button>
    </div>
  );
};

export default NameComponent;
