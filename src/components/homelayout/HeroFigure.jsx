import React from "react";

const HeroFigure = () => {
  return (
    <div className="hero bg-primary py-10">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-16">
        <img
          src="https://plus.unsplash.com/premium_photo-1664304884562-22dba9aaa578?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm w-full rounded-lg shadow-2xl"
          alt="Dog being adopted"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">Why Adopt from PawMart?</h1>
          <p className="py-6 text-base lg:text-lg">
            Choosing adoption means giving a second chance to a pet who truly
            needs it. At PawMart, every animal comes from a rescue background —
            saved from abandonment, unsafe environments, or overcrowded
            shelters. By adopting instead of buying, you’re not only welcoming a
            loyal companion into your home but also helping reduce unethical
            breeding practices and supporting a more compassionate community.
            Your choice creates space for another life to be rescued. ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroFigure;