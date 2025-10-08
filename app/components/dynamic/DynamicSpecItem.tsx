interface DynamicSpecItemProps {
  label: string;
  value: string | number;
}

export default function DynamicSpecItem({ label, value }: DynamicSpecItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-bold text-lg text-gray-600">{label}:</span>{' '}
      <span className="text-gray-100 text-lg max-w-[150px] text-center" >{value}</span>
    </div>
  );
}