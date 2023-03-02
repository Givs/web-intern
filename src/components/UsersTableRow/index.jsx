import React from 'react';

export function UsersTableRow({ user, isAdmin, onDelete }) {
    return (
        <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
            </td>
            {isAdmin && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-red-500" onClick={() => onDelete(user.id)}>
                        Delete
                    </button>
                </td>
            )}
        </tr>
    );
}