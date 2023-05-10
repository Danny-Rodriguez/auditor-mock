"use client";

import { Card, Title, Text, Grid, Col, Flex, Metric, CategoryBar } from "@tremor/react";
import Donut from "./components/Donut";
import Table from "./components/Table";
import RiskBarGraph from "./components/RiskBarGraph";
import CardProgress from "./components/CardProgress";

const subCategoryPercentageValues = [10, 25, 45, 20];

export default function Example() {
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <section className="container mx-auto">
        <Title>Dashboard</Title>
        <Text>Monitor your company&apos;s activity at a glance.</Text>

        <Grid numColsLg={7} className="gap-6 mt-6">
          {/* Main section */}
          <Col numColSpanLg={2}>
            <Card>
              <Text>Assessments</Text>
              <Flex justifyContent="start" alignItems="baseline" className="space-x-1">
                <Metric>{9.5}</Metric>
                <Text>/ 10</Text>
              </Flex>
              <CategoryBar categoryPercentageValues={subCategoryPercentageValues} colors={["rose", "orange", "yellow", "emerald"]} percentageValue={95} tooltip={"9.5"} showLabels={false} className="mt-5" />
            </Card>
            <RiskBarGraph />
          </Col>

          {/* <Col numColSpanLg={2}>
            <Card className="" decoration="top" decorationColor="indigo">
              <Text>Sales</Text>
              <Metric>$ 34,743</Metric>
            </Card>
          </Col> */}
          <Col numColSpanLg={2}>
            <CardProgress />
          </Col>
          {/* KPI sidebar */}
          <Col numColSpanLg={3}>
            <div className="space-y-6">
              {/* <Card>
              <div className="h-24" />
            </Card>
            <Card>
              <div className="h-24" />
            </Card>
            <Card>
              <div className="h-24" />
            </Card> */}
              <Donut />
            </div>
          </Col>
        </Grid>
        <Table />
      </section>
    </main>
  );
}
