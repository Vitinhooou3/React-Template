import React from 'react';

interface ButtonContainerProps {
  loading?: boolean;
  loadingComponent?: React.ReactNode;
  readonly?: boolean;
  className:string
  children:React.ReactNode
}

interface ButtonVariation extends Omit<ButtonContainerProps, "className"> {
 
}

interface ButtonComponent extends ButtonVariation {
  variation: keyof typeof buttonVariations;
}

const buttonVariations = {
  green: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-green-500' />,
  blue: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-indigo-700' />,
  default: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-indigo-600 h-9 rounded text-white font-bold' />,
}

function ButtonContainer(_: ButtonContainerProps) {
  return (
    <button {..._}>
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
}

function Button(props: ButtonComponent) {
  const Component = buttonVariations[props.variation] || buttonVariations.default;
  return <Component {...props} />;
}

export {
  ButtonComponent,
  Button
};
