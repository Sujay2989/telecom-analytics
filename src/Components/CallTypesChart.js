import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CallTypesChart = ({data}) => {
    const chartData = Object.keys(data).map(key => ({ name: key, value: data[key] }));

    return (
        <Box>
            <Typography variant="h6">Call Types</Typography>
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
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Box>
    );
};

export default CallTypesChart;
