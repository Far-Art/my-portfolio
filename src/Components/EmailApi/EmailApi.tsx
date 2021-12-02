import "./EmailApi.css";
import { sendForm } from 'emailjs-com';
import "./emailKey.js";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function EmailApi(): JSX.Element {

    const userId = process.env.USER_ID;

    const templateId = process.env.TEMPLATE_ID;

    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data: any) => { handleOnClick(data) }

    const handleOnClick = (e: any) => {
        // remove console log
        console.log("sending");
        console.log(userId);
        console.log(templateId);
        e.preventDefault();
        if (templateId !== undefined && userId !== undefined) {
            sendForm("gmail", templateId, e.target, userId)
                .then((response) => toast.success("Good"))
                .catch((error) => toast.error("error"));
        }

    }
    return (
        <div className="EmailApi">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: "Name is required" })}
                />
            </form>
            <button type="submit">send</button>
        </div>
    );
}

export default EmailApi;
