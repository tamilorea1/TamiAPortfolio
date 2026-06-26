import { OSShell } from "@/components/OSShell";
import { Dashboard } from "@/components/Dashboard";
import { BootWrapper } from "@/components/BootWrapper";

export default function Home() {
  return (
    <div className="h-full p-4 bg-shell-bg">
      <BootWrapper>
        <OSShell>
          <Dashboard />
        </OSShell>
      </BootWrapper>
    </div>
  );
}
