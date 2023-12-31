import moon from "/assets/destination/image-moon.png";
import mars from "/assets/destination/image-mars.png";
import europa from "/assets/destination/image-europa.png";
import titan from "/assets/destination/image-titan.png";

const destinationData = [
  {
    planetImage: moon,
    name: "Moon",
    planetTitle: "MOON",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    planetImage: mars,
    name: "Mars",
    planetTitle: "MARS",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  {
    planetImage: europa,
    name: "Europa",
    planetTitle: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  {
    planetImage: titan,
    name: "Titan",
    planetTitle: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
];
export default destinationData;
