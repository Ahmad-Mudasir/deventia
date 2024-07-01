import { FaFile, FaFileUpload } from 'react-icons/fa';

const JobApplication = () => {
  return (
    <form className="bg-[#7571e618] p-8 w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
      <h1 className="font-bold text-lg md:text-xl mb-8 col-span-1 md:col-span-3">
        Software Engineer
      </h1>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        First Name
        <input
          type="text"
          name="firstName"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Middle Name
        <input
          type="text"
          name="middleName"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Last Name
        <input
          type="text"
          name="lastName"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Birth Date
        <input
          type="date"
          name="birthDate"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Email Address
        <input
          type="email"
          name="email"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>

      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Phone Number
        <input
          type="tel"
          name="phoneNumber"
          defaultValue=""
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full col-span-1 md:col-span-3">
        About You
        <textarea
          name="aboutYou"
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a] resize-none"
          rows={5}
        ></textarea>
      </label>
      <p className="text-base text-[#E9E9E9] font-medium col-span-1 md:col-span-3 -mb-8">
        Attach your resume
      </p>
      <label className="relative flex flex-col gap-2 w-full">
        <input
          type="file"
          name="phoneNumber"
          defaultValue=""
          placeholder="Write here"
          // className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
          className="w-[0.01px] h-[0.01px] absolute"
        />
        <div className="flex gap-4 text-[#E9E9E9] bg-[#f5f5f5cc] border-2 border-[#b0b0b0] border-dashed p-4 w-full cursor-pointer">
          <div className="p-4 rounded-xl bg-[#6366F1]">
            <FaFileUpload size={20} />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#535768] font-semibold text-base">
              Upload Files
            </h4>
            <p className="text-xs text-[#A5A5A5]">PDF, JPG, PNG</p>
          </div>
        </div>
      </label>

      <div className="relative flex gap-4 text-[#E9E9E9] bg-transparent border-2 border-[#6366F1] p-4 w-full h-fit">
        <div className="absolute -right-[13px] -top-[13px] bg-red-500 size-[26px] font-bold flex items-center justify-center rounded-full cursor-pointer">
          x
        </div>
        <div className="p-4 rounded-xl bg-[#f6eeffe7] flex items-center justify-center">
          <FaFile className="text-[#6366F1]" size={20} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base">Contact_2020.pdf</h4>
          <p className="text-sm text-[#6366F1]">456 KB</p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#6366F1] px-12 py-3 font-semibold text-balance w-fit block mx-auto col-span-1 md:col-span-3"
      >
        Submit
      </button>
    </form>
  );
};
export default JobApplication;
