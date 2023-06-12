import { ChangeEvent, useState } from "react";
import Users from "../users/users";
import { useAppDispatch } from "../../app/Hooks";
import { addPost } from "./PostSlice";
export default function PostInputForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState("idle");
    const dispatch = useAppDispatch();
    const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    };
    const onSave =
        [title, author, body].every(Boolean) && addRequestStatus === "idle";

    const postAddHandler = (title: string, body: string, author: string) => {
        if (onSave) {
            try {
                setAddRequestStatus("succeeded");
                dispatch(addPost(title, body, author));
                setTitle("");
                setAuthor("");
                setBody("");
                console.log(author);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="input__Collection">
                <div className="form__">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Title"
                        onChange={handleTitleOnChange}
                    />
                    <label htmlFor="">Select User</label>

                    <Users setAuthor={setAuthor} />

                    <label htmlFor="">Letter Body</label>
                    <textarea
                        rows={4}
                        cols={30}
                        name="body"
                        id=""
                        onChange={handleBodyChange}
                        placeholder="body"
                    />
                    <button
                        disabled={!onSave}
                        onClick={() => postAddHandler(title, body, author)}
                    >
                        Save
                    </button>
                </div>
            </div>
            ;
        </>
    );
}
