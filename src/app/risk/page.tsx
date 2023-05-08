"use client";
import { useState } from "react";
import { Card, Grid, Tab, TabList, Text, Title, Col, DonutChart } from "@tremor/react";
import RiskBarGraph from "../components/RiskBarGraph";
import DonutCards from "../components/DonutCards";
import Donut2 from "../components/Donut2";

export default function KpiCardGrid() {
  const [selectedView, setSelectedView] = useState("1");
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <section className="container mx-auto">
        <Title>Risk Overview</Title>
        {/* <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text> */}

        <TabList defaultValue="1" onValueChange={value => setSelectedView(value)} className="mt-6">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Detail" />
        </TabList>

        {selectedView === "1" ? (
          <>
            <Grid numColsMd={1} numColsLg={6} className="mt-6 gap-6">
              <Col numColSpan={2} className="">
                <Donut2 />
              </Col>
              {/* <Card>
              <div className="h-28" />
            </Card> */}

              {/* <Col numColSpan={2} className="">
              <Card>

                <div className="h-28" />
              </Card>
            </Col> */}
              {/* <Card>
              <div className="h-28" />
            </Card> */}
              <Col numColSpan={4} className="">
                {/* <Card>

                <div className="h-28" />
              </Card> */}
                <RiskBarGraph />
              </Col>

              {/* <Card>
              <div className="h-28" />
            </Card> */}
              {/* <Col numColSpan={2} className="">
              <DonutCards />
            </Col> */}
              {/* <Card>

              <div className="h-28" />
            </Card> */}
            </Grid>

            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </>
        ) : (
          <Card className="mt-6">
            <div className="h-96" />
          </Card>
        )}
      </section>
    </main>
  );
}
