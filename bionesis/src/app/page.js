import "./globals.css";
import './layout';
import './page.css';
import GooeyNav from './GooeyNav';

const items = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#Sobre" },
  { label: "Contact", href: "#Contato" },
];



export default function Home() {
  return (
    <>
      <div className="parent">
        <div className="container-centralizado">
        <nav className="header" id="Home">
            <div className="pesquisa">
              <input type='text' className="caixatexto" placeholder="Pesquisar"></input>
            </div>
          <div className="botoes">
          <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
          </div>  
      </nav>
      </div>
      </div>
    </>
  );
}
