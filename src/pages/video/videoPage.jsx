import './videoPage.css'

export default function VideoPage() {
    return (
        <div className='page'>
            <iframe src="https://www.youtube.com/embed/gzQnxLe_JZg?si=uxhTbsGfNCAlFAYV" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
    )
}