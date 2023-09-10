import Transition from "../layout/Transition";

export default function Header() {
  return (
    <div className="about-header">
      <Transition className="about-header-content">
        <h2>
          i'm <span>kareem amr</span>
        </h2>
        <h3>online coashing & personal trainer</h3>
        <h1>
          <span>lead</span> by example
        </h1>
      </Transition>
    </div>
  );
}
