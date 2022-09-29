import React, { useState } from "react";

export const EventForm = () => {
  const [startDateTime, setStartDateTime] = useState("2018-06-12T19:30");
  const [endDateTime, setEndDateTime] = useState("2018-06-12T19:30");

  const handleChange = (e) => {
    if (!e.target["validity"].valid) return;
    return e.target["value"] + ":00Z";
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className=" md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="event-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      name="event-eame"
                      id=" event-name"
                      autocomplete="given-name"
                      className="form-control  mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Host Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      className="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className=" block w-full mt-3 rounded-md border border-gray-300 bg-white py-2 px-3  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="floatingInput"
                      className=" text-sm font-medium text-gray-700"
                    >
                      Start Event
                    </label>
                    <input
                      type="datetime-local"
                      value={(startDateTime || "").toString().substring(0, 16)}
                      onChange={(e) => {
                        const dt = handleChange(e);
                        setStartDateTime(dt);
                      }}
                      class="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Select a date"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="floatingInput"
                      className=" text-sm font-medium text-gray-700"
                    >
                      End Event
                    </label>

                    <div className="datepicker relative form-floating mb-3">
                      <input
                        type="datetime-local"
                        value={(endDateTime || "").toString().substring(0, 16)}
                        onChange={(e) => {
                          const dt = handleChange(e);
                          setEndDateTime(dt);
                        }}
                        className="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <label class="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
