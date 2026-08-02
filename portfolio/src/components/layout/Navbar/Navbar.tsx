import { useState} from "react";

const  Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    
    {/* Logo */}
    <h1 className="text-3xl font-bold text-orange-500">
      MH.
    </h1>

    {/* Desktop Navigation */}
    <ul className="hidden items-center gap-8 md:flex">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    {/* Hire Me Button */}
    <button className="hidden rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600 md:block">
      Hire Me
    </button>

    {/* Mobile Menu Button */}
    <button
      className="text-2xl text-white md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </button>

  </div>

  {isMenuOpen && (
  <div className="border-t border-slate-800 bg-slate-900 md:hidden">
    <ul className="flex flex-col p-6 space-y-5">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
)}
</nav>
    );
}
export default Navbar;