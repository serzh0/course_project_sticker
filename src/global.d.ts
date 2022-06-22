declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const content: any;
  export default content;
}