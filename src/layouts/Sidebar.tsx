import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <>
      <div
        className="col-md-auto sidebar position-fixed top-0 start-0 border-end d-none d-sm-block"
        aria-label="sidebar"
      >
        <div className="sidebar-brand">
          <span>Logo</span>
        </div>
        <div className="d-flex flex-column">
          <Navigation />
        </div>
      </div>
    </>
  );
}
