import { useState } from "react";
import { profileimg, star, starempty } from "../assets";
import { Footer, Navbar } from "../components";

const Review = () => {
  const [starReview, setStarReview] = useState(0);
  const [commentReview, setCommentReview] = useState("");

  const handleStar = (rate) => {
    setStarReview(rate);
  };

  const starRate = (rate, starReview) => {
    if (rate <= starReview) {
      return star;
    }
    return starempty;
  };

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col bg-primary items-center">
        <div className="xl:max-w-[1440px]">
          <div className="flex flex-col w-full mt-16 items-end gap-4">
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <img
                src={profileimg}
                alt=""
                className="w-56 h-56 object-cover object-center rounded-[100%]"
              />
              <div className="flex flex-row gap-1">
                <img
                  src={starRate(1, starReview)}
                  onClick={() => handleStar(1)}
                  alt=""
                  className="w-14 h-14"
                />
                <img
                  src={starRate(2, starReview)}
                  onClick={() => handleStar(2)}
                  alt=""
                  className="w-14 h-14"
                />
                <img
                  src={starRate(3, starReview)}
                  onClick={() => handleStar(3)}
                  alt=""
                  className="w-14 h-14"
                />
                <img
                  src={starRate(4, starReview)}
                  onClick={() => handleStar(4)}
                  alt=""
                  className="w-14 h-14"
                />
                <img
                  src={starRate(5, starReview)}
                  onClick={() => handleStar(5)}
                  alt=""
                  className="w-14 h-14"
                />
              </div>
              <textarea
                value={commentReview}
                id="message"
                onChange={(e) => setCommentReview(e.target.value)}
                placeholder="Write your comment down here"
                className="w-[68rem] h-[12.5rem] mt-16 text-[1.25rem] text-white placeholder-white p-5 bg-[#E8B19D] border border-[#BEBEBF] rounded-md hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:outline-none"
              />
            </div>
            <div className="flex flex-row flex-end mb-20 gap-5">
              <button className="w-56 bg-[#C0523A] text-white py-2 text-xl rounded-md">
                Send Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Review;
