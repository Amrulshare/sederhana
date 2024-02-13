import { RiArrowDropUpLine } from "@remixicon/react";
import ReactApexChart from "react-apexcharts";
import CountUp from "react-countup";

interface DashboardProps {
  id: number;
  title: string;
  price: number;
  isDoller: boolean;
  statusColor: string;
  series: Array<any>;
}

const DataChart: Array<DashboardProps> = [
  {
    id: 1,
    title: "Sales",
    price: 1257,
    isDoller: true,
    statusColor: "success",
    series: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15],
  },
];

export default function Sparkboxes() {
  return (
    <div className="row sparkboxes pb-2">
      {(DataChart || []).map((data, key) => (
        <div className="mb-4 col-12 col-md-6 col-lg-3" key={key}>
          <div className="card">
            <div className="card-body">
              <h6 className="text-muted mb-3 d-block text-truncate">
                {data.title}
              </h6>
              <div className="align-items-center row mb-3">
                <div className="col-6">
                  <h3 className="mt-1 mb-3">
                    {data.isDoller === true ? "$" : ""}
                    <CountUp
                      start={0}
                      end={data.price}
                      duration={2}
                      separator=""
                      decimals={2}
                      decimal=","
                    />
                  </h3>
                </div>
                <div className="col-6">
                  <ReactApexChart
                    options={options}
                    type="line"
                    height={30}
                    className="apex-charts mb-2"
                    series={[{ data: [...data["series"]] }]}
                  />
                </div>
              </div>
              <div className="sparkboxes-footer">
                <span className="text-success fw-semibold">
                  <RiArrowDropUpLine />
                  2.47%
                </span>
                <span className="text-muted"> Last month</span>
                <strong> $ 28</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const options: Object = {
  chart: {
    type: "line",
    toolbar: { show: false },
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#e5eaef"],
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
};
