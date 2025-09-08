import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Apartments from "../components/Apartments";
import ContentFoot from "../components/ContentFoot";
import Content2 from "../components/Content2";
import Footer from "../components/Footer";
import Testimonail from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Apartments />
      <ContentFoot />
      <Content2 />
      <Testimonail />
      <Footer />
    </div>
  );
}
