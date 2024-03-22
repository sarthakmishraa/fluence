// Home.js

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>
        <h2 className="HomeContentHeading">Welcome to Fluence</h2>
        <p className="HomeContent">Discover Fluence, where data science meets public health to tackle the challenge of vaccination. Inspired by the H1N1 pandemic response, our project uses advanced machine learning to predict vaccination statuses based on demographics, health behaviors, and opinions. Our goal is to uncover insights that enhance vaccine uptake and inform public health strategies. Whether you're in healthcare, research, or simply interested in public health dynamics, Fluence offers a unique perspective on the factors influencing vaccination decisions. Join us on a journey to better health outcomes through the power of data.</p>
      </div>
      <h2>Which vaccine intake do you want to predict?</h2>
      <div className="ModelButtons">
        <Link to="/model1"><button className="ModelButton">H1N1 Prediction</button></Link>
        <button className="ModelButton">Seasonal Prediction</button>
      </div>
    </div>
  );
}

export default Home;