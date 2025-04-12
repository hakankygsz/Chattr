import { RootState } from "@/app/store";
import loadingAnimation from '@/assets/animations/loading.json';
import Lottie from 'lottie-react';
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-white dark:bg-black z-50">
      <Lottie
        animationData={loadingAnimation}
        style={{ width: 350, height: 350 }}
        loop
      />
    </div>
  );
};

export default Loader;
