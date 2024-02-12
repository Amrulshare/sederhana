import {
  RiDashboard2Line,
  RiFileEditLine,
  RiLayoutGridLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";

const MenuItem = [
  {
    title: "Main",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: <RiDashboard2Line size={21} />,
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        label: "Form",
        path: "/form",
        icon: <RiFileEditLine size={21} />,
      },
      {
        label: "Table",
        path: "/table",
        icon: <RiLayoutGridLine size={21} />,
      },
    ],
  },
];

function Navigation() {
  return (
    <>
      {MenuItem.map((head, index) => {
        return (
          <ul key={index} className="nav flex-column mb-4">
            <li className="nav-item nav-pills">
              <div className="mb-1 text-black-50 text-uppercase small">
                {head.title}
              </div>
            </li>
            {head.items.map((links, index) => {
              return (
                <li className="nav-item nav-pills fs-5" key={index}>
                  <NavLink
                    to={links.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link p-3 d-flex align-items-center active"
                        : "nav-link p-3 d-flex align-items-center"
                    }
                  >
                    <span className="d-inline-block text-secondary-light me-3 ">
                      {links.icon}
                    </span>
                    <span className="small me-auto">{links.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        );
      })}
    </>
  );
}

export default Navigation;
