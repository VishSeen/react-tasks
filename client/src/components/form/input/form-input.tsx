import React from 'react';


export interface FormInputProps {
    id: number;
    title: string;
    label: string;
    className?: string;
}



const FormInput: React.FunctionComponent<FormInputProps> = ({
    id,
    title,
    label,
    className
}) => {
  return (
    <div>input</div>
  )
}


export default FormInput;