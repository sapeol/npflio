import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]   justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start lg:max-w-[40vw]">
        <h1 className="text-2xl font-bold	">Hi, I&apos;m Sudeep Kuchara</h1>
        <p className="text-lg flex gap-3 items-center">
          Senior frontend engineer at{" "}
          <a
            className="text-xl font-semibold  hover:underline-offset-4 underline mb-1"
            href="https://www.iiclab.com"
            title="Ink in Caps"
            target="_blank"
          >
            <Image
              src="/iiclab.webp"
              alt="Ink in Caps"
              width={100}
              height={30}
            />
          </a>{" "}
        </p>
        {/* rotate: 81deg;
        transform-origin: 13% 52%; */}
        <p>
          Currently building
          <a
            className="text-xl font-semibold  hover:underline-offset-4 underline mb-1"
            href="https://www.vretail.space"
            target="_blank"
            title="Vretail space"
          >
            <Image
              className="inline mx-2"
              src="/vretail.svg"
              alt="Vretail"
              width={100}
              height={100}
            />
          </a>
          with my mates in the office.
        </p>

        <p className="text-xl font-semibold mt-[4rem]"> Recent work: </p>
        <ul className="flex flex-wrap gap-4 mt-4 items-center justify-center">
          <li className="flex flex-col">
            <a
              className=" font-semibold  hover:underline-offset-4 underline"
              href="https://www.vretail.space"
              target="_blank"
              title="Vretail space"
            >
              <Image
                className="inline mx-2"
                src="/vretail.svg"
                alt="Vretail"
                width={100}
                height={100}
              />
            </a>
            {/* <button className="my-3 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
              Case Study
            </button> */}
          </li>
          <li>
            <a
              className="text-xl font-semibold    flex items-center gap-2"
              href="https://beta.knky.co/"
              target="_blank"
              title="KNKY"
            >
              <svg
                width="40"
                height="39"
                viewBox="0 0 64 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0198 1.34475C16.1109 -0.309307 20.7568 -0.431184 24.9346 0.944291C26.9281 1.60591 28.783 2.59834 30.4819 3.85194C29.1471 5.10554 27.9856 6.51584 26.9455 8.0306C24.7959 6.41137 22.1263 5.50599 19.422 5.43635C16.4923 5.33188 13.528 6.23726 11.153 7.96096C8.55273 9.84135 6.66318 12.6619 5.90042 15.7611C5.15501 18.7732 5.41504 22.0465 6.69785 24.8671C7.94599 27.6529 10.1649 29.986 12.8866 31.3789C15.2615 32.5976 18.0005 33.0677 20.6528 32.7543C23.8945 32.3713 26.9802 30.7521 29.1471 28.3145C31.8687 25.3024 33.1862 21.0019 32.4408 16.9973C32.3714 16.4924 32.1807 15.9875 32.3368 15.5C32.9955 13.428 34.1743 11.5302 35.7345 10.0155C37.9187 14.1071 38.5775 19.017 37.5027 23.5439C36.3239 28.6976 32.8742 33.2767 28.2803 35.8361C25.0733 37.6643 21.3288 38.5 17.6711 38.2388C13.9093 37.9777 10.2516 36.5499 7.28725 34.1995C3.99354 31.5878 1.5666 27.8792 0.561152 23.7876C-0.565643 19.2956 0.0237575 14.4031 2.156 10.294C4.25357 6.27208 7.80731 3.03362 12.0198 1.34475ZM32.3541 4.06087C35.9252 1.22287 40.5364 -0.239662 45.0609 0.0389151C49.7587 0.265259 54.3526 2.372 57.6116 5.76716C61.0787 9.31902 63.0549 14.2638 63.0029 19.2433C63.0376 25.3198 59.9346 31.3092 54.9767 34.774C50.0361 38.3433 43.3447 39.2313 37.6067 37.1942C35.7691 36.55 34.053 35.5923 32.5274 34.4084C33.8623 33.1722 35.0931 31.8141 36.0465 30.2471C38.2134 31.8315 40.8311 32.7717 43.5007 32.8414C46.5517 32.9633 49.6547 32.0057 52.099 30.1775C54.5433 28.3667 56.3808 25.7028 57.1609 22.743C58.0277 19.5045 57.6636 15.9701 56.1728 12.9753C54.8726 10.3637 52.7057 8.1873 50.1054 6.88147C47.7132 5.66269 44.9395 5.19259 42.2699 5.54082C39.3576 5.90645 36.6012 7.29933 34.521 9.37125C32.2501 11.6173 30.8113 14.6642 30.5166 17.8504C30.3605 19.3652 30.5165 20.8974 30.7246 22.3947C30.3259 24.693 28.939 26.7301 27.2402 28.2797C25.368 24.7975 24.6052 20.7407 25.1079 16.8058C25.7493 11.8088 28.4016 7.12522 32.3541 4.06087Z"
                  fill="#ac1991"
                />
              </svg>{" "}
              KNKY
            </a>
          </li>
          <li>
            <a
              className="text-xl font-semibold  hover:underline-offset-4 underline items-center"
              href="https://vestate.io/"
              target="_blank"
              title="Vestate"
            >
              <Image
                className="inline mx-2"
                src="/vestate.svg"
                alt="Ink in Caps"
                width={100}
                height={30}
              />
            </a>
          </li>
        </ul>

        <section> </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sudeepiic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="github-mark.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          github (work)
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sapeol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="github-mark.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          github (personal)
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/sudeep-kuchara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/in.png"
            alt="Window icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
