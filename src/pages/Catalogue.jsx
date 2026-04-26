import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Minimalist Watch', price: 129.99, description: 'A sleek, modern timepiece for any occasion.', image: 'https://via.placeholder.com/200?text=Watch' },
  { id: 2, name: 'Leather Backpack', price: 199.50, description: 'Durable, stylish backpack crafted from premium leather.', image: 'https://via.placeholder.com/200?text=Backpack' },
  { id: 3, name: 'Wireless Earbuds', price: 89.00, description: 'High-fidelity sound with active noise cancellation.', image: 'https://via.placeholder.com/200?text=Earbuds' },
  { id: 4, name: 'Ceramic Mug', price: 24.99, description: 'Handcrafted ceramic mug, perfect for your morning brew.', image: 'https://via.placeholder.com/200?text=Mug' },
  { id: 5, name: 'Silk Scarf', price: 45.00, description: 'Luxurious silk scarf in vibrant patterns.', image: 'https://via.placeholder.com/200?text=Scarf' },
  { id: 6, name: 'Sunglasses', price: 155.00, description: 'UV400 polarized sunglasses with classic frames.', image: 'https://via.placeholder.com/200?text=Sunglasses' }
];

const Catalogue = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1>Our Collection</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Find the perfect items to elevate your lifestyle.</p>
      </div>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
