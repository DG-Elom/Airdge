import Head from "next/head";
import React from "react";
import Navbar from "./navbar/Navbar";
import ToastProvider from "../providers/ToastProvider";
import PropTypes from "prop-types";
export default function Container({ children, className }) {
  return (
    <>
      <Head>
        <title>Airdge</title>
        <meta name="description" content="Airdge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <ToastProvider />
        <Navbar />
        <main className={className}>{children}</main>
      </div>
    </>
  );
}
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
