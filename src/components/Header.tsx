import Image from "next/image";

function ConnectNigeriaLogo() {
  return (
    <div className="logo-wrapper">
      <Image 
        src="/connectnigerialogo.png" 
        alt="Connect Nigeria" 
        width={135} 
        height={44}
        quality={100}
        unoptimized
      />
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