import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div className="container flex items-center justify-between" style={{ height: '64px' }}>
        <Link to="/" className="flex items-center gap-2">
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.5rem' }}>Aura</span>
        </Link>
        
        <nav className="flex items-center gap-6" style={{ display: 'none' }} id="desktop-nav">
          <Link to="/" style={{ fontWeight: 500 }}>Home</Link>
          <Link to="/catalogue" style={{ fontWeight: 500 }}>Catalogue</Link>
          <Link to="/about" style={{ fontWeight: 500 }}>About</Link>
          <Link to="/contact" style={{ fontWeight: 500 }}>Contact</Link>
        </nav>
        <style>{`
          @media (min-width: 768px) { #desktop-nav { display: flex !important; } }
          .md-block { display: none; }
          @media (min-width: 768px) { .md-block { display: block; } }
        `}</style>

        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <User size={20} />
            <span className="md-block">Login</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-2" style={{ color: 'var(--text-muted)', position: 'relative' }}>
            <ShoppingCart size={20} />
            <span className="badge" style={{ position: 'absolute', top: '-8px', right: '-8px' }}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
