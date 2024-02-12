import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <>
      <div
        className="col-md-auto sidebar position-fixed top-0 start-0 border-end d-none d-sm-block"
        aria-label="sidebar"
      >
        <div className="sidebar-brand">
          <span className="lead fs-3 fw-semibold">Sederhana</span>
        </div>
        <div className="py-3 px-3">
          <Navigation />
        </div>
      </div>
    </>
  );
}
