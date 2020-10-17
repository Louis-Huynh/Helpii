import zero from "../assets/numbers/0.svg";
import one from "../assets/numbers/1.svg";
import two from "../assets/numbers/2.svg";
import three from "../assets/numbers/3.svg";
import four from "../assets/numbers/4.svg";
import five from "../assets/numbers/5.svg";
import six from "../assets/numbers/6.svg";
import seven from "../assets/numbers/7.svg";
import eight from "../assets/numbers/8.svg";
import nine from "../assets/numbers/9.svg";
import ten from "../assets/numbers/10.svg";
import eleven from "../assets/numbers/11.svg";
import twelve from "../assets/numbers/12.svg";
import thirteen from "../assets/numbers/13.svg";
import fourteen from "../assets/numbers/14.svg";
import fifteen from "../assets/numbers/15.svg";
import sixteen from "../assets/numbers/16.svg";
import seventeen from "../assets/numbers/17.svg";
import eighteen from "../assets/numbers/18.svg";
import nineteen from "../assets/numbers/19.svg";
import twenty from "../assets/numbers/20.svg";
import twentyone from "../assets/numbers/21.svg";
import twentytwo from "../assets/numbers/22.svg";
import twentythree from "../assets/numbers/23.svg";
import twentyfour from "../assets/numbers/24.svg";
import twentyfive from "../assets/numbers/25.svg";
import twentysix from "../assets/numbers/26.svg";

export let getNumberImg = (num) => {
  let imageNumber = null;
  console.log("test");
  switch (num) {
    case 0:
      imageNumber = zero;
      break;
    case 1:
      imageNumber = one;
      break;

    case 2:
      imageNumber = two;
      break;
    case 3:
      imageNumber = three;
      break;
    case 4:
      imageNumber = four;
      break;
    case 5:
      imageNumber = five;
      break;
    case 6:
      imageNumber = six;
      break;
    case 7:
      imageNumber = seven;
      break;
    case 8:
      imageNumber = eight;
      break;
    case 9:
      imageNumber = nine;
      break;

    case 10:
      imageNumber = ten;
      break;
    case 11:
      imageNumber = eleven;
      break;

    case 12:
      imageNumber = twelve;
      break;
    case 13:
      imageNumber = thirteen;
      break;
    case 14:
      imageNumber = fourteen;
      break;
    case 15:
      imageNumber = fifteen;
      break;
    case 16:
      imageNumber = sixteen;
      break;
    case 17:
      imageNumber = seventeen;
      break;
    case 18:
      imageNumber = eighteen;
      break;
    case 19:
      imageNumber = nineteen;
      break;

    default:
      return null;
      break;
  }
  return imageNumber;
};
