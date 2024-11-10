//import React from "react";
import * as React from 'react';
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
//import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import members from "../members.json";
import ex_members from "../ex_members.json";
import bots from "../bots.json";

const About = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <section id='intro' class="banner_part">
    <div class="jumbotron">
      <div class='container'>
          <div class='row'>
              <div class='col-md-12'>
              <h1 id="intro">
        <TypeAnimation className="ta" sequence={["關於我們"]}></TypeAnimation>
      </h1>
                
              </div>
          </div>
      </div>
    </div>
</section>
      <br></br><br></br>
      <div
       /* style={{ backgroundColor: "#252426", width: "100%", padding: "100px" }}*/
      >
        <h2>我們的管理團隊</h2>
        <p>(排名不分先後)</p>
        <Container>

        <Container>
          {Array.from(members.members).map((member) => {
            return (
              <a href={member.link} target="__blank">
                <Row style={{ textAlign: "center" }}>
                  <Col  style={{ textAlign: "center" }}>
                    <Image
                      src={`img/${member.avatar}`}
                      width={100}
                      roundedCircle
                    />
                  </Col>
                  <Col
                    md={10}
                    style={{ textAlign: "center" }}
                  >
                    <p>{member.name}</p>
                    <p>{member.description}</p>
                  </Col>
                </Row>
                <br></br><br></br>
                </a>

            );
          })}
        </Container>
       

        
        </Container>
      </div>
      

     




      <div style={{ backgroundColor: "#252426", marginTop: "100px", width: "90%", padding: "100px" , textAlign: "center"}}>
        <h2>由我們的管理團隊製作的機器人</h2>
        <br></br>
        <Container>
          {Array.from(bots.bots).map((bot) => {
            return (
              <a href={bot.link} target="__blank">
                <Row style={{ textAlign: "center" }}>
                  <Col  style={{ textAlign: "center" }}>
                    <Image
                      src={`img/${bot.avatar}`}
                      width={100}
                      roundedCircle
                    />
                  </Col>
                  <Col
                    md={10}
                    style={{ textAlign: "center" }}
                  >
                    <p>{bot.name}</p>
                    <p>{bot.description}</p>
                  </Col>
                </Row>
                <br></br><br></br>
              </a>

            );
          })}
        </Container>


       




        <br></br><br></br><br></br><br></br>
      <hr className="hr"></hr>
        <footer>
  <div className="container footer">
    <div className="row">
      <div className="col-md-4 text-left">
        <p className="p">
          {"{"}My-IT{"}"}程式討論區
        </p>
        <p>
          {"{"}My-IT{"}"}▸ 一個程式討論群組
        </p>
        <p>果然是我熟悉的myit 還是那麼的不營養</p>
        <p>
          © {"{"}My-IT{"}"}程式討論區 2021-2024
        </p>
      </div>
      <div className="col-md-4 text-right">
        <h4>連結</h4>
        <ul>
          <li>
            <a href="/">主頁</a>
          </li>
          <li>
            <a href="https://discord.gg/U3DW4cNkMd">加入Discord</a>
          </li>
        </ul>
        <ul>
        <li>
            <a href="/aboutus">關於我們</a>
          </li>
          <li>
            <a href="https://github.com/My-IT-discord/myit_react">Github原代碼</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<br></br><br></br>

      </div>
    </div>
   
  
  );
};
export default About;
