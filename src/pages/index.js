import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="GridContainer">
      <div className="HeroBlock">
        <svg width="173" height="71" viewBox="0 0 173 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M168.937 13.2615H167.138V22.1087C165.205 23.6751 162.769 24.4582 159.833 24.4582C157.63 24.4582 155.648 23.9687 153.886 22.9898C152.123 21.9864 150.728 20.6281 149.701 18.9149C148.697 17.1773 148.195 15.2561 148.195 13.1514C148.195 11.0222 148.697 9.10098 149.701 7.38783C150.704 5.65019 152.087 4.29191 153.849 3.31296C155.635 2.33401 157.63 1.84454 159.833 1.84454C161.448 1.84454 162.916 2.08927 164.238 2.57875C165.584 3.04375 166.795 3.81467 167.872 4.89151L169.047 3.64335C167.921 2.49309 166.563 1.62427 164.972 1.03691C163.406 0.425062 161.68 0.119141 159.796 0.119141C157.226 0.119141 154.913 0.682035 152.858 1.80783C150.826 2.93361 149.223 4.48769 148.049 6.47006C146.898 8.45243 146.323 10.6795 146.323 13.1514C146.323 15.6232 146.898 17.8503 148.049 19.8327C149.223 21.8151 150.826 23.3691 152.858 24.4949C154.913 25.6207 157.214 26.1836 159.759 26.1836C161.546 26.1836 163.234 25.9022 164.825 25.3393C166.441 24.7764 167.811 23.9565 168.937 22.8797V13.2615ZM9.39803 1.99138H0.146973V0.302693H20.5213V1.99138H11.2703V26.0001H9.39803V1.99138ZM26.7004 18.7681L23.4332 26.0001H21.4141L33.2349 0.302693H35.1072L46.9279 26.0001H44.9089L41.6049 18.7681H26.7004ZM40.9074 17.1895L34.1527 2.35848L27.4347 17.1895H40.9074ZM55.3008 0.302693H53.4286V26.0001H70.0952V24.3114H55.3008V0.302693ZM84.3741 13.3349L78.6106 19.2453V26.0001H76.7383V0.302693H78.6106V16.8224L94.6531 0.302693H96.9291L85.6223 11.9766L97.7001 26.0001H95.424L84.3741 13.3349ZM106.258 0.302693H104.386V26.0001H106.258V0.302693ZM137.973 0.302693V26.0001H136.431L118.92 3.68006V26.0001H117.048V0.302693H118.627L136.101 22.6227V0.302693H137.973ZM99.2621 46.4957L94.5632 43.9994L99.2621 41.5031L95.8848 36.021L91.0879 38.9578L91.2347 33.7205H84.6758L84.8226 38.9578L80.0258 36.021L76.6974 41.5031L81.3963 43.9994L76.6974 46.4957L80.0258 51.9778L84.8226 49.041L84.6758 54.2784H91.2347L91.0879 49.041L95.8848 51.9778L99.2621 46.4957ZM15.5652 70.8226C12.7262 70.8226 9.95255 70.5126 7.24413 69.8926C4.56834 69.2399 2.3657 68.3752 0.63623 67.2984L4.35623 58.8794C5.98781 59.8257 7.81518 60.5926 9.83834 61.1799C11.8615 61.7347 13.8031 62.012 15.6631 62.012C17.262 62.012 18.4041 61.8652 19.0894 61.5715C19.7747 61.2452 20.1173 60.772 20.1173 60.152C20.1173 59.4341 19.6604 58.8957 18.7468 58.5368C17.8657 58.1778 16.3973 57.7863 14.3415 57.362C11.6983 56.8073 9.4957 56.2199 7.7336 55.5999C5.97149 54.9473 4.43781 53.9031 3.13255 52.4673C1.82728 50.9989 1.17465 49.0247 1.17465 46.5447C1.17465 44.391 1.77834 42.4331 2.9857 40.671C4.19307 38.9089 5.98781 37.522 8.36992 36.5105C10.7847 35.4989 13.7052 34.9931 17.1315 34.9931C19.481 34.9931 21.7815 35.2541 24.0331 35.7762C26.3173 36.2657 28.3241 36.9999 30.0536 37.9789L26.5783 46.3489C23.2173 44.652 20.0357 43.8036 17.0336 43.8036C14.0641 43.8036 12.5794 44.5215 12.5794 45.9573C12.5794 46.6426 13.0199 47.1647 13.901 47.5236C14.782 47.8499 16.2341 48.2089 18.2573 48.6005C20.8678 49.0899 23.0704 49.661 24.8652 50.3136C26.6599 50.9336 28.2099 51.9615 29.5152 53.3973C30.8531 54.8331 31.522 56.791 31.522 59.271C31.522 61.4247 30.9183 63.3826 29.711 65.1447C28.5036 66.8741 26.6925 68.261 24.2778 69.3052C21.8957 70.3168 18.9915 70.8226 15.5652 70.8226ZM71.1805 35.7762V70.0394H59.6289V57.411H48.9584V70.0394H37.4068V35.7762H48.9584V47.9152H59.6289V35.7762H71.1805ZM119.461 61.4247H116.328V70.0394H104.776V35.7762H121.272C124.437 35.7762 127.194 36.2984 129.544 37.3426C131.893 38.3868 133.704 39.8878 134.977 41.8457C136.249 43.8036 136.886 46.0878 136.886 48.6984C136.886 51.1457 136.331 53.2831 135.222 55.1105C134.112 56.9378 132.513 58.3899 130.425 59.4668L137.62 70.0394H125.285L119.461 61.4247ZM125.236 48.6984C125.236 47.4257 124.845 46.4468 124.062 45.7615C123.278 45.0436 122.104 44.6847 120.537 44.6847H116.328V52.712H120.537C122.104 52.712 123.278 52.3694 124.062 51.6841C124.845 50.9662 125.236 49.971 125.236 48.6984ZM140.623 44.7336H150.657V70.0394H162.209V44.7336H172.243V35.7762H140.623V44.7336Z" fill="white" />
        </svg>
        <div className="HeroLockup">
          <h1>GO ON.<br />SAY SOMETHING!</h1>
          <p>We specialise in high quality custom printed tees that send a message. test</p>
          <button to="/page-2/">Contact</button>
        </div>
      </div>
      <div className="ContactBlock">
        <h1>LETS TALK SH*RT</h1>
        <p>Contact us via email or phone to receive a quote.</p>
        <form>
          <label>
            Message
    <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage
