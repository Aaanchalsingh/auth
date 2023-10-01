import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import your CSS file for styling

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Beautiful Home Page</h1>
      </header>
      <main>
        <br />
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor
          aliquam quam, vel vestibulum arcu fermentum ut. Suspendisse
          ullamcorper elit auctor at. Quisque eu velit
          vitae purus vehicula hendrerit. Vivamus commodo euismod libero, ac
          fringilla eros luctus sed. Donec vel sapien eget justo tincidunt
          consequat.lorem300
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam blanditiis totam dolorem sapiente et reprehenderit obcaecati iste ducimus ad expedita magni dolor at incidunt aspernatur animi, cum eligendi repellat quidem fuga necessitatibus velit. Doloremque quibusdam, quidem sapiente natus dolorem reprehenderit debitis aspernatur iure. Ullam nostrum quos optio ducimus ut. Delectus totam voluptates praesentium distinctio natus, perferendis error odio quibusdam fugiat asperiores beatae expedita voluptatem nemo nisi. Delectus cupiditate assumenda quas magnam, ad eaque veritatis asperiores maiores natus modi cumque alias labore eos iusto sapiente facere accusamus obcaecati vitae et atque velit voluptas. Corrupti deleniti officiis modi dicta velit sed enim natus possimus ajusto convallis, a fermentum libero venenatis.
          Sed vitae tincidunt tellus.
        </p>
        <br />
        <br />
        <br />
        <br />
        <p>
          Integer nec justo vel metus fringilla volutpat. Quisque eu velit
          vitae purus vehicula hendrerit. Vivamus commodo euismod libero, ac
          fringilla eros luctus sed. Donec vel sapien eget justo tincidunt
          consequat.lorem300
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam blanditiis totam dolorem sapiente et reprehenderit obcaecati iste ducimus ad expedita magni dolor at incidunt aspernatur animi, cum eligendi repellat quidem fuga necessitatibus velit. Doloremque quibusdam, quidem sapiente natus dolorem reprehenderit debitis aspernatur iure. Ullam nostrum quos optio ducimus ut. Delectus totam voluptates praesentium distinctio natus, perferendis error odio quibusdam fugiat asperiores beatae expedita voluptatem nemo nisi. Delectus cupiditate assumenda quas magnam, ad eaque veritatis asperiores maiores natus modi cumque alias labore eos iusto sapiente facere accusamus obcaecati vitae et atque velit voluptas. Corrupti deleniti officiis modi dicta velit sed enim natus possimus autem exercitationem corporis quam ratione nulla esse a, aspernatur tempora quae in provident voluptatem omnis hic, recusandae, culpa distinctio! Pariatur, praesentium numquam quod magnam ex ipsam veritatis voluptates cumque debitis excepturi quibusdam voluptate reprehenderit dolore suscipit labore laboriosam corrupti fugiat ut in maiores porro exercitationem veniam nam maxime. Ab illo veritatis aliquid ipsum minima cumque enim ipsam quod blanditiis molestiae? Quisquam esse laborum doloremque iure provident sint veniam. Velit voluptas qui quam suscipit impedit, quisquam labore illum. Magnam suscipit, tempora repellendus eligendi dolor obcaecati recusandae vero temporibus. Aperiam quae laboriosam optio accusamus eligendi omnis placeat eum temporibus.
        </p>
        <br />
        <br />
        <br />
        <br />
        <button onClick={logout} className="btnn">
          <Link to="/">Logout</Link>
        </button>
      </main>
      <footer>
      <br />
        <br />
        <br />
        <br />
        <p style={{backgroundColor:"black",color:"white"}}><i> &copy; 2023 IT'S AANCHAL SINGH</i></p>
      </footer>
    </div>
  );
}

export default Home;
