import { client } from "../../../sanity.client";
import { CarouselQuery } from "@/utils/sanity/sanityQueries";
import CarouselSlide, { CarouselType } from "./CarouselSlide";

const Carousel = async() => {
  const caurouselList:CarouselType[] = await client.fetch(CarouselQuery)
  console.log(caurouselList);
  
  return (
    <section className="relative w-full h-[1000px] lg:h-[600px] text-xl font-bold ">
      <CarouselSlide {...caurouselList[0]}/>
      <CarouselSlide {...caurouselList[1]}/>
      {/* <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex h-[500px] lg:h-full flex-col items-center gap-10 lg:items-start justify-between">
            <p className="w-24 h-12 bg-pink-200 rounded-full text-primary-100 text-center flex items-center justify-center">
              لیبل
            </p>
            <p className="text-primary-300">
              <span>سفارش راحت کالا با قابلیت </span>
              <span className="text-primary-100">برداخت درب منزل</span>
            </p>
            <p className="font-light text-lg">
              ارسال به سراسر ایران کمتر از ۱ هفته کاری.تحویل درب منزل.بشتیبانی
              به صورت ۲۴/۷{" "}
            </p>
            <p className="flex gap-3 items-center ">
              <span className="size-5 bg-primary-100 flex justify-center items-center text-sm text-primary-50 rounded-full">
                <FaCheck />
              </span>
              <span>تخفیفات</span>
            </p>
            <p className="flex gap-3 items-center ">
              <span className="size-5 bg-primary-100 flex justify-center items-center text-sm text-primary-50 rounded-full">
                <FaCheck />
              </span>
              <span>جنس سوفیا آبشاری</span>
            </p>
            <p className="flex gap-3 items-center ">
              <span className="size-5 bg-primary-100 flex justify-center items-center text-sm text-primary-50 rounded-full">
                <FaCheck />
              </span>
              <span>تعداد محدود</span>
            </p>
            <Link
              className="w-fit px-5 py-3 rounded-full bg-primary-100 text-primary-50 flex justify-between items-center gap-2 cursor-pointer hover:opacity-90"
              href="/"
            >
              <span>مشاهده تخفیف ها</span>
              <span>
                <FaArrowLeftLong />
              </span>
            </Link>
          </div>
          <figure className="relative w-full h-[500px] bg-amber-500">
            <Image
              src="/shoes.webp"
              className="object-cover size-full"
              alt="فروشگاه چندشنبه بازار"
              fill
            />
            <figcaption className="size-full absolute z-10 text-black flex flex-col justify-between p-3">
              <div className="flex justify-between items-start text-white">
                <div className="size-20 rounded-full bg-primary-100 flex flex-col justify-center items-center">
                  <span>50%</span>
                  <span>تخفیف</span>
                </div>
                <div className="rounded-full bg-primary-100 flex justify-between items-center w-fit px-5 py-3 gap-2 text-lg">
                  <span>ویژگی ها</span>
                  <span>
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col justify-between items-start h-24 w-fit rounded-lg shadow-lg px-4 py-2">
                  <p className="text-base font-semibold">بر فروشترین</p>
                  <p className="flex justify-between items-center gap-4">
                    <span className="text-base text-gray-400 line-through">
                      ۱۱۰۰۰۰
                    </span>
                    <span className="text-primary-100 font-extrabold text-2xl">
                      ۹۰۰۰۰
                    </span>
                    <span>تومان</span>
                  </p>
                </div>
                <div className="flex flex-col shadow-lg gap-1.5 rounded-lg ">
                  <p className="text-base font-semibold">نام کاربر</p>
                  <div className="flex flex-row-reverse gap-1.5 justify-end text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <p className="text-sm font-light max-w-60 overflow-hidden whitespace-nowrap text-ellipsis ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ipsam expedita quibusdam repudiandae nisi distinctio
                    laborum! Labore repudiandae quae, voluptatum vero deserunt
                    error blanditiis fugiat quis quaerat quam deleniti suscipit?
                  </p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div> */}
      {/* <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade">
        <div className="bg-sky-500  w-[1200px] h-full"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade">
        <div className="bg-lime-500  w-[1200px] h-full"></div>
      </div> */}
    </section>
  );
};

export default Carousel;
