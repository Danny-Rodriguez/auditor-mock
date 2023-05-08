import { Bold, Button, Callout, Card, Flex, List, ListItem, Metric, ProgressBar, Text } from "@tremor/react";

import { ArrowLongRightIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

interface Issues {
  issue: string;
  topic: string;
}

const issues: Issues[] = [
  {
    issue: "Issue #249",
    topic: "Input bar"
  },
  {
    issue: "Issue #142",
    topic: "Custom colors"
  },
  {
    issue: "Issue #136",
    topic: "Button loading state"
  },
  {
    issue: "Issue #129",
    topic: "minValue for Charts"
  },
  {
    issue: "Issue #128",
    topic: "Dark mode support"
  },
  {
    issue: "Issue #124",
    topic: "className props"
  }
];

export default function Example() {
  return (
    <Card className="max-w-md mx-auto h-[688px]">
      <Text> Issues solved </Text>
      <Flex justifyContent="start" className="space-x-1" alignItems="baseline">
        <Metric> 338 </Metric>
        <Text>/ 450</Text>
      </Flex>
      <Callout title="Resolving 6x more issues than receiving" icon={ArrowTrendingUpIcon} color="emerald" className="mt-6">
        45 days until all issues are solved with the current cadence and income rate. Keep going, you got this!
      </Callout>
      <ProgressBar percentageValue={75} color="emerald" className="mt-6" />
      <Flex className="mt-4">
        <div>
          <Text>Solved</Text>
          <Text color="emerald">
            <Bold>338</Bold> (75%){" "}
          </Text>
        </div>
        <div>
          <Text className="text-right">Open</Text>
          <Text className="text-right">
            <Bold>112</Bold> (25%){" "}
          </Text>
        </div>
      </Flex>
      <Flex className="mt-6">
        <Text>
          <Bold>Open issues</Bold>
        </Text>
        <Text>
          <Bold>Topic</Bold>
        </Text>
      </Flex>
      <List className="mt-1">
        {issues.map(item => (
          <ListItem key={item.issue}>
            <span> {item.issue} </span>
            <span> {item.topic} </span>
          </ListItem>
        ))}
      </List>
      <Flex className="mt-6 pt-4 border-t">
        <Button size="xs" variant="light" icon={ArrowLongRightIcon} iconPosition="right">
          View more
        </Button>
      </Flex>
    </Card>
  );
}
