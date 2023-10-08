import React from "react";
import "./Dash.css";

function Dashboard() {
  return (
    <div className="chat-app-dashboard">
      <div className="blue-portion">
        <center>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/young-boy-6877456-5638292.png?f=webp" alt=""style={{borderRadius:"100%",backgroundColor:"white",marginTop:"5%"}} height={120}width={120}/>
        <h2 style={{color:"white"}}>Arya</h2>
        <br />
        <hr style={{color:"violet"}} />
        </center>
      </div>
      <div className="gray-portion">
        <div className="chat-messages">
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
