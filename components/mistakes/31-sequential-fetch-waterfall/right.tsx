import { DemoNote } from "@/components/DemoNote";
import { getSlowAlbums, getSlowArtist } from "@/lib/data";

export async function Right() {
  const started = Date.now();
  const artistPromise = getSlowArtist();
  const albumsPromise = getSlowAlbums();
  const [artist, albums] = await Promise.all([artistPromise, albumsPromise]);
  const ms = Date.now() - started;

  return (
    <div className="space-y-4">
      <DemoNote tone="right">
        Kick off both requests, then <code>await Promise.all</code> — wall time
        drops to roughly one delay (~700ms).
      </DemoNote>
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-300">
        Parallel wall time: ~{ms}ms
      </p>
      <p className="text-sm">
        Artist: <span className="font-mono">{artist.name}</span>
      </p>
      <ul className="font-mono text-sm">
        {albums.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
