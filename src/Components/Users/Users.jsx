import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import { getUsers } from "../../utils/api";
import { Loader } from '../Loader';

export const Users = () => {

    const [users, setUsers] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUsers()
        .then((usersData) => {
            setUsers(usersData);
            setIsLoading(false);
        });
    }, []);

    return (
        <section className="users">
                {isLoading ? 
                ( <Loader /> ) : (
                    <div className='usercardscontainer'>
                        {users.map((eachUser) => {
                            return <UserCard eachUser={eachUser} key={eachUser.name} />;
                        })}
                    </div>
                )}
        </section>
    );
};