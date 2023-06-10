import { selectAllUsers, userData } from "../users/userSlice";
import { useAppSelector } from "../../app/Hooks";
import { ChangeEvent } from "react";

interface PropsAuthor {
    setAuthor: (str: string) => void;
}
function Users({ setAuthor }: PropsAuthor) {
    const usersList = useAppSelector(selectAllUsers);
    const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAuthor(e.target.value);
    };
    return (
        <div>
            <select
                name=""
                className="userList"
                id=""
                onChange={handleUserChange}
            >
                {usersList.map((el: userData) => {
                    return (
                        <option value={el.name} className="" key={el.id}>
                            {el.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Users;
