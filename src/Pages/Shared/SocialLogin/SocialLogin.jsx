import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
           
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full my-4 text-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
               <FcGoogle size={34}/>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;