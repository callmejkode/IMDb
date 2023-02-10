import React from 'react'
import Link from 'next/link'


export default function NavbarItem({title, params}) {
  return (
    <div>
        <Link href={`/?genre=${params}`} className={`m-4 hover:text-amber-600 font-bold p-2`}>
            {title}
        </Link>
    </div>
  )
}
