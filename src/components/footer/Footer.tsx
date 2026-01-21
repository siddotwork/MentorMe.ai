import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            MentorMe.ai
                        </h3>
                        <p className="mt-4 text-sm text-slate-400">
                            Connecting learners with experienced mentors to grow faster.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Product
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            {["Home", "Mentors", "How it works", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-white transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Follow
                        </h4>
                        <div className="mt-4 flex gap-4">
                            {[FaTwitter, FaGithub, FaLinkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-slate-400 hover:text-indigo-400 transition"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
                    © 2026 MentorMe.ai. All rights reserved.
                </div>
            </div>
        </footer>

    );
}
