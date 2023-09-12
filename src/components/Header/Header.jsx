import React from "react";
import { HeaderBox } from "./style";

function Header() {
  return (
    <HeaderBox>
      <div className="container">
        <div className="header-list">
          <h3 className="header-name">
            Biznesingizni keyingi bosqichga olib chiqing
          </h3>
          <p className="header-text">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
          <a href="#" className="header-link">
            Xizmatlar bilan tanishish
          </a>
        </div>
        <iframe
          className="header-video"
          src="https://www.youtube.com/embed/0GIiAZW9UWU?si=MKpOZY2UIz5sHQyp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </HeaderBox>
  );
}

export default Header;
