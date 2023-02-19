import React from "react";
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
/*import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import members from "../members.json";
import bots from "../bots.json";*/
import posts from "../blog.json";
//import styles from "../style.css";


const Home = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        /*height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",*/
      }}
    >
      <section id='intro' class="banner_part">
    <div class="jumbotron">
      <div class='container'>
          <div class='row'>
              <div class='col-md-12'>
              <h1 id="intro">
        <TypeAnimation className="ta" sequence={["{My-IT}程式討論區"]}></TypeAnimation>
      </h1>
      <p className="intro-text" id="intro">{["{My-IT}程式討論區"]}▸ 一個程式討論群組</p>
      <p className="intro-text" >
        果然是我熟悉的myit 還是那麼的不營養
        </p>
                  <a class="btn btn-primary btn-lg" id="btn" href="https://discord.gg/myit" role="button" target={'_blank'}>加入Discord</a>
                  <a class="btn btn-primary btn-lg" id="btn" href="https://github.com/My-IT-discord/myit_react" role="button" target={'_blank'}>Github原代碼</a>
              </div>
          </div>
      </div>
    </div>
</section>

<br></br><br></br>
      {Array.from(posts.posts).map((post) => {
        return (
          <a
          className="blog_link"
          target="_blank"
            href={`${post.link}`}
            /*style={{
              width: "90%",
              backgroundColor: "transparent",
              paddingBottom: "50px",
              textAlign: "left",
              paddingLeft: "50px",
              paddingTop: "50px",
              color: "white",
              textDecoration: "none",
            }}*/
          >
           <div className="container py-4 blog_hover box blog_home" id="blog">
               <article className="blog dark blue" id="blog_article">
                 <div className="blog__text">
                   <h1 className="blog__title blue">
                     <a
                       className="blog_link"
                       target="_blank"
                       href={`${post.link}`}
                     >
                      {post.title}
                     </a>{" "}
                   </h1>
                   <div className="blog__subtitle small">
                     <time dateTime="2023-01-20 20:05">
                       <i className="fas fa-calendar-alt mr-2" />日期 — {post.date} <br />
                       作者 — {post.author}
                     </time>
                   </div>
                   <div className="blog__bar" />
                   <div className="blog__preview-txt">
                   {post.descripton}
                   </div>
                 </div>
               </article>
             </div>

          </a>
        );
      })}
      <br></br><br></br>
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
          © {"{"}My-IT{"}"}程式討論區 2021-2023
        </p>
      </div>
      <div className="col-md-4 text-right">
        <h4>連結</h4>
        <ul>
          <li>
            <a href="/" target={'_blank'}>主頁</a>
          </li>
          <li>
            <a href="https://discord.gg/myit" target={'_blank'}>加入Discord</a>
          </li>
        </ul>
        <ul>
        <li>
            <a href="/aboutus" target={'_blank'}>關於我們</a>
          </li>
          <li>
            <a href="https://github.com/My-IT-discord/myit_react" target={'_blank'}>Github原代碼</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<br></br><br></br>

      </div>
  );
};
export default Home;
