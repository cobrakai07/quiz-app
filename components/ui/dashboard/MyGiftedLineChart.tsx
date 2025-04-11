import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, RadarChart } from "react-native-gifted-charts";

const MyGiftedLineChart = () => {

    const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40},{value: 15}, {value: 30},];
    return (
        <View>
        <LineChart
        areaChart
        curved
        data={data}
        startFillColor="rgb(46, 217, 255)"
        startOpacity={0.8}
        endFillColor="rgb(203, 241, 250)"
        endOpacity={0.3}
        isAnimated // Enable animations
        animationDuration={1200} // Animation duration
        />
        
        </View>
    );
    const lineData = [
        { value: 0 },
        { value: 20 },
        { value: 18 },
        { value: 40 },
        { value: 36 },
        { value: 60 },
        { value: 54 },
        { value: 65 }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>

                <LineChart
                    areaChart // Optional: To create an Area chart effect
                    data={lineData}
                    height={250}
                    // --- Customization Props (Examples) ---
                    // Appearance
                    color="#007AFF" // Line color
                    thickness={3} // Line thickness
                    startFillColor="rgba(0, 122, 255, 0.3)" // Area chart gradient start
                    endFillColor="rgba(0, 122, 255, 0.01)" // Area chart gradient end
                    spacing={44} // Spacing between data points

                    // Data Points
                    // showDataPoint
                    dataPointsColor="#007AFF"
                    dataPointsRadius={4}

                    // Axes
                    // xAxisColor="gray"
                    // yAxisColor="gray"
                    // yAxisTextStyle={{ color: 'gray' }}
                    // xAxisLabelTexts={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']} // Optional labels
                    // yAxisLabelWidth={40} // Adjust based on your label lengths

                    // Responsiveness & Performance
                    initialSpacing={10} // Space before the first data point
                    isAnimated // Enable animations
                    animationDuration={1200} // Animation duration

                    // --- More props available, check documentation ---
                    // e.g., pointerConfig for tooltips on hover/press
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chartContainer: {
        padding: 10,
        backgroundColor: 'white', // Give the chart area a background
        borderRadius: 10,
        // Add shadow or other styling as needed
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
});

export default MyGiftedLineChart;