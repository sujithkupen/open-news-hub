import React from "react";

const Link=(props)=>{
    const {link}=props;
    return (
      <>
        <div class="news-items ">
          <p>📝 {link.description}</p>
          <a href={link.url} target="_blank">
            🔗 <span>{link.url}</span>
          </a>
        </div>
      </>
    );
};

export default Link;