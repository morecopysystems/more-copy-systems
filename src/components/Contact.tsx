import MapContainer from "./MapContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Contact() {
  return (
    <section className="my-36" id="contact">
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center font-semibold py-5">Store Location</h1>
        <MapContainer />
      </MaxWidthWrapper>
    </section>
  );
}
