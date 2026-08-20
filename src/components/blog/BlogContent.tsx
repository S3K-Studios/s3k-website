import React from "react";

interface BlogContentProps {
  title: string;
  content: {
    type: string;
    text?: string;
    src?: string;
    alt?: string;
    code?: string;
  }[];
}

const BlogContent: React.FC<BlogContentProps> = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <div className="prose max-w-none">
      {content.map((block, idx) => {
        if (block.type === "paragraph") {
          return <p key={idx}>{block.text}</p>;
        }
        if (block.type === "image") {
          return (
            <img
              key={idx}
              alt={block.alt || "Blog görseli"}
              className="my-6 rounded-lg"
              src={block.src}
            />
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={idx}
              className="bg-gray-100 rounded p-4 overflow-x-auto my-4"
            >
              <code className="text-xs">{block.code}</code>
            </pre>
          );
        }

        return null;
      })}
    </div>
  </div>
);

export default BlogContent;
