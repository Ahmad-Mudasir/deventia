const OurCoreValues = () => {
  return (
    <section className="our-core-values-bg p-[5%]">
      <h1 className="font-medium text-2xl lg:text-4xl">OUR CORE VALUES</h1>
      <p className="text-base mt-4">
        At Deventia, integrity, innovation, and dedication are more than just
        words—they&apos;re the pillars of our approach. We prioritize trust
        through transparency, drive progress through bold creativity, and
        deliver excellence with unwavering commitment.
      </p>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-16">
        <div>
          <h2 className="text-3xl">Integrity</h2>
          <p className="text-lg mt-4">
            We uphold trust through transparency and reliability.
          </p>
        </div>
        <div className="border-y-2 lg:border-y-0 border-x-0 lg:border-x-2 border-white py-12 lg:py-0 px-0 lg:px-20">
          <h2 className="text-3xl">Innovation</h2>
          <p className="text-lg mt-4">
            We pioneer progress through bold experimentation and creativity.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">Dedication</h2>
          <p className="text-lg mt-4">
            We are unwavering in our pursuit of excellence and precision.
          </p>
        </div>
      </div>
    </section>
  );
};
export default OurCoreValues;
