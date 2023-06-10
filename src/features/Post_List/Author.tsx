import { useAppSelector } from "../../app/Hooks";
import { selectAllUsers, userData } from "../users/userSlice";

export default function Author({ authorId }: { authorId: number | undefined }) {
    const userLists = useAppSelector(selectAllUsers);
    const findUser = userLists.find((el: userData) => el.id == authorId);
    return <span>{findUser ? findUser.name : "unknown"}</span>;
}
