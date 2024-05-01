declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}

/**
 * Props for the `AbsoluteImg` component.
 *
 * @property {string} img - The source of the image to display.
 * @property {string} [alt] - The alt text for the image. Defaults to "absolute img" if not provided.
 * @property {string} [imgClass] - Additional class names for the image element (optional).
 * @property {string} [className] - Additional class names for the outer container (optional).
 */
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
