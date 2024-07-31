import Hero from "@/components/ContactUs/Hero";
import SendMessage from "@/components/ContactUs/SendMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Need assistance or have questions? Contact us easily through our Contact Us page. Access our email, phone number, and office address, and let us know how we can assist you. We're here to provide support and answers to your inquiries.",
  openGraph: {
    title: "Contact Us",
    description: "Need assistance or have questions? Contact us easily through our Contact Us page. Access our email, phone number, and office address, and let us know how we can assist you. We're here to provide support and answers to your inquiries.",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://example.com/path-to-image.jpg", 
        width: 800,
        height: 600,
        alt: "Contact Us Image", 
      },
      {
        url: "https://example.com/path-to-alt-image.jpg",
        width: 1800,
        height: 1600,
        alt: "Contact Us Banner Image", 
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <>
      <Hero />
      <SendMessage />
    </>
  );
};
export default page;
