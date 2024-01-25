export const Topbar = () => {
  return (
    <>
      <div className="flex px-8 justify-between items-center h-16 w-full border-b">
        {/*Payment*/}
        <div className="flex space-x-4">
          <p className="text-base font-light">Payments</p>
          <div className="flex items-center space-x-1.5">
            <div className="h-3.5 w-3.5">
              <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/Help.png?updatedAt=1704788867473" />
            </div>
            <p className="text-xs font-light">How it works</p>
          </div>
        </div>
        {/*Search Input */}
        <div className="flex bg-[#f2f2f2] h-10 items-center space-x-2 px-4 rounded">
          <div className="w-4 h-4 ">
            <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/search.png?updatedAt=1704787300374" />
          </div>
          <input
            className="bg-[#f2f2f2] h-10 w-96 focus:outline-none font-light text-base text-red"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        {/* Menu Icons */}
        <div className="flex space-x-3">
          <div className="h-10 w-10 bg-[#f2f2f2] rounded-full flex justify-center items-center ">
            <img
              className="w-6/12 cursor-pointer"
              src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/comment.png?updatedAt=1704786060821"
            />
          </div>
          <div className="h-10 w-10 bg-[#f2f2f2] rounded-full flex justify-center items-center">
            <img
              className="w-6/12 cursor-pointer"
              src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/Polygon%202.png?updatedAt=1704786218294"
            />
          </div>
        </div>
      </div>
    </>
  );
};
