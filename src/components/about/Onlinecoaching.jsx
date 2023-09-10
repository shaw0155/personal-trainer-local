import Transition from "../layout/Transition";
import aboutImg1 from "../../imgs/about-1.jpg";

export default function Onlinecoaching() {
  return (
    <div className="onlinecoaching-bg">
      <Transition className="onlinecoaching">
        <div className="onlinecoaching-content">
          <h2>online coaching</h2>
          <p>
            I want to help men and women that have felt like they've been
            spinning their wheels with their fitness and health. I grasp that
            different diets can seem attractive and trying various solutions to
            find the style of eating that's right for you seems essential - but
            it can also slow your progress down while you are spending time on
            trial and error. ​​
          </p>
        </div>
        <div className="onlinecoaching-img-container">
          <img src={aboutImg1} alt="" />
        </div>
      </Transition>
    </div>
  );
}
