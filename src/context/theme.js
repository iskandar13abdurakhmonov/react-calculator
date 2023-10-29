/* eslint-disable no-unused-vars */
import styled from 'styled-components'

const lightTheme = {
    colors: {
        lightGrayBackground: 'hsl(0, 0%, 90%)',
        grayishRedBacground: 'hsl(0, 5%, 81%)',
        veryLightGrayBacground: 'hsl(0, 0%, 93%)',
        darkModerateCyan: 'hsl(185, 42%, 37%)',
        veryDarkCyan: 'hsl(185, 58%, 25%)',
        orange: 'hsl(25, 98%, 40%)',
        darkOrange: 'hsl(25, 99%, 27%)',
        lightGrayishYellow: 'hsl(45, 7%, 89%)',
        darkGrayishOrange: 'hsl(35, 11%, 61%)',
        veryDarkGrayishYellowText: 'hsl(60, 10%, 19%)',
        whiteText: 'hsl(0, 0%, 100%)',
    },
}

const darkTheme = {
    colors: {
        veryDarkDesaturatedBlueMain: 'hsl(222, 26%, 31%)',
        veryDarkDesaturatedBlue: 'hsl(223, 31%, 20%)',
        veryDarkDesaturatedBlueScreen: 'hsl(224, 36%, 15%)',
        desaturatedDarkBlueKeyBackground: 'hsl(225, 21%, 49%)',
        desaturatedDarkBlueKeyShadow: 'hsl(224, 28%, 35%)',
        red: 'hsl(6, 63%, 50%)',
        darkRed: 'hsl(6, 70%, 34%)',
        lightGrayishOragne: 'hsl(30, 25%, 89%)',
        grayishOrange: 'hsl(28, 16%, 65%)',
        veryDarkGrayishBlueText: 'hsl(221, 14%, 31%)',
        whiteText: 'hsl(0, 0%, 100%)',
    },
}

const theme3 = {
    colors: {
        veryDarkVioletMainBackground: 'hsl(268, 75%, 9%)',
        veryDarkVioletToggleBackground: 'hsl(268, 71%, 12%)',
        darkViolet: 'hsl(281, 89%, 26%)',
        vividMagenta: 'hsl(285, 91%, 52%)',
        pureCyan: 'hsl(176, 100%, 44%)',
        softCyan: 'hsl(177, 92%, 70%)',
        veryDarkVioletKeyBackground: 'hsl(268, 47%, 21%)',
        darkMagenta: 'hsl(290, 70%, 36%)',
        lightYellowText: 'hsl(52, 100%, 62%)',
        veryDarkBlueText: 'hsl(198, 20%, 13%)',
        whiteText: 'hsl(0, 0%, 100%)',
    },
}

const themes = {
    light: lightTheme,
    dark: darkTheme,
    custom: theme3,
}

export default themes
