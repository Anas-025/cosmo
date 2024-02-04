"use client";

import { EyeOpenIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";

export default function Menu() {
  return (
    <div className="py-4 pr-4 w-[100px] flex justify-center items-center">
      <div className="bg-white p-4">
        <div className="text-black"><HomeIcon /></div>
        <div className="data"><FileTextIcon /></div>
        <div className="visualise"><EyeOpenIcon /></div>
      </div>
    </div>
  );
}
