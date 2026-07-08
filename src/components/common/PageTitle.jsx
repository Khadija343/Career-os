function PageTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
    </div>
  );
}

export default PageTitle;
