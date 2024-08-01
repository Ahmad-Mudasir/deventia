import React from "react";
import Loaderimg from '../../assets/images/Loading_GIF_LOOP.gif';
import Image from "next/image";

function Loader() {
  return (
    <section className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 h-full w-full">
      <div className="flex items-center justify-center h-full w-full p-6 bg-transparent rounded-lg shadow-xl max-w-sm w-full gap-6 animate-fadeIn">
        <Image src={Loaderimg} className="max-h-full max-w-full" alt="Loading" />
      </div>
    </section>
  );
}

export default Loader;
