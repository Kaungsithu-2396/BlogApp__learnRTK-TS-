import { useAppSelector } from "../../app/Hooks";
import Author from "./Author";

import PostInputForm from "./post__inputForm";
import { postsType, selectAllPosts } from "./PostSlice";

function Posts() {
    const posts = useAppSelector(selectAllPosts);
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
                                    Author by <Author authorName={el.author} />{" "}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Posts;
