import React from "react";
import "./aboutPageCss.css";
import bg from "../img/bg_about.jpg";

function aboutPage() {
  return (
    <div className="about-page bg-blue-100 w-full h-full ">
      <div className="about-us">
        <p className="text-headingColor text-bold text-4xl text-center underline">
          About us
        </p>
        <p className="text-textColor font-semibold text-lg">
          <br></br> Welcome to Bargain-Bites the premier destination for
          restaurant discounts! We partner with restaurants across the country
          to bring you the best deals on your favorite meals, all in one place.
          At Bargain-Bites, we believe that everyone should be able to
          enjoy great food at an affordable price. That's why we've made it our
          mission to connect you with top restaurants and their amazing menus,
          while offering you exclusive discounts and offers that you won't find
          anywhere else. <br></br>Whether you're in the mood for Italian, Chinese,
          American, or any other cuisine, our easy-to-use platform makes it
          simple to browse and order from your favorite restaurants online.
          Plus, with our regular deals and promotions, you'll always get the
          best value for your money. So why wait? Start exploring our website
          today and discover a world of delicious food and unbeatable discounts.
          Whether you're looking for a quick lunch or a romantic dinner, we've
          got you covered. <br></br><br></br>Join our community of food lovers and start enjoying
          amazing discounts on your favorite restaurants today. With Bargain-Bites , it's never been easier to eat well and save money at
          the same time!<br></br>
        </p>
      </div>
      <p className="text-bold text-3xl text-center text-headingColor underline">
        Our Developers
      </p>
      <div className="developers-section flex items items-center justify-center">
        <image src={bg} className="w-full h-full"></image>
        <div className="developer-card flex items-center justify-center">
          <div>
            <img
              className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"
              src="https://drive.google.com/uc?export=view&id=1nSXVGFp71EijLjnFE-qLirnd4Vvbqi--"
              alt="Developer 1"
            />
            <p className="text-headingColor font-semibold">Aditya parashar</p>
            <a href="https://www.linkedin.com/in/aditya-parashar-0979541ba/">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="developer-card flex items-center justify-center">
          <div>
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHY2-I8QxRNwg/profile-displayphoto-shrink_800_800/0/1679061703390?e=1689206400&v=beta&t=ksquYcx84MNqfB4tjKFjpZIyKbdlSXawsgLLtC9mcdw"
              alt="Developer 2"
            />
            <p className="text-headingColor font-semibold">Nirbhay Chopra</p>
            <a href="https://www.linkedin.com/in/nirbhay-chopra-00b50b241/">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="developer-card flex items-center justify-center object-contain">
          <div className="object-contain ">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFaKNogNrT67Q/profile-displayphoto-shrink_800_800/0/1679689790513?e=2147483647&v=beta&t=K1wyrjcB5J9jSvibMYPCI3iYrJtp08NVPyN5l4Xjg1A"
              alt="Developer 3"
              className="object-contain"
            />
            <p className="text-headingColor font-semibold">Karan Ahuja </p>
            <a href="https://www.linkedin.com/in/karan-ahuja-b1b690201/">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="developer-card flex items-center justify-center">
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1-r27bZ1xYFpS4geazIaG-yN7ElO_QBFX"
              alt="Developer 4"
            />
            <p className="text-headingColor font-semibold"> Ajay Kumar Gupta</p>
            <a href="https://www.linkedin.com/in/ajay-kumar-gupta-179209211/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutPage;
