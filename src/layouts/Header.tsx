import React from "react";
import { RiMenuLine } from "@remixicon/react";

export default function Headernav() {
  const [isClick, setClick] = React.useState<boolean>(false);
  React.useEffect(() => {
    document.body.classList.toggle("collapsed", isClick);
  }, [isClick]);

  return (
    /* Desktop */
    <div className="header d-none d-sm-block">
      <nav className="navigator">
        <div className="container-fluid px-3 px-xl-4">
          <div className="d-flex align-items-center">
            <div
              className="navbar-toggler border-0"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setClick(!isClick)}
            >
              <RiMenuLine />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
