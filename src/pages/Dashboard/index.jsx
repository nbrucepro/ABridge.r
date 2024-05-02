import React from "react";
import Layout from "../../layout";
import CardDataStats from "../../components/CardDataStats";
import { Tab, Tabs } from "../../components/Tabs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Starter from "../../components/Starter";

const Dashboard = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Creative Website" />
      <h4 className="text-title-md font-bold text-black dark:text-white mb-6">
        Website Design
      </h4>
      <Starter />
      <Tabs>
        <Tab label="All tasks">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Footer Design"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              Todo
            </CardDataStats>
          </div>
        </Tab>
        <Tab label="To do">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Footer Design"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              Todo
            </CardDataStats>
          </div>
        </Tab>
        <Tab label="In Progress">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Footer Design"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              Todo
            </CardDataStats>
          </div>
        </Tab>
        <Tab label="Completed">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Footer Design"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              Todo
            </CardDataStats>
          </div>
        </Tab>
      </Tabs>
      {/* </div> */}
    </Layout>
  );
};

export default Dashboard;
