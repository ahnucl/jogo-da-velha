import { Card } from "../shared/card";

interface ScoreProps {
  label: string;
  value: number;
  color: "primary" | "secondary" | "dark" | "light";
}

export function Score({ color, label, value }: ScoreProps) {
  return (
    <Card color={color} noBorder>
      <div className="flex justify-center items-center text-dark-500 w-32 h-18">
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase">{label}</span>
          <span className="text-3xl font-black">{value}</span>
        </div>
      </div>
    </Card>
  );
}
