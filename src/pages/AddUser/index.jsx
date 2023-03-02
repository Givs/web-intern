import React, { useState } from 'react';
import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { InputPassword } from "../../components/InputPassword";
import { MainButton } from "../../components/MainButton";
import { MainInput } from '../../components/MainInput';

export function AddUserPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await api.post('/users', {
                name,
                email,
                password,
                isAdmin
            });
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center mt-5">
                        <h1 className="text-3xl font-bold">Add User</h1>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="mt-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <MainInput
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        autoComplete="name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <MainInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium">
                                    Password
                                </label>
                                <InputPassword
                                    onValueChange={newValue => setPassword(newValue)}
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <input
                                        id="isAdmin"
                                        name="isAdmin"
                                        type="checkbox"
                                        checked={isAdmin}
                                        onChange={(event) => setIsAdmin(true)}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="isAdmin" className="ml-2 block text-gray-900">
                                        Admin
                                    </label>
                                </div>
                            </div>
                            <div>
                                <MainButton
                                    text="Add"
                                    type="submit"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}