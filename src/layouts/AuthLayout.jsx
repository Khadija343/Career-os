import Logo from "../components/common/Logo";

function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-10 text-white">
      <div className="mb-8">
        <Logo />
      </div>

      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

export default AuthLayout;

// It's similar to the Modal component you just learned, but instead of 
// wrapping popup content, it wraps an entire page.

// logo will always appear.
// No matter which page uses AuthLayout, the logo is shown.


