"use client";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./style.module.css";
import { Cross1Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

function Modal({ closeModal }) {
  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={classes.modal}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="justify-end flex pt-4 pr-4">
          <button
            type="button"
            onClick={closeModal}
            className=" hover:bg-gray-300 items-center"
          >
            <div style={{ color: "white" }}>
              <Cross1Icon></Cross1Icon>
            </div>
          </button>
        </div>
        <form class="flex flex-col space-y-6 mx-6 pb-4" action="#">
          <h3 class="text-xl font-medium  text-white">Sign in</h3>
          <hr className="w-3/4 mx-auto" />
          <div>
            <label
              for="email"
              class="text-sm font-medium  block mb-2 text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black"
              placeholder="name@company.com"
              required=""
            ></input>
          </div>
          <div>
            <label
              for="password"
              class="text-sm font-medium  block mb-2 text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black"
              required=""
            ></input>
          </div>
          <div class="flex justify-between gap-x-10">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                ></input>
              </div>
              <div class="text-sm ml-2">
                <label for="remember" class="font-medium  text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              class="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in to your account
          </button>
          <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
