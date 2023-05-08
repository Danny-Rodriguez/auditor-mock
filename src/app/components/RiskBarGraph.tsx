import { Card, BarChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980
  }
];

const data2 = [
  {
    Month: "2019",
    Risk: 5
  },
  {
    Month: "2020",
    Risk: 4.2
  },
  {
    Month: "2021",
    Risk: 3.2
  },
  {
    Month: "2022",
    Risk: 2.2
  },
  {
    Month: "2023",
    Risk: 1.4
  }
];

// const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
const valueFormatter = (number: number) => `${Number.parseFloat((number * 1.0).toString())}.0`;

export default function Example() {
  return (
    <Card className="mt-6 h-[532px]">
      <Title>Risk Trend</Title>
      {/* <Text>Comparison between Sales and Profitmax-h-[416px]</Text> */}
      <BarChart className="riskBars mt-4 max-h-[616px]" data={data2} index="Month" categories={["Risk"]} colors={["red", "fuchsia"]} stack={false} valueFormatter={valueFormatter} maxValue={5.0} minValue={1.0} />
      <style jsx global>
        {`
           {
            /* .riskBars path[name="Risk"] {
            fill: red !important;
          } */
          }

          .riskBars g g:nth-child(1) > path {
            fill: red !important;
          }
          .riskBars g g:nth-child(2) > path {
            fill: orange !important;
          }
          .riskBars g g:nth-child(3) > path {
            fill: #fdda0d !important;
          }
          .riskBars g g:nth-child(4) > path {
            fill: #fdda0d !important;
          }
          .riskBars g g:nth-child(5) > path {
            fill: green !important;
          }
        `}
      </style>
    </Card>
  );
}
