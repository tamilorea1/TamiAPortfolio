import { OSShell } from "@/components/OSShell";

export default function Home() {
  return (
    // p-4 gives breathing room so the OS window floats above the page edge
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 text-shell-muted text-sm">
          dashboard loading...
        </div>
      </OSShell>
    </div>
  );
}
