import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const services = [
  {
    service: "Tuntiveloitus",
    noAlvPrice: {
      value: 50,
    },
  },
  {
    service: "Kilometrikorvaus",
    noAlvPrice: {
      value: 0.5,
      suffix: "/km",
    },
  },
];

export function PricingTable() {
  return (
    <Table className="overflow-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Palvelu</TableHead>
          <TableHead>Alv 0%</TableHead>
          <TableHead className="text-right">Alv 24%</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.service}>
            <TableCell className="font-medium">{service.service}</TableCell>
            <TableCell>
              {service.noAlvPrice.value.toFixed(2)}€{service.noAlvPrice.suffix}
            </TableCell>
            <TableCell className="text-right">
              {(service.noAlvPrice.value * 1.24).toFixed(2)}€
              {service.noAlvPrice.suffix}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
