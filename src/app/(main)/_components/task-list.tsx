import type { Task } from "~/types";
import { TaskItem } from "./task-item";

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task, i) => (
        <TaskItem key={i} {...task} />
      ))}
    </div>
  );
}
