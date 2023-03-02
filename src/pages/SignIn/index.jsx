import { useState } from 'react';
import '../../index.css'


import { useAuth } from "../../hooks/auth";


import { ModalMessage } from "../../components/ModalMessage";
import { MainButton } from "../../components/MainButton";
import { ForgotPasswordModal } from '../../components/ForgotPasswordModal';
import { InputPassword } from '../../components/InputPassword';



export function LoginPage() {
    const [email, setEmail] = useState('');
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState({});
    const [password, setPassword] = useState('');
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const { signIn } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await signIn({ email, password });
        } catch (error) {
            setModalMessage(JSON.stringify(error));
            setModal(true);setTimeout(() => {
                setModal(false);
            }, 2000);

        }
    };

    const handleForgotPasswordSubmit = email => {
        setShowForgotPasswordModal(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div>
                    <div className="max-w-md w-full space-y-8">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                                </div>
                                <div>
                                    {
                                        modal ? (
                                            <ModalMessage
                                                message={modalMessage}
                                            />
                                        ) : (
                                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                                <input type="hidden" name="remember" defaultValue="true"/>
                                                <div className="rounded-md shadow-sm -space-y-px">
                                                    <div>
                                                        <label htmlFor="username" className="sr-only">
                                                            Username
                                                        </label>
                                                        <input
                                                            id="username"
                                                            name="username"
                                                            type="text"
                                                            autoComplete="username"
                                                            required
                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                            placeholder="Username"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="sr-only">
                                                            Password
                                                        </label>
                                                        <InputPassword
                                                            onValueChange={newValue => setPassword(newValue)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-end">
                                                    <div className="text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setShowForgotPasswordModal(true)}>
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <MainButton
                                                        text="Login"
                                                        type="submit"
                                                        onClick={handleSubmit}
                                                    />
                                                </div>
                                            </form>
                                        )
                                    }
                                </div>
                                <ForgotPasswordModal
                                    isOpen={showForgotPasswordModal}
                                    onClose={() => setShowForgotPasswordModal(false)}
                                    onSubmit={handleForgotPasswordSubmit}
                                />
                            </div>
                </div>
        </div>
    );
}

