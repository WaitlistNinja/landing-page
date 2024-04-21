import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @democompany",
    image: image1,
    content:
      "Our launch was a breeze thanks to this incredible waitlist tool! It helped us build anticipation, manage queues effortlessly, and engage our audience effectively. Highly recommended for any business gearing up for a successful launch.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    designation: "CEO @exampleco",
    image: image2,
    content:
      "As a CEO, I'm always looking for tools that can make our processes more efficient. This waitlist tool exceeded my expectations! It's intuitive, feature-rich, and has significantly streamlined our pre-launch operations. It's a game-changer!",
  },
  {
    id: 3,
    name: "Alexandra Brown",
    designation: "Marketing Director @xyzinc",
    image: image1,
    content:
      "We used this waitlist tool for our latest product launch, and the results were outstanding! It helped us generate buzz, capture leads effortlessly, and track our progress with detailed analytics. Our marketing team couldn't be happier!",
  },
  {
    id: 4,
    name: "Michael Lee",
    designation: "Product Manager @abcindustries",
    image: image2,
    content:
      "I've tried several waitlist tools in the past, but none have come close to the functionality and ease of use offered by this one. From setting up referral programs to analyzing performance metrics, it's a complete package.",
  },
];
