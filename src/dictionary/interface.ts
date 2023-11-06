export interface Dictionary {
  readonly [key: string]: {
    readonly [key: string]: string;
  };
}
