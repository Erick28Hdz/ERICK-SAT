
type Props = {
  src: string;
  alt?: string;
  containerClassName?: string;
  imgClassName?: string;
};

export default function UniversalImage({
  src,
  alt = "",
  containerClassName = "",
  imgClassName = "",
}: Props) {
  return (
    <div
      className={`
      relative
      w-full
      max-w-100
      mx-auto
      rounded-[10px]
      overflow-hidden
      shadow-[0_0_20px_rgba(0,255,255,0.15)]
      flex
      items-center
      justify-center
      ${containerClassName}
      `}
    >
      <img
        src={src}
        alt={alt}
        className={`
        w-full
        h-full
        max-w-150
        object-cover
        transition-all
        duration-400
        shadow-[0_12px_30px_rgba(0,0,0,0.25)]
        hover:scale-[1.03]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
        ${imgClassName}
        `}
      />
    </div>
  );
}