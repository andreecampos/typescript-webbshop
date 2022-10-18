import React from 'react'
import { Link } from 'react-router-dom'
import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import  { StoreItem } from "../components/StoreItem"


export default function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <header>
        headers här 
      </header> <hr/>
      <section>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
           <Link to={`/details/${item.id}`}>
              <StoreItem {...item} /> 
          </Link>
            </Col>  
        ))}
      </Row>
      </section> <hr/>









    </>
  )
}

