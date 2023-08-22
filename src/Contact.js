import React from "react";
import { Menu } from "./App";
function Contact() {
  return (
    <div >
      <Menu />
      <div className="card">
        <Avatar />
        <dvi className="data">
          <Intro />
          <SkillList />
        </dvi>
      </div>
    </div>
  );
}
function SkillList () {
  return (
    <div className="skill-list">
      <Skill skill = "alert" emoji = "✌️" color = "brown" />
      <Skill skill = "power" emoji = "🦾" color = "yellow" />
      <Skill skill = "learning" emoji = "💀" color = "white" /> 
      <Skill skill = "work" emoji = "☠️" color = "silver" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายรัฐกานต์ มังกิจ</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me1.jpg" alt="My Avatar" />;
}

export default Contact;