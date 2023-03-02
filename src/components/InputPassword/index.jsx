import React, { useState } from 'react';
import classNames from 'clsx';

export function InputPassword(props){
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const newValue = e => {
        props.onValueChange(password);
    }

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : 'password'}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={newValue}
            />
            <button
                className={classNames(
                    'absolute top-0 right-0 inset-y-0 px-2 py-1 text-gray-500 z-10',
                    {'focus:outline-none' : !showPassword}
                )}
                onClick={handleShowPassword}
            >
            {showPassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
            }
            </button>
        </div>
    );
}
