import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/soon.json";
function Blogs() {
  if (!localStorage.getItem("comingSoon")) {
    localStorage.setItem("comingSoon", JSON.stringify(animationData));
  }
  const data = JSON.parse(localStorage.getItem("comingSoon"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data ? data : animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <div>
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    </div>
  );
}

export default Blogs;
