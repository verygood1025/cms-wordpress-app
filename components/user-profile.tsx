export default function UserProfile({ username, fullName, infoNormal, vcard }) {
    const company = infoNormal?.company
    const position = infoNormal?.position
    return (
        <>
        <div className="home-profile text-center">
            <h3 className='font-bold uppercase leading-normal flex justify-center items-center mb-0 mb-[5px]'>{fullName} <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle ml-[7px] -mr-4" width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#00742e" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></h3>
            {position &&(
            <p className="position">{position}</p>
            )}
            {company &&(
            <p className="company">{company}</p>
            )}
        </div>
        {vcard != '' &&
            <div className="home-action flex flex-wrap justify-center items-center mt-2.5">
                <a href={vcard} className="vcard-download uppercase font-bold bg-[var(--hover-color)] text-[color:var(--text-hover-color)] mr-5 px-[25px] py-2.5 rounded-[5px] last:mr-0 hover:bg-[var(--text-color)] hover:text-[color:var(--text-hover-color)]" title={fullName} download={`${fullName}.vcf`}>Lưu Danh Bạ</a>
            </div>
        }
        </>
    )
}