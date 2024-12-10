import Menu from "./components/navbar";
import Footer from "./components/footer";
import { Container } from 'react-bootstrap';
import CardProd from "./cardprod";

export default function Pesportes({ produtos }) {
  return <>
    <Menu />
    <Container className="border border-2 rounded border-primay col-sm-6 text-center">
      Lista de produtos de esportes

    </Container>
    <Container>
      <div className="row row-col-1 row-cols-md-5 g-3">
        {produtos.map(produto =>
          <div key={produto.id}>
            <CardProd titulo={produto.titulo} descricao={produto.descricao} preco={produto.preco} />
          </div>
        )}
      </div>
    </Container>

    <Footer />

  </>
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://fw2.vercel.app/api/produtos/data')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { produtos: repo } }
}