import React from 'react';
import "./style.css";

const banner = (props:any) => {
  var sectionStyle = {
    backgroundImage: "url(" + props.background + ")",
  };
  return <div className="bannerContainer" style={sectionStyle}>
      <button>
                test
      </button>
  </div>;
};
export default banner;