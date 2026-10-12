
import { useState } from "react";
import "./index.css";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Login UI is working! Backend authentication is not connected yet."
    );
  }

  return (
    <main className="page">
      <section className="login-card">
        <div className="brand">
          <div className="brand-icon">T</div>
          <span>TeamSpace</span>
        </div>

        <p className="eyebrow">WELCOME BACK</p>
        <h1>Sign in to your account</h1>
        <p className="subtitle">
          Enter your details to continue to your workspace.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <div className="password-heading">
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="text-button"
              onClick={() =>
                setMessage("Password reset will be added later.")
              }
            >
              Forgot password?
            </button>
          </div>

          <div className="password-field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <button className="submit-button" type="submit">
            Sign in →
          </button>

          {message && <p className="message">{message}</p>}
        </form>

        <p className="signup">
          Don't have an account?{" "}
          <button
            className="text-button"
            type="button"
            onClick={() => setMessage("Sign-up page coming soon.")}
          >
            Create account
          </button>
        </p>

        <p className="footer-note">
          Your workspace. Your team. One place.
        </p>
      </section>
    </main>
  );
}
