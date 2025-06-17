import BlogType from "@/types/BlogItem";
import BrandItemType from "@/types/BrandItem";
import NavMenuType from "@/types/NavMenu";
import PricingItemType from "@/types/PriceItem";
import ServiceItemType from "@/types/ServiceItem";
import SocialIconType from "@/types/SocialIcon";
import TeamItemType from "@/types/TeamItem";
import TestimonialItemType from "@/types/TestimonialItem";
import WhyUsItemType from "@/types/WhyUSItem";

const menuData: NavMenuType[] = [
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Portfolio",
    href: "/#projects",
  },
  {
    name: "Resources",
    href: "",
    submenu: [
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Single Blog",
        href: "/blog/single-blog",
      },
    ],
  },
];

const socialIcons: SocialIconType[] = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4618 10.7564C21.4618 4.94242 16.7777 0.229492 11.0003 0.229492C5.22029 0.2308 0.536133 4.94242 0.536133 10.7577C0.536133 16.0107 4.36244 20.3653 9.36306 21.1552V13.7994H6.70844V10.7577H9.36567V8.43657C9.36567 5.79895 10.9284 4.34218 13.3175 4.34218C14.4631 4.34218 15.6596 4.54749 15.6596 4.54749V7.13672H14.3401C13.0416 7.13672 12.6362 7.9488 12.6362 8.7818V10.7564H15.5367L15.0737 13.7981H12.6349V21.1539C17.6355 20.364 21.4618 16.0094 21.4618 10.7564Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "facebook",
    link: "#",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 0.9375H18.8175L12.1175 8.615L20 19.0625H13.8287L8.995 12.725L3.46375 19.0625H0.395L7.56125 10.85L0 0.9375H6.32875L10.6975 6.72875L15.75 0.9375ZM14.675 17.2225H16.375L5.40375 2.68125H3.58125L14.675 17.2225Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "twitter or x",
    link: "#",
  },
  {
    icon: (
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0637 0.498535H10.175C11.2025 0.502285 16.4088 0.539785 17.8125 0.917285C18.2369 1.0325 18.6236 1.25706 18.9339 1.56855C19.2443 1.88003 19.4675 2.26752 19.5812 2.69229C19.7075 3.16729 19.7962 3.79604 19.8563 4.44479L19.8688 4.57479L19.8962 4.89979L19.9062 5.02979C19.9875 6.17229 19.9975 7.24228 19.9987 7.47604V7.56979C19.9975 7.81229 19.9862 8.95478 19.8962 10.1448L19.8862 10.276L19.875 10.406C19.8125 11.121 19.72 11.831 19.5812 12.3535C19.4675 12.7783 19.2443 13.1658 18.9339 13.4773C18.6236 13.7888 18.2369 14.0133 17.8125 14.1285C16.3625 14.5185 10.8512 14.546 10.0875 14.5473H9.91C9.52375 14.5473 7.92625 14.5398 6.25125 14.4823L6.03875 14.4748L5.93 14.4698L5.71625 14.461L5.5025 14.4523C4.115 14.391 2.79375 14.2923 2.185 14.1273C1.76078 14.0122 1.37419 13.7878 1.06381 13.4766C0.753441 13.1653 0.530154 12.7781 0.41625 12.3535C0.2775 11.8323 0.185 11.121 0.1225 10.406L0.1125 10.2748L0.1025 10.1448C0.0404543 9.2978 0.00626915 8.44901 0 7.59978L0 7.44604C0.0025 7.17729 0.0125 6.24853 0.08 5.22353L0.08875 5.09479L0.0925 5.02979L0.1025 4.89979L0.13 4.57479L0.1425 4.44479C0.2025 3.79604 0.29125 3.16604 0.4175 2.69229C0.531213 2.26752 0.754415 1.88003 1.0648 1.56855C1.37519 1.25706 1.76188 1.0325 2.18625 0.917285C2.795 0.754785 4.11625 0.654785 5.50375 0.592285L5.71625 0.583535L5.93125 0.576035L6.03875 0.572285L6.2525 0.563535C7.44214 0.52529 8.63226 0.504037 9.8225 0.499785L10.0637 0.498535ZM8 4.51103V10.5335L13.1962 7.52353L8 4.51103Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "instagram",
    link: "#",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78231 0.775407 2.17768 1.16925 1.67875 1.67875C1.16925 2.17768 0.775407 2.78231 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2185 19.2244 17.8227 18.8306 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2246 2.78231 18.8308 2.17768 18.3212 1.67875C17.8223 1.16925 17.2177 0.775407 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6348 16.3274 17.3791 16.7197 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66979 17.6291 3.277 17.3738 2.95375 17.0425C2.62159 16.7195 2.36541 16.3267 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.32375 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.439 6.66625 10.8726 6.75248 11.277 6.92002C11.6815 7.08755 12.049 7.33312 12.3586 7.64268C12.6681 7.95225 12.9137 8.31976 13.0812 8.72423C13.2488 9.1287 13.335 9.56221 13.335 10C13.335 10.4378 13.2488 10.8713 13.0812 11.2758C12.9137 11.6802 12.6681 12.0477 12.3586 12.3573C12.049 12.6669 11.6815 12.9124 11.277 13.08C10.8726 13.2475 10.439 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "youtube",
    link: "#",
  },
];

