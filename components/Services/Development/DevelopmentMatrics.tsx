"use client";
import React from "react";
import { AreaChart, BarChart, Card } from "@tremor/react";

function DevelopmentMatrics() {
  const chartData = [
    { technology: "HTML", value: 20 },
    { technology: "CSS", value: 25 },
    { technology: "Javascript", value: 50 },
    { technology: "MongoDB", value: 75 },
    { technology: "Express.js", value: 100 },
    { technology: "React Js", value: 125 },
    { technology: "Node", value: 150 },
    { technology: "Next", value: 175 },
  ];

  const colors = ["red", "green", "blue", "black", "purple", "teal", "orange", "pink"];

  return (
    <div className="lg:px-16 md:p-10 p-5">
      <Card className="w-full h-full shadow-lg bg-[#4848ff] rounded-lg overflow-hidden">
        <div className="p-6 flex flex-row justify-between">
          <div className="">
            <h2 className="lg:text-2xl md:text-2xl text-xs font-semibold text-black mb-2">
              Development Metrics
            </h2>
            <p>Track the performance of your projects</p>
          </div>
        </div>
        <div className="relative h-96">
          <BarChart
            data={chartData}
            
            index="technology" // Use "technology" as the index for x-axis
            categories={["value"]} // Use "value" as the category for y-axis
            // colors={["purple", "#ffcc33"]} // Example color for the single category
            showLegend={false}
            yAxisWidth={50}
            className="graph w-full h-full"
            // curveType="step" // Creates stepped line effect
            style={{gap: 20}} // Example gap style between steps
          />
        </div>
      </Card>
    </div>
  );
}

export default DevelopmentMatrics;
