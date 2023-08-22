import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Image } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";


export function Menu() {
  return (
    <nav className="p-3 mb-2 bg-warning text-white saraban">
      <NavLink
        to="/"
        className="link px-2 "
        style={({ isActive, isPending }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Foodlist(props) {
  return (
    <div className="column text-center">
      <Image className="img-fluid" width="35%" />
      <h4 className="midtr">{props.name}</h4>
      <p className="itim">{props.desc}</p>
      <Button className="mb-3">วิธีทำ</Button>
    </div>
  );
}
function Footer() {
  return <div className="text-right saraban">2023 @ Developed by Ratthakarn M.</div>;
}
function Index() {
  return (
    <>
      <div className="row">
        <Menu />
        <Foodlist
          img="2-1.png"
          name="ข้าวหมูทอดทงคัตสึ"
          desc="เริ่มกันที่ เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน"
        />

        <Foodlist
          img="2-2.png"
          name="ข้าวหมูทอดคัตสึด้ง"
          desc="ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี"
        />

        <Foodlist
          img="2-3.png"
          name="ข้าวแกงกะหรี่ญี่ปุ่น"
          desc="อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว"
        />
      </div>
      <Footer />
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
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
