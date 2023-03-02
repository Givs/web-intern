import { useState } from 'react';
import  '../../index.css';

import { ForgotPasswordModal } from '../../components/ForgotPasswordModal';
import { InputPassword } from '../../components/InputPassword';
import { useAuth } from "../../hooks/auth";


export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    const { signIn } = useAuth();


    const handleSubmit = (event) => {
        event.preventDefault();
        signIn({ email, password })
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPasswordModal(true);
    }

    const handleForgotPasswordSubmit = email => {
        console.log(`Submitting forgot password request for email: ${email}`);
        setShowForgotPasswordModal(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
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
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleForgotPasswordClick}>
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <ForgotPasswordModal
                    isOpen={showForgotPasswordModal}
                    onClose={() => setShowForgotPasswordModal(false)}
                    onSubmit={handleForgotPasswordSubmit}
                />
            </div>
        </div>
    );
}

