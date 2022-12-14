import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { countryList } from "../constants";

export const EventForm = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
    host: "",
    location: countryList[0],
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    file: null,
  });

  useEffect(() => {
    localStorage.setItem("event", JSON.stringify(event));
  }, [event]);

  const onChange = (event) => {
    setEvent((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="mt-10 sm:mt-0 font-[Helvetica] ">
      <div className="text-center text-[64px] text-[#E87BF8] font-bold my-8">
        Create Event
      </div>

      <div className=" md:grid md:grid-cols-[repeat(auto-fit,_30.666666%)] justify-center  md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form
            onSubmit={() => {
              navigate("/event");
            }}
          >
            <div className="overflow-hidden drop-shadow-[0px_0px_46.869px_rgba(0,0,0,0.05)] bg-white sm:rounded-md ">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="event-name"
                      className="block text-sm text-[#240D57] font-bold"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      id=" event-name"
                      autocomplete="given-name"
                      value={event.name}
                      onChange={onChange}
                      minlength="3"
                      className="form-control  mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm text-[#240D57] font-bold"
                    >
                      Host Name
                    </label>
                    <input
                      type="text"
                      required
                      minlength="3"
                      name="host"
                      id="last-name"
                      value={event.host}
                      onChange={onChange}
                      autocomplete="family-name"
                      className="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="country"
                      class="block text-sm text-[#240D57] font-bold"
                    >
                      Location
                    </label>
                    <select
                      id="country"
                      name="location"
                      autocomplete="country-name"
                      value={event.location}
                      onChange={onChange}
                      className=" block w-full mt-3 rounded-md border border-gray-300 bg-white py-2 px-3  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      {countryList.map((country) => (
                        <option>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="floatingInput"
                      className=" block text-sm text-[#240D57] font-bold"
                    >
                      Start Event
                    </label>
                    <input
                      type="datetime-local"
                      name="start"
                      required
                      value={event.start}
                      onChange={onChange}
                      class="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Select a date"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      for="floatingInput"
                      className=" block text-sm text-[#240D57] font-bold"
                    >
                      End Event
                    </label>

                    <div className="datepicker relative form-floating mb-3">
                      <input
                        type="datetime-local"
                        name="end"
                        required
                        value={event.end}
                        onChange={onChange}
                        className="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <label class="block text-sm text-[#240D57] font-bold">
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
                          {event.file}
                          <input
                            id="file-upload"
                            name="file"
                            type="file"
                            required
                            class="sr-only"
                            value={event.file || ""}
                            onChange={onChange}
                            accept="image/png, image/jpeg"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="px-[70px] py-2 text-white rounded-[10px] font-bold text-xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
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
