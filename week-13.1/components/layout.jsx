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

export { GridComponent, FlexComponent };
