import Carousel from "./Carousel";
const slides = ["images/b2.svg", "images/b1.svg", "images/b3.svg"];
import ItemCard from "../../components/ItemCard";

function Home() {
  let a = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row-reverse justify-center items-center my-12">
        <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
          <div className="sm:max-w-lg max-w-sm max-h-full ">
            <Carousel autoSlide={true}>
              {[
                ...slides.map((s) => (
                  <img src={s} className="sm:min-w-full	 sm:min-h-80" />
                )),
              ]}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col sm:justify-start justify-center items-center sm:items-start sm:w-1/3 mt-7 sm:mt-0">
          <div className="mb-4 px-4 sm:pl-4 sm:px-0  text-3xl font-extrabold tracking-tight leading-none text-mainBlue sm:text-left text-center">
            Embrace the future of electronics with us.
          </div>
          <div>
            <p className="mb-4  px-4 sm:pl-4 sm:px-0 font-light text-mainBlue sm:text-left text-center">
              Welcome to our premier electronics emporium, where innovation
              meets convenience. Discover cutting-edge gadgets and tech
              essentials curated to elevate your digital lifestyle.
            </p>
            <div className=" w-full flex justify-center sm:justify-start">
              <button
                type="button"
                className="sm:mx-4 text-white bg-mainBlue focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
              >
                Let's Try..!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bottomWhite">
        <div className="mt-5 mb-3">
          <h1 className="text-2xl text-center text-mainBlue font-semibold ">
            Featured Products
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center mb-5">
          {a.map(() => (
            <div className="mx-2 w-40 sm:w-1/4">
              <ItemCard />
            </div>
          ))}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;
