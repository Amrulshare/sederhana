"use client";
import { NavLink } from "react-router-dom";

export function LinkGroub({ item }: any) {
  return (
    <>
      <NavLink
        to={item.path}
        className={({ isActive }) => (isActive ? "bg-white" : "")}
      >
        <div className="p-2">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      </NavLink>
    </>
  );
}
