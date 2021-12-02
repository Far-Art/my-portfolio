import "./EmailApi.css";
import { init, sendForm } from 'emailjs-com';
import "./emailKey.js";
import emailKey from "./emailKey.js";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function EmailApi(): JSX.Element {

    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data: any) => { handleOnClick(data) }

    const handleOnClick = (e: any) => {
        console.log("sending");
        e.preventDefault();
        sendForm("gmail", emailKey.TEMPLATE_ID, e.target, emailKey.USER_ID)
            .then((response) => toast.success("Good"))
            .catch((error) => toast.error("error"));
    }
    return (
        <div className="EmailApi">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("name", {required: "Name is required"})}
                />
            </form>
            <button type="submit">send</button>
        </div>
    );
}

export default EmailApi;
