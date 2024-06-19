import { api } from "~/lib/axios";
import type { Song } from "~/types";

export async function getSongs() {
  return await api.get<Song[]>("/songs");
}

export async function getSong(id: string) {
  return await api.get<Song>(`/songs/${id}`);
}
