import { Card } from "react-bootstrap"

export interface StoreItemProps {
  id: number,
  name: string,
  description: string,
  kategori: string,
  weight: string,
  manufacturer: string,
  price: number,
  imgUrl: string,
}

export  function ProductDetail({ id, name, description, kategori, weight, manufacturer ,price, imgUrl} : StoreItemProps) {
  return (
    
    <Card>
        <h1>Detail Page</h1>
    <Card.Img
     variant="top"
     src={imgUrl}
     height="300px"
     style={{ objectFit: "cover" }}
   /> 
  <Card.Body className="d-flex flex-column">
     <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
       <span className="fs-2">{name}</span>
       <span className="ms-2 text-muted">Price : ${price}</span>
       <span className="ms-2 text-muted"> {description}</span>
       <span className="ms-2 text-muted"> {kategori}</span>
       <span className="ms-2 text-muted"> {weight}</span>
       <span className="ms-2 text-muted"> {manufacturer}</span>


     </Card.Title>
  </Card.Body>
  </Card>
  )
}
