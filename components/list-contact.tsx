import Image from 'next/legacy/image'
import Link from 'next/link'
import {useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useQRCode } from 'next-qrcode';
import getURL from "../lib/getURL";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function ListContact({ username, contactLink, socialLink }) {
    // Contact
    const address = contactLink?.address
    const email = contactLink?.email
    const phoneNumber = contactLink?.phoneNumber
    const turnOnSms =  contactLink?.turnOnSms

    // Social
    const zalo = socialLink?.zalo
    const nganHang = socialLink?.nganHang
    const momo = socialLink?.momo
    const website = socialLink?.website
    const facebook = socialLink?.facebook
    const instagram = socialLink?.instagram
    const messenger = socialLink?.messenger
    const telegram = socialLink?.telegram
    const tiktok = socialLink?.tiktok
    const youtube = socialLink?.youtube
    const twiter = socialLink?.twiter

    const { Canvas } = useQRCode()

    const [open1, setOpen1, ] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <>
        <div className="list-contact flex flex-wrap justify-center items-center list-none">
            {phoneNumber && 
            <div className="phone list-contact-item">
                <Link href={`tel:${phoneNumber}`} title="Phone" rel="nofollow">
                <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                </Link>
            </div>
            }
            {phoneNumber && turnOnSms && 
            <div className="sms list-contact-item">
                <Link href={`sms:${phoneNumber}`} title="SMS" rel="nofollow">
                <svg aria-hidden="true" className="e-font-icon-svg e-fas-sms" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"></path></svg>
                </Link>
            </div>
            }
            {/* Icon Zalo */}
            {(zalo?.zaloPhone || zalo?.zaloQr) && (
            <div className="zalo list-contact-item">
                <button title="Zalo" className="poppup-link" onClick={() => setOpen1(true)} rel="nofollow">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.576172 6 C 12.118043 9.5981082 10 14.323627 10 19.5 C 10 24.861353 12.268148 29.748596 15.949219 33.388672 C 15.815412 33.261195 15.988635 33.48288 16.005859 33.875 C 16.023639 34.279773 15.962689 34.835916 15.798828 35.386719 C 15.471108 36.488324 14.785653 37.503741 13.683594 37.871094 A 1.0001 1.0001 0 0 0 13.804688 39.800781 C 16.564391 40.352722 18.51646 39.521812 19.955078 38.861328 C 21.393696 38.200845 22.171033 37.756375 23.625 38.34375 A 1.0001 1.0001 0 0 0 23.636719 38.347656 C 26.359037 39.41176 29.356235 40 32.5 40 C 36.69732 40 40.631169 38.95117 44 37.123047 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 18.496094 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 34.804688 C 40.72689 36.812719 36.774644 38 32.5 38 C 29.610147 38 26.863646 37.459407 24.375 36.488281 C 22.261967 35.634656 20.540725 36.391201 19.121094 37.042969 C 18.352251 37.395952 17.593707 37.689389 16.736328 37.851562 C 17.160501 37.246758 17.523335 36.600775 17.714844 35.957031 C 17.941109 35.196459 18.033096 34.45168 18.003906 33.787109 C 17.974816 33.12484 17.916946 32.518297 17.357422 31.96875 L 17.355469 31.966797 C 14.016928 28.665356 12 24.298743 12 19.5 C 12 14.177406 14.48618 9.3876296 18.496094 6 z M 32.984375 14.986328 A 1.0001 1.0001 0 0 0 32 16 L 32 25 A 1.0001 1.0001 0 1 0 34 25 L 34 16 A 1.0001 1.0001 0 0 0 32.984375 14.986328 z M 18 16 A 1.0001 1.0001 0 1 0 18 18 L 21.197266 18 L 17.152344 24.470703 A 1.0001 1.0001 0 0 0 18 26 L 23 26 A 1.0001 1.0001 0 1 0 23 24 L 19.802734 24 L 23.847656 17.529297 A 1.0001 1.0001 0 0 0 23 16 L 18 16 z M 29.984375 18.986328 A 1.0001 1.0001 0 0 0 29.162109 19.443359 C 28.664523 19.170123 28.103459 19 27.5 19 C 25.578848 19 24 20.578848 24 22.5 C 24 24.421152 25.578848 26 27.5 26 C 28.10285 26 28.662926 25.829365 29.160156 25.556641 A 1.0001 1.0001 0 0 0 31 25 L 31 22.5 L 31 20 A 1.0001 1.0001 0 0 0 29.984375 18.986328 z M 38.5 19 C 36.578848 19 35 20.578848 35 22.5 C 35 24.421152 36.578848 26 38.5 26 C 40.421152 26 42 24.421152 42 22.5 C 42 20.578848 40.421152 19 38.5 19 z M 27.5 21 C 28.340272 21 29 21.659728 29 22.5 C 29 23.340272 28.340272 24 27.5 24 C 26.659728 24 26 23.340272 26 22.5 C 26 21.659728 26.659728 21 27.5 21 z M 38.5 21 C 39.340272 21 40 21.659728 40 22.5 C 40 23.340272 39.340272 24 38.5 24 C 37.659728 24 37 23.340272 37 22.5 C 37 21.659728 37.659728 21 38.5 21 z"></path></svg>
                </button>
                <Modal open={open1} onClose={() => setOpen1(false)} center>
                    <div id="zalo" className="modal">
                        <div className="bio-share-box">
                            <h4>Kết bạn qua Zalo</h4>
                            {zalo?.zaloQr && (
                                <p className='flex justify-center'><Image
                                    width='300'
                                    height='300'
                                    priority
                                    src={zalo?.zaloQr?.node?.sourceUrl}
                                    alt="QR Code"
                                    className='border' />
                                </p>
                            )}
                            {zalo?.zaloPhone &&
                                <div className='title'>
                                    <h5>{`Zalo: ${zalo?.zaloPhone}`}</h5>
                                    <CopyToClipboard
                                        text={zalo?.zaloPhone}
                                        className='page-button'
                                        onCopy={() => alert("Copied")}>
                                        <button>Copy Số Điện Thoại Zalo</button>
                                    </CopyToClipboard>
                                </div>}
                        </div>
                    </div>
                </Modal>
            </div>
            )}
            {/* Icon Ngân Hàng */}
            {((nganHang?.tenNganHang && nganHang?.soTaiKhoan) || nganHang?.maQrNganHang) && (
            <div className="ngan-hang list-contact-item">
                <button title="Ngân Hàng" className="poppup-link" onClick={() => setOpen2(true)} rel="nofollow">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-credit-card" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg>
                </button>
                <Modal open={open2} onClose={() => setOpen2(false)} center>
                    <div id="ngan-hang" className="modal">
                        <div className="bio-share-box">
                            {(nganHang?.tenNganHang && nganHang?.soTaiKhoan) &&
                                <div className='title'>
                                    <h4>{nganHang?.tenNganHang}</h4>
                                    <h5>{`STK: ${nganHang?.soTaiKhoan}`}</h5>
                                    <CopyToClipboard
                                        text={nganHang?.soTaiKhoan}
                                        className='page-button'
                                        onCopy={() => alert("Copied")}>
                                        <button>Copy Số Tài Khoản</button>
                                    </CopyToClipboard>
                                </div>}
                            {nganHang?.maQrNganHang && (
                                <p className='flex justify-center'><Image
                                    width='300'
                                    height='300'
                                    priority
                                    src={nganHang?.maQrNganHang?.node?.sourceUrl}
                                    alt="QR Code" />
                                </p>
                            )}
                        </div>
                    </div>
                </Modal>
            </div>
            )}
            {/* Icon MoMo */}
            {(momo?.maQrMomo  || momo?.momoPhone) && (
            <div className="momo list-contact-item">
                <button title="Momo" onClick={() => setOpen3(true)} className="poppup-link" rel="nofollow">
                    <svg viewBox="6.7169296377637995 5.309796557160162 81.4130703622362 74.62020344283985" xmlns="http://www.w3.org/2000/svg" width="2500" height="2320"><rect fill="rgba(0,0,0,0)" height="87" rx="12.06" width="96"/><path d="M71 7.07c-9.45 0-17.11 7.36-17.11 16.43S61.57 39.93 71 39.93s17.13-7.36 17.13-16.43S80.47 7.07 71 7.07zm0 23.44a7.14 7.14 0 0 1-7.27-7 7.28 7.28 0 0 1 14.54 0 7.14 7.14 0 0 1-7.27 7zm-22-11.1V40h-9.88V19.31a2.9 2.9 0 0 0-5.8 0V40h-9.84V19.31a2.9 2.9 0 0 0-5.8 0V40H7.87V19.41A12.62 12.62 0 0 1 20.72 7.07a13.11 13.11 0 0 1 7.7 2.48 13.14 13.14 0 0 1 7.69-2.48A12.63 12.63 0 0 1 49 19.41zM71 47c-9.45 0-17.11 7.35-17.11 16.43S61.57 79.89 71 79.89s17.11-7.35 17.11-16.42S80.47 47 71 47zm0 23.44a7 7 0 1 1 7.27-7A7.14 7.14 0 0 1 71 70.48zM49 59.38v20.55h-9.88V59.27a2.9 2.9 0 0 0-5.8 0v20.66h-9.84V59.27a2.9 2.9 0 0 0-5.8 0v20.66H7.87V59.38A12.61 12.61 0 0 1 20.72 47a13.17 13.17 0 0 1 7.7 2.47A13.11 13.11 0 0 1 36.11 47 12.62 12.62 0 0 1 49 59.38z" fill="#fff"/></svg>
                </button>
                <Modal open={open3} onClose={() => setOpen3(false)} center>
                    <div id="momo" className="modal">
                        <div className="bio-share-box">
                            {momo?.momoPhone &&
                                <div className='title'>
                                    <h4>Momo</h4>
                                    <h5>{`STK: ${momo?.momoPhone}`}</h5>
                                    <CopyToClipboard
                                        text={momo?.momoPhone}
                                        className='page-button'
                                        onCopy={() => alert("Copied")}>
                                        <button>Copy Số Momo</button>
                                    </CopyToClipboard>
                                </div>}
                            {momo?.maQrMomo && (
                                <p className='flex justify-center'><Image
                                    width='300'
                                    height='300'
                                    priority
                                    src={momo?.maQrMomo?.node?.sourceUrl}
                                    alt="QR Code" />
                                </p>
                            )}
                        </div>
                    </div>
                </Modal>
            </div>
            )}
            {/* Email */}
            {email && 
            <div className="email list-contact-item">
                <Link href={`mailto:${email}`} title="Email" rel="nofollow">
                <svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                </Link>
            </div>
            }
            {/* Địa Chỉ */}
            {address && 
            <div className="address list-contact-item">
                <Link href={`https://www.google.com/maps/search/${encodeURI(address)}`} target='_blank' title="Địa Chỉ" rel="nofollow">
                <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marked-alt" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>
                </Link>
            </div>
            }
            {/* Website */}
            {website && 
            <div className="website list-contact-item">
                <Link href={`${website}`} target='_blank' title="Website" rel="nofollow">
                <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"  xmlSpace="preserve"><path d="M84 128.6H54.6C36.6 128.6 22 114 22 96c0-9 3.7-17.2 9.6-23.1 5.9-5.9 14.1-9.6 23.1-9.6H84m24 65.3h29.4c9 0 17.2-3.7 23.1-9.6 5.9-5.9 9.6-14.1 9.6-23.1 0-18-14.6-32.6-32.6-32.6H108M67.9 96h56.2" style={{['fill' as any]:'none',
                ['stroke-width' as any]:'12',
                ['stroke-linecap' as any]:'round',
                ['stroke-linejoin' as any]:'round',
                ['stroke-miterlimit' as any]:'10'
                }}></path></svg>
                </Link>
            </div>
            }
            {/* Facebook */}
            {facebook && 
            <div className="facebook list-contact-item">
                <Link href={`https://facebook.com/${facebook}`} target='_blank' title="Facebook" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </Link>
            </div>
            }
            {/* Messenger */}
            {facebook && messenger == true && 
            <div className="facebook list-contact-item">
                <Link href={`https://m.me/${facebook}`} target='_blank' title="Messenger" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
                </Link>
            </div>
            }
            {/* IG */}
            {instagram && 
            <div className="instagram list-contact-item">
                <Link href={`https://www.instagram.com/${instagram}`} target='_blank' title="IG" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </Link>
            </div>
            }
            {/* Tiktok */}
            {tiktok && 
            <div className="tiktok list-contact-item">
                <Link href={`https://www.tiktok.com/${tiktok}`} target='_blank' title="Tiktok" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </Link>
            </div>
            }
            {/* Youtube */}
            {youtube && 
            <div className="youtube list-contact-item">
                <Link href={`https://www.youtube.com/${youtube}`} target='_blank' title="Youtube" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </Link>
            </div>
            }
            {/* Telegram */}
            {telegram && 
            <div className="telegram list-contact-item">
                <Link href={`https://t.me/${telegram}`} target='_blank' title="Telegram" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                </Link>
            </div>
            }
            {/* Twiter */}
            {twiter && 
            <div className="twiter list-contact-item">
                <Link href={`https://twitter.com/${twiter}`} target='_blank' title="Twiter" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </Link>
            </div>
            }
            {/* Share Bio */}
            <div className="share list-contact-item">
                <button title="Chia Sẻ Bio" className="poppup-link" onClick={() => setOpen4(true)} rel="nofollow">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-share-alt" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path></svg>
                </button>
                <Modal open={open4} onClose={() => setOpen4(false)} center>
                    <div id="bio-share" className="modal">
                        <div className="bio-share-box">
                            <div className='title'>
                                <h4>Chia sẻ danh thiếp</h4>
                                <p className='flex justify-center [&>canvas]:border-2 [&>canvas]:border-black'>
                                    <Canvas
                                    text={getURL(username)}
                                    options={{
                                        errorCorrectionLevel: 'H',
                                        margin: 3,
                                        scale: 4,
                                        width: 300,
                                        color: {
                                        dark: '#ab0000',
                                        light: '#fff',
                                        },
                                    }}
                                    />
                                </p>
                                <CopyToClipboard
                                    text={getURL(username)}
                                    className='page-button'
                                    onCopy={() => alert("Copied")}>
                                    <button>Copy Link</button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
        </>
    )
}

