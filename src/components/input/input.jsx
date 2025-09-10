import { useController } from "react-hook-form"
import "./input.css"

const Input = ({ control, placeholder, name, type }) => {
    const { field } = useController({
        name,
        control
    })
    return (
        <input className="inp" type={type}
            placeholder={placeholder}
            name={name}
            value={undefined}
            {...field}
            required={true} />
    )
}

export default Input