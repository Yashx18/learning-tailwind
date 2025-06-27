import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen text-white bg-[#211f21] px-14 flex items-center justify-center">
        <AgeComponent />
      </div>
    </>
  );
}

const AgeComponent = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start bg-[#00274e] h-screen w-full pt-10">
        <div className="w-full text-center text-2xl px-4 py-10  ">
          <span className="text-blue-400">Webinar</span>.gg
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Verify Your Age</h1>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm  ">
              Please confirm your birth year. This data will not be stored.
            </p>
            <input
              type="text"
              placeholder="Your Birth Year"
              className="bg-[#18395f] text-gray-300 placeholder-gray-400 py-2 px-3 text-start border-none rounded-lg focus:outline-none w-75 mt-3"
            />
          </div>
          <button className="cursor-pointer bg-gray-500 font-semibold px-4 py-2 w-75 rounded-lg mt-9 hover:bg-gray-600 focus:bg-blue-400">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

const ResponsiveComponent = () => {
  return (
    <>
      <div className="bg-pink-300 p-5 border rounded-lg md:bg-blue-400 md:grid md:grid-cols-12 ">
        <div className=" border rounded-lg p-5 w-full md:col-span-5  ">
          Hi there, From the first Child
        </div>
        <div className=" border rounded-lg p-5 w-full md:col-span-5  ">
          Hi there, From the second Child
        </div>
        <div className=" border rounded-lg p-5 w-full md:col-span-2  ">
          Hi there, From the third Child
        </div>
      </div>
    </>
  );
};

const FlexComponent = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-pink-300 p-5 border rounded-lg ">
        <div className="border bg-blue-300 rounded-md p-5">Child 1</div>
        <div className="border bg-blue-300 rounded-md p-5">Child 2</div>
        <div className="border bg-blue-300 rounded-md p-5">Child 3</div>
      </div>
    </>
  );
};

const GridComponent = () => {
  return (
    <>
      <div className="grid grid-cols-12 border rounded-md p-5 ">
        <div className="col-span-5 bg-red-300 p-5 border rounded-md">
          Child 1
        </div>
        <div className="col-span-5 bg-red-300 p-5 border rounded-md">
          Child 2
        </div>
        <div className="col-span-2 bg-red-300 p-5 border rounded-md">
          Child 3
        </div>
      </div>
    </>
  );
};

export default App;
