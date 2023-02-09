import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Menu": {},
  "About": {}
}});

export default useIoStore;
