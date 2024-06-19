"use client";

import * as React from "react";

import { getSongs } from "~/lib/queries";
import type { Song } from "~/types";
import { SongList } from "./_components/song-list";

export default function HomePage() {
  const [songs, setSongs] = React.useState<Song[]>();

  React.useEffect(() => {
    async function _getSongs() {
      const { data } = await getSongs();
      setSongs(data);
    }

    void _getSongs();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          {songs && <SongList songs={songs} />}
        </div>
      </div>
    </div>
  );
}
