interface MetricProps {
  value: string;
  label: string;
}

const Metric = ({ value, label }: MetricProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="text-right">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          {value}
        </h3>
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default Metric;
