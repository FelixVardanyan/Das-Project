import { useForm } from "react-hook-form"
import Input from "../../components/input/input"
import { RegisterData } from "../../Datas/data"
import "./Register.css"


export default function Register() {
    const { handleSubmit, control } = useForm()
    const onSubmit = (data) => {
        console.log(data);   
    }
    
    return (
        <div className="full">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                {RegisterData.map((e, i) => (
                    <Input type={e.type} placeholder={e.placeholder} key={e.id} name={e.name} control={control} />
                ))}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}