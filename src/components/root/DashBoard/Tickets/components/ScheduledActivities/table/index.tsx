import { TableSimple } from "@/components/ui/molecules/dataTableSimple";
import { columns, Payment } from "../columns";

function getData(): Payment[] {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 400,
      status: "processing",
      email: "m@example.com",
    },
  ];
}

export default function TableScheduleActivies() {
  const data = getData();

  return (
    <div className="container mx-auto">
      <TableSimple columns={columns} data={data} />
    </div>
  );
}
