type NavMenuType = {
  name: string;
  href: string;
  submenu?: NavMenuType[];
};

export default NavMenuType;
