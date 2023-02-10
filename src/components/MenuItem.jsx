import React from "react";
import Link from "next/link";

export default function MenuItem({ title, Address, Icons }) {
  return (
    <div>
        <Link href={Address}>
          <Icons className="sm:hidden mr-5 text-xl hover:text-amber-500" />
          <p className="hidden sm:inline mr-5 hover:text-amber-500">{title}</p>
        </Link>
    </div>
  );
}
