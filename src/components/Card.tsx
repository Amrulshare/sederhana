import { RiArrowDropUpLine } from "@remixicon/react";

export default function Card() {
  return (
    <div className="row sparkboxes pb-2">
      <div className="mb-4 col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="card-body">
            <h6>Sales</h6>
            <div className="align-items-center row">
              <div className="col-6">
                <h3 className="mt-1 mb-3">$ 49.979,10</h3>
              </div>
              <div className="col-6"></div>
            </div>
            <div className="sparkboxes-footer">
              <span className="text-success">
                <RiArrowDropUpLine />
                2.47%
              </span>
              <span className="text-muted"> Last month</span>
              <strong> $ 28</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
