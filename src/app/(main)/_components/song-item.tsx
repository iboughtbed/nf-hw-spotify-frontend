import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import type { Song } from "~/types";

interface SongItemProps {
  song: Song;
  onPlay: (audio: HTMLAudioElement) => void;
}

export function SongItem({ song, onPlay }: SongItemProps) {
  const audioRef = React.useRef(new Audio(song.audio));

  async function playAudio() {
    if (audioRef.current.paused) {
      onPlay(audioRef.current);
      await audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Image
          alt={song.name}
          src={song.image}
          className="size-full rounded-md object-cover"
          height={640}
          width={640}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="text-lg font-medium">{song.name}</div>
          <div className="text-sm text-muted-foreground">{song.artist}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" onClick={playAudio}>
          {audioRef.current.paused ? (
            <PlayIcon className="size-4" />
          ) : (
            <PauseIcon className="size-4" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
