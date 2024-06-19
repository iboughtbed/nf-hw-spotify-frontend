import { NewSongForm } from "../../_components/new-song-form";

export default function NewSongPage() {
  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          <NewSongForm />
        </div>
      </div>
    </div>
  );
}
