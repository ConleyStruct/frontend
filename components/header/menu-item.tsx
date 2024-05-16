export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
  }
  
const menuItems: MenuItem[] = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Products",
      children: [
        {
          title: "Hinkle Horns",
          route: "/products/hinkle-horns",
        },
        {
          title: "Doozers",
          route: "/products/doozers",
        },
        {
          title: "Zizzer-zazzers",
          route: "/products/zizzer-zazzers",
        },
      ],
    },
];

export default menuItems;