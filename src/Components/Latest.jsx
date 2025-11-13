import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-4 rounded-xl">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold text text-accent">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
        </p>
        <p className="font-bold text text-accent">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
        </p>
        <p className="font-bold text text-accent">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
