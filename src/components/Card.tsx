import { RiArrowDropUpLine } from "@remixicon/react";

export default function Card() {
  return (
    <div className="row sparkboxes">
      <div className="mb-4 col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h6>Sales</h6>
            </div>
            <h3 className="mt-1 mb-3">$ 49.979,10</h3>
            <p>
              <span className="text-success">
                <RiArrowDropUpLine />
                2.47%
              </span>
              <span className="text-muted"> Last month</span>
              <strong> $ 28</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
