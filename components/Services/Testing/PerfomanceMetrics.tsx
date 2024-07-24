'use client';
import React, { useState } from 'react';
import { AreaChart, Card } from '@tremor/react';

function PerfomanceMetrics() {
  // Define chartData before using it
  const chartData = [
    {
      date: 'Jan 23',
      Impressions: 289,
    },
    {
      date: 'Feb 23',
      Impressions: 320,
    },
    {
      date: 'Mar 23',
      Impressions: 30,
    },
    {
      date: 'Apr 23',
      Impressions: 240,
    },
    {
      date: 'May 23',
      Impressions: 10,
    },
    {
      date: 'Jun 23',
      Impressions: 90,
    },
    {
      date: 'Jul 23',
      Impressions: 670,
    },
    {
      date: 'Aug 23',
      Impressions: 100,
    },
    {
      date: 'Sep 23',
      Impressions: 190,
    },
    {
      date: 'Oct 23',
      Impressions: 130,
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState('All'); // State for selected month filter

  // Handle month change event
  const handleMonthChange = (event: any) => {
    setSelectedMonth(event.target.value);
  };

  // Filter data based on selected month
  const filteredData =
    selectedMonth === 'All'
      ? chartData
      : chartData.filter((item) => item.date.startsWith(selectedMonth));

  return (
    <div className="container flex flex-col my-10 px-16">
      <div className="upper w-full flex flex-col gap-8">
        <div className="heading flex flex-col">
          <h1 className="text-4xl">Performance Metrics</h1>
          <p className="text-xl">Track the performance of your products</p>
        </div>
        <div className="boxes flex flex-row justify-between">
          <div className="bg-[#0C0F16] p-4 gap-1 w-1/4">
            <h1 className="text-2xl">Bugs Found</h1>
            <h1 className="text-2xl">15%</h1>
            <h3 className="text-xl">-25%</h3>
          </div>
          <div className="bg-[#0C0F16] p-4 gap-1 w-1/4">
            <h1 className="text-2xl">Testing Coverage</h1>
            <h1 className="text-2xl">80%</h1>
            <h3 className="text-xl">+10%</h3>
          </div>
          <div className="bg-[#0C0F16] p-4 gap-1 w-1/4">
            <h1 className="text-2xl">Client Satisfaction</h1>
            <h1 className="text-2xl">90%</h1>
            <h3 className="text-xl">+5%</h3>
          </div>
        </div>
      </div>
      <div className="graph my-6 w-full">
        <Card className="w-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden">
          <div className="p-6 flex flex-row justify-between">
            <div className="">
              <h2 className="text-2xl font-semibold text-black mb-2">
                Performance Trends
              </h2>
            </div>
            <div className="relative w-fit text-black">
              <label htmlFor="month" className="sr-only">
                Select Month
              </label>
              <select
                id="month"
                name="month"
                className="block w-full py-3 px-4 border bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleMonthChange}
                value={selectedMonth}
              >
                <option value="All" className="text-black">
                  All Months
                </option>
                <option value="Jan" className="text-black">
                  January
                </option>
                <option value="Feb" className="text-black">
                  February
                </option>
              </select>
            </div>
          </div>
          <div className="relative h-96">
            <AreaChart
              data={filteredData}
              index="date"
              categories={['Impressions']}
              colors={['indigo']}
              yAxisWidth={50}
              // gridLines="horizontal"
              // padding={20}
              // barSpacing={30}
              // legend
              // legendPosition="bottom"
              // curve
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PerfomanceMetrics;
