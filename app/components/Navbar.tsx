
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          PixelCraft
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>
          <a href="#portfolio" className="hover:text-cyan-400">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}