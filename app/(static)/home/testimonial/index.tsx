import React from "react";
import Heading from "../../(components)/ui/heading";
import { InfiniteFeedbacks } from "../../(components)/ui/infinity-feedbacks";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div
      className="text-gray-600 overflow-x-hidden dark:text-gray-300  dark:bg-gray-900 lg:py-10 3xl:py-20 bg-gray-50 mt-10"
      id="reviews"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <Heading subTitle="">What our clients say</Heading>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Daniella Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
              libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing
                </p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/18.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanick Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/62.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Andy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanndy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
        {/* <InfiniteFeedbacks
          direction="top"
          speed="normal"
          items={testimonials}
        /> */}
      </div>
    </div>
  );
}

export default Testimonials;
