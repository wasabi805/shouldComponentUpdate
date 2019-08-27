import React from "react";

const HeroPresenter = () => {
  return (
    <section id={"hero"}>
      <h1 className={"title"}>WELCOME</h1>

      <div className={"hero-bg"}>
        <img
          src={
            "https://timocampobucketstuff.s3.amazonaws.com/Toyota-AE86-tuning-custom-drift-race-racing-wallpaper-1920x1280.jpg"
          }
          alt={""}
        />
      </div>

      <div className={"overlay"} />
    </section>
  );
};

export default HeroPresenter;
