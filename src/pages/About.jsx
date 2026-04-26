const About = () => {
  return (
    <div className="container py-12">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="mb-6" style={{ marginBottom: '1.5rem' }}>About Aura</h1>
        <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          At Aura, we believe that the objects you interact with every day should bring you joy, function flawlessly, and stand the test of time.
        </p>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
          Founded in 2026, our mission is to curate and create premium lifestyle products that elevate your everyday experiences. We partner with skilled artisans and innovative designers worldwide to bring you a collection that is both beautiful and practical.
        </p>
      </div>
    </div>
  );
};

export default About;
