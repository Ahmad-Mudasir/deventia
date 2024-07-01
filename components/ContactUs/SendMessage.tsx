const SendMessage = () => {
  return (
    <form className="relative md:-top-28 bg-[#7571e6d4] p-8 mx-[5%] grid grid-cols-1 md:grid-cols-2 gap-8 py-32 ">
      <label className="flex flex-col gap-4 text-lg font-semibold w-full">
        Full Name
        <input
          type="text"
          name="fullName"
          defaultValue=""
          placeholder="Enter Your name"
          className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
        />
      </label>
      <label className="flex flex-col gap-4 text-lg font-semibold w-full">
        Your email
        <input
          type="email"
          name="email"
          defaultValue=""
          placeholder="Enter Your email"
          className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
        />
      </label>
      <label className="flex flex-col gap-4 text-lg font-semibold w-full">
        Phone number *
        <input
          type="tel"
          name="phoneNumber"
          defaultValue=""
          placeholder="Enter Your phone number"
          className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
        />
      </label>
      <label className="flex flex-col gap-4 text-lg font-semibold w-full">
        Subject
        <input
          type="text"
          name="Subject "
          defaultValue=""
          placeholder="Enter Your Subject"
          className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
        />
      </label>
      <label className="flex flex-col gap-4 text-lg font-semibold w-full col-span-1 md:col-span-2">
        Full Name
        <textarea
          name="Message"
          defaultValue=""
          placeholder="Enter your message here"
          className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal resize-none"
          rows={4}
        ></textarea>
      </label>
      <button className="bg-[#070707] px-8 py-3 font-semibold text-base w-fit col-span-1 md:col-span-2 block mx-auto">
        Send Message
      </button>
    </form>
  );
};
export default SendMessage;
