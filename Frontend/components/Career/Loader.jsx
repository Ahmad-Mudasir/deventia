import React from "react";
import Loaderimg from '../../assets/images/Loading_GIF_LOOP.gif';
import Image from "next/image";

function Loader() {
  return (
    <section className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 h-screen w-screen">
      <div className="flex items-center justify-center h-full w-full  bg-transparent rounded-lg shadow-xl max-w-sm w-full gap-6 animate-fadeIn">
        <Image src={Loaderimg} className="h-96 w-96" alt="Loading" />
      </div>
    </section>
  );
}

export default Loader;
