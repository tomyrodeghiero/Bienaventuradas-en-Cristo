import React, { useEffect, useState } from "react";
import "./topicsScreen.scss";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import MainCard from "./main-card/MainCard";

import Icon01 from "../../assets/icons/icon-01.png";
import Icon02 from "../../assets/icons/icon-02.png";
import Icon03 from "../../assets/icons/icon-03.png";
import Icon04 from "../../assets/icons/icon-04.png";
import Icon05 from "../../assets/icons/icon-05.png";
import Icon06 from "../../assets/icons/icon-06.png";
import Icon07 from "../../assets/icons/icon-07.png";
import Icon08 from "../../assets/icons/icon-08.png";
import Community from "../../components/community/Community";
import Footer from "../../components/footer/Footer";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";

const TopicsScreen = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topicsScreenDataset = [
    {
      icon: Icon01,
      title: t("Inspiration"),
      description:
        "Don't be discouraged, God is with you at all times and his love never fails. Trust in Him and you will see His transforming Power in your life.",
    },
    {
      icon: Icon02,
      title: t("Actuallity"),
      description:
        "Even in the midst of the uncertainty and chaos of today's world, remember that God is the owner of your life and is in control of everything.",
    },
    {
      icon: Icon03,
      title: t("Announcements"),
      description:
        "Find out how our Christian ads can positively impact your life today! No matter where you are, together we can grow and become stronger in our faith.",
    },
    {
      icon: Icon04,
      title: t("Towards to goal"),
      description:
        "Let us remember that we are one in Christ and we must love and support each other in our struggles and joys. May the Peace and Unity of Christ reign in our hearts!",
    },
    {
      icon: Icon05,
      title: t("Safe in Faith"),
      description:
        "Praise God for saving us by His grace! As believers in Christ, we are saved by His Love and Sacrifice on the cross. Let us not forget this and continue to share His message of Salvation.",
    },
    {
      icon: Icon06,
      title: t("Great things"),
      description:
        "As believers in Christ, we have the potential to have great ideas and make a positive difference in the world. Don't hold back, let Faith in Christ guide you!",
    },
    {
      icon: Icon07,
      title: t("In Process"),
      description:
        "In Christ, we are in a constant process of growth and improvement. Let us keep our Faith in Christ and see how we continue to progress in His Love and Grace!",
    },
    {
      icon: Icon08,
      title: t("Evangelism"),
      description:
        "As believers in Christ, we have the privilege and responsibility to share His message of Love and Salvation. Let us continue to share the Power and Truth of Christ with the world!",
    },
  ];

  return (
    <main>
      {windowWidth < 992 ? <MobileNavbar /> : <Navbar />}
      <Header title="Topics" description="Subtitle of Topics" />

      <div className="topics__container">
        <h5 className="topics__pathname">
          {t("Home")} -
          <span className="topics__pathname--bold"> {t("Topics")}</span>
        </h5>

        <div className="topics__grid">
          {topicsScreenDataset.map((topic) => (
            <MainCard
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </div>

      <Community />
      <Footer />
    </main>
  );
};

export default TopicsScreen;
