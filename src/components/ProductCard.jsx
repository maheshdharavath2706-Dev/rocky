import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card flex flex-col h-full">
      <div style={{ padding: '1.5rem', backgroundColor: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
      </div>
      <div className="flex flex-col flex-grow p-4" style={{ padding: '1.5rem' }}>
        <div className="flex justify-between items-start mb-2">
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{product.name}</h3>
          <span style={{ fontWeight: 700, color: 'var(--primary-color)' }}>${product.price}</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', flexGrow: 1 }}>{product.description}</p>
        <button className="btn btn-primary w-full flex justify-center gap-2" style={{ width: '100%' }}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
