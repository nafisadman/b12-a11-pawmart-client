import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero w-full h-96 object-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1655308071780-961844e87f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Meet Your New Best Friend
              </h1>
              <p className="mb-5">
                Discover joy, companionship, and unconditional love. Browse our
                shelter to find the perfect furry match waiting for you.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero w-full h-96 object-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Save a Life, Change Yours
              </h1>
              <p className="mb-5">
                Choose adoption and give a deserving animal a second chance. Be
                the hero they’ve been waiting for.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero w-full h-96 object-cover"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1723701896686-ce9de70e5645?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Where Hearts Meet Paws
              </h1>
              <p className="mb-5">
                Every pet deserves a safe haven and a loving family. Open your
                heart and your home to a loyal companion today.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
