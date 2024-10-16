import React from 'react';
import { Chart } from 'react-google-charts';

const UsageStatistics = () => {
  const payPerUseData = [
    ['Month', 'Credits'],
    ['Jan', 0],
    ['Feb', 15],
    ['Mar', 45],
    ['Apr', 30],
    ['May', 65],
    ['Jun', 40],
    ['Jul', 10],
    ['Aug', 45],
  ];

  const freeTrialData = [
    ['Month', 'Free Pages'],
    ['Jan', 0],
    ['Feb', 350],
    ['Mar', 200],
    ['Apr', 700],
    ['May', 400],
    ['Jun', 1000],
    ['Jul', 150],
    ['Aug', 200],
  ];

  const options = {
    title: '',
    hAxis: {
      title: 'Month',
      titleTextStyle: { color: '#333' },
    },
    vAxis: {
      minValue: 0,
    },
    chartArea: { width: '70%', height: '70%' },
  };

  return (
    <div className="card shadow mb-4">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        style={{ paddingTop: '12px', paddingBottom: '12px' }}
      >
        <h6 className="text-primary fw-bold m-0">USAGE STATISTICS</h6>
        <div className="dropdown no-arrow">
          <button
            className="btn btn-link btn-sm dropdown-toggle"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            type="button"
          >
            <i className="fas fa-ellipsis-v text-gray-400"></i>
          </button>
          <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
            <p className="text-center dropdown-header">Choose the plan:</p>
            <a className="dropdown-item" href="#">
              Pay-Per-Use
            </a>
            <a className="dropdown-item" href="#">
              Free Trial
            </a>
          </div>
        </div>
      </div>
      <div className="card-body" style={{ paddingBottom: '12px', paddingTop: '11px' }}>
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-bs-toggle="tab"
                id="tab-link"
                href="#tab-1"
              >
                Pay-Per-Use Credits
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-bs-toggle="tab"
                id="tab-link"
                href="#tab-2"
              >
                Free Trial Pages
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-1">
              <div id="chart-usage" className="chart-area">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={payPerUseData}
                  options={options}
                />
              </div>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-2">
              <div id="chart-usage" className="chart-area">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={freeTrialData}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default UsageStatistics;
