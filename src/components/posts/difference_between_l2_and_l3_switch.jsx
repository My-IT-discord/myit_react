import React from "react";
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";


const Difference_between_l2_and_l3_switch = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div>
      <section className="dark">
  <div className="container py-4">
    <h1 className="h1 text-center" id="pageHeaderTitle">
      OSI之延伸文章 - L2與L3的交換器(Switch)差異
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
            你知道交換器(Switch)有分L2和L3兩種類型的嗎？不過在了解這兩者的差異之前，相信有一些人不熟交換器是什麼。交換器是網路設備之一，與路由器外觀不同之處在於，他通常具備更多的插孔(Port)，這代表有更多設備可以的網路線可連入至交換器。交換器的基本功能就是接收資料並轉發到指定的目標，當網路插孔不足時，你也會需要這種設備。
          </p>
          <br />
          <p>
            <strong>L2交換器</strong>
            <br />
            使用MAC位置轉發資料，假設分了5個VLAN，不過每個VLAN無法有獨立的IP，僅能做一組當做交換器IP管理使用，較為簡單。
            <br />
            <strong>L3交換器</strong>
            <br />
            價格較貴，具有L2的所有功能，增加了VLAN路由表，這代表不在是用MAC位置轉發資料，效能提升了許多，因此能對VLAN做更好的管理，不會只是單純轉發資料，通常都會具備流量限制的功能，來防止大量惡意封包導致網路設備無法負荷，進而癱瘓整個網路。另外L3交換器還可以與不同網段傳輸資料。
          </p>
          <br />
          <p>
            總之L2價格便宜適用於較單純的使用者，如果是企業級別的那就建議使用L3交換器，又更豐富的網路管理/管制功能。
          </p>
          <br />
          <p>文章主題：網路概論</p>
          <br />
          <br />
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
export default Difference_between_l2_and_l3_switch;
