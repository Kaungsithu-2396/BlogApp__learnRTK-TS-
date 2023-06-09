import { useAppSelector } from "../../app/Hooks";
import { selectAllUsers } from "../users/userSlice";
export default function Author({ authorName }: { authorName: string| undefined }) {
    const userLists = useAppSelector(selectAllUsers);
    const findUser = userLists.find((el) => el.name == authorName);
    return <span>{findUser ? findUser.name : "unknown"}</span>;
}
