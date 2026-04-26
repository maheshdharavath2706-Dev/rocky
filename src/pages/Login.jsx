import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container py-12 flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <div className="card p-8" style={{ width: '100%', maxWidth: '400px', padding: '2rem', margin: '0 auto' }}>
        <h2 className="text-center mb-6" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Welcome Back</h2>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" />
          </div>
          <div className="form-group mb-6">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" placeholder="••••••••" />
          </div>
          <button className="btn btn-primary w-full" style={{ width: '100%', marginBottom: '1rem' }}>Sign In</button>
        </form>
        <p className="text-center" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
