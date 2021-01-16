import React from 'react';
import "./style.css";

const banner = (props:any) => {
  return <div className={'bannerContainer ' + props.day}>
      <button onClick={props.clickHandler}>
                test
      </button>
  </div>;
};
export default banner;