"use client";

import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import Example from "./Example";
import CardLineChartCallout from "./CardLineChartCallout";
import CardProgressAccordion from "./CardProgressAccordion";
import CardPie from "./CardPie";

// className="gap-2 flex-none flex-auto flex-nowrap basis-0"

function GridCards() {
  return (
    // <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2 flex-none flex-auto flex-nowrap basis-0">
    <Grid numColsMd={2} numColsLg={3} className="gap-2 flex-none flex-auto flex-nowrap basis-0">
      <Col numColSpan={1} numColSpanLg={2}>
        {/* <Card>
      <Text>Title</Text>
      <Metric>KPI 1</Metric>
    </Card> */}
        <Example />
      </Col>
      {/* <Card>
        <Text>Title</Text>
        <Metric>KPI 2</Metric>
      </Card> */}
      <CardLineChartCallout />
      <Col>
        {/* <Card>
          <Text>Title</Text>
          <Metric>KPI 3</Metric>
        </Card> */}
        <CardPie />
      </Col>
      {/* <Card>
        <Text>Title</Text>
        <Metric>KPI 4</Metric>
      </Card> */}
      {/* <Card>
        <Text>Title</Text>
        <Metric>KPI 5</Metric>
      </Card> */}
      <CardProgressAccordion />
    </Grid>
  );
}

export default GridCards;
