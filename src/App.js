import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
//import './styles.css'
import AnalyticsDashboard from './Components/AnalyticsDashboard';

function App() {
    return (

        <Box sx={{backgroundImage:'url("/dataimage.jpeg")',
        backgroundSize:'cover', 
        backgroundPosition:'center',
        p:2,
        display:'flex',
        justifyContent:'center',
        minHeight:'90vh',
        alignItems:'center'}}>
            <CssBaseline />
            <Container sx={{backgroundColor:'rgba(255,255,255,0.9)', boxShadow:3,padding:2,borderRadius:2}}>
             <AnalyticsDashboard />  
        </Container>
        </Box>
        
    );
}

export default App;



