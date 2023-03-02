import React from 'react';

import { UsersTableRow } from '../UsersTableRow';

export function UsersTable({ users, isAdmin, onDelete }){
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Name
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Email
                </th>
                {isAdmin && (
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Actions
                    </th>
                )}
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
                <UsersTableRow
                    key={user.id}
                    user={user}
                    isAdmin={isAdmin}
                    onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
    );
}