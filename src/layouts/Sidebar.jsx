import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  FileText,
  GitBranch,
  Map,
  TrendingUp,
  MessageSquare,
  MicVocal,
  FolderKanban,
  Settings,
  X,
} from "lucide-react";

import { ROUTES } from "../utils/constants";
import Logo from "../components/common/Logo";

const NAV_ITEMS = [
  { label: "Dashboard", to: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { label: "Profile", to: ROUTES.PROFILE, icon: UserRound },
  { label: "Resume Analysis", to: ROUTES.RESUME, icon: FileText },
  { label: "GitHub Analysis", to: ROUTES.GITHUB, icon: GitBranch },
  { label: "Career Roadmap", to: ROUTES.ROADMAP, icon: Map },
  { label: "Progress Tracker", to: ROUTES.PROGRESS, icon: TrendingUp },
];

const UPCOMING_ITEMS = [
  { label: "AI Chat", icon: MessageSquare },
  { label: "Interview Prep", icon: MicVocal },
  { label: "Projects", icon: FolderKanban },
  { label: "Settings", icon: Settings },
];

function Sidebar({ isOpen = false, onClose }) {
  const location = useLocation();

  const content = (
    <aside className="flex h-full w-64 flex-col gap-6 overflow-y-auto border-r border-white/5 bg-card p-4">
      {onClose && (
        <div className="mb-2 flex items-center justify-between lg:hidden">
          <Logo />

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <ul className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
          const isActive = location.pathname === to;

          return (
            <li key={to}>
              <Link
                to={to}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-white/60 hover:translate-x-0.5 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 -translate-y-1/2 w-1 rounded-r-full bg-primary" />
                )}
                <Icon size={18} className="shrink-0" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="h-px w-full bg-white/5" />

      <ul className="flex flex-col gap-1">
        {UPCOMING_ITEMS.map(({ label, icon: Icon }) => (
          <li key={label}>
            <div className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/30">
              <Icon size={18} className="shrink-0" />
              <span className="flex-1">{label}</span>
              <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/30">
                Soon
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );

  return (
    <>
      {/* Desktop: persistent, independently scrollable sidebar */}
      <div className="hidden lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)]">
        {content}
      </div>

      {/* Mobile: drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <div
          className={`relative z-10 h-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {content}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
