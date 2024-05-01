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

declare type HTMLInputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "tel"
  | "url"
  | "search"
  | "checkbox"
  | "radio"
  | "file"
  | "range"
  | "color"
  | "button"
  | "submit"
  | "reset"
  | "image";
