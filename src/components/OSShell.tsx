export function OSShell({ children }: { children: React.ReactNode }) {
  return (
    // flex-col stacks children vertically. h-full fills the viewport height.
    // overflow-hidden clips the rounded corners cleanly.
    <div className="flex flex-col h-full border border-shell-border-hi rounded-lg overflow-hidden">

      {/* ── Titlebar ── */}
      {/* justify-between pushes the 3 zones to left / center / right */}
      <div className="flex items-center justify-between px-4 h-9 bg-shell-deep border-b border-shell-border shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-danger" />
          <span className="w-3 h-3 rounded-full bg-amber" />
          <span className="w-3 h-3 rounded-full bg-green" />
        </div>
        <span className="text-[11px] text-shell-muted tracking-[0.1em]">
          TAMI-OS v1.0
        </span>
        <div className="flex items-center gap-1.5 text-[11px] text-green">
          <span className="w-2 h-2 rounded-full bg-green" />
          sys.online
        </div>
      </div>

      {/* ── Sidebar + main content (side by side) ── */}
      {/* min-h-0 is the trick that lets flex children scroll properly inside a flex-col */}
      <div className="flex flex-1 min-h-0">
        <aside className="w-[180px] bg-shell-deep border-r border-shell-border shrink-0">
          {/* <Sidebar /> goes here */}
        </aside>
        <main className="flex-1 bg-shell-bg overflow-auto">
          {children}
        </main>
      </div>

      {/* ── Terminal footer ── */}
      <footer className="flex items-center px-4 h-9 bg-shell-deep border-t border-shell-border shrink-0">
        <span className="text-xs text-shell-muted">
          tami@portfolio :~$ ls projects/ --all
        </span>
        {/* animate-blink uses the keyframe we defined in globals.css */}
        <span className="inline-block w-[7px] h-[14px] bg-green ml-1 animate-blink" />
      </footer>

    </div>
  );
}
