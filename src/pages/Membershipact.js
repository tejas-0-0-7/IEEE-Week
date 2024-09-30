import Navbaring from "../Components/Nav";
import Footer from "../Components/Foot";
// import Card from '../Components/Card';
import Card1 from "../Components/Card";
// import CountDown from '../Components/CountDownMem';
// import MdForm from '../Components/Form';
import "./Membershipact.css";
const Membershipone = () => {
  return (
    <div>
      <Navbaring />
      <header className="head">
        <center>
          <h1>Memebership Drive</h1>
        </center>
      </header>
      <container className="contrer-1">
        <div className="mem-drive">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis
            voluptatum perferendis quaerat eligendi id non sequi similique illum
            quo! Iste temporibus quidem optio voluptas quia deleniti adipisci
            fugiat sit. Deleniti harum fuga earum tempore maiores cupiditate,
            possimus accusamus veniam ratione dicta quidem aperiam magnam iste,
            voluptatem, eum provident est atque. Quas fugiat architecto
            accusamus distinctio harum numquam minima nobis ipsa veniam
            reprehenderit quidem sunt rem repellendus consequuntur alias
            eligendi, dolores consequatur quibusdam, aspernatur fugit. Quaerat
            libero veritatis nesciunt praesentium! Iste sed reprehenderit
            commodi expedita optio dolore explicabo distinctio tenetur dolorem
            rerum error, animi veritatis nihil, nam saepe at cumque?
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis
            voluptatum perferendis quaerat eligendi id non sequi similique illum
            quo! Iste temporibus quidem optio voluptas quia deleniti adipisci
            fugiat sit. Deleniti harum fuga earum tempore maiores cupiditate,
            possimus accusamus veniam ratione dicta quidem aperiam magnam iste,
            voluptatem, eum provident est atque. Quas fugiat architecto
            accusamus distinctio harum numquam minima nobis ipsa veniam
            reprehenderit quidem sunt rem repellendus consequuntur alias
            eligendi, dolores consequatur quibusdam, aspernatur fugit. Quaerat
            libero veritatis nesciunt praesentium! Iste sed reprehenderit
            commodi expedita optio dolore explicabo distinctio tenetur dolorem
            rerum error, animi veritatis nihil, nam saepe at cumque?
          </p>
          <hr />
          <center>
            <h2>BMSCE IEEE Chapters</h2>
          </center>
        </div>
        <div className="card-grid">
          <div className="card-item">
            <Card1
              title="BMSCE IEEE Student Branch"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis voluptatum perferendis quaerat eligendi id non sequi similique illum quo! Iste temporibus quidem optio voluptas quia deleniti adipisci fugiat sit. Deleniti harum fuga earum tempore maiores cupiditate, possimus accusamus veniam ratione dicta quidem aperiam magnam iste, voluptatem, eum provident est atque."
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>
          <div className="card-item">
            <Card1
              title="BMSCE IEEE Computer Society"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis voluptatum perferendis quaerat eligendi id non sequi similique illum quo! Iste temporibus quidem optio voluptas quia deleniti adipisci fugiat sit. Deleniti harum fuga earum tempore maiores cupiditate, possimus accusamus veniam ratione dicta quidem aperiam magnam iste, voluptatem, eum provident est atque."
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Power Energy Society and Sensors Council"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis voluptatum perferendis quaerat eligendi id non sequi similique illum quo! Iste temporibus quidem optio voluptas quia deleniti adipisci fugiat sit. Deleniti harum fuga earum tempore maiores cupiditate, possimus accusamus veniam ratione dicta quidem aperiam magnam iste."
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Women in Engineering"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis voluptatum perferendis quaerat eligendi id non sequi similique illum quo!"
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Power Electronic Society and Industrial Electronic Society"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad veritatis voluptatum perferendis quaerat eligendi id non sequi similique illum quo!"
              imageUrl="https://via.placeholder.com/300x200"
            />
          </div>
        </div>
      </container>
      <Footer />
    </div>
  );
};

export default Membershipone;
