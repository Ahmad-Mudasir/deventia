'use client';
import React, { useState } from 'react';
import { AreaChart, Card } from '@tremor/react';

function PerfomanceMetrics() {
  // Define chartData before using it
  const chartData = [
    {
      date: 'Jan 23',
      value: 289,
    },
    {
      date: 'Feb 23',
      value: 320,
    },
    {
      date: 'Mar 23',
      value: 30,
    },
    {
      date: 'Apr 23',
      value: 240,
    },
    {
      date: 'May 23',
      value: 10,
    },
    {
      date: 'Jun 23',
      value: 90,
    },
    {
      date: 'Jul 23',
      value: 670,
    },
    {
      date: 'Aug 23',
      value: 100,
    },
    {
      date: 'Sep 23',
      value: 190,
    },
    {
      date: 'Oct 23',
      value: 130,
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState('All'); // State for selected month filter

  // Handle month change event
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  // Filter data based on selected month
  const filteredData =
    selectedMonth === 'All'
      ? chartData
      : chartData.filter((item) => item.date.startsWith(selectedMonth));

  return (
    <div className="container flex-col md:flex-col md:my-10 md:px-16 lg:flex-col md:w-full lg:w-full w-full p-5">
      <div className="upper lg:w-full md:w-full lg:flex-col md:flex-col lg:gap-8 md:gap-6 gap-6 w-full">
        <div className="heading flex flex-col">
          <h1 className="lg:text-4xl md:text-3xl text-2xl ">Performance Metrics</h1>
          <p className="lg:text-xl md:text-lg text-xs">Track the performance of your products</p>
        </div>
        <div className="boxes flex lg:flex-row md:flex-row flex-row my-6 w-full gap-2 justify-between">
          <div className="bg-[#0C0F16] lg:p-4 md:p-2 p-2 gap-1 lg:w-1/4 md:w-fit w-fit md:h-fit h-fit">
            <h1 className="lg:text-2xl md:text-xl text-xs">Bugs Found</h1>
            <h1 className="lg:text-2xl md:text-xl text-xs">15%</h1>
            <h3 className="lg:text-2xl md:text-xl text-xs">-25%</h3>
          </div>
          <div className="bg-[#0C0F16] lg:p-4 md:p-2 p-2 gap-1 lg:w-1/4 md:w-fit w-fit md:h-fit h-fit">
            <h1 className="lg:text-2xl md:text-xl text-xs">Testing Coverage</h1>
            <h1 className="lg:text-2xl md:text-xl text-xs">80%</h1>
            <h3 className="lg:text-2xl md:text-xl text-xs">+10%</h3>
          </div>
          <div className="bg-[#0C0F16] lg:p-4 md:p-2 p-2 gap-1 lg:w-1/4 md:w-fit w-fit md:h-fit h-fit">
            <h1 className="lg:text-2xl md:text-xl text-xs">Client Satisfaction</h1>
            <h1 className="lg:text-2xl md:text-xl text-xs">90%</h1>
            <h3 className="lg:text-2xl md:text-xl text-xs">+5%</h3>
          </div>
        </div>
      </div>
      <div className="graph lg:my-6 md:my-3 lg:w-full md:w-full w-full my-4">
        <Card className="w-full shadow-lg bg-[#4848ff] rounded-lg overflow-hidden">
          <div className="p-6 flex flex-row justify-between">
            <div className="">
              <h2 className="lg:text-2xl md:text-2xl text-xs font-semibold text-black mb-2">
                Performance Trends
              </h2>
            </div>
            <div className="relative w-fit lg:text-xl md:text-lg text-xs text-black">
              <label htmlFor="month" className="sr-only">
                Select Month
              </label>
              <select
                id="month"
                name="month"
                className="block w-full lg:py-3 lg:px-4 md:py-2 md:px-2 px-1 py-1 border bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleMonthChange}
                value={selectedMonth}
              >
                <option value="All" className="text-black lg:text-xl md:text-lg text-xs">
                  All Months
                </option>
                <option value="Jan" className="text-black lg:text-xl md:text-lg text-xs">
                  January
                </option>
                <option value="Feb" className="text-black lg:text-xl md:text-lg text-xs">
                  February
                </option>
              </select>
            </div>
          </div>
          <div className="relative h-96">
            <AreaChart
              data={filteredData}
              index="date"
              categories={["value"]}
              colors={['indigo']}
              yAxisWidth={100}
              showLegend={false}
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
