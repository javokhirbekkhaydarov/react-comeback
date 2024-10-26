export default function Profile({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="rounded-full object-cover w-20 h-20"
        />
    );
}
