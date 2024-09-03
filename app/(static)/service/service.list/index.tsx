import React from "react";
import Heading from "../../(components)/ui/heading";
import ServiceCard from "./service-card";

function ServiceList() {
  const serviceCards = [
    {
      key: "1",
      title: "Coppanet's E-Commerce Solutions",
      img: "/service/eco.png",
      list: [
        "Business-to-Business (B2B) E-commerce",
        "Business-to-Consumer (B2C) E-commerce",
        "Consumer-to-Business (C2B) E-commerce",
      ],
      position: "left",
      subTitle:
        "Coppanet is known for its innovative and user-friendly platforms. Whether you're a small startup or a large enterprise, Coppanet has the perfect e-commerce solution to help you succeed in the online marketplace.",
    },
    {
      key: "2",
      title: "Coppanet's E-Commerce Solutions",
      img: "/service/eco.png",
      list: [
        "Business-to-Business (B2B) E-commerce",
        "Business-to-Consumer (B2C) E-commerce",
        "Consumer-to-Business (C2B) E-commerce",
      ],
      position: "right",
      subTitle:
        "Coppanet is known for its innovative and user-friendly platforms. Whether you're a small startup or a large enterprise, Coppanet has the perfect e-commerce solution to help you succeed in the online marketplace.",
    },
    {
      key: "3",
      title: "Coppanet's E-Commerce Solutions",
      img: "/service/eco.png",
      list: [
        "Business-to-Business (B2B) E-commerce",
        "Business-to-Consumer (B2C) E-commerce",
        "Consumer-to-Business (C2B) E-commerce",
      ],
      position: "left",
      subTitle:
        "Coppanet is known for its innovative and user-friendly platforms. Whether you're a small startup or a large enterprise, Coppanet has the perfect e-commerce solution to help you succeed in the online marketplace.",
    },
    {
      key: "4",
      title: "Coppanet's E-Commerce Solutions",
      img: "/service/eco.png",
      position: "right",
      list: [
        "Business-to-Business (B2B) E-commerce",
        "Business-to-Consumer (B2C) E-commerce",
        "Consumer-to-Business (C2B) E-commerce",
      ],
      subTitle:
        "Coppanet is known for its innovative and user-friendly platforms. Whether you're a small startup or a large enterprise, Coppanet has the perfect e-commerce solution to help you succeed in the online marketplace.",
    },
    {
      key: "5",
      position: "left",
      title: "Coppanet's E-Commerce Solutions",
      img: "/service/eco.png",
      list: [
        "Business-to-Business (B2B) E-commerce",
        "Business-to-Consumer (B2C) E-commerce",
        "Consumer-to-Business (C2B) E-commerce",
      ],
      subTitle:
        "Coppanet is known for its innovative and user-friendly platforms. Whether you're a small startup or a large enterprise, Coppanet has the perfect e-commerce solution to help you succeed in the online marketplace.",
    },
  ];
  return (
    <div className="container">
      <Heading subTitle="At Coppanet, innovation drives everything we do. Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
        Excellent Custom Software Development Services
      </Heading>
      <div>
        {serviceCards.map((service) => (
          <ServiceCard
            key={service.key}
            position={service.position}
            title={service.title}
            img={service.img}
            list={service.list}
            subTitle={service.subTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
