import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { BsFileEarmarkImage } from "react-icons/bs";
import {
  AiOutlineInfoCircle,
  AiTwotoneCalendar,
  AiFillFileAdd,
} from "react-icons/ai";
import { MdFormatListBulleted, MdAddCircleOutline } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import Button from "../utilities/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RegisterForm = ({ goback }) => {
  const [page, setPage] = useState(1);
  const changePage = () => {
    setPage(page + 1);
  };

  const goToPreviousTab = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    console.log("my", page);
  }, [page]);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        {/* <a onClick={() => {}} custom={"bg-emdmsPrimary px-2 py-2 rounded-sm"}>
            <FaAngleLeft
              onClick={() => goback("table")}
              className="text-white"
            />
          </a> */}
        <div className="text-3xl text-orange-800 font-poppins font-medium text-center justify-center mt-10">
          Registration Form
        </div>
        {page === 1 && (
          <>
            <div className="lg:flex gap-4">
              <div className="lg:flex lg:flex-col  lg:w-full ">
                <div className="bg-white  rounded-lg shadow-lg">
                  <div className="bg-orange-500 rounded-tl-lg  w-1/4 top-0 h-2"></div>
                  <div className=" py-16 px-10">
                    {/* job order information */}
                    <div className="flex lg:flex justify-between items-center gap-2">
                      <div className="flex flex-col">
                        <div className="text-orange-700 text-2xl font-poppins font-medium">
                          <p>General Information</p>
                        </div>
                        {/* <div className="text-[#7F7F7F] text-xs">
                          <p>Please Provide the neccassary Information</p>
                        </div> */}
                      </div>

                      <div className="lg:flex  lg:justify-between  mb-10">
                        <a className="bg-orange-100 rounded-lg shadow-lg h-[100px] w-[100px] flex flex-col justify-center items-center space-y-2">
                          <BsFileEarmarkImage className="text-3xl" />
                          <p className="text-center text-xs">Upload Picture</p>
                        </a>
                      </div>
                    </div>

                    <form>
                      <div class="grid gap-6 mb-6 md:grid-cols-2 w-[700px]">
                        <div>
                          <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                            First name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Tsion"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="last_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Mengistu"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Gender
                          </label>
                          <select
                            id="countries"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                            <option selected>Select Gender</option>
                            <option value="CA">Male</option>
                            <option value="FR">Female</option>
                          </select>
                        </div>
                        <div>
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nationality
                          </label>
                          <select
                            id="countries"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                            <option selected>Select Nationality</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>

                            <option value="US">Ethiopia</option>
                            <option value="CA">China</option>
                            <option value="FR">Kenya</option>
                            <option value="DE">Madagascar</option>
                          </select>
                        </div>

                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Birth Place
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50  border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Wollo"
                            required
                          />
                        </div>
                        <div>
                          {" "}
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Birth Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="rounded-lg w-[340px] border border-orange-200 text-gray-400"
                          />
                        </div>

                        <div>
                          <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Phone number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="+251-925-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                          />
                        </div>

                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Work at
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="LMIS"
                            required
                          />
                        </div>
                        {/* <div>
                          <label
                            for="visitors"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Unique visitors (per month)
                          </label>
                          <input
                            type="number"
                            id="visitors"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder=""
                            required
                          />
                        </div> */}
                      </div>
                      <div class="mb-6">
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                          placeholder="mtsion@yahoo.com"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <h2>Residence Information</h2>
                        <div class="grid gap-6 mb-6 md:grid-cols-2 w-[700px]">
                          <div>
                            <label
                              for="countries"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Subcity
                            </label>
                            <select
                              id="countries"
                              class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                              <option selected>Jemmo</option>
                              <option value="CA">Addis</option>
                              <option value="FR">Gulele</option>
                              <option value="CA">Bole</option>
                              <option value="FR">Piassa</option>
                              <option value="CA">Summit</option>
                              <option value="FR">CMC</option>
                            </select>
                          </div>
                          <div>
                            <label
                              for="countries"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Woreda
                            </label>
                            <select
                              id="countries"
                              class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                              <option selected>01</option>
                              <option value="US">01</option>
                              <option value="CA">02</option>
                              <option value="FR">03</option>
                              <option value="DE">04</option>

                              <option value="US">05</option>
                              <option value="CA">06</option>
                              <option value="FR">07</option>
                              <option value="DE">08</option>
                            </select>
                          </div>
                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              House Number
                            </label>
                            <input
                              type="text"
                              id="first_name"
                              class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                              placeholder="New/001"
                              required
                            />
                          </div>

                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Post Number
                            </label>
                            <input
                              type="text"
                              id="first_name"
                              class="bg-gray-50 border  border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                              placeholder="1000Z"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3">Living Situation</h3>
                      <div class="flex mb-3">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            With Family
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Alone
                          </label>
                        </div>{" "}
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            With Brothers
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Married
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            checked
                            id="inline-checked-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-checked-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Other
                          </label>
                        </div>
                      </div>
                      <h3 className="mb-3">Work Status</h3>
                      <div class="flex mb-3">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Student
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Employed
                          </label>
                        </div>{" "}
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            In Business
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            checked
                            id="inline-checked-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-checked-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Other
                          </label>
                        </div>
                      </div>

                      <div class="grid gap-6 mb-6 md:grid-cols-2 w-[700px]">
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Work at
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="LMIS"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Studies at
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="AAU"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Business type
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Import and Export"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Job Title
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Developer"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Monthly Income (Optional)
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="10,000"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Special Talent
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Eating"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="website"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Hobby
                          </label>
                          <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Reading"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="lg:flex justify-end sm:text-center m-4">
                  <button
                    className="rounded-lg shadow-lg w-[100px] p-2 border border-orange-500 text-orange-500"
                    onClick={changePage}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <div className=" mt-8 flex gap-4 ">
              <div className="flex flex-col  w-full gap-4">
                <div className="bg-white  rounded-lg shadow-lg overflow-y-auto">
                  <div className="bg-orange-500 rounded-tl-lg  w-2/4 top-0 h-2"></div>
                  <div className=" py-16 px-10">
                    {/* job order information */}
                    <div className="lg:flex justify-between">
                      <div className="lg:flex flex-col gap-1 mb-5">
                        <div className="text-orange-700 text-2xl font-poppins font-medium">
                          <p>መነፈሳዊ ሁኔታ</p>
                        </div>
                        {/* <div className="text-[#7F7F7F] text-xs">
                          <p>Please Provide the neccassary Information</p>
                        </div> */}
                      </div>
                    </div>
                    <form>
                      <div class="grid gap-6 mb-6 md:grid-cols-2 w-[700px]">
                        <div>
                          {" "}
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ጌታን የተቀበሉበት ጊዜ
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="rounded-lg w-[340px] border border-orange-200 text-gray-400"
                          />
                        </div>
                        <div>
                          <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ጌታን የተቀበሉበት ቤ/ክ
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border  border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Halwot"
                            required
                          />
                        </div>
                        <div>
                          {" "}
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            የተጠመቁበት ጊዜ
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="rounded-lg w-[340px] border border-orange-200 text-gray-400"
                          />
                        </div>

                        <div>
                          <label
                            for="last_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ጌታን ከመቀበልዎ በፊት የነበሩበት ሃይማኖት
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Catholic"
                            required
                          />
                        </div>
                        <div className="">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ከሌላ ቤተክርስቲያን የመጡ ከሆነ ወደዚህ ለመምጣት የወሰኑበት ምክንያት
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border border-orange-200 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Write your thoughts here..."></textarea>
                        </div>

                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            በቤተክርስቲያን ሲያገለግሉበት የነበረ ዘርፍ
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Worship"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            በሀልዎት ቤተክርስቲያን ማገልገል የሚፈልጉት ዘርፍ
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Worship"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            የወሰዷቸው ተጨማሪ ስልጠናዎች
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Discipleship"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          በቤተክርስቲያን የወሰዷቸው መሰረታዊ የክርስትና ትምህርቶች
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                          <option selected>የትምህርቱ አይነት</option>
                          <option value="CA">የደህንነት</option>
                          <option value="FR">ከእኔ ተማሩ</option>
                          <option value="CA">የደቀመዝሙር</option>
                          <option value="FR">የዶክትሪን ትምህርት</option>
                          <option value="CA">የሀልዎት ባህል</option>
                          <option value="FR">ሌላ</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 m-4">
                  <button
                    className="rounded-lg shadow-lg w-[100px] p-2 border border-orange-500"
                    onClick={goToPreviousTab}>
                    Back
                  </button>
                  <button
                    className="rounded-lg shadow-lg w-[100px] p-2 border border-orange-500 text-orange-500"
                    onClick={changePage}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {page === 3 && (
          <>
            <div className=" mt-8 flex gap-4 ">
              <div className="flex flex-col  w-full gap-4">
                <div className="bg-white   rounded-lg shadow-lg">
                  <div className="bg-orange-500 rounded-t-lg  w-full top-0 h-2"></div>
                  <div className="  py-16 px-10">
                    {/* job order information */}
                    <div className="flex flex-col gap-1 mb-5">
                      <div className="text-orange-700 text-2xl font-poppins font-medium">
                        <p>የቤተሰብ ሁኔታ</p>
                      </div>
                    </div>
                    <form>
                      <h3 className="mb-3">የጋብቻ ሁኔታ</h3>
                      <div class="flex mb-3">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            ያገባ/ች
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            ያላገባ/ች
                          </label>
                        </div>{" "}
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            የፈታ/ች
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            checked
                            id="inline-checked-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-checked-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            መበለት
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border border-orange-200 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            ሌላ
                          </label>
                        </div>
                      </div>
                      <div class="grid gap-6 mb-6 md:grid-cols-2 w-[700px]">
                        <div>
                          <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            የሚስት/የባል ስም ከነአያት
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Halwot"
                            required
                          />
                        </div>
                        <div>
                          {" "}
                          <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ትዳር የመሰረቱበት ጊዜ
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="rounded-lg w-[340px] border border-gray-200 text-gray-400"
                          />
                        </div>

                        {/* <div>
                          <label
                            for="last_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ጌታን ከመቀበልዎ በፊት የነበሩበት ሃይማኖት
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Catholic"
                            required
                          />
                        </div>
                        <div className="">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            ከሌላ ቤተክርስቲያን የመጡ ከሆነ ወደዚህ ለመምጣት የወሰኑበት ምክንያት
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border border-orange-200 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Write your thoughts here..."></textarea>
                        </div>

                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            በቤተክርስቲያን ሲያገለግሉበት የነበረ ዘርፍ
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Worship"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            በሀልዎት ቤተክርስቲያን ማገልገል የሚፈልጉት ዘርፍ
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Worship"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            የወሰዷቸው ተጨማሪ ስልጠናዎች
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Discipleship"
                            required
                          />
                        </div>
                         */}
                      </div>
                      <h3 className="mb-3">የትዳር አጋርዎ ጌታን ተቀብለዋልን? </h3>
                      <div class="flex mb-3">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            አዎን
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            አልተቀበሉም
                          </label>
                        </div>{" "}
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          መልስዎ አዎን ከሆነ የየት ቤተክርስቲያን አባል ናቸው?
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                          placeholder="Halwot"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          መልስዎ አልተቀበሉም ከሆነ የምን ሃይማኖት ተከታይ ናቸው?
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                          placeholder="Halwot"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          የቤተሰብ ብዛት
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border border-orange-200 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-500">
                          <option selected>1</option>
                          <option value="CA">2</option>
                          <option value="FR">3</option>
                          <option value="CA">4</option>
                          <option value="FR">5</option>
                          <option value="CA">6</option>
                          <option value="FR">7</option>
                          <option value="FR">8</option>
                          <option value="FR">9</option>
                          <option value="FR">10</option>
                        </select>
                      </div>
                      <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-orange-200 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="max-w-xl ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          የቤተክርስቲያኒቱ የእምነት አንቀጽ፣ ራዕይ፣ ተልእኮ እና እሴት እንዲሁም የመተዳደሪያ{" "}
                          ደንብ ተቀብዬ እንደ አካል አብሮ ለማምለክና ጌታን ለማገልገል በመስማማት የሀልዎት
                          አማኑኤል ህብረት ቤተክርስቲያን አባል መሆኔን በፊርማዬ አረጋግጣለሁ፡፡
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 m-4">
                  <button
                    className="rounded-lg shadow-lg w-[100px] p-2 border border-orange-500"
                    onClick={goToPreviousTab}>
                    Back
                  </button>
                  <button
                    className="rounded-lg shadow-lg w-[100px] p-2 text-white bg-orange-500"
                    onClick={""}>
                    Submit
                  </button>
                </div>
              </div>

              {/* right side card */}

              {/* end of right side card */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
