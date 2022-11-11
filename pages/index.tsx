import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Icon from "../public/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../pages/components/Navbar'
import Layout from '../pages/components/Layout'
import Footer from '../pages/components/Footer'
import Gradient from '../pages/components/Gradient'

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <div className="bg-[#111111]">
      <Head>
        <title>Olatunde Olamide Victor</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//code.tidio.co/lnfy8qtqktinrr8pwxozeejd7wx3epes.js" async></script>
      </Head>
     <Layout/>
    </div>
  );
};

export default Home;
