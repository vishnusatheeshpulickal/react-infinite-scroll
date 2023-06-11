import React from "react";
import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Bars
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
}

export default Loader;
