import { GoogleMapsEmbed } from "@next/third-parties/google";
import { MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * The embed needs a Maps API key. Without one we degrade to a link card rather
 * than shipping a broken iframe.
 */
export default function MapEmbed({
  height = 460,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-hairline bg-ink-900",
        className
      )}
    >
      {apiKey ? (
        <div className="[&_iframe]:block [&_iframe]:grayscale-[0.35] [&_iframe]:contrast-[1.1]">
          <GoogleMapsEmbed
            apiKey={apiKey}
            height={height}
            width="100%"
            mode="place"
            q="More+Copy+Systems,Kochi"
            loading="lazy"
          />
        </div>
      ) : (
        <a
          href={SITE.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start justify-end gap-3 p-8"
          style={{ minHeight: height }}
        >
          <MapPin className="h-6 w-6 text-accent" aria-hidden />
          <p className="font-display text-2xl">
            {SITE.address.line2}, {SITE.address.city}
          </p>
          <p className="text-sm text-paper-muted">{SITE.address.landmark}</p>
          <span className="mt-2 text-sm text-accent link-underline">Open in Google Maps</span>
        </a>
      )}
    </div>
  );
}
