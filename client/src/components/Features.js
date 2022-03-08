// STYLES
import './component-styles/Features.css'

const Features = ({ features }) => {
  return (
    <div className="features">
      <h1 className="features-headline">FEATURES</h1>
      <p>{features}</p>
    </div>
  )
};

export default Features;
