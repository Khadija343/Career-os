import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  FileText,
  GitBranch,
  Map,
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
  { label: "My Profile", to: ROUTES.PROFILE, icon: UserRound },
];

const UPCOMING_ITEMS = [
  { label: "Resume Analysis", icon: FileText },
  { label: "GitHub Analysis", icon: GitBranch },
  { label: "Roadmap", icon: Map },
  { label: "AI Chat", icon: MessageSquare },
  { label: "Interview Prep", icon: MicVocal },
  { label: "Projects", icon: FolderKanban },
  { label: "Settings", icon: Settings },
];

function Sidebar({ isOpen = false, onClose }) {
  const location = useLocation();

  const content = (
    <aside className="flex h-full w-64 flex-col gap-6 border-r border-white/5 bg-card p-4">
      
      {onClose && (
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <Logo />

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white"
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
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Icon size={18} />
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
              <Icon size={18} />
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
      {/* Desktop: fixed sidebar */}
      <div className="hidden lg:block">{content}</div>

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
//(Future pages: Jobs, Resume, Settings, etc.)

export default Sidebar;


