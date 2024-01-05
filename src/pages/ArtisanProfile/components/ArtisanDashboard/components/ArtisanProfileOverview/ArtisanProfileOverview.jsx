import { useState } from "react";

// stylesheet
import "./style/ArtisanProfileOverview.scss";

// images
import ProfilePhoto from "./images/avatar.png";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// antd
import { Switch } from "antd";

const ArtisanProfileOverview = () => {
  const [showEditWhatsapp, setShowEditWhatsapp] = useState(false);
  const [whatsappNum, setWhatsappNum] = useState("09068149238");
  const [newWhatsappNum, setNewWhatsappNum] = useState("");
  const [bio, setBio] = useState(
    "our work embodies a seamless blend of practicality and aesthetic appeal, enriching living spaces with exquisite craftsmanship"
  );

  // to change whatsapp number
  const handleNewWhatsappNum = (e) => {
    if (newWhatsappNum !== "") {
      setWhatsappNum(newWhatsappNum);
      setNewWhatsappNum(" ");
      toast.success("number updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // bio update
  const handleBioUpdate = (e) => {
    setBio(bio);
    toast.success("Bio updated successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="artisan-profile-overview">
      <h1>My Profile</h1>
      <div className="profile-header">
        <div className="left-profile-header">
          <img src={ProfilePhoto} alt="Profile-photo" />
        </div>
        <div className="right-profile-header">
          <div className="available-for-work">
            <p>Available for work</p>
            <Switch style={{ backgroundColor: "#10BE65" }} />
          </div>
          <div className="whatsapp-number">
            <div className="whatsapp-number-header">
              <p>Whatsapp Number</p>
              <button onClick={() => setShowEditWhatsapp(!showEditWhatsapp)}>
                Edit
              </button>
            </div>
            <div className="whatsapp-number-body">
              {showEditWhatsapp ? (
                <div className="edit-whatsapp-number">
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Enter Number"
                    value={newWhatsappNum}
                    onChange={(e) => setNewWhatsappNum(e.target.value)}
                  />
                  <button onClick={handleNewWhatsappNum}>Submit</button>
                </div>
              ) : null}
              <p>{whatsappNum}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="information-section">
        <h3>Information</h3>
        <div className="bio">
          <p>Bio</p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button onClick={handleBioUpdate}>Submit</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ArtisanProfileOverview;
