import React from 'react'

export const Home = () => {
  return (
    <>
    
       <div className="container">

{/* Typography Section */}
<section>
  <h1>H1 – Sora SemiBold - 80px</h1>
  <h2>H2 – DM Sans Medium - 40px</h2>
  <h3>H3 – DM Sans Semi Bold - 32px</h3>
  <h4>H4 – DM Sans Semi Bold - 24px</h4>
  <p>P1 – DM Sans Regular – 18px</p>
  <small>P2 – DM Sans Regular – 16px</small>
</section>

<hr />

{/* Buttons Section */}
<section>
  <h2>Buttons</h2>
  <button className="button button--primary">Get Started →</button>
  <button className="button button--secondary">Get Started →</button>

  <div style={{ marginTop: '20px' }}>
    <button className="icon-button">→</button>
  </div>
</section>

<hr />

{/* Logo Section (Placeholder Logos) */}
<section>
  <h2>Logos</h2>
  <p className="logo-light">MobiusEngine (light)</p>
  <p className="logo-dark">MobiusEngine (dark)</p>
  <p className="logo-blue">MobiusEngine (blue)</p>
</section>

<hr />

{/* Colors Section */}
<section>
  <h2>Colors</h2>
  <div className="swatches">
    <div className="swatch" style={{ background: '#0649E7' }}></div>
    <div className="swatch" style={{ background: '#022183' }}></div>
    <div className="swatch" style={{ background: '#FEFEFE', border: '1px solid #ddd' }}></div>
    <div className="swatch" style={{ background: '#EBF1FF' }}></div>
    <div className="swatch" style={{ background: '#101010' }}></div>
  </div>
</section>

<hr />

{/* Layout Note */}
<section>
  <h2>Layout</h2>
  <p>For the whole page, max width should be 1500px only.</p>
</section>

</div>
    
    </>
  )
}

