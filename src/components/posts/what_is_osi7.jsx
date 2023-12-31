import React from "react";
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";


const What_is_osi_7 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div>
      <section className="dark">
  <div className="container py-4">
    <h1 className="h1 text-center" id="pageHeaderTitle">
      你知道什麼是OSI 7層嗎？
    </h1>
    <article className="blog dark blue">
      <div className="blog__text">
        <h1 className="blog__title blue">你知道什麼是OSI 7層嗎？</h1>
        <div className="blog__subtitle small">
          <time dateTime="2023-01-20 20:05">
            <i className="fas fa-calendar-alt mr-2" /> — 14/06/2022 15:00
            <br />
            作者 — YYJ
          </time>
        </div>
        <div className="blog__bar" />
        <div className="blog__preview-txt">
          <p>
            <strong>你知道什麼是OSI 7層嗎？</strong>
          </p>
          <p>
            OSI全名為<strong>O</strong>pen <strong>S</strong>ystem{" "}
            <strong>I</strong>
            nterconnection，翻譯成中文為開放式系統互聯模型。它使不同的通信系統能夠使用標準協議進行通信。我們可以想成，世界上又各種不同種族的人，為了與不同種族的人溝通，需要一個能夠相同的溝通標準。
          </p>
          <br />
          <p>
            OSI
            7層跟我們有什麼關係？很明顯這是網路設備的通信協議，除了跟伺服器息息相關以外，如果你想深入瞭解DoS/DDoS攻擊，那就一定要懂OSI
            7層(DoS/DDoS攻擊就有分L7, L4, L3)。
          </p>
          <br />
          <p>OSI有哪7層？</p>
          <blockquote>
            <p>
              Layer 7 應用程式層
              直接與來自使用者的資料進行互動的層，像是HTTP協定。
              <br />
              Layer 6 呈現層 將開啟好的程式解密，又或是傳送時加密並壓縮。
              <br />
              Layer 5 工作階段層 開啟傳送與接受到的資料。
              <br />
              Layer 4 傳輸層
              檢查資料的傳送是否正常，確定傳輸的速度，傳輸資料若不完整(掉包)則要求重傳。
              <br />
              Layer 3 網路層
              它像是運送包裹的快遞，但是運送資料，組成封包並找尋最佳路徑發送。
              <br />
              Layer 2 資料結構層 與Layer
              1類似，但是負責將0與1傳送，另外他也負責流量與錯誤的控制。
              <br />
              Layer 1 實體層 物理的電流傳送，產生0與1的位元。
            </p>
          </blockquote>
          <p />
          <br />
          <p>
            你可以想像成：L1產生貨物 -&gt; L2負責將貨物運送出去 -&gt;
            L3負責將貨物運送到另一台裝置 -&gt; L4貨物的檢查員 -&gt; L5拆貨物的人
            -&gt; L6將貨物組合並作成可使用的 -&gt; L7貨物的使用者
          </p>
          <br />
          <br />
          <p>文章主題：網路概論</p>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/2.0/"
            target={'_blank'}
          >
            <img
              alt="Creative Commons License"
              style={{ borderWidth: 0 }}
              src="https://i.creativecommons.org/l/by-nc/2.0/88x31.png"
            />
          </a>
          <br />
          This work is licensed under a{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/2.0/"
            target={'_blank'}
          >
            Creative Commons Attribution-NonCommercial 2.0 Generic License
          </a>
          .
        </div>
      </div>
    </article>
  </div>
</section>

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
            <a href="/" target={'_blank'}>主頁</a>
          </li>
          <li>
            <a href="https://discord.gg/U3DW4cNkMd" target={'_blank'}>加入Discord</a>
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
export default What_is_osi_7;
