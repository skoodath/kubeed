import easy from '../../illustrations/easy.png';
import started from '../../illustrations/started.png';
import cka from '../../illustrations/cka.png';
import ckad from '../../illustrations/ckad.png';
const courses = [
    {
    id: 1,
    title: "Kubernetes made easy",
    subtitle:"Learn Kubernetes From Scratch",
    image: easy,
    url: "https://www.udemy.com/course/kubernetes-made-easy/"
    },
    {
      id: 2,
      title: "Kubernetes",
      subtitle:"Getting Started (2019)",
      image: started,
      url: "https://www.udemy.com/course/kubernetes-getting-started/"
    },
    {
      id: 3,
      title: "Ultimate CKA",
      subtitle:"Certified Kubernetes Administrator",
      image: cka,
      url: "https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/"
    },
    {
      id: 4,
      title: "Ultimate CKAD",
      subtitle:"Certified Kubernetes Application Developer",
      image: ckad,
      url: "https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/"
    },
    {
      id: 5,
      title: "New Courses",
      subtitle: "Coming soon"
    }
]

export default courses;