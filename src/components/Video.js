export default function Video({embedUrl, title}) {
    return (
        <>
            <iframe width="919" height="525" src={embedUrl} frameBorder="0" allowFullScreen title="Thinking in React"/>
            <h1>{title}</h1>
        </>
    )
}