import {
  SERVICE_TYPE_COPYWRITING,
  SERVICE_TYPE_WEB_DESIGN
} from "constants/services";

export const services = [
  {
    id: 123,
    name: "My Copywriting Service",
    type: SERVICE_TYPE_COPYWRITING,
    duration: 14, // days
    image: "https://via.placeholder.com/250x250.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3000
  },
  {
    id: 456,
    name: "Website Design",
    type: SERVICE_TYPE_WEB_DESIGN,
    duration: 14, // days
    image: "https://via.placeholder.com/250x250.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3000
  }
];
