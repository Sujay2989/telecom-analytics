import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

const TotalCallsChart = ({ data }) => {
    const chartData = [{ name: 'Total Calls', value: data }];

    return (
        <Box>
            <Typography variant="h6">Total Calls</Typography>
            <PieChart width={400} height={400}>
                <Pie
                    data={chartData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#82ca9d" />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Box>
    );
};

export default TotalCallsChart;
