"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface Navigation {
  title: string;
  href: string;
}
  const navigation:Navigation[] = [
    { title: "Pricing", href: "#" },
    { title: "Contact", href: "#" },
  ];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();



  return (
   
    <section className="fixed z-50 w-full bg-zinc-900/50 backdrop-blur-2xl">
      <div className="w-full mx-auto py-4">
        <div
          x-data="{ open: false }"
          className="relative flex flex-col w-full mx-auto max-w-screen-2xl px-8 md:items-center md:justify-between md:flex-row"
        >
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a className="text-white inline-flex items-center gap-2 uppercase" href="/">
              <svg
                className="h-5"
                viewBox="0 0 56 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.68 10.12C3.752 10.12 2.956 9.952 2.292 9.616C1.628 9.272 1.12 8.792 0.768 8.176C0.416 7.552 0.24 6.82 0.24 5.98C0.24 5.14 0.416 4.412 0.768 3.796C1.12 3.172 1.628 2.692 2.292 2.356C2.956 2.012 3.752 1.84 4.68 1.84C5.584 1.84 6.356 1.976 6.996 2.248C7.644 2.52 8.14 2.912 8.484 3.424C8.828 3.936 9 4.552 9 5.272V5.476H6.48V5.272C6.48 4.816 6.352 4.492 6.096 4.3C5.84 4.1 5.38 4 4.716 4C4.172 4 3.748 4.056 3.444 4.168C3.148 4.272 2.94 4.468 2.82 4.756C2.7 5.036 2.64 5.444 2.64 5.98C2.64 6.508 2.7 6.916 2.82 7.204C2.94 7.492 3.148 7.692 3.444 7.804C3.748 7.908 4.172 7.96 4.716 7.96C5.38 7.96 5.84 7.864 6.096 7.672C6.352 7.472 6.48 7.144 6.48 6.688V6.484H9V6.688C9 7.4 8.828 8.016 8.484 8.536C8.14 9.048 7.644 9.44 6.996 9.712C6.356 9.984 5.584 10.12 4.68 10.12ZM11.6464 10H9.11437L12.5824 1.96H15.8104L19.2904 10H16.6984L14.7904 5.356L14.2624 4H14.1064L13.5904 5.356L11.6464 10ZM17.0944 8.512H11.1664V6.484H17.0944V8.512ZM21.7879 10H19.5319V1.96H24.2239C24.9359 1.96 25.5319 2.056 26.0119 2.248C26.4919 2.44 26.8519 2.72 27.0919 3.088C27.3399 3.448 27.4639 3.892 27.4639 4.42C27.4639 4.844 27.3879 5.212 27.2359 5.524C27.0919 5.828 26.8599 6.076 26.5399 6.268C26.2199 6.452 25.8039 6.576 25.2919 6.64V6.76C25.7079 6.864 26.0039 7.02 26.1799 7.228C26.3639 7.428 26.5319 7.68 26.6839 7.984L27.6799 10H25.0759L24.1159 8.032C24.0199 7.832 23.9199 7.676 23.8159 7.564C23.7119 7.452 23.5759 7.376 23.4079 7.336C23.2399 7.288 23.0079 7.264 22.7119 7.264H21.7879V10ZM21.7879 3.988V5.584H24.1999C24.5279 5.584 24.7599 5.536 24.8959 5.44C25.0319 5.344 25.0999 5.124 25.0999 4.78C25.0999 4.46 25.0319 4.248 24.8959 4.144C24.7599 4.04 24.5279 3.988 24.1999 3.988H21.7879ZM33.4277 10H28.0397V1.96H33.1517C33.7357 1.96 34.2197 2.036 34.6037 2.188C34.9877 2.332 35.2757 2.548 35.4677 2.836C35.6597 3.124 35.7557 3.48 35.7557 3.904C35.7557 4.416 35.6037 4.84 35.2997 5.176C35.0037 5.512 34.4877 5.696 33.7517 5.728V5.848C34.5597 5.88 35.1557 6.068 35.5397 6.412C35.9317 6.756 36.1277 7.208 36.1277 7.768C36.1277 8.216 36.0357 8.608 35.8517 8.944C35.6677 9.28 35.3757 9.54 34.9757 9.724C34.5837 9.908 34.0677 10 33.4277 10ZM30.2837 6.856V7.972H33.1397C33.4117 7.972 33.5957 7.936 33.6917 7.864C33.7957 7.784 33.8477 7.632 33.8477 7.408C33.8477 7.184 33.7997 7.036 33.7037 6.964C33.6077 6.892 33.4197 6.856 33.1397 6.856H30.2837ZM30.2837 3.988V5.008H32.9117C33.1437 5.008 33.2997 4.972 33.3797 4.9C33.4597 4.82 33.4997 4.688 33.4997 4.504C33.4997 4.32 33.4477 4.188 33.3437 4.108C33.2477 4.028 33.0837 3.988 32.8517 3.988H30.2837ZM48.9168 10H46.6608V1.96H49.0608L51.2928 4.972L52.4688 6.82H52.6248L52.5168 5.068V1.96H54.7728V10H52.3728L49.9968 6.904L48.9768 5.32H48.8208L48.9168 6.856V10Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.3897 2.45139L41.3905 2.90278L41.233 4.32711L41.0755 5.75144L41.0933 5.76925L41.1111 5.78703L41.1202 5.77547L41.1292 5.76389L42.0066 4.66667L42.884 3.56944L43.2199 3.23642L43.5558 2.90339L43.8265 3.17472L44.0972 3.44608L43.7068 3.82719L43.3164 4.20833L43.1374 4.35133L42.9583 4.49433L42.0972 5.18056L41.2361 5.86678L41.2272 5.90531L41.2183 5.94386L41.2966 5.92964L41.375 5.91542L42.7354 5.76325L44.0957 5.61111H44.5479H45V5.98611V6.36111H44.4622H43.9243L42.6774 6.22283L41.4306 6.08453L41.3403 6.07181L41.25 6.05905V6.09408V6.12914L42.0625 6.77967L42.875 7.43019L43.1944 7.69858L43.5139 7.967L43.805 8.26125L44.0962 8.5555L43.8353 8.81747L43.5744 9.07944L43.2205 8.74111L42.8665 8.40278L42.6515 8.125L42.4364 7.84722L42.2069 7.56944L41.9774 7.29167L41.5373 6.73864L41.0972 6.18561L41.089 6.22789L41.0807 6.27017L41.2348 7.66483L41.3889 9.0595V9.52975V10H41.0139H40.6389L40.6389 9.4375L40.639 8.875L40.7778 7.58494L40.9167 6.29486V6.25622V6.21758L40.8918 6.22686L40.867 6.23611L40.4703 6.73611L40.0736 7.23611L39.9492 7.38889L39.8247 7.54167L39.4577 8L39.0907 8.45833L38.7606 8.76564L38.4306 9.07294L38.1667 8.81558L37.9028 8.55825L38.257 8.20272L38.6112 7.84722L39.6923 6.98611L40.7734 6.125L40.7756 6.08994L40.7778 6.05489L40.6736 6.07011L40.5694 6.08533L39.3056 6.22314L38.0417 6.36092L37.5208 6.361L37 6.36111V6.00131V5.64147L37.4653 5.633L37.9306 5.62453L39.2778 5.76983L40.625 5.91514L40.7014 5.92911L40.7778 5.94306V5.90747V5.87189L40.1899 5.40122L39.6021 4.93056L39.2 4.61336L38.7978 4.29614L38.3642 3.88014L37.9306 3.46414L37.9235 3.44692L37.9164 3.42972L38.1805 3.16675L38.4445 2.90378L38.7665 3.22272L39.0884 3.54167L39.661 4.25L40.2335 4.95833L40.5669 5.37167L40.9004 5.785L40.9095 5.75758L40.9186 5.73019L40.7788 4.41767L40.6389 3.10514V2.55256V2H41.0139H41.3889L41.3897 2.45139Z"
                  fill="currentColor"></path>
              </svg>
              
            </a>
            <button
              className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none focus:text-white md:hidden"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
                <path
                  className="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav
            className="flex-col items-center text-base text-white tracking-wide font-light uppercase gap-6 flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <a className="hover:text-accent-500 h-9 p-2 lg:ml-auto" href="/">
              Overview</a
            >
            <a className="hover:text-accent-500 h-9 p-2" href="/system/style-guide">
              Style Guide</a
            >
    
    
           
    
            <div className="flex justify-center">
              <a
                className="py-1 pl-4 duration-200 pr-2 gap-12 border-accent-500 bg-accent-500 hover:text-black h-12 hover:bg-white text-white justify-between uppercase border-2 hover:border-white rounded-full inline-flex items-center w-full"
                href="/system/style-guide"
              >
                Buy Carbon
    
                <div
                  className="bg-black h-8 w-8 text-white inline-flex items-center justify-center rounded-full"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 32 32"
                      ><path
                        fill="currentColor"
                        d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
                      ></path></svg
                    ></span
                  >
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
    
  );
}
