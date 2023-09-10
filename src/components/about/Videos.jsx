import Transition from "../layout/Transition";

const videoElements = document.getElementsByClassName("video-player");

for (let i = 0; i < videoElements.length; i++) {
  const videoElement = videoElements[i];

  videoElement.addEventListener("blur", () => {
    videoElement.pause();
  });
}

export default function Videos() {
  return (
    <div className="videos">
      <Transition className="videos-content">
        <h1>
          Why Choose <span>kareem amr</span> Personal Trainer?
        </h1>
        <p>
          I want to help men and women that have felt like they've been spinning
          their wheels with their fitness and health. I grasp that different
          diets can seem attractive and trying various solutions to find the
          style of eating that's right for you seems essential - but it can also
          slow your progress down while you are spending time on trial and
          error.
        </p>
      </Transition>
    </div>
  );
}
