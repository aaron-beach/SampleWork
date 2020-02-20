import copywritingImage from "images/service-copywriting.png";
import webDesignImage from "images/service-web-design.png";

export const SERVICE_TYPE_COPYWRITING = "copywriting";
export const SERVICE_TYPE_WEB_DESIGN = "webDesign";

export default [
  {
    key: "serviceA",
    name: "A service",
    image: copywritingImage,
    count: 123
  },
  {
    key: "serviceB",
    name: "Service B",
    image: webDesignImage,
    count: 456
  }
];
