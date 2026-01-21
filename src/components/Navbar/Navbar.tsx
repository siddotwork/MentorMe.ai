import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/mentors", label: "Find a Mentor" },
    { to: "/how-it-works", label: "How It Works" },
  ];

  return (
<nav className="bg-slate-950 border-b border-white/10 flex items-center justify-between px-6 py-4 lg:px-8">
  <div className="flex lg:flex-1">
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/logo.png"
        className="h-10 w-auto"
        alt="MentorMe"
      />
      <span className="text-white font-semibold text-lg">
        MentorMe.ai
      </span>
    </Link>
  </div>

  <div className="hidden lg:flex gap-x-10">
    {navLinks.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className="text-sm font-medium text-slate-300 hover:text-white transition"
      >
        {item.label}
      </Link>
    ))}
  </div>

  <div className="hidden lg:flex lg:flex-1 justify-end">
    <a
      href="#"
      className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition"
    >
      Log in
    </a>
  </div>
</nav>

  );
}
