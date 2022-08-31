import blue from './images/blue.png';
import green from './images/green.png';
import orange from './images/orange.png';
import purple from './images/purple.png';
import red from './images/red.png';
import yellow from './images/yellow.png';
import blue_striped_horizontal from './images/Blue-Striped-Horizontal.png'
import blue_striped_vertical from './images/Blue-Striped-Vertical.png'
import green_striped_horizontal from './images/Green-Striped-Horizontal.png'
import green_striped_vertical from './images/Green-Striped-Vertical.png'
import orange_striped_horizontal from './images/Orange-Striped-Horizontal.png'
import orange_striped_vertical from './images/Orange-Striped-Vertical.png'
import purple_striped_horizontal from './images/Purple-Striped-Horizontal.png'
import purple_striped_vertical from './images/Purple-Striped-Vertical.png'
import red_striped_horizontal from './images/Red-Striped-Horizontal.png'
import red_striped_vertical from './images/Red-Striped-Vertical.png'
import yellow_striped_horizontal from './images/Yellow-Striped-Horizontal.png'
import yellow_striped_vertical from './images/Yellow-Striped-Vertical.png'

export const width = 7;
export const colors = [
    blue,
    green,
    orange,
    purple,
    red,
    yellow
];

export const __colors = [
    [blue, 'blue'],
    [green, 'green'],
    [orange, 'orange'],
    [purple, 'purple'],
    [red, 'red'],
    [yellow, 'yellow']
];

export const _colors = [
    {
        src: blue, 
        alt: 'blue'
    },
    {
        src: green, 
        alt: 'green'
    },
    {
        src: orange, 
        alt: 'orange'
    },
    {
        src: purple, 
        alt: 'purple'
    },
    {
        src: red, 
        alt: 'red'
    },
    {
        src: yellow, 
        alt: 'yellow'
    }
];
export const stripedHorizontal = [
    blue_striped_horizontal,
    green_striped_horizontal,
    orange_striped_horizontal,
    purple_striped_horizontal,
    red_striped_horizontal,
    yellow_striped_horizontal
];

export const stripedVertical = [
    blue_striped_vertical,
    green_striped_vertical,
    orange_striped_vertical,
    purple_striped_vertical,
    red_striped_vertical,
    yellow_striped_vertical
];
export const wrapped = [];
export const sumOfThree = (width * 6) - 1;
export const sumOfFour = (width * 5) - 1;
export const sumOfFive = (width * 4) - 1;
export const sumOfMove = (width * width) - width;
export const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
export const moves = 20;
//export const firstRow = [0, 1, 2, 3, 4, 5, 6];
//export const sumOfMove = (width * width) - width;
export const Colors = [
    {blue: blue},
    {green: green},
    {orange: orange},
    {purple: purple},
    {red: red},
    {yellow: yellow}
];

/*
console.log(Colors[4].red)
console.log(Object.keys(Colors[4])[0])
*/