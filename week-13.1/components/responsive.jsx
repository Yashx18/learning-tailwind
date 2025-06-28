export const ResponsiveComponent = () => {
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