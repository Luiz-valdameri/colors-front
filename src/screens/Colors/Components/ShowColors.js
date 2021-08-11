import { Box, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function ShowColors(props) {
    const [color, setColor] = useState("white");

    React.useEffect(() => {
        showColor()
    }, [])

    const showColor = () => {

        var index = 0;
        var colorChangeInterval = setInterval(() => {
            setColor(props.colors[index])
            index += 1;
            if (index == props.colors.length) {
                clearInterval(colorChangeInterval);
                setTimeout(function () {
                    props.changeStep(2)
                }, 1000);
            }
        }, 1000);
    }

    return (
        <React.Fragment>
            <Box style={{ height: '600px', width: "400px" }} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h4">Remember the sequence!</Typography>
                <Box style={{ width: "200px", height: "200px", backgroundColor: color, border: "1px dashed lightGray", margin: "20px" }} />
            </Box>
        </React.Fragment>
    )
}
