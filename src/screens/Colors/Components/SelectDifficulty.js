import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

export default function SelectDifficulty(props) {
    return (
        <Box style={{ height: '600px', width: "400px" }} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4">
                Select Your difficulty
            </Typography>
            <Box maxWidth display="flex" alignItems="center" justifyContent="space-between" style={{width: "100%", padding: "20px 50px"}}> 
                <Button variant="contained" color="primary" onClick={() => props.changeDifficulty("easy")}>
                    Easy
                </Button>
                <Button variant="contained" color="primary" onClick={() => props.changeDifficulty("medium")}>
                    Medium
                </Button>
                <Button variant="contained" color="primary" onClick={() => props.changeDifficulty("hard")}>
                    Hard
                </Button>
            </Box>
        </Box>
    )
}
