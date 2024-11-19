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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMSCE
            IEEE offers students a comprehensive platform for both academic and
            professional growth. Members gain exclusive access to
            industry-leading conferences, competitions, and award-winning
            publications, keeping them ahead of emerging trends. The network of
            peers, seniors, and esteemed faculty provides invaluable mentorship
            and guidance, while dedicated internship and employment resources
            enhance career opportunities. As a further benefit, IEEE members
            enjoy a 30% discount on all paid events, maximizing the value of
            their membership.
          </p>
         
          {/* <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMSCE
            IEEE Student Branch ensures students stay technically relevant while
            fostering professional connections. Through a wide range of
            technical and non-technical events, workshops, seminars,
            conferences, and an innovative project series, members gain hands-on
            experience and valuable insights to meet the evolving demands of the
            technological world. The branch also provides a vibrant community,
            facilitating meaningful interactions with esteemed faculty and
            industry professionals, further enriching the learning experience.
          </p> */}
          <center>
          <a href="https://forms.gle/7Wjjo2mgtRzUfmwz5" target="_blank" rel="noopener noreferrer">
            <button className="know-more-btn">Register Now!</button>
          </a>
          </center>
          <br />
          <hr />
          <center>
            <h1>BMSCE IEEE Chapters</h1>
          </center>
        </div>
        <div className="card-grid">
          <div className="card-item">
            <Card1
              title="BMSCE IEEE Student Branch"
              description="BMSCE IEEE Student Branch ensures students stay technically relevant while fostering professional connections. Through a wide range of technical and non-technical events, workshops, seminars, conferences, and an innovative project series, members gain hands-on experience and valuable insights to meet the evolving demands of the technological world. The branch also provides a vibrant community, facilitating meaningful interactions with esteemed faculty and industry professionals, further enriching the learning experience."
              imageUrl="\images\BMSCE IEEE.png"
              link="https://www.instagram.com/bmsce_ieee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>
          <div className="card-item">
            <Card1
              title="BMSCE IEEE Computer Society"
              description="BMSCE IEEE Computer Society is dedicated to shaping the future of computer science by uniting a diverse community of engineers, scientists, and industry professionals. The society actively drives change by addressing the specific challenges of the evolving technological landscape, empowering students to navigate these obstacles through comprehensive training, teamwork, and leadership development. By fostering a collaborative environment, BMSCE IEEE CS ensures that its members are well-equipped to meet the demands of the rapidly changing field and contribute meaningfully to the advancement of technology."
              imageUrl="\images\BMSCE IEEE CS.png"
              link="https://www.instagram.com/bmsce_ieeecs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Power Energy Society and Sensors Council"
              description="BMSCE IEEE Power & Energy Society with Sensors Council is the principal community for professionals and researchers in the power and energy domain. It serves as the central hub for impactful and revolutionary innovation, fabricating technology for the world. With free access to on-demand research papers, educational & technical materials, industry connect and project collaborations, PES & SC aims at providing individuals with stage to teach, learn and explore various interdisciplinary domains."
              imageUrl="\images\BMSCE IEEE PES AND SENSORS.png"
              link="https://www.instagram.com/bmsce_pes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Women in Engineering"
              description="BMSCE IEEE WIE (Women in Engineering) is committed to empowering emerging talents in the dynamic fields of Science and Engineering. By promoting collaboration between members and esteemed industry professionals, the society creates an environment rich in intellectual growth and innovative advancement. Members gain access to valuable resources, skill development opportunities, and a supportive community that fosters their personal and professional growth. The energetic IEEE community fuels innovation, and organizes impactful workshops and conferences that inspire and equip members to lead and excel in their careers."
              imageUrl="\images\BMSCE IEEE WIE.png"
              link="https://www.instagram.com/bmsce_wie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>

          <div className="card-item">
            <Card1
              title="BMSCE IEEE Power Electronic Society and Industrial Electronic Society"
              description="The BMSCE IEEE PELS and IES, being one of the fastest-growing technical societies, help in advancing the practice comprehension of electrical and electronics engineering. Our vision is to endeavour knowledge and create awareness of the latest technologies and other advancements in the fields of power electronics, industrial electronics and their innovations."
              imageUrl="\images\BMSCE IEEE PELS Logo.png"
              link="https://www.instagram.com/bmsce_pels_ies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>
          <div className="card-item SSIT">
            <Card1
              title="BMSCE IEEE Society of Social Implications of Technology"
              description="The BMSCE IEEE Power & Energy Society (PES) with the Sensors Council is a premier community for professionals and researchers in the power and energy sector. Serving as a central hub for transformative innovation, PES & SC plays a key role in advancing technology that shapes the future of the global energy landscape. With free access to on-demand research papers, educational resources, technical materials, industry connections, and project collaborations, learn, and explore various interdisciplinary fields."
              imageUrl="\images\BMSCE IEEE SSIT.png"
              link="https://www.instagram.com/bmsce_ssit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
          </div>
        </div>
      </container>
      <Footer />
    </div>
  );
};

export default Membershipone;
