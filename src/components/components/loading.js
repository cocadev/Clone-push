import Lottie from "lottie-react";
import small from "../components/constants/small.json";

export function SmallLoading() {
    return (
      <div className="w-full d-center mt-30">
        <div style={{ width: 400}}>
          <Lottie animationData={small}/>
        </div>
      </div>
    );
  }