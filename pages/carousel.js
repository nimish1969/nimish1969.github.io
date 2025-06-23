// components/MyCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles here as well
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";
import { FaStar } from "react-icons/fa6";

const carousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      showArrows={true}
      showThumbs={true}
      showStatus={false}
      showIndicators={true}
      centerMode={true}
      centerSlidePercentage={100}
      stopOnHover={true}
      emulateTouch={false}
      swipeable={false}
      interval={5000} // milliseconds
    >
      <div className="flex justify-center">
        <Card className="testimonial-card">
            <CardHeader className="flex p-4 justify-center">
                <div className="testimony-photo-div">
                    <img className="testimony-photo" title="Tanvi Shah" src="./testimonial_images/Tanvi_Shah.jpg" alt="Tanvi Shah Photo"/>
                </div>
            </CardHeader>
            <CardBody className="text-center pb-12 overflow-y-hidden">
                <p className="kumar-one-regular">Tanvi Shah</p>
                <p className="mb-2"><i>Principal Architect - Taru Atelier</i></p>
                <div className="ratings"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </CardBody>
            <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                <p>I had the pleasure of collaborating with Nimish on a comprehensive visual branding project for our company website. From animated elements to branding videos and conceptual sketches, he brought a cohesive and engaging design language to life. Nimish has a sharp eye for detail, a strong sense of narrative, and was incredibly responsive throughout the process. His ability to translate abstract ideas into compelling visuals made a significant impact on our digital presence. I highly recommend working with him!</p>
            </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="testimonial-card">
            <CardHeader className="flex p-4 justify-center">
                <div className="testimony-photo-div">
                    <img className="testimony-photo" title="Paurav Shah" src="./testimonial_images/Paurav_Shah.jpg" alt="Paurav Shah Photo"/>
                </div>
            </CardHeader>
            <CardBody className="text-center pb-12 overflow-y-hidden">
                <p className="kumar-one-regular">Paurav Shah</p>
                <p className="mb-2"><i>Software Engineer</i></p>
                <div className="ratings"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </CardBody>
            <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                <p>I've worked with Nimish on almost everything but we were really on it together for a mobile health app. We enjoyed creating beautiful screens and layouts for mobile users which was later appraised by many. Nimish is a creative artist with expertise in multiple designing domains and can easily pick client requirements. I highly recommend Nimish for his productivity, creativity and impactful designs.</p>
            </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="testimonial-card">
            <CardHeader className="flex p-4 justify-center">
                <div className="testimony-photo-div">
                    <img className="testimony-photo" title="Jinesh Zaveri" src="./testimonial_images/Jinesh_Zaveri.jpg" alt="Jinesh Zaveri Photo"/>
                </div>
            </CardHeader>
            <CardBody className="text-center pb-12 overflow-y-hidden">
                <p className="kumar-one-regular">Jinesh Zaveri</p>
                <p className="mb-2"><i>Self Employed - Business</i></p>
                <div className="ratings"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </CardBody>
            <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                <p>I highly recommend Mr. Nimish Shah. His exceptional artistic talents span traditional painting, masterful vector digital art, and insightful logo design. Nimish also excels in typesetting, layout, and visualizing concepts effectively. I was particularly impressed by his UI/UX recommendations for my website and food product packaging. A dedicated and talented professional with strong digital expertise, Nimish would be a significant asset to any creative design or visual communication project.</p>
            </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="testimonial-card">
            <CardHeader className="flex p-4 justify-center">
                <div className="testimony-photo-div">
                    <img className="testimony-photo" title="Dhara Desai" src="./testimonial_images/Dhara_Desai.jpg" alt="Dhara Desai Photo"/>
                </div>
            </CardHeader>
            <CardBody className="text-center pb-12 overflow-y-hidden">
                <p className="kumar-one-regular">Dhara Desai</p>
                <p className="mb-2"><i>Project Manager</i></p>
                <div className="ratings"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </CardBody>
            <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                <p>Due to the inherent creative as well as organizational skills, all work assignments completed by Nimish were timely and of exceptional quality. We have worked on projects involving graphics components and content design and development for web portals as well as mobile apps.</p>
            </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="testimonial-card">
            <CardHeader className="flex p-4 justify-center">
                <div className="testimony-photo-div">
                    <img className="testimony-photo" title="Esha Parikh" src="./testimonial_images/Esha_Parikh.jpg" alt="Esha Parikh Photo"/>
                </div>
            </CardHeader>
            <CardBody className="text-center pb-12 overflow-y-hidden">
                <p className="kumar-one-regular">Esha Parikh</p>
                <p className="mb-2"><i>Medical Professional</i></p>
                <div className="ratings"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </CardBody>
            <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                <p>I cannot have enough good things to say about Nimish! He has been instrumental in development of our wedding website. His creativity, thoroughness, and attitude made the entire process seamless. It was truly a wonderful experience working with him. He was consistently responsiveness and always eager to help make our website perfect. Could not be happier with the service we received!</p>
            </CardFooter>
        </Card>
      </div>
    </Carousel>
  );
};

export default carousel;