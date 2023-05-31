import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(data => {
                const loggedUsed = data.user;
                console.log(loggedUsed);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("User profile updated")
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'user created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUo</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Your Photo" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less then 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p><small>Already Have an Account?<Link className="text-blue-600" to='/Login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;