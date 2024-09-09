import { FaQuoteRight } from "react-icons/fa";


const SwipSlide = () => {
    return (
        <div className="flex gap-5 mt-16">
        <div className="bg-gray-500  bg-opacity-30 rounded-3xl relative  px-8 py-5">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div>
              <div className="flex flex-col lg:flex-row gap-5 items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <h2>Fawzi Sayed</h2>
                  <p>Ui Ux Designer</p>
                </div>
              </div>

              {/* rating */}
              <div className="rating rating-lg items-center mt-5 lg:mt-0 gap-3">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
               <p className="text-2xl"> 5.0</p>
              </div>
            </div>
            <div>
              <FaQuoteRight className="text-5xl"></FaQuoteRight>
                
            </div>
          </div>
          <p className="opacity-85 px-5 lg:px-0">consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
        </div>
      </div>
    );
};

export default SwipSlide;