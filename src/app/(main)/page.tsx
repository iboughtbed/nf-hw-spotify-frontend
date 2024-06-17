"use client";

import * as React from "react";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { useMounted } from "~/hooks/use-mounted";
import { useTasks } from "~/hooks/use-tasks";
import { TaskList } from "./_components/task-list";

export default function HomePage() {
  const [tasks, setTasks] = useTasks();
  const mounted = useMounted();

  const [value, setValue] = React.useState("");
  const [filter, setFilter] = React.useState<
    "all" | "completed" | "uncompleted"
  >("all");

  const filteredTasks = React.useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    if (filter === "uncompleted") {
      return tasks.filter((task) => !task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  function addTask(e: React.FormEvent) {
    e.preventDefault();

    if (value.trim() === "") return;

    const newTask = {
      id: tasks.length,
      text: value,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setValue("");
  }

  console.log({ tasks });

  if (!mounted) return <></>;

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          <form onSubmit={addTask} className="flex items-center gap-4">
            <Input
              placeholder="Buy a bed..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Add
            </Button>
          </form>

          <Separator className="my-4" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <span>Filter:</span>
                {filter === "all" && "All"}
                {filter === "completed" && "Completed"}
                {filter === "uncompleted" && "Incomplete"}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={filter}
                onValueChange={(value) =>
                  setFilter(value as "all" | "completed" | "uncompleted")
                }
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="completed">
                  Completed
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="uncompleted">
                  Incomplete
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Separator className="my-4" />

          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
}
