export const Sidebar = () => {
  return (
    <>
      <div className="bg-[#1e2640] w-56 min-h-screen">
        {/*Company Icon Section*/}
        <div className="pt-4 px-2 flex items-center space-x-3 text-white">
          <div className="h-10 w-10 rounded ">
            <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Image.png?updatedAt=1704728714640" />
          </div>
          <div className="pr-9">
            <p className="text-base font-light">Nishyan</p>
            <p className="text-sm font-extralight underline">Visit store</p>
          </div>
          <div className="h-5 w-5">
            <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Chevron%20Down.png?updatedAt=1704731137921" />
          </div>
        </div>
        {/* Menu Section */}
        <div className="text-white px-2 my-6">
          <ul>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/Home.png?updatedAt=1704741214965" />
              </div>
              <p className="text-sm">Home</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/orders.png?updatedAt=1704742709209" />
              </div>
              <p className="text-sm">Orders</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/products.png?updatedAt=1704742851958" />
              </div>
              <p className="text-sm">Products</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/delivery.png?updatedAt=1704742972472" />
              </div>
              <p className="text-sm">Delivery</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/marketing.png?updatedAt=1704743067471" />
              </div>
              <p className="text-sm">Marketing</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/analytics.png?updatedAt=1704743181554" />
              </div>
              <p className="text-sm">Analytics</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/payments.png?updatedAt=1704743285035" />
              </div>
              <p className="text-sm">Payments</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/tools.png?updatedAt=1704743363344" />
              </div>
              <p className="text-sm">Tools</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/discounts.png?updatedAt=1704743451620" />
              </div>
              <p className="text-sm">Discounts</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/audience.png?updatedAt=1704743557188" />
              </div>
              <p className="text-sm">Audience</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/appearance.png?updatedAt=1704743645584" />
              </div>
              <p className="text-sm">Appearance</p>
            </li>
            <li className="flex space-x-3 items-center px-4 py-2 mb-1 cursor-pointer ">
              <div className="h-5 w-5">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/plugins.png?updatedAt=1704743738449" />
              </div>
              <p className="text-sm">Plugins</p>
            </li>
          </ul>
        </div>
        {/* Nav-Bottom */}
        <div className="ml-4 mt-auto">
          <div className="w-48 h-14 bg-[#353c53] rounded px-3 py-1.5">
            <div className="flex space-x-3 items-center">
              <div className="bg-[#495064] w-9 h-9 p-1.5 flex justify-center items-center rounded ">
                <img src="https://ik.imagekit.io/u6itcrvxy/Dukaan/Icons/wallet.png?updatedAt=1704746075749" />
              </div>
              <div className="text-white">
                <p className="font-thin text-sm">Available Credits</p>
                <p>222.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
