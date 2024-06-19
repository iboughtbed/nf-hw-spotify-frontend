import * as React from "react";

import type { Song } from "~/types";
import { SongItem } from "./song-item";

interface SongListProps {
  songs: Song[];
}

export function SongList({ songs }: SongListProps) {
  const [currentAudio, setCurrentAudio] =
    React.useState<HTMLAudioElement | null>(null);

  function handlePlay(audio: HTMLAudioElement) {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    setCurrentAudio(audio);
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {songs.map((song) => (
        <SongItem key={song._id} song={song} onPlay={handlePlay} />
      ))}
    </div>
  );
}
