declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}

declare interface IAbsoluteImg extends IClassName {
  img: string;
  alt?: string;
  imgClass?: string;
}
