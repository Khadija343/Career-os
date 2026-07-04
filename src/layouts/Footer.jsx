const today = new Date();

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-6 text-center text-sm text-white/40 sm:px-6">
      © {today.getFullYear()} Career OS
    </footer>
  );
}

export default Footer;