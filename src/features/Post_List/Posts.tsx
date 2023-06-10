import { useAppSelector, useAppDispatch } from "../../app/Hooks";
import Author from "./Author";
import Reactions from "./Reactions";
import PostInputForm from "./post__inputForm";
import { postsType, selectAllPosts } from "./PostSlice";
import { loadAllPosts } from "./PostSlice";
import { useEffect } from "react";

function Posts() {
    const posts = useAppSelector(selectAllPosts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadAllPosts());
    }, []);
    console.log(posts);
    return (
        <div>
            <PostInputForm />
            <div className="posts__">
                <div className="">
                    {posts.map((el: postsType) => {
                        return (
                            <div className="single__post" key={el.id}>
                                <h2> {el.title}</h2>
                                <h1>{el.body}</h1>
                                <h3>
                                    Author by <Author authorId={el.userId} />{" "}
                                </h3>
                                <div className="">
                                    <Reactions {...el} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Posts;
