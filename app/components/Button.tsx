import Link from "next/link";
import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
  link: string;
}

const Button = function ({ children, link }: MyComponentProps) {
  return (
    <Link
      className="bg-button-primary text-white font-semibold text-sm py-2 px-3 rounded-sm cursor-pointer"
      href={link}
    >
      {children ? children : "Finish review"}
    </Link>
  );
};

export default Button;
