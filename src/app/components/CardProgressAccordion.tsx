import { Card, Text, Flex, ProgressBar, Grid, Icon, Title, Divider, Bold, Accordion, AccordionBody, AccordionHeader, BarList, Color } from "@tremor/react";

import { ArrowsPointingOutIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

// const LightningBoltIcon = (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//     <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//   </svg>
// );

interface Data {
  name: string;
  value: number;
}

interface Category {
  title: string;
  percentageValue: number;
  icon: any;
  color: Color;
  date: string;
  info: string;
  data: Data[];
}

const card: Category[] = [
  {
    title: "Average Ground Coverage Ratio (GCR)",
    percentageValue: 41,
    icon: ArrowsPointingOutIcon,
    color: "rose",
    date: "15.11.2022",
    info: "Single Panel GCR in %",
    data: [
      { name: "Panel 1", value: 53 },
      { name: "Panel 2", value: 24 },
      { name: "Panel 3", value: 38 },
      { name: "Panel 4", value: 33 },
      { name: "Panel 5", value: 57 }
    ]
  },
  {
    title: "Average Performance Ratio",
    percentageValue: 83,
    icon: ArrowLongRightIcon,
    color: "indigo",
    date: "Today",
    info: "Single Panel Performance in %",
    data: [
      { name: "Panel 1", value: 96 },
      { name: "Panel 2", value: 62 },
      { name: "Panel 3", value: 78 },
      { name: "Panel 4", value: 82 },
      { name: "Panel 5", value: 97 }
    ]
  }
];

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

export default function Example() {
  return (
    <Grid numColsSm={1} numColsLg={2} className="gap-6">
      {card.map(item => (
        <Card decoration="left" decorationColor={item.color} key={item.title} className="h-fit">
          <Flex justifyContent="start" className="space-x-4">
            <Icon variant="outlined" icon={item.icon} size="sm" color={item.color} />
            <Title className="truncate">{item.title}</Title>
          </Flex>
          <Flex className="space-x-3 mt-3">
            <ProgressBar className="mt-0" percentageValue={item.percentageValue} color={item.color} />
            <Title>{item.percentageValue}%</Title>
          </Flex>
          <Divider />
          <Text>
            Last Inspection: <Bold>{item.date}</Bold>
          </Text>
          <Accordion className="mt-4">
            <AccordionHeader>
              <div className="space-y-2">
                <Text>{item.info}</Text>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <BarList key={item.title} data={item.data} className="mt-2" color={item.color} valueFormatter={dataFormatter} />
            </AccordionBody>
          </Accordion>
        </Card>
      ))}
    </Grid>
  );
}
