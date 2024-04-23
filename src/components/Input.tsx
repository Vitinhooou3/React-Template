import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextContainerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "children"> {
  register?: UseFormRegisterReturn
  readOnly?: boolean
}

interface TextProps extends Omit<TextContainerProps, "className"> {
  variation?:keyof typeof  inputVariations;
}

interface LabelContainerProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

interface LabelProps extends Omit<LabelContainerProps, "className"> {
  variation?:keyof typeof  labelVariations;
}

interface RootContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement> {

}

interface RootProps extends Omit<RootContainerProps, "className"> {
  variation?:keyof typeof  rootVariations;
}

const rootVariations = {
  default: (_: RootProps) =>
    <RootContainer {..._} className="flex-col flex relative text-zinc-200" />
}

const inputVariations = {
  default: (_: TextProps) =>
    <TextContainer {..._} className="h-9 rounded border-2 shadow-sm border-zinc-300 cursor-pointet bg-white text-white bg-transparent" /> 
}

const labelVariations = {
  default: (props: LabelProps) =>
    <LabelContainer {...props} className='mb-1 font-semibold px-1 text-zinc-800' />,
}

function LabelContainer(_: LabelContainerProps) {
  return (
    <label {..._} />
  )
}

function TextContainer(_: TextContainerProps) {
  const register = { ..._.register }
  const props = { ..._, register: null }

  return (
      <input {...props}  {...register} />
  )
}

function RootContainer(_: RootContainerProps) {
  return (
    <div {..._}>
      {_.children}
    </div>
  )
}

function Label(props: LabelProps) {
  const Component = labelVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

function Text(props: TextProps) {
  const Component = inputVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

function Root(props: RootProps) {
  const Component = rootVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

export default {
  Text,
  Label,
  Root
}