module.exports = function() {

    this.meterTofeet = function(m) {
        return (m * 3.2808).toFixed(2);
    }
    this.meterTofeetTestValues = function() {
        return [0.00,
            3.28,
            6.56,
            9.84,
            13.12,
            16.40,
            19.68,
            22.97,
            26.25,
            29.53,
            32.81,
            36.09,
            39.37,
            42.65,
            45.93,
            49.21,
            52.49,
            55.77,
            59.05,
            62.34,
            65.62,
            68.90,
            72.18,
            75.46,
            78.74,
            82.02,
            85.30,
            88.58,
            91.86,
            95.14,
            98.42,
            101.70,
            104.99,
            108.27,
            111.55,
            114.83,
            118.11,
            121.39,
            124.67,
            127.95,
            131.23,
            134.51,
            137.79,
            141.07,
            144.36,
            147.64,
            150.92,
            154.20,
            157.48,
            160.76,
            164.04,
            167.32,
            170.60,
            173.88,
            177.16,
            180.44,
            183.72,
            187.01,
            190.29,
            193.57,
            196.85,
            200.13,
            203.41,
            206.69,
            209.97,
            213.25,
            216.53,
            219.81,
            223.09,
            226.38,
            229.66,
            232.94,
            236.22,
            239.50,
            242.78,
            246.06,
            249.34,
            252.62,
            255.90,
            259.18,
            262.46,
            265.74,
            269.03,
            272.31,
            275.59,
            278.87,
            282.15,
            285.43,
            288.71,
            291.99,
            295.27,
            298.55,
            301.83,
            305.11,
            308.40,
            311.68,
            314.96,
            318.24,
            321.52,
            324.80
        ]
    }


    this.feetToMeter = function(ft) {
        return (ft / 3.2808).toFixed(2);
    }

    this.feetToMeterTestValues = function() {
        return [0.00,
            0.30,
            0.61,
            0.91,
            1.22,
            1.52,
            1.83,
            2.13,
            2.44,
            2.74,
            3.05,
            3.35,
            3.66,
            3.96,
            4.27,
            4.57,
            4.88,
            5.18,
            5.49,
            5.79,
            6.10,
            6.40,
            6.71,
            7.01,
            7.32,
            7.62,
            7.92,
            8.23,
            8.53,
            8.84,
            9.14,
            9.45,
            9.75,
            10.06,
            10.36,
            10.67,
            10.97,
            11.28,
            11.58,
            11.89,
            12.19,
            12.50,
            12.80,
            13.11,
            13.41,
            13.72,
            14.02,
            14.33,
            14.63,
            14.94,
            15.24,
            15.54,
            15.85,
            16.15,
            16.46,
            16.76,
            17.07,
            17.37,
            17.68,
            17.98,
            18.29,
            18.59,
            18.90,
            19.20,
            19.51,
            19.81,
            20.12,
            20.42,
            20.73,
            21.03,
            21.34,
            21.64,
            21.95,
            22.25,
            22.56,
            22.86,
            23.17,
            23.47,
            23.77,
            24.08,
            24.38,
            24.69,
            24.99,
            25.30,
            25.60,
            25.91,
            26.21,
            26.52,
            26.82,
            27.13,
            27.43,
            27.74,
            28.04,
            28.35,
            28.65,
            28.96,
            29.26,
            29.57,
            29.87,
            30.18,
            30.48,
            30.79,
            31.09,
            31.39,
            31.70,
            32.00,
            32.31,
            32.61,
            32.92,
            33.22,
            33.53,
            33.83,
            34.14,
            34.44,
            34.75,
            35.05,
            35.36,
            35.66,
            35.97,
            36.27,
            36.58,
            36.88,
            37.19,
            37.49,
            37.80,
            38.10,
            38.41,
            38.71,
            39.01,
            39.32,
            39.62,
            39.93,
            40.23,
            40.54,
            40.84,
            41.15,
            41.45,
            41.76,
            42.06,
            42.37,
            42.67,
            42.98,
            43.28,
            43.59,
            43.89,
            44.20,
            44.50,
            44.81,
            45.11,
            45.42,
            45.72,
            46.03,
            46.33,
            46.63,
            46.94,
            47.24,
            47.55,
            47.85,
            48.16,
            48.46,
            48.77,
            49.07,
            49.38,
            49.68,
            49.99,
            50.29,
            50.60,
            50.90,
            51.21,
            51.51,
            51.82,
            52.12,
            52.43,
            52.73,
            53.04,
            53.34,
            53.65,
            53.95,
            54.26,
            54.56,
            54.86,
            55.17,
            55.47,
            55.78,
            56.08,
            56.39,
            56.69,
            57.00,
            57.30,
            57.61,
            57.91,
            58.22,
            58.52,
            58.83,
            59.13,
            59.44,
            59.74,
            60.05,
            60.35,
            60.66
        ]
    }


    this.inchToCm = function(inch) {
        return (inch / 0.39370).toFixed(2);
    }

    this.cmToInch = function(cm) {
        return (cm * 0.39370).toFixed(2);
    }

    this.mmToInch = function(mm) {
        return (mm * 0.039370).toFixed(2);
    }

    this.inchToMm = function(inch) {
        return (inch / 0.039370).toFixed(2);
    }

    this.inchToFeet = function(inch) {
        return (inch * 0.083333).toFixed(2);
    }

    this.feetToInch = function(ft) {
        return (ft * 12.000).toFixed(2);
    }

}