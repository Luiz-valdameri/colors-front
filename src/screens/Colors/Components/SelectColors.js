import { Box, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import DifficultyHelper from '../../../helpers/DifficultyHelper';
import Service from '../../../helpers/Service';

export default function SelectColors(props) {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedIndex, setSelectedindex] = useState(0);
    const [randomizedColors, setRandomizedColors] = useState([]);
    const [message, setMessage] = useState(null);

    React.useEffect(() => {
        generateSelectedColorsWhiteArray();
        setRandomizedColors(randomizedOrder());
    }, [])

    const generateSelectedColorsWhiteArray = () => {
        const { difficulty } = props;

        let difficultyHelper = new DifficultyHelper();
        const difficultyNumber = difficultyHelper.difficultyToNumber(difficulty);

        var array = [];
        for (let index = 0; index < difficultyNumber; index++) {
            array.push("white");
        }

        setSelectedColors(array);
    }

    function randomizedOrder() {
        const { colors } = props;
        var currentIndex = colors.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = colors[currentIndex];
            colors[currentIndex] = colors[randomIndex];
            colors[randomIndex] = temporaryValue;
        }

        return colors;
    }

    const SelectColor = (color) => {
        if (selectedIndex != selectedColors.length) {
            var selectedColorsFakeObj = JSON.parse(JSON.stringify(selectedColors))
            var index = selectedIndex
            selectedColorsFakeObj[selectedIndex] = color
            setSelectedColors(selectedColorsFakeObj);
            index += 1
            setSelectedindex(index)
        }
    }

    const validateColors = () => {
        var service = new Service();
        const body = { colors: selectedColors }

        service
            .post(`/validate-colors`, body)
            .then(res => {
                setMessage(res.message)
            })
            .catch(err => {
                console.error(err)
            })

    }

    return (
        <React.Fragment>
            <Box style={{ height: '600px', width: "600px" }} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h4">Select the colors in the correct order </Typography>
                <Box m={2} justifyContent="center" display="flex" style={{ width: "700px" }}>
                    {selectedColors.map((selectedColor, index) => (
                        <Box
                            key={index}
                            style={{ marginLeft: "10px", border: "1px dotted gray", width: "80px", height: "80px", backgroundColor: selectedColor }} />
                    ))}
                </Box>
                <Box m={2} display="flex" justifyContent="center" style={{ width: "700px" }}>
                    {randomizedColors.map(color => (
                        <Button
                            key={color}
                            onClick={() => SelectColor(color)}>
                            <Box style={{ marginLeft: "10px", width: "50px", height: "50px", backgroundColor: color }} />
                        </Button>

                    ))}
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={selectedIndex != selectedColors.length}
                    onClick={() => validateColors()}>
                    Validate
                </Button>

                {message ? (
                    <Box mt={2} display="flex" flexDirection="column">
                        <Typography>{message}</Typography>
                        <Button
                            variant="contained"
                            color="primary" onClick={() => props.changeStep(0)}>
                            Try again
                        </Button>
                    </Box>
                ) : null}
            </Box>
        </React.Fragment>
    )
}
