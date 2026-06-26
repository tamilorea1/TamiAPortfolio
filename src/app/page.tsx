import { OSShell } from "@/components/OSShell";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <Dashboard />
      </OSShell>
    </div>
  );
}
