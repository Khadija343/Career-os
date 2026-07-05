function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
        C
      </div>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Career{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          OS
        </span>
      </span>
    </div>
  );
}

export default Logo;



