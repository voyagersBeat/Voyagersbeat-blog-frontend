import React from "react";
import { dateformatter } from "../../../utils/formetteddates";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formetData = (blogs) => {
  return blogs.map((blog) => ({
    name: dateformatter(blog.createdAt),
    post: blog.title.length,
    pv: blog.pageViews || 0,
    amt: blog.amt || 0,
  }));
};

const BlogGraphChart = ({ blogs }) => {
  const data = formetData(blogs);
  return (
    <>
      <div className="p-6 bg-backPrimary rounded-lg shadow-xl ">
        <h2 className="text-xl font-semibold mb-4">Blogs Charts!</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="post"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BlogGraphChart;
