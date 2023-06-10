import { useAppDispatch } from "../../app/Hooks";

import { addReaction, postsType, reactions__Collection } from "./PostSlice";
const reaction = {
    thumbsUp: "👍",
    love: "🧡",
    angry: "😡",
};

function Reactions({ id, reactions }: postsType) {
    const dispatch = useAppDispatch();
  
    const addReactionHandler = (postId: string, reaction: string) => {
        dispatch(addReaction({ postId, reaction }));
    };
    return (
        <>
            {Object.entries(reaction).map(([name, emoji], i) => {
                return (
                    <button
                        key={i}
                        onClick={() => addReactionHandler(id, name)}
                    >
                        {emoji}{" "}
                        {reactions &&
                            reactions[name as keyof reactions__Collection]}
                    </button>
                );
            })}
        </>
    );
}

export default Reactions;
