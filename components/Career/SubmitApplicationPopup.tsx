import Image from 'next/image';
import popup from '../../assets/images/submit-application-popup.webp';
const SubmitApplicationPopup = ({ setShowPopup }: { setShowPopup: any }) => {
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 bg-[#ffffffdb] flex items-center justify-center">
      <div className="px-12 py-6 flex flex-col items-center gap-8 bg-[#070707] shadow-lg max-w-sm">
        <div className="w-[200px] h-auto flex justify-center items-end">
          <Image src={popup} alt="popup" className="w-auto h-auto" />
        </div>
        <p className="text-center text-lg">
          Your application for this job role has been submitted successfully
        </p>
        <button
          onClick={() => {
            setShowPopup(false);
          }}
          className="bg-[#7571e67f] text-sm px-6 py-2 w-fit"
        >
          Back to home page
        </button>
      </div>
    </section>
  );
};
export default SubmitApplicationPopup;
