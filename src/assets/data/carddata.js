import {
  easy,
  easybg,
  cka,
  ckabg,
  ckad,
  ckadbg,
} from "../../components/courses/images";
export const courses = [
  {
    key: "01",
    coursename: "Kubernetes Made Easy",
    coursesubtitle:
      "Get your Kubernetes Journey Started with Kubernetes Made Easy",
    url: "https://www.udemy.com/course/kubernetes-made-easy/?couponCode=KME-JULAUG21",
    title: "Link to Kubernetes made easy",
    bgimage: `${easybg}`,
    src: `${easy}`,
    alt: "Course one. Kubernetes made easy",
  },
  {
    key: "02",
    coursename: "Ultimate CKA",
    coursesubtitle: `Prepare for CKA Certification with Ultimate CKA and be a
    Certified Kubernetes Administrator`,
    url: "https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/?couponCode=CKA-JULAUG21",
    title: "Link to Certified Kubernetes administrator course",
    bgimage: `${ckabg}`,
    src: `${cka}`,
    alt: "Course two. Certified kubernetes administrator",
  },
  {
    key: "03",
    coursename: "Ultimate CKAD",
    coursesubtitle: `Prepare for CKAD Certification with Ultimate CKAD and be a
    Certified Kubernetes Application Developer`,
    url: "https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/?couponCode=CKAD-JULAUG21",
    title: "Link to Certified Kubernetes application developer course",
    bgimage: `${ckadbg}`,
    src: `${ckad}`,
    alt: "Course three. Certified Kubernetes Application developer",
  },
];