const brandsData: BrandItemType[] = [
  {
    name: "Amara",
    img: "/images/brands/amara-black.svg",
    width: 169,
  },
  {
    name: "Asgardia",
    img: "/images/brands/asgardia-black.svg",
    width: 199,
  },
  {
    name: "Atica",
    img: "/images/brands/atica-black.svg",
    width: 112,
  },
  {
    name: "Aven",
    img: "/images/brands/aven-black.svg",
    width: 156,
  },
  {
    name: "Circle",
    img: "/images/brands/circle-black.svg",
    width: 159,
  },
];

const whyUSData: WhyUsItemType[] = [
  {
    icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 1.10402V6.81802C8.75 7.1135 8.69181 7.40608 8.57874 7.67906C8.46567 7.95205 8.29993 8.20009 8.091 8.40902L4 12.5M8.75 1.10402C8.499 1.12702 8.249 1.15402 8 1.18602M8.75 1.10402C10.2468 0.964838 11.7532 0.964838 13.25 1.10402M4 12.5L4.77 12.307C6.863 11.7898 9.07182 12.0355 11 13C12.9282 13.9645 15.137 14.2102 17.23 13.693L18.8 13.3M4 12.5L1.798 14.703C0.565003 15.934 1.147 18.02 2.865 18.313C5.509 18.765 8.227 19 11 19C13.7262 19.001 16.4476 18.7711 19.135 18.313C20.852 18.02 21.434 15.934 20.202 14.702L18.8 13.3M13.25 1.10402V6.81802C13.25 7.41502 13.487 7.98802 13.909 8.40902L18.8 13.3M13.25 1.10402C13.501 1.12702 13.751 1.15402 14 1.18602"
          stroke="#8280FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Expert-Led Solutions",
    desc: "Our team of seasoned professionals brings deep industry knowledge to every project, ensuring strategic and high-quality outcomes.",
  },
  {
    icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 1.10402V6.81802C8.75 7.1135 8.69181 7.40608 8.57874 7.67906C8.46567 7.95205 8.29993 8.20009 8.091 8.40902L4 12.5M8.75 1.10402C8.499 1.12702 8.249 1.15402 8 1.18602M8.75 1.10402C10.2468 0.964838 11.7532 0.964838 13.25 1.10402M4 12.5L4.77 12.307C6.863 11.7898 9.07182 12.0355 11 13C12.9282 13.9645 15.137 14.2102 17.23 13.693L18.8 13.3M4 12.5L1.798 14.703C0.565003 15.934 1.147 18.02 2.865 18.313C5.509 18.765 8.227 19 11 19C13.7262 19.001 16.4476 18.7711 19.135 18.313C20.852 18.02 21.434 15.934 20.202 14.702L18.8 13.3M13.25 1.10402V6.81802C13.25 7.41502 13.487 7.98802 13.909 8.40902L18.8 13.3M13.25 1.10402C13.501 1.12702 13.751 1.15402 14 1.18602"
          stroke="#8280FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Fast & Reliable Delivery",
    desc: "We value your time. That’s why we focus on streamlined processes and consistent communication to deliver on time — every time.",
  },
  {
    icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 1.10402V6.81802C8.75 7.1135 8.69181 7.40608 8.57874 7.67906C8.46567 7.95205 8.29993 8.20009 8.091 8.40902L4 12.5M8.75 1.10402C8.499 1.12702 8.249 1.15402 8 1.18602M8.75 1.10402C10.2468 0.964838 11.7532 0.964838 13.25 1.10402M4 12.5L4.77 12.307C6.863 11.7898 9.07182 12.0355 11 13C12.9282 13.9645 15.137 14.2102 17.23 13.693L18.8 13.3M4 12.5L1.798 14.703C0.565003 15.934 1.147 18.02 2.865 18.313C5.509 18.765 8.227 19 11 19C13.7262 19.001 16.4476 18.7711 19.135 18.313C20.852 18.02 21.434 15.934 20.202 14.702L18.8 13.3M13.25 1.10402V6.81802C13.25 7.41502 13.487 7.98802 13.909 8.40902L18.8 13.3M13.25 1.10402C13.501 1.12702 13.751 1.15402 14 1.18602"
          stroke="#8280FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Customer-First Approach",
    desc: "Your success is our priority. We listen, adapt, and work closely with you to create tailored solutions that truly meet your needs.",
  },
];

