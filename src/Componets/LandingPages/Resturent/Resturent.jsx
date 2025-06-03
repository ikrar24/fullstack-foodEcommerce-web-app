import React from "react";
import "./Resturent.css"
function Resturent({resturentRef}) {
  return (
    <section className="resturentContainer" ref={resturentRef}>
      <div className="resturentBox">
        <h4 className="resturentHeading">Our Resturent</h4>

        <div className="resturentImgBoxContainer">
          <div className="resturentimgBox">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="resturent" className="resturentImg" />
          </div>
          
          <div className="resturentimgBox">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="resturent" className="resturentImg" />
          </div>

          <div className="resturentimgBox">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="resturent" className="resturentImg" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resturent;
