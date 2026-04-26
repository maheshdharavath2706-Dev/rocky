import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
  return (
    <div className="container py-12">
      <h1 className="mb-8">Shopping Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2" style={{ gridColumn: 'span 2' }}>
          <div className="card p-6" style={{ padding: '1.5rem' }}>
            {/* Cart Item 1 */}
            <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}></div>
              <div className="flex-grow">
                <h3 style={{ fontSize: '1.125rem' }}>Minimalist Watch</h3>
                <p style={{ color: 'var(--text-muted)' }}>$129.99</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="1" className="form-input" style={{ width: '60px', padding: '0.25rem 0.5rem' }} />
                <button style={{ color: 'var(--secondary-color)', padding: '0.5rem' }}><Trash2 size={20} /></button>
              </div>
            </div>
            
            {/* Cart Item 2 */}
            <div className="flex items-center gap-4 pt-6">
              <div style={{ width: '80px', height: '80px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}></div>
              <div className="flex-grow">
                <h3 style={{ fontSize: '1.125rem' }}>Ceramic Mug</h3>
                <p style={{ color: 'var(--text-muted)' }}>$24.99</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="1" className="form-input" style={{ width: '60px', padding: '0.25rem 0.5rem' }} />
                <button style={{ color: 'var(--secondary-color)', padding: '0.5rem' }}><Trash2 size={20} /></button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card p-6" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
            <h3 className="mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
              <span style={{ fontWeight: 500 }}>$154.98</span>
            </div>
            <div className="flex justify-between mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
              <span style={{ fontWeight: 500 }}>Free</span>
            </div>
            <div className="flex justify-between mb-6">
              <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Total</span>
              <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--primary-color)' }}>$154.98</span>
            </div>
            <button className="btn btn-primary w-full flex justify-center gap-2" style={{ width: '100%' }}>
              Checkout <ArrowRight size={18} />
            </button>
            <div className="mt-4 text-center">
              <Link to="/catalogue" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>or Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
