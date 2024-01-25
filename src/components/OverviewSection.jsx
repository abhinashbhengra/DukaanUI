export const OverviewSection = () => {
  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6 ">
          <p className="text-xl font-normal">Overview</p>
          <div className="h-9 w-34 px-4 rounded border flex items-center">
            <select className="focus:outline-none text-base font-light  ">
              <option>Last Month</option>
              <option>This Month</option>
            </select>
          </div>
        </div>
        {/*Order Details Section */}
        <div className="flex space-x-5 ">
          <div className="basis-1/2 bg-[#ffffff] p-5 rounded-lg shadow-lg shadow-slate-100">
            <div>
              <p className="mb-4 text-base font-light">Online orders</p>
              <p className="text-3xl">231</p>
            </div>
          </div>
          <div className="basis-1/2 bg-[#ffffff] p-5 rounded-lg shadow-lg shadow-slate-100">
            <div>
              <p className="mb-4 text-base font-light">Amount received</p>
              <p className="text-3xl">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
