import { TrashIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { useTasks } from "~/hooks/use-tasks";
import { cn } from "~/lib/utils";
import type { Task } from "~/types";

export function TaskItem({ id, completed, text }: Task) {
  const [tasks, setTasks] = useTasks();

  function handleToogle() {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDelete() {
    console.log("de");

    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="flex items-center gap-1">
      <Checkbox checked={completed} onClick={() => handleToogle()} />
      <label className={cn("flex-1", { "line-through": completed })}>
        {text}
      </label>
      <Button onClick={() => handleDelete()}>
        <TrashIcon className="size-4" />
      </Button>
    </div>
  );
}
