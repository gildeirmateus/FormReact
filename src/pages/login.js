import { useForm } from 'react-hook-form'
import { yupResolver}  from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../styles/pagesStyles/loginStyle.css'

function Login() {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(15).required(),
    });
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="divForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                    <label>Email</label>
                    <input type="email"{...register("email", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.email?.type === 'required' && "Email is required"}
                    </div>
                </div>
                
                <div className="input">
                    <label>Senha</label>
                    <input type="password"{...register("password", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.password && "Password is required" }
                    </div>
                </div>
                
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Login;