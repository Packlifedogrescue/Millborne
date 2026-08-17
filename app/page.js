import Image from "next/image";
import mCrest from "../public/m-crest.png";
import millborneWordmark from "../public/millborne-wordmark.png";

export default function Home() {
  return (
    <>
      <div className="frame">
        <Image
          src={mCrest}
          alt=""
          className="mark-img crest-img"
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
          Founded in 2026, Millborne was created around a simple belief: the
          finest golf equipment should outlast trends. Inspired by the
          traditions of forged clubmaking and the idea of passing the game
          from one generation to the next, Millborne builds equipment with
          purpose, restraint, and permanence.
        </p>

        <a
          href="https://tracerbuddy.app"
          target="_blank"
          rel="noopener noreferrer"
          className="sibling-link"
        >
          Tracerbuddy
        </a>
      </div>
    </>
  );
}
