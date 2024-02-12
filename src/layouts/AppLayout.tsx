import React from "react";
import Meta from "./Meta";
import Sidebar from "./Sidebar";
import Headernav from "./Header";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: Props) {
  return (
    <>
      <Meta pageTitle={title} />
      <div className="appwrapper">
        <div className="wrapper">
          <Sidebar />
          <div className="main-content col d-flex flex-column position-relative">
            <Headernav />
            <main className="flex-grow-1">
              <div className="container-fluid px-3 py-4 px-xl-4">
                <div className="content-body">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
