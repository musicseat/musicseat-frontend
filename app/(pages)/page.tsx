import { Login } from "./login";
import { Register } from "./register";

export default function Home() {
  return (
    <div className=" w-full bg-Charade h-full -z-20 relative">
      <img src="./musician.jpg" className="absolute top-0 w-[400px] h-[400px] -z-10" alt="" />
      <div className="block h-[200px] w-full ">
        <img src="./musicseat.jpg" alt="" className="mx-auto pt-8 w-full max-w-40" />
      </div>
      
      <Login />
    </div>
  );
}
