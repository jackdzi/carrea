import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url('/images/rice_wallpaper(1).svg')] bg-cover bg-center bg-no-repeat pb-0 pt-0 dark:bg-gray-dark"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center pt-[120px] pb-[160px] md:pt-[150px] md:pb-[180px] xl:pt-[180px] xl:pb-[200px] 2xl:pt-[210px] 2xl:pb-[240px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-darkDarkBlue sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Carrera - Rice University&apos;s <br />
                  First Solar Car Club
                </h1>
                <div className="mb-10 flex items-center justify-center rounded-md bg-gray-800/80 text-white font-semibold p-4">
                  <span className="block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://gmail.com"
                    className="rounded-sm bg-gray-800/80 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/60"
                  >
                    Join the discord!
                  </Link>
                  <Link
                    href="gmail.com"
                    className="rounded-sm bg-gray-800/80 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/60">
                    Other link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
