import React from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";

const PrivacyPolicy = () => {
  return (
    <section className="p-20">
      <Paragraph text={"Last Updated On: 11/05/2024"} />
      <Heading text={"Welcome to DevEntia Tech (Pvt.) Ltd"} />
      <p className="text-[14.58px] my-4 text-[#DFDFDF] leading-6">
        At{" "}
        <span className="text-white font-bold">DevEntia Tech (Pvt.) Ltd</span>,
        we prioritize your privacy and are committed to protecting your personal
        information. This Privacy Policy explains our online information
        practices, what data we collect, and how we use it. To make this
        information accessible, we provide this Privacy Policy on our homepage
        and at every point where personally identifiable information may be
        requested.
      </p>
      {/* data collection block */}
      <div>
        <Heading text={"Data We Collect And How We Use It"} />
        <Paragraph
          text={
            "At DevEntia Tech (Pvt.) Ltd., we prioritize your privacy and only collect the minimum necessary information to facilitate communication and service inquiries. As a service-based company, our website serves as a portfolio to showcase our expertise in custom software development. You are not required to register, create an account, or provide sensitive financial information to browse our website."
          }
        />
        <Heading text={"Information You Provide Voluntarily"} />
        <Paragraph
          text={
            "When you schedule a meeting or contact us through our website, we may ask for basic contact details, such as your name, email address, and phone number. This information allows us to respond to your inquiries and communicate effectively regarding our services."
          }
        />
        <Heading text={"Technical Information"} />
        <Paragraph
          text={
            "To improve our website’s functionality and your user experience, we may collect limited technical information, including your IP address, browser type, and interactions with our website. This information helps us optimize our site’s performance, troubleshoot issues, and analyze site usage for improvement. Such technical data is anonymized and does not identify individual users."
          }
        />
        <Heading text={"Optional Information"} />
        <Paragraph
          text={
            "Occasionally, we may offer surveys or request feedback to enhance our services. Participation in these requests is entirely optional, and any information you choose to provide will be used solely for internal improvements and customer service evaluation."
          }
        />
        <Heading text={"Cookies"} />
        <Paragraph
          text={
            "We may use cookies to enhance your browsing experience and improve website functionality. You can choose to accept or reject cookies through your browser settings. Please note that rejecting cookies may limit certain functionalities on our site."
          }
        />
      </div>
      {/* data collection block end */}
    </section>
  );
};

export default PrivacyPolicy;
