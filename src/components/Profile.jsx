import React from "react";
import { useState, useEffect } from "react";
//import classes from './Profile.module.scss'; // Assume CSS modules are set up
import "./Profile.scss";
import CircularImagePicker from "./CircularImagePicker";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import StarRatingComponent from "react-star-rating-component";
import MapComponent from "./MapComponent";
import TextCarousel from "./TextCarousel";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";
import Blog4 from "../assets/Blog4.png";
import Body1 from "../assets/Body1.jpg";
import Body2 from "../assets/Body2.jpg";
import Body3 from "../assets/Body3.jpg";
import Body4 from "../assets/Body4.jpg";
import FitLogo from "../assets/fitnessCartel.png";
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";
import Video4 from "../assets/video4.mp4";
import Yoga from "../assets/yoga_1.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Footer from "./Footer";
import MySpecializations from "./MySpecializations";
import TabComponent from "./TabComponent";
import Fit1 from "../assets/fit1.jpeg";
import BviveLogo from "../assets/whitelogo.png";
import PictureTestimonials from "./PictureTestimonials";
import SignUpPage from "./SignUpPage";
import MediaPopup from "./MediaPopUp";
import MyContent from "./MyContent";
import SearchBar from "./SearchBar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";
import "animate.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  // const images = [
  //   '',
  //   // 'url-to-image1.jpg',
  //   // 'url-to-image2.jpg',
  //   // Add more image URLs
  // ];
  const [boxes, setBoxes] = useState([]);
  const [images, setImages] = useState([""]);
  //const [rating, setRating] = useState({ rating: 2 });
  const [rating, setRating] = useState(5);
  const handleImageChange = (newImage) => {
    setImages([newImage]);
  };
  function handleOnDrag(e, boxType, color) {
    e.dataTransfer.setData("boxType", boxType);
    e.dataTransfer.setData("color", color);
  }

  function handleOnDrop(e) {
    const boxType = e.dataTransfer.getData("boxType");
    const color = e.dataTransfer.getData("color");
    setBoxes([...boxes, { boxType, color }]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setBookingModalOpen(true);
  };

  const handleMessageNowClick = () => {
    setMessageModalOpen(true);
  };

  const handleViewScheduleClick = () => {
    setScheduleModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
  };

  const handleCloseMessageModal = () => {
    setMessageModalOpen(false);
  };

  const handleCloseScheduleModal = () => {
    setScheduleModalOpen(false);
  };

  const [startDate, setStartDate] = useState();
  const [value, onChange] = useState(new Date());

  const textItems = [
    {
      heading: "Personal Training",
      subHeading: "Sub Heading",
      institute: "QLD Institute of Tale",
    },
    {
      heading: "Support Science and Nutrition",
      subHeading: "Bachelors Degree 2012",
      institute: "Queensland University of Technology",
    },
    {
      heading: "Group Excercise Freestyle",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia",
    },
    {
      heading: "Personal Training 2",
      subHeading: "Sub Heading 2",
      institute: "QLD Institute of Tale 2",
    },

    {
      heading: "Group Excercise Freestyle 2",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia 2",
    },
    {
      heading: "Personal Training 2",
      subHeading: "Sub Heading 2",
      institute: "QLD Institute of Tale 2",
    },

    {
      heading: "Group Excercise Freestyle 2",
      subHeading: "Certificate III in Fitness 2014",
      institute: "Fitness Institute Australia 2",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("waggle");

  // const textMediaItems = [
  //   {
  //     type: "text",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing eli  ipsum dolor sit amet, consectetur adipisicing elit. Facilisillum quis reprehenderit velit possimus eaque",
  //     date: "12-2-2023",
  //   },
  // ];
  const waggleData = [
    {
      type: "waggle",
      id: 1,
      user: {
        name: "James Osborn",
        username: "@jamesosborn",

        profilePic: "https://placekitten.com/50/50",
      },
      content: "Fall in love with taking care of yourself. Mind, body, spirit",
      likes: 10,
      comments: 20,
      date: "3w",
    },
    {
      type: "waggle",
      id: 2,
      user: {
        name: "James Osborn",
        username: "@jamesosborn",
        profilePic: "https://placekitten.com/50/50",
      },
      content:
        "Fitness is not about being better than someone else; it's about being better than you used to be",
      likes: 10,
      comments: 30,
      date: "2w",
    },
  ];

  const blogMediaItems = [
    { type: "image", src: Blog1, caption: "Healthy Day", date: "12-2-2023" },
    {
      type: "image",
      src: Blog2,
      caption: "Nutrition in every bite",
      date: "12-2-2023",
    },
    { type: "image", src: Blog3, caption: "Food is Good", date: "12-2-2023" },
    { type: "image", src: Blog4, caption: "Tasty Treats", date: "12-2-2023" },
  ];

  const photoMediaItems = [
    {
      type: "image",
      src: Body1,
      caption: "Holistic Workout",
      date: "12-2-2023",
    },
    { type: "image", src: Body2, caption: "Stretching", date: "12-2-2023" },
    {
      type: "image",
      src: Body3,
      caption: "Crunch the core",
      date: "12-2-2023",
    },
    {
      type: "image",
      src: Body4,
      caption: "Fitness is a lifestyle",
      date: "12-2-2023",
    },
  ];

  const videoMediaItems = [
    {
      key: 1,
      type: "video",
      src: Video3,
      caption: "Be fit",
      date: "12-2-2023",
    },
    {
      key: 2,
      type: "video",
      src: Video1,
      caption: "Be Long Lived",
      date: "12-2-2023",
    },
    {
      key: 3,
      type: "video",
      src: Video2,
      caption: "5 minutes goal",
      date: "12-2-2023",
    },
    {
      key: 4,
      type: "video",
      src: Video4,
      caption: "Do this every day",
      date: "12-2-2023",
    },
  ];
  const mediaItems =
    selectedTab === "waggle"
      ? waggleData
      : selectedTab === "photos"
      ? photoMediaItems
      : selectedTab === "videos"
      ? videoMediaItems
      : [];
  const [selectedMediaType, setSelectedMediaType] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (mediaType) => {
    setSelectedMediaType(mediaType);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [editableText, setEditableText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Facilis illum quis reprehenderit velit possimus eaque " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Facilis illum quis reprehenderit velit possimus eaque"
  );

  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    const words = newText.split(/\s+/);
    const wordLimit = 40;

    if (words.length > wordLimit && isFocused) {
      const truncatedText = words.slice(0, wordLimit).join(" ");
      setEditableText(truncatedText);
    } else {
      setEditableText(newText);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [isFollowerOpen, setFollowerOpen] = useState(false);
  const [isFollowingOpen, setFollowingOpen] = useState(false);

  const handleFollowerOpen = () => {
    setFollowerOpen(true);
  };

  const handleFollowerClose = () => {
    setFollowerOpen(false);
  };

  const handleFollowingOpen = () => {
    setFollowingOpen(true);
  };

  const handleFollowingClose = () => {
    setFollowingOpen(false);
  };

  return (
    // <div className={classes.profile}>
    //   {/* Header Section */}
    //   <header className={classes.header}>{/* Logo and Navigation */}</header>

    //   {/* Main Content Section */}
    //   <main className={classes.MainContent}>
    //     {/* Profile Section */}
    //     <section className={classes.ProfileSection}>
    //       {/* Profile Details */}
    //     </section>

    //     {/* About Me Section */}
    //     <section className={classes.AboutMe}>{/* Content */}</section>

    //     {/* Fitness Classes and Goals */}
    //     <section className={classes.FitnessClasses}>{/* Content */}</section>

    //     {/* Contact Me Section */}
    //     <section className={classes.ContactMe}>{/* Content */}</section>

    //     {/* Specialization Section */}
    //     <section className={classes.Specialization}>{/* Content */}</section>

    //     {/* Certificates Section */}
    //     <section className={classes.Certificates}>{/* Content */}</section>

    //     {/* Photos and Videos Section */}
    //     <section className={classes.PhotosVideos}>{/* Content */}</section>

    //     {/* Schedule Section */}
    //     <section className={classes.Schedule}>{/* Content */}</section>

    //     {/* Testimonials Section */}
    //     <section className={classes.Testimonials}>{/* Content */}</section>
    //   </main>
    //   {/* Footer Section */}
    //   <footer className={classes.Footer}>{/* Footer Content */}</footer>
    // </div>

    // <div className="profile-main">
    //   <div className="profile-header">
    //     <div>
    //       <img
    //       className="profile-logo"
    //         src={BviveLogo}
    //         alt="Header Logo"

    //       ></img>
    //     </div>
    //     <div>
    //       <SearchBar></SearchBar>
    //       <Link to="/SignIn">
    //         <button className="login-button">LOG IN</button>
    //       </Link>
    //       <Link to="/SignUpPage">
    //         <button
    //           className="login-button"
    //           style={{ background: "lightblue" }}
    //         >
    //           SIGN UP
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    <div className="profile-main">
      {/* Header Section */}
      <header className="profile-header">
        <div>
          <img className="profile-logo" src={BviveLogo} alt="Header Logo"></img>
        </div>
        <SearchBar />
        {/* Hamburger Menu for Small Screens */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {/* Implement your hamburger menu here */}
          <button className="menu-button">&#9776;</button>
        </div>

        <div
          className="menu-links"
          style={{ display: mobileMenuOpen ? "flex" : "" }}
        >
          <Link to="/SignIn">
            <button className="login-button">LOG IN</button>
          </Link>
          <Link to="/SignUpPage">
            <button
              className="login-button"
              style={{ background: "lightblue" }}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </header>

      <div
        className="profile-second-main"
        src="Fit1"
        style={
          {
            //  /backgroundImage: url("../assets/fit1.jpeg")
          }
        }
      >
        <div
          className="profile-second-box"
          // style={{ background: 'orange' }}
          // draggable
          // onDragStart={(e) => handleOnDrag(e, 'profile box', 'orange')}
        >
          <div className="profile-card-main">
            {/* <div className="ribbon-box-red">
            </div>
            <div className="ribbon-box-blue">
            </div> */}
            <div className="profile-card-top">
              <div className="profile-card-top-left">
                <CircularImagePicker
                  images={images}
                  onImageChange={handleImageChange}
                  // onClick = {handleProfilePicClick}
                />
                {/* {introVideo} */}
              </div>
              <div className="profile-card-top-right">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="profile-tag">Personal Trainer</div>
                  <div style={{ display: "flex" }}>
                    <div className="creditscore-box-blue">
                      <CreditScoreIcon className="icon-button-creditscore-blue" />
                    </div>

                    {/* Yellow CreditScoreIcon */}
                    <div className="creditscore-box-yellow">
                      <CreditScoreIcon className="icon-button-creditscore-yellow" />
                    </div>
                  </div>
                </div>
                <div className="profile-name">
                  <h2 style={{ marginBottom: "4px", marginTop: "0px" }}>
                    James Osborn
                  </h2>
                  <VerifiedIcon className="verified-icon"></VerifiedIcon>
                  <VerifiedIcon
                    className="verified-icon"
                    style={{ color: "gold" }}
                  ></VerifiedIcon>
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    marginBottom: "4px",
                    marginTop: "0px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  @jamesosborn
                </p>

                <div>Male, 27</div>
                <div>Cowandilla, Adelaide </div>
                {/* <div style={{ fontSize: "30px" }}>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={onStarClick}
                  />
                </div> */}
              </div>
            </div>
            <div
              className="star-main"
              // style={{ height: "10px" }}
              // style={{ fontSize: "30px",width:'100%', justifyContent:'flex-start' }}
            >
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
              />
              <div className="starText">{rating}/5</div>
              <a
                href="https://www.fitnesscartel.com.au/"
                target="_blank"
                style={{
                  color: "lightblue",
                  textDecoration: "none",
                  marginLeft: "auto",
                  marginTop: "-15px",
                }}
              >
                <img
                  src={FitLogo}
                  alt="Fitness Cartel"
                  style={{
                    maxWidth: "150px",
                  }}
                ></img>
              </a>
            </div>
            <div className="follow-card">
              <div className="sessions">
                <div className="sessions1">25</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Sessions
                </div>
              </div>
              <div className="sessions" onClick={handleFollowerOpen}>
                <div className="sessions1">600</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Hive
                </div>
              </div>

              <div className="sessions" onClick={handleFollowingOpen}>
                <div className="sessions1">500</div>
                <div
                  className="sessions1"
                  style={{
                    fontWeight: "normal",
                    color: "lightgray",
                    fontSize: "14px",
                  }}
                >
                  Bees
                </div>
              </div>
            </div>
            <div className="profile-card-bottom">
              <div className="profile-card-bottom-text">
                <textarea
                  className="editable-text"
                  value={editableText}
                  onChange={handleTextChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              <div className="profile-card-bottom-button">
                <button
                  className="transparent-button"
                  onClick={handleBookNowClick}
                >
                  {" "}
                  Book Now
                </button>
                <button
                  className="transparent-button"
                  onClick={handleViewScheduleClick}
                >
                  View Schedule
                </button>
                <button
                  className="transparent-button"
                  onClick={handleMessageNowClick}
                >
                  Message Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextCarousel items={textItems} itemsPerView={4} />
      <div className="profile-social-main">
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 2", "blue")}
        >
          <a
            href="https://www.facebook.com/profile.php?id=61551652394165"
            target="_blank"
          >
            <FacebookIcon style={{ color: "rgb(8, 102, 255)" }} />
          </a>
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 1", "blue")}
        >
          <a href="https://www.instagram.com/bviveofficial/" target="_blank">
            <InstagramIcon style={{ color: "rgb(228, 64, 95)" }} />
          </a>
        </div>

        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 3", "blue")}
        >
          <a href="https://www.linkedin.com/company/bvive/" target="_blank">
            <LinkedInIcon style={{ color: "rgb(10, 102, 194)" }} />
          </a>
        </div>
        <div
          className="profile-social-box-1"
          draggable
          onDragStart={(e) => handleOnDrag(e, "social 3", "blue")}
        >
          <a
            href="https://www.youtube.com/channel/UC7De0VCT97KHKca4mQSugBQ"
            target="_blank"
          >
            <YouTubeIcon style={{ color: "rgb(255, 0, 0)" }} />
          </a>
        </div>
      </div>
      <div className="profile-aboutme-main-1" style={{ background: "#3b3b3b" }}>
        <MySpecializations></MySpecializations>
      </div>
      <div className="profile-aboutme-main">
        <div
          className="profile-aboutme-left-box"
          style={{ background: "#e64588" }}
        >
          <h2 className="media-heading">Media</h2>
          <div className="media-under-line"></div>
          <div className="list-container" style={{ overflow: "hidden" }}>
            <ul className="list" style={{ color: "white" }}>
              {["Waggle", "Blogs", "Photos", "Videos"].map((title, index) => (
                <li
                  className="list-items"
                  key={index}
                  onClick={() => openPopup(title.toLowerCase())}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tab-component">
          {/* <div className="profile-aboutme-right-box" style={{ display: "flex" }}> */}
          <TabComponent
            className="tab-component"
            activeTab={selectedTab}
            onTabChange={setSelectedTab}
            mediaItems={mediaItems}
          />
        </div>

        <div className="profile-aboutme-main-2">
          <MyContent
            title="Waggle"
            mediaItems={waggleData}
            onViewAll={() => openPopup("waggle")}
          />
          <MyContent
            title="Blogs"
            mediaItems={blogMediaItems}
            onViewAll={() => openPopup("blogs")}
          />
          <MyContent
            title="Photos"
            mediaItems={photoMediaItems}
            onViewAll={() => openPopup("photos")}
          />
          <MyContent
            title="Videos"
            mediaItems={videoMediaItems}
            onViewAll={() => openPopup("videos")}
          />
        </div>
      </div>
      {isPopupOpen && (
        <MediaPopup
          mediaItems={
            selectedMediaType === "waggle"
              ? waggleData
              : selectedMediaType === "blogs"
              ? blogMediaItems
              : selectedMediaType === "photos"
              ? photoMediaItems
              : selectedMediaType === "videos"
              ? videoMediaItems
              : []
          }
          type={
            selectedMediaType.charAt(0).toUpperCase() +
            selectedMediaType.substring(1)
          }
          onClose={closePopup}
        />
      )}

      {/* <div className="profile-aboutme-main">
                <div
                  className="profile-aboutme-left-box" 
                  style={{ background: 'grey' }}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, 'fitness & goals', 'grey')}
                >
                  <h2> Fitness classes and goals</h2>
                </div>
                <div
                  className="profile-aboutme-right-box"
                  style={{ background: 'grey' }}
                ></div>
              </div> */}

      {/* <div className="profile-aboutme-main">
        <div
          className="profile-aboutme-left-box"
          style={{ background: "white", width: "50%" }}
          draggable
          onDragStart={(e) => handleOnDrag(e, "contact me", "green")}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "10px",
              color: "black",
              marginLeft: "80px",
              fontWeight: "500",
              marginTop: "40px",
            }}
          >
            Contact me
          </h2>
          <div className="under-line" style={{ backgroundColor: "black" }}></div>
          <div style={{ display: "flex" }}>
            <div className="contact-icons">
              <div className="icon-container">
                <LocationOnIcon color="black" />
                <span className="text">Brisbane</span>
              </div>
              <div className="icon-container">
                <LanguageIcon color="black" />
                <span className="text">sales@pixoramagroup.com</span>
              </div>
              <div className="icon-container">
                <PhoneAndroidIcon color="black" />
                <span className="text">+1 (555) 123-4567</span>
              </div>
              <div className="icon-container">
                <MailOutlineIcon color="black" />
                <span className="text">sales@pixoramagroup.com</span>
              </div>
            </div>
            <div style={{ marginLeft: "100px", marginTop: "-70px" }}>
              <p> ❤️I am currently accepting bookings.</p>
            </div>
          </div>
        </div>
        <div
          className="profile-aboutme-right-box"
          style={{ background: "#ffffff", width: "50%" }}
        >
          <MapComponent></MapComponent>
        </div>
      </div> */}
      <PictureTestimonials></PictureTestimonials>
      <Footer></Footer>
      {/* <Schedule></Schedule> */}
      <Dialog
        open={isFollowerOpen}
        onClick={handleFollowerClose}
        className="animate__animated animate__zoomIn"

        // keepMounted
        // TransitionComponent={Transition}
      >
        <DialogContent
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <ul style={{ listStyle: "none", padding: "0px" }}>
            <li>Follower 1</li>
            <li>Follower 2</li>
            <li>Follower 3</li>
            <li>Follower 4</li>
            <li>Follower 5</li>
            <li>Follower 6</li>
            <li>Follower 7</li>
            <li>Follower 8</li>
            <li>Follower 9</li>
          </ul>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isFollowingOpen}
        onClick={handleFollowingClose}
        className="animate__animated animate__zoomIn"

        // keepMounted
        // TransitionComponent={Transition}
      >
        <DialogContent
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <ul style={{ listStyle: "none", padding: "0px" }}>
            <li>Following 1</li>
            <li>Following 2</li>
            <li>Following 3</li>
            <li>Following 4</li>
            <li>Following 5</li>
            <li>Following 6</li>
            <li>Following 7</li>
            <li>Following 8</li>
            <li>Following 9</li>
          </ul>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        className="animate__animated animate__zoomIn"

        // keepMounted
        // TransitionComponent={Transition}
      >
        <DialogContent
          style={{ background: "black", color: "white", textAlign: "center" }}
        >
          <div className="list">
            <ul style={{ listStyle: "none", padding: "0px" }}>
              <li>Cardio</li>
              <li>Power Lifting</li>
              <li>Swimming</li>
              <li>Meditation</li>
              <li>Yoga</li>
            </ul>
          </div>
        </DialogContent>
        {/* <DialogActions>
                  <Button onClick={handleCloseBookingModal}>Close</Button>
                </DialogActions> */}
      </Dialog>

      {/* Message Modal */}
      <Dialog
        open={isMessageModalOpen}
        onClose={handleCloseMessageModal}
        className="animate__animated animate__zoomIn"

        // keepMounted
        // TransitionComponent={Transition}
      >
        <DialogContent
          style={{ background: "black", color: "white", textAlign: "center" }}
        >
          Contact us at:
          <br></br>
          <a>sales@pixoramagroup.com</a>
        </DialogContent>
      </Dialog>

      {/* Schedule Modal */}
      <Dialog
        open={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
        className="animate__animated animate__zoomIn"

        // keepMounted
        // TransitionComponent={Transition}
      >
        <DialogContent style={{ borderRadius: "5px", height: "300px" }}>
          <DateTimePicker
            onChange={onChange}
            value={value}
            selected={startDate}
            // onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </DialogContent>
        {/* <DialogActions>
                  <Button onClick={handleCloseScheduleModal}>Close</Button>
                </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Profile;
