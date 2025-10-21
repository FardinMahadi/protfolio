// export interface TechStackProps {
//   name: string;
//   icon: string;
//   color: string;
// }

/** For updated icons */
export interface TechStackProps {
  name: string;
  icon: {
    link: string;
    height: number;
    width: number;
  };
  color: string;
}
