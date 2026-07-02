import Logo from "../components/common/Logo";

function AuthLayout({ children }) {
  return (
    <div>
      <Logo />

      {children}
    </div>
  );
}

export default AuthLayout;

// It's similar to the Modal component you just learned, but instead of 
// wrapping popup content, it wraps an entire page.

// logo will always appear.
// No matter which page uses AuthLayout, the logo is shown.