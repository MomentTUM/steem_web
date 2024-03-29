import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserProfile } from "./redux/user-slice";
import { fetchCart } from "./redux/cart-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { fetchGameInfo } from "./redux/game-slice";
import useGameInfo from "./hooks/useGameInfo";
import Loading from "./components/Loading";
import useLoading from "./hooks/useLoading";
import { getAllFriends } from "./redux/friend-slice";
import { getTransaction } from "./redux/transaction-slice";
import socket from "./config/socket";
import useUser from "./hooks/useUser";

export default function App() {
  const dispatch = useDispatch();
  const authUser = useAuth();
  const gameInfo = useGameInfo();
  const load = useLoading();
  const user = useUser();

  // fetch cart and userProfile
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!gameInfo?.length) {
        dispatch(fetchGameInfo());
      }
    }, 150);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [gameInfo]);

  useEffect(() => {
    if (authUser) {
      dispatch(fetchUserProfile(authUser.id));
      dispatch(fetchCart());
      dispatch(getTransaction());
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser) {
      dispatch(getAllFriends());
    }
  }, [authUser]);

  useEffect(() => {
    if (user.id) {
      socket.auth = { userId: user.id };
      socket.connect();
    }
    return () => {
      socket.disconnect();
      socket.off("receive_message");
    };
  }, [user]);

  return (
    <>
      {load && <Loading />}
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="bottom-center" />
    </>
  );
}
