import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const UserCard = ({ eachUser }) => {
    const { setUser } = useContext(UserContext);
    return (
        <li className="userlist" key={eachUser.name}>
        <h3>{eachUser.name}</h3>
            <img className='userimg' src={eachUser.avatar_url} alt="avatar" />
        <p>
            <button className="sign-in" onClick={()=>{
                setUser(eachUser.username)
                }}>Sign in</button>
        </p>
    </li>
    );
};