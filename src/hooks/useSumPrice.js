import { useSelector } from "react-redux";

export default function () {
  return useSelector((state) => state.cart.sumPrice);
}
