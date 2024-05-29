import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const CallRecordForm = () => {
    const [caller, setCaller] = useState('');
    const [callee, setCallee] = useState('');
    const [duration, setDuration] = useState('');
    const [callType, setCallType] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!caller || !callee || !duration || !callType) {
            setError('Please fill in all fields');
            return;
        }
        try {
            await axios.post('http://localhost:8081/call-records', {
                caller,
                callee,
                duration: parseInt(duration, 10),
                callType: callType.toLowerCase()
            });
            setCaller('');
            setCallee('');
            setDuration('');
            setCallType('');
            setError('');
            setSuccess(true);
        } catch (err) {
            setError('Failed to save call record');
            console.error(err);
        }
    };

    return (
        <Box sx={{ p: 2, maxWidth: 600, margin: '0 auto' }}>
            <Typography variant="h6" >Add Call Record</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Caller"
                    value={caller}
                    onChange={(e) => setCaller(e.target.value)}
                    fullWidth
                    margin="normal"
                   
                />
                <TextField
                    label="Callee"
                    value={callee}
                    onChange={(e) => setCallee(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Duration (in seconds)"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Call Type"
                    value={callType}
                    onChange={(e) => setCallType(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Enter
                </Button>
            </form>
            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Call record added successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CallRecordForm;
