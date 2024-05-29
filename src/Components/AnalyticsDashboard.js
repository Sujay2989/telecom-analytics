import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CallRecordForm from './CallRecordForm';
import TotalCallsChart from './TotalCallsChart';
import TotalDurationChart from './TotalDurationChart';
import CallTypesChart from './CallTypesChart';
import axios from 'axios';

const AnalyticsDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        try {
            const [totalCallsResponse, totalDurationResponse, callTypesCountResponse, durationsResponse] = await Promise.all([
                axios.get('http://localhost:8080/analytics/total-calls'),
                axios.get('http://localhost:8080/analytics/total-duration'),
                axios.get('http://localhost:8080/analytics/call-types'),
                axios.get('http://localhost:8080/analytics/durations')
            ]);
            
            const durations = durationsResponse.data.map((duration, index) => ({
                id: index + 1,
                duration: duration,
            }));

            console.log('Total Calls:', totalCallsResponse.data);
            console.log('Total Duration:', totalDurationResponse.data);
            console.log('Call Types Count:', callTypesCountResponse.data);
            console.log('Durations:', durations);

            setData({
                totalCalls: totalCallsResponse.data,
                totalDuration: totalDurationResponse.data,
                callTypesCount: callTypesCountResponse.data,
                durations
            });
            setError('');
        } catch (err) {
            setError('Error fetching analytics data');
            console.error('Error fetching analytics data', err);
        }
    };

    return (
        <Box sx={{ p: 2, maxWidth: 600, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>Telecom Analytics Dashboard</Typography>
            <CallRecordForm />
            <Button variant="contained" color="secondary" onClick={handleAnalyze} sx={{ mt: 2 }} >
                Analyze 
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            {data && (
                <Box sx={{ mt: 4 }}>
                    <TotalCallsChart data={data.totalCalls} /><br />
                    <TotalDurationChart data={data.durations} /><br />
                    <CallTypesChart data={data.callTypesCount} />
                </Box>
            )}
        </Box>
    );
};

export default AnalyticsDashboard;
