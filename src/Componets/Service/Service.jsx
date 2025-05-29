import React from 'react';
import "./Service.css";

const serviceData = {
  rigthSideDataOfService: [
    {
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati perferendis veniam laboriosam debitis quia reiciendis iure veritatis itaque omnis.",
      },
      {
        text:
          "Another left paragraph for services. Describing the details of offerings or benefits.",
      },
      {
        text:
          "Another left paragraph for services. Describing the details of offerings or benefits.",
      },
  ],

  leftSideDataOfService: [
    {
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati perferendis veniam laboriosam debitis quia reiciendis iure veritatis itaque omnis.",
    },
    {
      text:
        "Another left paragraph for services. Describing the details of offerings or benefits.",
    },
    {
      text:
        "Another left paragraph for services. Describing the details of offerings or benefits.",
    },
  ],
};

function Service() {
  return (
    <>
      <h3 className="serviceHeading">Our Services</h3>
      <section className="serviceContainer">
        <div className="serviceBox">
          {/* LEFT SIDE */}
          <div className="leftSeriveBox">
            {serviceData.leftSideDataOfService.map((item, index) => (
              <p className="leftSerivePara" key={index}>
                {item.text}
              </p>
            ))}
          </div>

          {/* CENTER LINE */}
          <div className="destinationLineBox">
            <p className="destinationLinePara">________</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="rightSeriveBox">
            {serviceData.rigthSideDataOfService.map((item, index) => (
              <p className="rigthSerivePara" key={index}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
