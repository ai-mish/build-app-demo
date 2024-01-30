import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const CardRuleCommercialProperty = () => {
  return (
    <Card className="xl:max-w-xs bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Commercial Property</span>
            <span className="text-white text-xs">40 Rules</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">$45,000</span>
          <span className="text-success text-xs">+ 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-xs text-white">100,000</span>
            </div>
            <span className="text-white text-xs">AUD</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-xs text-white">54,000</span>
            </div>
            <span className="text-white text-xs">AUD</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
