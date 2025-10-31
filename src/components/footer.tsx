import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen py-4 bg-violet-300 text-violet-50">
      <div className="container flex flex-col items-center justify-between gap-4 px-8 mx-auto md:flex-row">
        <p className="text-sm text-center md:text-left">
          &copy; <strong className="font-semibold">NK</strong>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors duration-500 ease-in-out text-violet-50 hover:opacity-75"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#"
            className="text-sm text-center transition hover:underline hover:opacity-75 md:text-right"
          >
            Privacy Policy
          </a>

          <b>|</b>

          <a
            href="#"
            className="text-sm text-center transition hover:underline hover:opacity-75 md:text-right"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
