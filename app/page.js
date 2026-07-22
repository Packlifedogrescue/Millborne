import Image from "next/image";
import mbMark from "../public/mb-mark.png";
import millborneWordmark from "../public/millborne-wordmark.png";

export default function Home() {
  return (
    <>
      <div className="frame">
        <Image
          src={mbMark}
          alt=""
          className="mark-img"
          priority
        />
        <h1>
          <Image
            src={millborneWordmark}
            alt="Millborne"
            className="wordmark-img"
            priority
          />
        </h1>
        <div className="rule"></div>
        <div className="tagline">Forged for Generations</div>

        <p className="story">
          Millborne began as a single set of irons, designed for one family
          and forged in carbon steel. Every detail on the page came first —
          the loft, the lie, the grain of the steel — long before anything
          else did.
        </p>
      </div>

      <div className="foot">Millborne</div>
    </>
  );
}
