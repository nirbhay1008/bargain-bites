import i1 from "../img/i1.png";
import f1 from "../img/f1.png";
import c3 from "../img/c3.png";
import fi1 from "../img/fi1.png";

export const herodata = [
  {
    id: 1,
    name: "Icecream",
    decp: "chocolate & vanila",
    price: "5.25",
    imageSrc: i1,
  },

  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh strawberries",
    price: "10.25",
    imageSrc: f1,
  },
  {
    id: 3,
    name: "Chicken kebab",
    decp: "Mixed kebab plate",
    price: "8.25",
    imageSrc: c3,
  },
  {
    id: 4,
    name: "Fish kebab",
    decp: "Mixed Fish kebab",
    price: "5.25",
    imageSrc: fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];

export const questions = [
  {
    id : 1,
    question : "What country has the highest life expectancy?" , 
    option : ["china" , "hongkong" , "India" , "Russia"],
    correct : 1
  },
  {
    id : 2,
    question : "What country has the highest life expectancy?" , 
    option : ["china" , "hongkong" , "India" , "Russia"],
    correct : 1
  },
  {
    id : 3,
    question : "What country has the highest life expectancy?" , 
    option : ["china" , "hongkong" , "India" , "Russia"],
    correct : 1
  },
  {
    id : 4,
    question : "What is the most common surname in the United States ?" , 
    option : ["Williams" , "Smith" , "Clarks" , "Biden"],
    correct : 1
  },
  {
    id : 5,
    question : "What year was the United Nations established?" , 
    option : ["1956" , "1945" , "1862" , "1742"],
    correct : 1
  },
  {
    id : 6,
    question : "What marks will sir give us tommorow?" , 
    option : ["40" , "39" , "37" , "38"],
    correct : 0
  }
]
