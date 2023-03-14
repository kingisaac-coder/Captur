import React from "react";
import InstagramImg from "./InstagramImg";
import IGImg1 from "../public/pexels-atc-comm-photo-306763.jpg";
import IGImg2 from "../public/pexels-fox-225157.jpg";
import IGImg3 from "../public/pexels-kaique-rocha-598917.jpg";
import IGImg4 from "../public/pexels-md-iftekhar-uddin-emon-403495.jpg";
import IGImg5 from "../public/pexels-photomix-company-212372.jpg";

function Instagram() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IGImg1} />
        <InstagramImg socialImg={IGImg2} />
        <InstagramImg socialImg={IGImg3} />
        <InstagramImg socialImg={IGImg4} />
        <InstagramImg socialImg={IGImg5} />
      </div>
    </div>
  );
}

export default Instagram;
