import Image from 'next/legacy/image'
import Link from 'next/link'

export default function Avatar({username, fullName, infoNormal }) {
  const userIcon = infoNormal?.userIcon?.node.sourceUrl ? infoNormal?.userIcon?.node.sourceUrl : `https://ui-avatars.com/api/?background=fff&color=ab0000&name=${fullName}`
  return (
    <>
    {userIcon &&
    <div className="user-avatar flex flex-wrap justify-center items-center mb-2.5">
      <Link href={`/${username}`} className='relative w-[var(--width)] h-[var(--width)] overflow-hidden border-[calc(var(--width)/34)] border-[color:var(--hover-color)] mt-[calc(0px_-_var(--width)/2)] rounded-[50%] border-solid' style={{['--width' as any] : '170px'}}>
        <Image 
        priority
        src={userIcon} 
        alt={`Avata of ${fullName}`}
        layout='fill'
        objectFit='cover'
        sizes={''} 
        />
      </Link>
    </div>
    }
    </>
  )
}
