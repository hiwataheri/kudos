import { useEffect } from "react";

interface FormFieldProps {
    label: string;
    type: string;
    value:any,
    onchange?: (...args: any[]) => any;
    error?: string;
}
export function FormField({
    htmlFor,
    label,
    type,
    value,
    onchange,
    error,
}: FormFieldProps) {
    const [errorText, setErrorText] = useState(error);

    useEffectText((error) => {
    }, [error])
    return <>
        <label htmlFor={htmlFor} className="text-blue-600 font-semibold">{label}</label>
        <input onChange={e => {
            onChange(e)
            setErrorText("")
        }} type={type} id={htmlFor} name={htmlFor} className="w-full p-2 rounded-xl my-2" value={value} />
        <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
            {errorText || ""}
        </div>
    </> 
}