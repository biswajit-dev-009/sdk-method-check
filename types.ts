export interface Routes {
  title: string;
  route?: string;
  childrens?: {
    id: number;
    method: string;
    route: string
  }[];
}
