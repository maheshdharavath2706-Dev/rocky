import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', padding: '8rem 0' }}>
        <div className="container flex flex-col items-center text-center">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px' }}>Elevate Your Everyday Style</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
            Discover our curated collection of premium lifestyle products designed for the modern individual.
          </p>
          <Link to="/catalogue" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', fontSize: '1.125rem' }}>
            Shop Collection <ArrowRight className="ml-2" size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>New Arrivals</h2>
            <p style={{ color: 'var(--text-muted)' }}>Explore the latest additions to our store.</p>
          </div>
          <Link to="/catalogue" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            View All <ArrowRight size={16} style={{ marginLeft: '4px' }} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card" style={{ height: '300px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Product Preview {item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
