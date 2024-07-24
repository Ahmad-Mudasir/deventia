import React from "react";

function LetsGetInTouch() {
  return (
    <div className="container flex flex-row w-full bg-[#7471E6] h-96 p-14">
      <div className="w-1/2">
        <h1 className="text-9xl">Lets get</h1>
        <h1 className="text-9xl">in touch</h1>
        <div className="flex flex-row text-2xl my-5">
          <p className="font-thin">Disclaimer:</p>
          <p className="italic font-bold">we talk too much</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-evenly">
        <div>
          <input type="text" placeholder="Name:" className="p-4 w-5/6 outline-none text-black" />
        </div>
        <div className="flex flex-row gap-7">
          <div>
            <input type="text" placeholder="Email:" className="p-4 outline-none text-black underline" />
          </div>
          <div>
            <input type="text" placeholder="Phone:" className="p-4 outline-none text-black" />
          </div>
        </div>
        <div>
          <input type="text" placeholder="Message:" className="p-4 outline-none w-5/6 text-black" />
        </div>
      </div>
    </div>
  );
}

export default LetsGetInTouch;
