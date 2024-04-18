import React from 'react'

interface FormContainerProps {
    className: string
    onSubmit?: () => {}
    children:React.ReactNode
}

interface FormVariation extends Omit<FormContainerProps, "className"> {

}

interface FormComponent extends FormVariation {
    variation: keyof typeof formsVariation;
}

const formsVariation = {
    default: (props: FormVariation) =>
        <FormContainer {...props} className='space-y-4 md:space-y-6' />,

    teste: (props: FormVariation) => 
        <FormContainer {...props} className='justify-center' /> 
}

function FormContainer(props: FormContainerProps) {
    return (
        <form className={props.className} onSubmit={props.onSubmit} >
            {props.children}
        </form>
    )
}

function Form(props: FormComponent) {
    const Component = formsVariation[props.variation] || formsVariation.default;
    return <Component {...props} />;
}

export {
    Form
}