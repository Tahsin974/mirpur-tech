import map from "../../../assets/partners/map.png";
import partner1 from "../../../assets/partners/imgi_5_ISPAB-PNG-2-300x182-1.webp";
import partner2 from "../../../assets/partners/imgi_4_Summit-PNG-1-300x182-1.webp";
export default function OurPartnersSection() {
  return (
    <section
      id="partners"
      className="bg-white py-20"
      style={{
        backgroundImage: `url(${map})`,
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="md:text-4xl text-3xl  font-bold text-center text-gray-800">
          Our Partners
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 justify-items-center">
          {/* Partner logos can be added here */}
          <figure>
            <img src={partner1} alt="Partner 1" className="mx-auto" />
          </figure>
          <figure>
            <img src={partner2} alt="Partner 2" className="mx-auto" />
          </figure>
        </div>
      </div>
    </section>
  );
}
