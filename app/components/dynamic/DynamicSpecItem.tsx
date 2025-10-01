interface DynamicSpecItemProps {
  label: string;
  value: string;
}

export default function DynamicSpecItem({ label, value }: DynamicSpecItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-bold text-gray-600">{label}:</span>{' '}
      <span className="text-gray-100">{value}</span>
    </div>
  );
}