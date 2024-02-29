// Home.js

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>
        <h2 className="HomeContentHeading">What do we do?</h2>
        <p className="HomeContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus semper eget duis at. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Diam vel quam elementum pulvinar etiam. Tristique et egestas quis ipsum suspendisse ultrices gravida. Morbi tristique senectus et netus et malesuada fames. Risus quis varius quam quisque id diam vel quam. Non arcu risus quis varius quam quisque id diam. Neque egestas congue quisque egestas diam in arcu cursus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ut sem nulla pharetra diam. Nibh tellus molestie nunc non blandit massa. Vitae tempus quam pellentesque nec nam aliquam sem.</p>
      </div>
      <h2>Which model do you want to use?</h2>
      <div className="ModelButtons">
        <Link to="/model1"><button className="ModelButton">Model 1</button></Link>
        <button className="ModelButton">Model 2</button>
        <button className="ModelButton">Model 3</button>
      </div>
    </div>
  );
}

export default Home;