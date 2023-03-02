import React from 'react';

export function MainInput({ id, name, type, value, onChange, className, autoComplete, required, placeholder }){

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={required}
            className={className ? className : `appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder={placeholder}
        />
    );
}

