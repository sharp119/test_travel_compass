import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/destinations" className="text-sm font-medium hover:text-primary">
              Destinations
            </Link>
            <Link href="/tours" className="text-sm font-medium hover:text-primary">
              Tours
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0299C2] transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
