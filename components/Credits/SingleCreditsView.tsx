import React from 'react';
import { Chart } from 'react-google-charts';

interface SingleCreditViewProps {
  title: string;
  chartData?: { label: string; value: number }[]; // Può essere opzionale
  usedColor: string;
  leftColor: string;
  usedLabel: string;
  leftLabel: string;
}

const SingleCreditView: React.FC<SingleCreditViewProps> = ({
  title,
  chartData = [], // Default empty array if undefined
  usedColor,
  leftColor,
  usedLabel,
  leftLabel,
}) => {
  // Usa un valore di fallback per evitare errori
  const data = [
    ['Label', 'Value'],
    [chartData[0]?.label ?? 'Unknown', chartData[0]?.value ?? 0], // Safe access
    [chartData[1]?.label ?? 'Unknown', chartData[1]?.value ?? 0], // Safe access
  ];

  const options = {
    pieHole: 0.4,
    colors: [leftColor, usedColor],
    pieSliceText: 'value',
    legend: {
      position: 'none',
    },
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="text-primary fw-bold m-0">{title}</h6>
      </div>
      <div className="card-body">
        <div className="chart-area">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'100%'}
            height={'300px'}
          />
        </div>
        <div className="text-center small mt-4">
          <span className="me-2">
            <i className="fas fa-circle" style={{ color: usedColor }}></i>&nbsp;{usedLabel}
          </span>
          <span className="me-2">
            <i className="fas fa-circle" style={{ color: leftColor }}></i>&nbsp;{leftLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCreditView;
