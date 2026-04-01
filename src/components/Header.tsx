import Image from "next/image";

function ConnectNigeriaLogo() {
  return (
    <a href="https://www.connectnigeria.com" className="logo-wrapper">
      <Image 
        src="/connectnigerialogo.png" 
        alt="Connect Nigeria" 
        width={135} 
        height={44}
        quality={100}
        unoptimized
      />
    </a>
  );
}

export default function Header(){

    return( 
      <header className="site-header">
        <div className="header-inner">
          <ConnectNigeriaLogo />
          <nav className="header-nav">
            <a href="https://www.connectnigeria.com/login" className="signin-link">Sign In</a>
            <a href="https://www.connectnigeria.com/user-manager/business/my-business?confirmbiz=yes" className="header-cta-btn">Confirm My Business</a>
          </nav>
        </div>
      </header>)
}