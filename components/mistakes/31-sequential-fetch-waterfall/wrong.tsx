import { DemoNote } from "@/components/DemoNote";
import { getSlowAlbums, getSlowArtist } from "@/lib/data";

export async function Wrong() {
  const started = Date.now();
  const artist = await getSlowArtist();
  const albums = await getSlowAlbums();
  const ms = Date.now() - started;

  return (
    <div className="space-y-4">
      <DemoNote tone="wrong">
        <code>getAlbums</code> waits until <code>getArtist</code> finishes even
        though the requests are independent — a classic waterfall (~1.4s).
      </DemoNote>
      <p className="font-mono text-sm text-red-700 dark:text-red-300">
        Sequential wall time: ~{ms}ms
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
