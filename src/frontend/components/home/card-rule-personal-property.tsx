import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const CardRulePersonalProperty = () => {
  return (
    <Card className="xl:max-w-xs bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-default-900">Personal Property</span>
            <span className="text-default-900 text-xs">40 Rules</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">$45,000</span>
          <span className="text-success text-xs">+ 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-xs text-default-900">100,000</span>
            </div>
            <span className="text-default-900 text-xs">AUD</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-xs text-default-900">54,000</span>
            </div>
            <span className="text-default-900 text-xs">AUD</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
