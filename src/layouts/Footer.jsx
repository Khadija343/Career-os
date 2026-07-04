const today = new Date();

function Footer() {
  return (
    <footer>
      © {today.getFullYear()} Career OS
    </footer>
  );
}

export default Footer;