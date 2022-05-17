/* eslint-disable react/no-unknown-property */
import React from "react";
import { AdminBody } from "../components/admin-body";
import { InformationCard } from "../components/information-card";
import { SideNav } from "../components/side-nav";
import { MdAudiotrack } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";

function Index() {
  return (
    <AdminBody>
      <div className=" bg-slate-300 overflow-auto h-full">
        <div className="flex p-2 space-x-1">
          <InformationCard number={502} title="Books" color={"#9876"}>
            <div className={`rounded-full p-5 bg-green-400`}>
              <MdAudiotrack fontSize={30} className="text-white"></MdAudiotrack>
            </div>
          </InformationCard>

          <InformationCard number={4502} title="Subscribers" color={"#9876"}>
            <div className={`rounded-full p-5 bg-blue-800`}>
              <MdDoneOutline
                fontSize={30}
                className="text-white"
              ></MdDoneOutline>
            </div>
          </InformationCard>
          <InformationCard
            number={41502}
            currency=" PKR"
            title="Earning of December"
            color={"#9876"}
          >
            <div className={`rounded-full p-5 bg-purple-400`}>
              <BsCurrencyExchange
                fontSize={30}
                className="text-white"
              ></BsCurrencyExchange>
            </div>
          </InformationCard>
        </div>
      </div>
    </AdminBody>
  );
}

export default Index;
