import React from "react";

const Importance = () => {
  return (
    <div className="w-screen min-h-screen text-center p-10 lg:p-20 space-y-3 bg-[#374957] text-white font-ubuntu">
      <h1 className="text-[#4fbbb7] font-bold text-4xl">
        Why are these beliefs important to us?
      </h1>
      <p className="text-xl lg:w-2/3 mx-auto">
        The basic philosophy, spirit, and drive of an organization have far more
        to do with its achievements than resources, structure, innovation and
        timing.
      </p>
      <div className="flex flex-col lg:flex-row text-left pt-20 space-y-10 lg:space-y-0 lg:space-x-5 items-start">
        <div className="flex space-x-4">
          <p className="text-6xl font-bold text-[#4fbbb7]">1</p>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold text-[#4fbbb7]">Precision</p>
            <p className="text-sm">
              For us, Precision is not just a commitment but a constant pursuit.
              In our business, random errors in reporting or from machines can
              be fatal. Being fully aware of this, with our focus on precision,
              we aim to design random errors out of the diagnosis process
              altogether by being on a constant pursuit of higher precision. To
              consistently improve precision in the diagnostic process and
              reduce the role of random errors either from machines or reporting
              falls directly in our vision.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex space-x-4">
          <p className="text-6xl font-bold text-[#4fbbb7]">2</p>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold text-[#4fbbb7]">Excellence</p>
            <p className="text-sm">
              To be good enough, is not our aim. It is to be excellent.
              Continuously Excellent. To always be in a pursuit of continuous
              excellence in all the areas that we provide service. We believe in
              chasing an ever - higher standard at all times. In our vision of
              preserving lives, excellence in every single step is a necessity
              which cannot be looked over even on a single day.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex space-x-4">
          <p className="text-6xl font-bold text-[#4fbbb7]">3</p>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold text-[#4fbbb7]
            ">Accuracy</p>
            <p className="text-sm">
              When a patient walks in for a medical test, she has a million
              anxious thoughts racing through her mind. It makes you feel
              vulnerable. These feelings of anxiety and vulnerability can
              unnerve patients, which is caused by the degree of uncertainty
              they have to face to which they may not be used to in their
              everyday lives. At times, the feeling of uncertainty itself is
              more frightening than the thing you fear. Although, these feelings
              about a medical test can never fully be relieved, it can be dealt
              with more effectively by providing highly accurate test results
              from our end. In fact, it is our duty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importance;
