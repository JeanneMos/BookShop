import React from "react";
import { Link } from "react-router-dom";

interface IStyledLinkProps {
  children?: React.ReactNode;
  linkClass?: string;
  as?: string;
  linkTo: string;
  target?: string;
  dataTestid?: string;
}
export default function StyledLink({
  children,
  linkClass,
  as = "link",
  linkTo,
  target,
  dataTestid,
}: IStyledLinkProps) {
  if (as === "ahref") {
    return (
      <a
        href={linkTo}
        target={target}
        data-testid={dataTestid}
        className={linkClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={linkTo} className={linkClass}>
      {children}
    </Link>
  );
}
