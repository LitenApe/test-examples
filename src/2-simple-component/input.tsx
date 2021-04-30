import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <label>
      {label}
      <input {...props} />
    </label>
  )
}
