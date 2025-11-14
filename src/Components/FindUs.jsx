import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start hover:bg-base-200  join-item"> <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start hover:bg-base-200 join-item"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start hover:bg-base-200 join-item"> <FaInstagram></FaInstagram> nstagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
