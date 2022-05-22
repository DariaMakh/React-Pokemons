import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); // обычный дистпатч, но типипзированный
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // обычный useSelector, но типизированный
