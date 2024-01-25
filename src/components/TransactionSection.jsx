export const TransactionSection = () => {
  return (
    <>
      <div className="">
        <p className="text-xl font-normal mb-5">Transaction | This Month</p>
        <div className="shadow-lg shadow-slate-100 rounded-lg p-3 bg-[#ffffff]">
          <div className="flex justify-between">
            {/*Search Input */}
            <div className="flex  h-10 items-center space-x-2 px-4 rounded border border-[#d9d9d9]">
              <div className="w-4 h-4 ">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/search.png?updatedAt=1704787300374" />
              </div>
              <input
                className=" h-full w-96 focus:outline-none font-light text-base text-red"
                placeholder="Search by order ID.."
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex h-10 justify-center items-center space-x-1.5 p-3 border rounded  border-[#d9d9d9] cursor-pointer">
                <p className="text-base font-light">Sort</p>
                <div className="h-4 w-4">
                  <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/Sort.png?updatedAt=1705044808471" />
                </div>
              </div>
              <div className="flex h-10 w-9 justify-center items-center space-x-1.5 p-2 border rounded  border-[#d9d9d9] cursor-pointer">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/download.png?updatedAt=1705401056726" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
