import MenuItem from "./MenuItem";
import { BsFillHouseFill, BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwtich from "./DarkModeSwtich";

export default function Header() {
  return (
    <div className="container mx-auto px-5 py-5 flex justify-between ">
      <div className="flex mx-5 ">
        <MenuItem title="HOME" Address="/" Icons={BsFillHouseFill} />
        <MenuItem title="ABOUT" Address="/about" Icons={BsFillInfoCircleFill} />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwtich/>
        <Link href="/">
          <h2>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDB
            </span>{" "}
            <span className="">(Clone)</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
