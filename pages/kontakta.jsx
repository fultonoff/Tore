import React from 'react'
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import {motion} from 'framer-motion'
import { Input, Textarea } from "@material-tailwind/react";

function Kontakta() {
  return (
    <main className="border-t bg-grayinsh pb-[100px]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className=" maxW mx-auto h-full  bg-grayinsh"
      >
        <h1 className="text-center text-5xl font-bold pt-20  text-Charcoal">
          {" "}
          Kontakt{" "}
        </h1>
        <p className="text-center mb-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          nulla!
        </p>
        <div className="flex flex-col md:flex-row">
          <form className="flex flex-col md:flex-row w-full md:w-[50%] font-poppins">
            <div className="flex w-full flex-col  px-2 space-y-5">
              <div className="flex space-y-2 md:space-y-0 md:space-x-2 flex-col md:flex-row">
                {/* <input
                  type="text"
                  required
                  className="w-full py-3 px-2 border border-yellow outline-none rounded-[5px] focus:border-Blue duration-200"
                  placeholder="First Name"
                /> */}

                <Input label="First name" required />
                <Input label="Last name" />
              </div>

              <Input
                type="email"
                required
               label='Email'
              />
              <Input
                type="text"
                required
                label='Subject'
              />
              <Textarea label="Message" />
              <button
                type="submit"
                className="bg-Charcoal text-white border py-2 rounded-[5px] hover:bg-yellow/80 duration-200"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="flex flex-col w-full bg-grayinsh md:w-[50%] p-5 ">
            <h2 className="font-bold text-2xl text-center md:text-left  mx-auto md:mx-0">
              Contact information
            </h2>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, iste.
            </p>
            <div className="flex flex-col mt-10 mx-auto md:mx-0 space-y-5">
              <div className="flex items-center space-x-2">
                <BsGeoAlt /> <span>Vinkelgränd 8, 95243 Töre</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsTelephone /> <span>+46 (0) 923-64 06 21</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsEnvelope /> <span>bo-wallsten@tele2.se</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Kontakta