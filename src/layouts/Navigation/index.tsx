import { LinkGroub } from "./LinkGroub";
import {
  RiHome2Line,
  RiDashboard2Line,
  RiSettings2Line,
} from "@remixicon/react";

const MenuItem = [
  {
    title: "Pages",
    items: [
      {
        label: "Home",
        path: "/",
        icon: <RiHome2Line />,
      },
      {
        label: "Dashboard",
        path: "/d",
        icon: <RiDashboard2Line />,
      },
    ],
  },
  {
    title: "Dashboard",
    items: [
      {
        label: "Setting",
        path: "/s",
        icon: <RiSettings2Line />,
      },
    ],
  },
];

function Navigation() {
  return (
    <>
      {MenuItem.map((item) => (
        <ul key={item.title} className="list-unstyled px-2">
          <li className="text-muted">{item.title}</li>
          {item.items.map((links) => (
            <li key={links.label}>
              <LinkGroub item={links} />
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

export default Navigation;
