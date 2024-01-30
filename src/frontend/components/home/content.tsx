"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { CardRulePersonalMotor } from "./card-rule-personal-motor";
import { CardRulePersonalProperty } from "./card-rule-personal-property";
import { CardRuleCommercialProperty } from "./card-rule-commercial-property";
import { CardRuleCTP } from "./card-rule-ctp";
import { RulesTable } from "../tablev2/table";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Active Rules</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-5  justify-center w-full">
            <CardRulePersonalMotor />
            <CardRuleCTP />
            <CardRulePersonalProperty />
            <CardRuleCommercialProperty />
          </div>
        </div>
      </div>
    </div>

    {/* Table Latest Rules */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Rules</h3>
        <Link
          href="/rules"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <RulesTable />
    </div>
  </div>
);
