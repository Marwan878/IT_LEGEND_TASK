import React, { useState } from "react";
import { TComment } from "@/types";
import Avatar from "../general/Avatar";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Subheading } from "../general";

function Comments({
  comments,
  className,
  showFirst,
}: {
  comments: readonly TComment[];
  className?: string;
  showFirst: number;
}) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <section className={cn("mt-16 area-comments", className)} id="comments">
      <Subheading className="ps-6">Comments</Subheading>
      <div className={cn("p-4 md:p-6")}>
        <div className="space-y-4 md:space-y-6 mb-6 divide-y divide-y-gray-500">
          {comments.slice(0, showFirst).map((comment) => (
            <div key={comment.id} className="flex space-x-3 md:space-x-4 py-4">
              <Avatar
                src={comment.userAvatar}
                alt={comment.userName}
                size="lg"
                className="mt-0.5"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1 flex-col gap-1">
                  <h4 className="font-medium text-[#6c6c6c] text-[0.9375rem]">
                    {comment.userName}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {comment.date}
                  </span>
                </div>
                <p className="text-sm md:text-sm mt-4 text-muted-foreground break-words">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 md:mt-6">
          <div className="flex flex-col justify-between space-y-2 h-[290px]">
            <textarea
              style={{ resize: "none" }}
              placeholder="Write a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full shadow-lg p-6 grow border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-colors text-sm text-[#939393] font-medium text-[0.9375rem]"
            />
            <div className="flex">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className={cn(
                  "px-10 py-4 flex items-center gap-2 rounded-sm bg-teal-500 transition-colors text-white font-medium text-xs md:text-sm mt-4"
                )}
              >
                Submit Review <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Comments;
