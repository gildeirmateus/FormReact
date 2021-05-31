import { useForm } from 'react-hook-form'
import { yupResolver}  from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../styles/pagesStyles/registerStyle.css'

function Register(){
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        telephone: yup.string().required(),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null])
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
                    <label>Name</label>
                    <input type="name"{...register("name", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.name?.type === 'required' && "Name is required"}
                    </div>
                </div>
                
                <div className="input">
                    <label>Email</label>
                    <input type="email"{...register("email", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.email && "Email is required" }
                    </div>
                </div>

                <div className="input">
                    <label>Telephone</label>
                    <input type="telephone"{...register("telephone", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.telephone && "Telephone is required" }
                    </div>
                </div>

                <div className="input">
                    <label>Password</label>
                    <input type="password"{...register("password", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.password && "Password is required" }
                    </div>
                </div>
                
                <div className="input">
                    <label>Confirm Password</label>
                    <input type="password"{...register("confirmPassword", { required: true })} />
                    <br></br>
                    <div className="error">
                        {errors.confirmPassword && "Passwords should match!" }
                    </div>
                </div>
                
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}

export default Register;