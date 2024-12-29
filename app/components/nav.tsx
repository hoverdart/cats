import Link from 'next/link'
import {Slider} from "@nextui-org/slider";

const navItems = {
  '/': {
    name: 'Home',
  },
  '/bruce': {
    name: 'Bruce',
  },
  '/clark': {
    name: 'Clark',
  },
}

export function Navbar() { //flex align-middle relative py-1 px-2 m-1 
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">

        <nav className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10 pl-5 text-xl">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 hover:scale-125 flex align-middle relative py-1 px-2 m-1">
                  {name}
                </Link>
              )
            })}
          </div>

          <Slider className="py-1 max-w-sm pr-5 m-1" defaultValue={600} label="imageSize" maxValue={1000} minValue={100} step={0.01} />
          
        </nav>
      </div>
    </aside>
  )
}
