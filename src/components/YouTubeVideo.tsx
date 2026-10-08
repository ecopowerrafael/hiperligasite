type YouTubeVideoProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function YouTubeVideo({ videoId, title, className = '' }: YouTubeVideoProps) {
  return (
    <iframe
      className={`h-full w-full border-0 ${className}`}
      src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
