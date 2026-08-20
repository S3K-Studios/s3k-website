import React from "react";
import { PostCard } from "./PostCard";
import { BlogPost } from "../../types/blog";

interface PostListProps {
    posts: BlogPost[];
    currentLang: string;
}

export const PostList: React.FC<PostListProps> = React.memo(({ posts, currentLang }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} currentLang={currentLang} />
            ))}
        </div>
    );
});

PostList.displayName = "PostList";
