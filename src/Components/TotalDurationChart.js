import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { BarChart, Bar, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis,Tooltip } from 'recharts';

const TotalDurationChart = ({ data }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>Call Duration</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" label={{ value: 'Call ID', position: 'insideBottomRight', offset: -5 }} />
                        <YAxis label={{ value: 'Duration(s)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="duration" fill="#8884d8" stroke="none" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default TotalDurationChart;
