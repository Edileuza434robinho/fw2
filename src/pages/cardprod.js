export default function CardProd(props){
    return<>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.descricao}</p>
        <a href="#" className="btn btn-primary">{props.preco}</a>
      </div>
    </div>
  </div>
    
    </>
}