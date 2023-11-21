import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBarComponent = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => setCategories(res.data))
    .catch((error) => console.log(error));
  },[]);

  console.log(categories);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={"/"} style={{textDecoration: "none"}}>Córdoba Tecno</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"} style={{textDecoration: "none", color:"black"}}>Inicio</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category, index)=> {
                return(
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category}`} style={{textDecoration: "none",textTransform: "capitalize"}}>{category}</Link>
                  </NavDropdown.Item>
                );
              })

              }
              
            </NavDropdown>
          </Nav>
          <CartWidgetComponent></CartWidgetComponent>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;