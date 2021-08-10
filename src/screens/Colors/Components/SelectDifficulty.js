import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

export default function SelectDifficulty() {
    return (
        <Box style={{ height: '600px', width: "400px" }} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4">
                Select Your difficulty
            </Typography>
            <Box maxWidth display="flex" alignItems="center" justifyContent="space-between" style={{width: "100%", padding: "20px 50px"}}> 
                <Button variant="contained" color="primary" >
                    Easy
                </Button>
                <Button variant="contained" color="primary">
                    Medium
                </Button>
                <Button variant="contained" color="primary">
                    Hard
                </Button>
            </Box>
        </Box>
    )
}
