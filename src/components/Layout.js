import React from "react";
import TransitionEffectScreen from "./TransitionEffectScreen";

export default function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light pt-12 pb-7 px-32 ${className}`}>
      <TransitionEffectScreen />
      {children}
    </div>
  );
}
