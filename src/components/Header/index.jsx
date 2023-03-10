import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export function Header(){

    const { signOut, user } = useAuth();

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/profile">
                        <FaUserCircle className="text-3xl text-gray-800" />
                    </Link>
                </div>
                {/* Menu Button */}
                <div className="flex items-center">
                    {/* Menu */}
                    <div className="lg:flex lg:items-center lg:ml-6">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-10 hover:text-gray-900">Home</Link>
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-10 hover:text-gray-900">Reset Password</Link>
                    </div>
                </div>
                {/* User Info */}
                <div className="ml-4 flex items-center justify-end lg:ml-0">
                    <span className="mr-2">Hello, {user?.name}!</span>
                    <button onClick={signOut} className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                        <FaSignOutAlt className="text-gray-600 text-lg" />
                    </button>
                </div>
            </div>
        </header>
    );
}
