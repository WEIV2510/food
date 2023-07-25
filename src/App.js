import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="bg-secondary p-2 mb-3 text-left">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => { 
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        ตารางเทียบเเคลอรี
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3 ref={header1} ><img className='card-07' src="card-07.jpg" alt='food1' width="100" height="100" />;</h3>
      <h4><b>เมี่ยงคำกลีบบัวหลวงแบบโบราณ</b></h4>
      <Button
        onClick={() => {
          header1.current.innerHTML = "";
        }}
      >
        เรียนรู้เพิ่มเติม
      </Button>
      
      <h3 ref={header1} ><img className='card-07' src="f0701.jpg" alt='food1' width="100" height="100"/>;</h3>
      <h4><b>แกงเห็ดเผำะไข่มดแดง</b></h4>
      <Button
        onClick={() => {
          header1.current.innerHTML = "";
        }}
      >
        เรียนรู้เพิ่มเติม
      </Button>
      
      <h3 ref={header1} ><img className='card-07' src="card-07.jpg" alt='food1'width="100" height="100" />;</h3>
      <h4><b>แกงอ่อมหอยขม</b></h4>
      <Button
        onClick={() => {
          header1.current.innerHTML = "ื";
        }} 
      >
        เรียนรู้เพิ่มเติม
      </Button>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  const data = [
    ["เมี่ยงคำกลีบบัวหลวงแบบโบราณ", 120],
    ["แกงเห็ดเผำะไข่มดแดง ", 50],
    ["แกงอ่อมหอยขม", 40],
  ];

  return (
    <>
      <Layout />
      <h4>Products</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนูอาหาร</th>
            <th>พลังงานที่ได้รับ</th>
            <th>เลือกเมนู</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
