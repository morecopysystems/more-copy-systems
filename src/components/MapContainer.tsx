import { GoogleMapsEmbed } from "@next/third-parties/google";

const MapContainer = () => {
  return (
    <div className="">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}
        height={500}
        width="100%"
        mode="place"
        q="More+Copy+Systems,Kochi"
      />
    </div>
  );
};

export default MapContainer;
