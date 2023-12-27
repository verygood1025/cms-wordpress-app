import Link from 'next/link'
import Image from 'next/image'

export default function UserList({ users }) {
    return (
        <section className='user-list'>
            {users && (
                <div className="user-list-box pt-10 pb-10">
                    <div className='user-list-wrap flex flex-wrap mx-[-15px] mb[-30px]'>
                        {users.edges.map(item  => {
                            const data = item.node;
                            const username = data?.username;
                            const fullName = data?.homeSetting?.infoNormal?.fullName ? data?.homeSetting?.infoNormal?.fullName : username ;
                            const avata = data.homeSetting?.infoNormal?.userIcon?.node.sourceUrl ? data?.homeSetting?.infoNormal?.userIcon?.node.sourceUrl : `https://ui-avatars.com/api/?background=fff&color=ab0000&name=${fullName}`;
                            return (
                                <div key={data.id} className="user-item w-1/4 px-[15px] mb-[30px]">
                                    <div className="user-box flex items-center flex-col p-3 rounded-md border border-red-400 transition-all duration-300 hover:shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] [&_*]:transition-all [&_*]:duration-300">
                                        {avata && (
                                            <Link className='group mb-6' href={username}>
                                                <div className="avata w-40 h-40 max-w-full relative overflow-hidden rounded-full shadow-md bg-black group-hover:border-red-800">
                                                    <Image 
                                                    width='300'
                                                    height='300'
                                                    priority
                                                    src={avata} 
                                                    alt={`Avata of ${fullName}`}
                                                    className='absolute w-full h-full top-0 left-0 object-cover group-hover:scale-110 group-hover:opacity-70' 
                                                    />
                                                </div>
                                            </Link>
                                        )}
                                        <div className="content flex flex-col text-center justify-center items-center">
                                            <h3 className='text-lg leading-normal font-bold mb-2'>{fullName}</h3>
                                            <Link className='pl-4 pr-4 pt-2 pb-2 flex justify-center items-center w-32 h-10 rounded-sm bg-red-800 text-white font-ftitle text-sm hover:bg-red-900' href={username}>View More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </section>
    )
}