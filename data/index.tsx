import BlogType from "@/types/BlogItem";
import ExperienceItemType from "@/types/ExperienceItem";
import SocialIconType from "@/types/SocialIcon";

const socialIcons: SocialIconType[] = [
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
    name: "x/twitter",
    link: "#",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1384 15.0543 13.5187 14.0337 14.4964 12.672C15.4741 11.3104 16 9.67631 16 8C16 3.58 12.42 0 8 0Z"
          fill="black"
        />
      </svg>
    ),
    name: "github",
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
    name: "YouTube",
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
    name: "Instagram",
    link: "#",
  },
];

const blogsData: BlogType[] = [
  {
    img: "/images/blog/img-1.png",
    publishedSite: "Wired.com",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Why PHP is Gaining Popularity in 2024",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
  {
    img: "/images/blog/img-1.png",
    publishedSite: "dev.to",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Chat with your PDF using Pinata,OpenAI and Streamlit ",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
  {
    img: "/images/blog/img-1.png",
    publishedSite: "TechCrunch.com",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Mastering Docker and Kubernetes: A Beginner's Guide",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
  {
    img: "/images/blog/img-1.png",
    publishedSite: "Recode.com",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Postman vs Apidog: Choosing the Suitable API Development Tool ",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
];

const experienceData: ExperienceItemType[] = [
  {
    logo: "/images/brands/brand-1.png",
    duration: "2022 - Today",
    title: "Full-Stack Engineer and Devereal",
    companyName: "Atica inc.",
    description:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
  },
  {
    logo: "/images/brands/brand-2.png",
    duration: "2019 - 2022",
    title: "Devops Lead and a Backend Developer",
    companyName: "Velocity Studios",
    description:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
  },
  {
    logo: "/images/brands/brand-3.png",
    duration: "2017 - 2019",
    title: "Full-Stack Engineer and Devereal",
    companyName: "Atica inc.",
    description:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
  },
];

const projectsData: BlogType[] = [
  {
    img: "/images/brands/project-1.png",
    publishedSite: "Wired.com",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Why PHP is Gaining Popularity in 2024",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
  {
    img: "/images/brands/project-2.png",
    publishedSite: "dev.to",
    author: "Ella Beily",
    publishDate: "Jun 05 2025",
    title: "Chat with your PDF using Pinata,OpenAI and Streamlit ",
    excerpt:
      "Duis finibus nibh consequat magna suscipit, ut tristique purus  fermentum. Aliquam sed dui est. Curabitur eu tincidunt diam.  Pellentesque tristique, mauris a egestas dapibus, nunc odio faucibus  urna, sed luctus arcu lacus eu ante.",
    link: "Wired.com",
  },
];

export { socialIcons, blogsData, experienceData, projectsData };
