import { useState, useEffect } from 'react';
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { UsersTable } from '../../components/UsersTable';

//on database admin users are represents with 1 and no admin users with 0
const ADMIN_USER = 1;

export function HomePage() {

    const { signOut, user } = useAuth();
    const [users, setUsers] = useState([]);


    useEffect( () => {
        async function fetchUsers(){
            try {
                const { data } = await api.get('/users');
                setUsers(data);
            } catch (error) {
                //TODO
                if (error?.response?.status === 401) {
                    signOut();
                }
            }
        }

        fetchUsers()
    }, []);

    const handleDeleteUser = async userId => {
        try {
            await api.delete(`/users/${userId}`);
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.log('Failed to delete user: ', error);
        }
    }

    const isAdmin = user?.isAdmin === ADMIN_USER;

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-lg font-medium text-gray-900">
                        Users List
                    </h2>
                    {isAdmin && (
                        <div className="flex items-center ml-auto justify-end">
                            <Link
                                to="/add-user"
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add New User
                            </Link>
                        </div>
                    )}
                   <div className="mt-4">
                       <UsersTable
                        users={users}
                        isAdmin={isAdmin}
                        onDelete={handleDeleteUser}
                       />
                   </div>
                </div>
            </main>
        </div>
    );
}


