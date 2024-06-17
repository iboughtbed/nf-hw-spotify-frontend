import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { Task } from "~/types";

const tasksAtom = atomWithStorage<Task[]>("tasks", []);

export function useTasks() {
  return useAtom(tasksAtom);
}