const servicesData: ServiceItemType[] = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Web Design",
    description:
      "Beautiful, responsive designs that engage your audience and drive conversions.",
    link: "/services/web-design",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "Robust, scalable websites built with modern technologies tailored to your goals.",
    link: "/services/web-development",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "User-focused design experiences that are intuitive, functional, and visually stunning.",
    link: "/services/ui-ux-design",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "E-Commerce Solutions",
    description:
      "Launch and scale your online store with custom, conversion-optimized solutions.",
    link: "/services/ecommerce",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "SEO & Marketing",
    description:
      "Boost your online visibility and drive traffic with proven SEO and digital strategies.",
    link: "/services/seo-marketing",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" fill="white" />
        <path
          d="M14.6249 4.65609V13.2271C14.6249 13.6703 14.5377 14.1092 14.368 14.5187C14.1984 14.9281 13.9498 15.3002 13.6364 15.6136L7.49994 21.7501M14.6249 4.65609C14.2484 4.69059 13.8734 4.73109 13.4999 4.77909M14.6249 4.65609C16.8701 4.44732 19.1298 4.44732 21.3749 4.65609M7.49994 21.7501L8.65494 21.4606C11.7944 20.6848 15.1077 21.0533 17.9999 22.5001C20.8922 23.9468 24.2054 24.3154 27.3449 23.5396L29.6999 22.9501M7.49994 21.7501L4.19694 25.0546C2.34744 26.9011 3.22044 30.0301 5.79744 30.4696C9.76344 31.1476 13.8404 31.5001 17.9999 31.5001C22.0892 31.5015 26.1713 31.1568 30.2024 30.4696C32.7779 30.0301 33.6509 26.9011 31.8029 25.0531L29.6999 22.9501M21.3749 4.65609V13.2271C21.3749 14.1226 21.7304 14.9821 22.3634 15.6136L29.6999 22.9501M21.3749 4.65609C21.7514 4.69059 22.1264 4.73109 22.4999 4.77909"
          stroke="#434343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Maintenance & Support",
    description:
      "Ongoing support and updates to keep your site secure, fast, and up-to-date.",
    link: "/services/maintenance-support",
  },
];

const teamsData: TeamItemType[] = [
  {
    img: "/images/team/team-1.png",
    name: "Amira Khan",
    role: "Lead Designer",
  },
  {
    img: "/images/team/team-2.png",
    name: "Ravi Mehta",
    role: "Frontend Developer",
  },
  {
    img: "/images/team/team-3.png",
    name: "Sophia Lee",
    role: "UI/UX Designer",
  },
  {
    img: "/images/team/team-4.png",
    name: "Junaid Rahman",
    role: "Backend Developer",
  },
  {
    img: "/images/team/team-5.png",
    name: "Isabella Brown",
    role: "Project Manager",
  },
  {
    img: "/images/team/team-6.png",
    name: "Mohammed Zayed",
    role: "Full Stack Developer",
  },
  {
    img: "/images/team/team-7.png",
    name: "Lina D’Souza",
    role: "Graphic Designer",
  },
  {
    img: "/images/team/team-8.png",
    name: "Ethan Patel",
    role: "DevOps Engineer",
  },
];

