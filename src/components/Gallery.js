import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-section">
        <h2 className="gallery-section__header">GALLERY</h2>
        <div className="gallery-section__grid">
          <img
            src="https://static.wixstatic.com/media/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.jpg/v1/fill/w_544,h_815,al_c,q_85,usm_0.66_1.00_0.01/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.webp"
            alt=""
            className="gallery-section__img"
          />
          <img
            src="https://static.wixstatic.com/media/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.jpg/v1/fill/w_542,h_815,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.webp"
            alt=""
            className="gallery-section__img"
          />
          <img
            src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_543,h_815,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp"
            alt=""
            className="gallery-section__img"
          />
        </div>
      </div>
    );
  }
}
