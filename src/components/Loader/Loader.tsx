import style from "./Loader.module.css";
import { BarLoader } from "react-spinners";

export default function Loader() {
  return <div className={style.backdrop}>{<BarLoader color="#36d7b7" />}</div>;
}
