import { GlobalSearch } from "./search";
import logo from "./../kuku/icons/Urdios-Logo-180x40.png";
import Image from "next/image";

export const TopNav = () => {
  return (
    <div className="shadow">
      <header>
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between p-4 `}
        >
          <div className="flex items-center space-x-2 ">
            <a href="#">
              <Image
                src={logo}
                className="rounded-t-xl max-w-44 rounded text-white"
                alt="tour"
                width={180}
                height={40}
                //   lxayout="fill"
              />
              {/* <svg className="h-6" viewBox="0 0 111 21">
                <path
                  className="fill-rose-600"
                  d="M9.45569.11334C9.33771.0392836 9.20123 0 9.06194 0c-.1393 0-.27577.0392836-.39375.11334-.94292.60914-1.81132 1.32652-2.5875 2.1375-1.725 1.79062-2.64375 3.74062-2.64375 5.625 0 1.49184.59263 2.92256 1.64752 3.97746 1.05489 1.0549 3.97748 1.6475 3.97748 1.6475s2.92256-.5926 3.97746-1.6475c1.0549-1.0549 1.6475-2.48562 1.6475-3.97746 0-4.49063-5.01559-7.63125-5.23121-7.7625ZM9.06194 12.0008c-.29582.0013-.58896-.0561-.86251-.1687-.27354-.1126-.52207-.2783-.73125-.4875-.20918-.2092-.37486-.4577-.4875-.7313-.11263-.2735-.16998-.5666-.16874-.86246 0-2.25 2.25-3.75 2.25-3.75s2.24996 1.5 2.24996 3.75c.0013.29586-.0561.58896-.1687.86246-.1126.2736-.2783.5221-.4875.7313-.2092.2092-.4577.3749-.73126.4875-.27354.1126-.56668.17-.8625.1687Zm8.96246 6.975c-.0477.1518-.1424.2845-.2705.3788-.1281.0944-.2829.1456-.442.1462-.0766.0014-.1529-.0113-.225-.0375l-8.02496-2.55-8.025 2.55c-.072085.0262-.148343.0389-.225003.0375-.159092-.0006-.313864-.0518-.441943-.1462-.128079-.0943-.22283-.227-.2705568-.3788-.0304549-.0935-.0419719-.1922-.0338781-.2902.0080939-.098.0356359-.1935.0810189-.2807.045383-.0873.107697-.1647.183304-.2276.075607-.0629.162993-.1102.257055-.139l6.000003-1.9125-6.000003-1.9125c-.101479-.0226-.197151-.066-.280941-.1276-.08379-.0615-.153868-.1398-.205786-.2299-.0519183-.0901-.0845418-.19-.09579985-.2933-.01125803-.1034-.00090453-.2079.03040305-.3071.0313075-.0991.0828848-.1907.1514588-.2688.068574-.0781.152646-.1412.246879-.1851.094233-.0439.196569-.0678.30051-.07.103942-.0023.20722.0171.303279.0568l8.025 2.55 8.02496-2.55c.0961-.0397.1994-.0591.3033-.0568.104.0022.2063.0261.3005.07.0943.0439.1783.107.2469.1851.0686.0781.1202.1697.1515.2688.0313.0992.0416.2037.0304.3071-.0113.1033-.0439.2032-.0958.2933-.052.0901-.122.1684-.2058.2299-.0838.0616-.1795.105-.281.1276l-6 1.9125 6 1.9125c.0941.0288.1815.0761.2571.139.0756.0629.1379.1403.1833.2276.0454.0872.0729.1827.081.2807.0081.098-.0034.1967-.0339.2902Z"
                ></path>
                <path
                  className="fill-gray-900"
                  d="M30.3039 17.24c-.9467 0-1.8-.1467-2.56-.44-.76-.3067-1.4067-.7533-1.94-1.34-.5334-.6-.9467-1.34-1.24-2.22-.2934-.8933-.44-1.9333-.44-3.12 0-1.17334.1466-2.21334.44-3.12.2933-.92.7066-1.68667 1.24-2.3.5333-.62667 1.18-1.1 1.94-1.42.76-.32 1.6133-.48 2.56-.48 1.2933 0 2.36.26666 3.2.8.84.52 1.5133 1.34666 2.02 2.48l-2.62 1.36c-.1867-.58667-.48-1.05334-.88-1.4-.3867-.36-.96-.54-1.72-.54-.8934 0-1.6134.29333-2.16.88-.5334.57333-.8 1.41333-.8 2.52v2.24c0 1.1067.2666 1.9533.8 2.54.5466.5733 1.2666.86 2.16.86.7466 0 1.34-.2 1.78-.6.4533-.4133.7866-.9067 1-1.48l2.48 1.44c-.52 1.0667-1.2067 1.8933-2.06 2.48-.84.5733-1.9067.86-3.2.86ZM43.3712 15.24c-.08.28-.3067.5467-.48.8-.1733.24-.3867.4533-.64.64-.24.1733-.52.3067-.84.4-.3067.1067-.6267.16-.96.16-1.3333 0-2.34-.4667-3.02-1.4-.68-.9467-1.02-2.3133-1.02-4.1 0-1.78667.34-3.14667 1.02-4.08.68-.93334 1.6867-1.4 3.02-1.4.68 0 1.28.18666 1.8.56.5333.37333.9733.85333 1.12 1.44V6.5h2.96V17h-2.96v-1.76Zm-1.94-.4c.56 0 1.02-.1333 1.38-.4.3733-.28.56-.66.56-1.14v-3.1c0-.48-.1867-.85334-.56-1.12-.36-.28-.82-.42-1.38-.42-.56 0-1.0267.2-1.4.6-.36.38666-.54.9133-.54 1.58v1.82c0 .6667.18 1.2.54 1.6.3733.3867.84.58 1.4.58ZM48.4992 17V6.5h2.96v1.78c.1866-.56.6266-1.03334 1.08-1.42.4533-.4 1.0733-.6 1.86-.6.72 0 1.3333.18 1.84.54.5066.36.8733.88666 1.1 1.58.0933-.29334.2933-.56667.48-.82.2-.26667.44-.49334.72-.68.28-.18667.5933-.33334.94-.44.3467-.12.72-.18 1.12-.18 1.0133 0 1.7866.36 2.32 1.08.5466.72.82 1.74666.82 3.08V17h-2.96v-6.34c0-1.33334-.48-2-1.44-2-.44 0-.84.12666-1.2.38-.36.25333-.54.64-.54 1.16V17h-2.96v-6.34c0-1.33334-.48-2-1.44-2-.2134 0-.4267.03333-.64.1-.2.05333-.3867.14666-.56.28-.16.13333-.2934.3-.4.5-.0934.18666-.14.40666-.14.66V17h-2.96ZM65.7703 6.5h2.96v1.76c.1466-.58667.58-1.06667 1.1-1.44.5333-.37334 1.14-.56 1.82-.56 1.3333 0 2.34.46666 3.02 1.4.68.93333 1.02 2.29333 1.02 4.08 0 1.7867-.34 3.1533-1.02 4.1-.68.9333-1.6867 1.4-3.02 1.4-.3467 0-.6734-.0533-.98-.16-.3067-.0933-.5867-.2267-.84-.4-.24-.1867-.4467-.4-.62-.64-.1734-.2533-.4-.52-.48-.8V21h-2.96V6.5Zm4.9 8.34c.56 0 1.02-.1933 1.38-.58.3733-.4.56-.9333.56-1.6v-1.82c0-.6667-.1867-1.19334-.56-1.58-.36-.4-.82-.6-1.38-.6-.56 0-1.0267.14-1.4.42-.36.26666-.54.64-.54 1.12v3.1c0 .48.18.86.54 1.14.3733.2667.84.4 1.4.4ZM77.4982 17V3.04h9.26v2.7h-6.22V8.6h5.3v2.68h-5.3V17h-3.04ZM89.9175 5.38c-.6 0-1.04-.13334-1.32-.4-.2667-.28-.4-.63334-.4-1.06v-.44c0-.42667.1333-.77334.4-1.04.28-.28.72-.42 1.32-.42.6 0 1.0333.14 1.3.42.28.26666.42.61333.42 1.04v.44c0 .42666-.14.78-.42 1.06-.2667.26666-.7.4-1.3.4Zm-1.48 1.12h2.96V17h-2.96V6.5ZM93.5601 17V6.5h2.96v2.28c.0534-.29334.2467-.57334.38-.84.1334-.28.3067-.52667.52-.74.2267-.21334.4934-.38.8-.5.3067-.13334.6667-.2 1.08-.2h.52v2.76h-.74c-.8666 0-1.5133.11333-1.94.34-.4133.22666-.62.6467-.62 1.26V17h-2.96ZM105.328 17.24c-.8 0-1.513-.1267-2.14-.38-.626-.2667-1.16-.6333-1.6-1.1-.426-.48-.753-1.06-.98-1.74-.213-.68-.32-1.44-.32-2.28 0-.8267.107-1.5733.32-2.24.214-.68.527-1.26.94-1.74.427-.48.947-.84667 1.56-1.1.614-.26667 1.314-.4 2.1-.4.867 0 1.607.14666 2.22.44.627.29333 1.134.68666 1.52 1.18.4.49333.687 1.06666.86 1.72.187.64.28 1.3133.28 2.02v.88h-6.74v.16c0 .6933.187 1.2467.56 1.66.374.4.96.6 1.76.6.614 0 1.114-.12 1.5-.36.387-.2533.747-.5533 1.08-.9l1.48 1.84c-.466.5467-1.08.9733-1.84 1.28-.746.3067-1.6.46-2.56.46Zm-.06-8.8c-.6 0-1.073.2-1.42.6-.333.38666-.5.90666-.5 1.56v.16h3.68v-.18c0-.64-.146-1.15334-.44-1.54-.28-.4-.72-.6-1.32-.6Z"
                ></path>
              </svg> */}
            </a>
          </div>
          <GlobalSearch />
          <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
            <a
              href="#"
              className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
            >
              {" "}
              Pricing{" "}
            </a>
            <a
              href="#"
              className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
            >
              {" "}
              Login{" "}
            </a>
            <a
              href="#"
              className="rounded bg-pinkDark px-3 py-2 text-white transition hover:bg-pink-500"
            >
              {" "}
              Sign Up{" "}
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};