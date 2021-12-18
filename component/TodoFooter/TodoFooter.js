import React from "react";
import Link from "next/link";

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link href="/FollowersPage">Followers</Link>
    </div>
  );
}

export default TodoFooter;
