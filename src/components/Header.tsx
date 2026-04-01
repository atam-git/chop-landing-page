function ConnectNigeriaLogo() {
  return (
    <div className="logo-wrapper">
      <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle icon */}
        <circle cx="9" cy="11" r="8.5" stroke="#2D2D2D" strokeWidth="1" fill="none"/>
        <circle cx="9" cy="11" r="3" fill="#A3D548"/>
        <circle cx="9" cy="4" r="1.5" fill="#2D2D2D"/>
        <circle cx="9" cy="18" r="1.5" fill="#2D2D2D"/>
        <circle cx="2" cy="11" r="1.5" fill="#2D2D2D"/>
        <circle cx="16" cy="11" r="1.5" fill="#2D2D2D"/>
        {/* "connect" text */}
        <text x="22" y="16" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="#1B1B1B">connect</text>
        {/* "NIGERIA.com" text */}
        <text x="22" y="28" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="#1B1B1B" letterSpacing="0.5">NIGERIA<tspan fill="#A3D548">.com</tspan></text>
      </svg>
    </div>
  );
}

export default function Header(){

    return( 
      <header className="site-header">
        <div className="header-inner">
          <ConnectNigeriaLogo />
          <nav className="header-nav">
            <a href="#" className="signin-link">Sign In</a>
            <a href="#" className="header-cta-btn">Confirm My Business</a>
          </nav>
        </div>
      </header>)
}