
const CourseCardComponent1 = () => {

  return(
    <section className='cardwrapper'>
        <div className='carditem'>
          <div className='cardtopsection'
          >
          <img src={kubernetes} alt='kubernetes' className='cardlogo' />
            <div>
              <h3>
                Kubernetes Made Easy: 
              </h3>
              <h4>
                Learn Kubernetes From Scratch
              </h4>
              <a
                href='https://www.udemy.com/course/kubernetes-made-easy/'
                >
                START COURSE
              </a>
            </div>
          </div>
        </div>
        <div className='carditem'>
          <div className='cardtopsection'>
            <img src={kubernetes} alt='kubernetes' className='cardlogo' />
            <div>
              <h3>
                Kubernetes: 
              </h3>
              <h4>
                Getting Started (2019)
              </h4>
              <a
                href='https://www.udemy.com/course/kubernetes-getting-started/'
                >
                START COURSE
              </a>
            </div>
          </div>
        </div>
        <div className='carditem'>
          <div className='cardtopsection'>
            <img src={kubernetes} alt='kubernetes' className='cardlogo' />
            <div>
              <h3>
                Ultimate CKA<mark>new</mark>
              </h3>
              <h4>
                Certified Kubernetes Administrator
              </h4>
              <a
                href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/'
                >
                START COURSE
              </a>
            </div>
            
          </div>
        </div>
        <div className='carditem'>
          <div className='cardtopsection'>
          <img src={kubernetes} alt='kubernetes' className='cardlogo' />
            <div>
              <h3>
                Ultimate CKAD<mark>new</mark>
              </h3>
              <h4>
                Certified Kubernetes Application Developer
              </h4>
              <a
                href='https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/'
                >
                START COURSE
              </a>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default CourseCardComponent1;