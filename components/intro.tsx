import TsBg from './ts-bg'
import Container from './container'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro({logoImage, allSetting}) {
  const title = allSetting.title
  return (
    <section className="bg-red-700 ] h-[120px] relative">
      <TsBg />
      <div className='Top-bar pt-5 pb-5 flex z-50 top-0 left-0 right-0 justify-between items-center'>
        <Container>
          <div className="flex justify-center items-center">
            {logoImage && (
              <Link href="/">
                <Image
                  width={logoImage?.mediaDetails?.width}
                  height={logoImage?.mediaDetails?.height}
                  priority
                  alt={`Cover Image for ${logoImage.title}`}
                  src={logoImage?.mediaItemUrl}
                  className={'w-[auto] h-20'}
                />
              </Link>
            )}
            {/* {menuItems && (
              <nav className=''>
                <ul className='menu-wrap flex gap-4'> 
                  {menuItems.map(({ id, path, label }) => (
                    <li
                      key={id}
                      className="nav-links font-ftitle font-bold px-4 cursor-pointer uppercase tracking-[0.1em] text-white hover:scale-105 hover:text-yellow-300 duration-200 link-underline"
                    >
                      <Link href={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )} */}
          </div>
        </Container>
      </div>
    </section>
  )
}
