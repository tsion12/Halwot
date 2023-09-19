import React from "react";
import ImageTwo from "../assets/Image5.jpg";
import ImageThree from "../assets/image4.jpg";
import ImageFour from "../assets/image6.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Main Container */}
      <div className="mt-20 flex flex-col justify-center items-center space-y-2">
        <div className="font-serif">About Us</div>
        <div className="font-serif text-4xl font-bold">Love and Compasion</div>
        <div className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          <br />
          natus quis accusantium dolores nostrum explicabo quod quos nesciunt ex
          ullam rerum voluptatem, laborum voluptates, <br /> recusandae saepe
          eligendi quia, illum magnam!
        </div>
        <div className="flex justify-center space-x-6">
          <div>
            <img
              src={ImageTwo}
              alt=""
              className="w-[300px] object-fit rounded-3xl h-[400px] shadow-lg   transform hover:scale-105 hover:rounded-xl duration-200 mt-10"
            />
          </div>

          <div className=" flex flex-col">
            <button
              type="button"
              class="mt-10 focus:outline-none text-white shadow-lg    bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6 dark:focus:ring-orange-900">
              Read More
            </button>
            <img
              src={ImageTwo}
              alt=""
              className="w-[350px]  h-[500px] object-fit rounded-3xl shadow-lg    transform hover:scale-105 hover:rounded-xl duration-200"
            />
          </div>
          <div>
            <img
              src={ImageTwo}
              alt=""
              className="w-[300px]  object-fit rounded-3xl h-[400px] shadow-lg    transform hover:scale-105 hover:rounded-xl duration-200 mt-10"
            />
          </div>
        </div>

        <div className="font-serif pt-10">Our Mission & Vision</div>
        <div className="font-serif uppercase font-bold text-3xl">
          Celebrate with us
        </div>

        <div className="font-serif max-w-sm my-4 text-xs leading-5 tracking-wide text-center text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolores
          laborum veniam pariatur provident odio quaerat delectus quidem, eius
          magnam tenetur neque aut quia minus ullam illo adipisci, cupiditate
          voluptatum!
        </div>
        <div className="flex items-center gap-1">
          <p className="font-serif max-w-sm my-4 text-xs leading-5 tracking-wide text-center text">
            Read more{" "}
          </p>
          <FaLongArrowAltRight />
        </div>
      </div>
    </>
  );
};

export default About;