const pricingData: PricingItemType[] = [
  {
    title: "Basic",
    description:
      "Randomised words which don't look even slightly believable. If you are  going.",
    price: 0,
    frequency: "",
    features: [
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
    ],
    ctaText: "Get Started",
    popular: false,
    id: 1,
    url: "/#stripe-link",
  },
  {
    title: "Basic",
    description:
      "Randomised words which don't look even slightly believable. If you are  going.",
    price: 0,
    frequency: "",
    features: [
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
    ],
    ctaText: "Get Started",
    popular: false,
    id: 1,
    url: "/#stripe-link",
  },
  {
    title: "Basic",
    description:
      "Randomised words which don't look even slightly believable. If you are  going.",
    price: 0,
    frequency: "",
    features: [
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
      "Discovered the undoubtable source",
    ],
    ctaText: "Get Started",
    popular: false,
    id: 1,
    url: "/#stripe-link",
  },
];

const testimonilsData: TestimonialItemType[] = [
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
  {
    img: "/images/testimonial/user-1.png",
    name: "Cody Fisher",
    role: "Security Expert at Google.",
    review:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  },
];

const blogsData: BlogType[] = [
  {
    img: "/images/blog/img-1.png",
    tag: "AI & Robotics",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Differences between Robotics and Artificial Intelligence",
    link: "single-blog",
  },
  {
    img: "/images/blog/img-2.png",
    tag: "Machine Learning",
    author: "Liam Rhodes",
    publishDate: "May 28 2025",
    title: "How Machine Learning is Changing Modern Industries",
    link: "single-blog",
  },
  {
    img: "/images/blog/img-3.png",
    tag: "Technology",
    author: "Sophia Lin",
    publishDate: "May 18 2025",
    title: "Top 10 Emerging Technologies to Watch in 2025",
    link: "single-blog",
  },
  {
    img: "/images/blog/img-4.png",
    tag: "AI & Robotics",
    author: "Daniel Carter",
    publishDate: "May 12 2025",
    title: "The Future of Robotics in Everyday Life",
    link: "single-blog",
  },
  {
    img: "/images/blog/img-5.png",
    tag: "Innovation",
    author: "Grace Kim",
    publishDate: "May 02 2025",
    title: "Why Innovation is the Core of Tech Startups",
    link: "single-blog",
  },
  {
    img: "/images/blog/img-6.png",
    tag: "AI & Robotics",
    author: "Noah Patel",
    publishDate: "Apr 25 2025",
    title: "Can Robots Learn Like Humans? A Deep Dive",
    link: "single-blog",
  },
  // {
  //   img: "/images/blog/img-7.png",
  //   tag: "Cloud Computing",
  //   author: "Ava Morgan",
  //   publishDate: "Apr 17 2025",
  //   title: "How Cloud Technology is Powering AI Solutions",
  //   link: "/single-blog",
  // },
  // {
  //   img: "/images/blog/img-8.png",
  //   tag: "Cybersecurity",
  //   author: "Ethan Lee",
  //   publishDate: "Apr 10 2025",
  //   title: "AI vs Hackers: How Artificial Intelligence is Defending Data",
  //   link: "/single-blog",
  // },
  // {
  //   img: "/images/blog/img-9.png",
  //   tag: "Data Science",
  //   author: "Isla Thompson",
  //   publishDate: "Apr 02 2025",
  //   title: "Data Science in AI: From Raw Data to Real Decisions",
  //   link: "/single-blog",
  // },
];

export {
  menuData,
  socialIcons,
  brandsData,
  whyUSData,
  servicesData,
  teamsData,
  pricingData,
  testimonilsData,
  blogsData,
};
