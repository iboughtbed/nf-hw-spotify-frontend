import { api } from "~/lib/axios";
import type { Song } from "~/types";

export async function createSong(fields: {
  name: string;
  artist: string;
  image: File;
  audio: File;
}) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }

  const { data } = await api.post<Song>("/songs", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log({ data });
}
