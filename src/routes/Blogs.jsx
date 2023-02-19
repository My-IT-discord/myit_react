import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
const Blogs = () => {
  const { title } = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${title}.md`)
      .then((res) =>
        res.headers.get("Content-Type").startsWith("text/markdown")
          ? res.text()
          : null
      )
      .then((text) => setContent(text));
  }, []);
  console.log(content);
  if (content === null) return <div style={{
    padding: "auto",
    textAlign: "center",
    color: "white",
    margin: "auto",
  }}><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>此文章不存在 :(</div>;
  return (
    <div
    style={{
              width: "90%",
              backgroundColor: "transparent",
              paddingBottom: "50px",
              textAlign: "left",
              paddingLeft: "50px",
              paddingTop: "50px",
              color: "white",
              textDecoration: "none",
     
    }}
  >
      <ReactMarkdown>{content}</ReactMarkdown>
     

    </div>
  );
};
export default Blogs;