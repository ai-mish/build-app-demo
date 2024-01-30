export const columns = [
  {name: "ID", uid: "id",sortable: true},
  {name: "NAME", uid: "name",sortable: true},
  {name: "RULEID", uid: "rule_id",sortable: true},
  {name: "ROLE", uid: "description"},
  {name: "SCORE", uid: "score",sortable: true},
  {name: "STATUS", uid: "status",sortable: true},
  {name: "ANNUALVOL", uid: "metric_annual_volume"},
];


export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

export type rules = {
  id: string;
  name: string;
  rule_id: string;
  description: string;
  score: number;
  status: string;
  metric_annual_volume: number;
};


export type Rule = {
    id: number;
    name: string;
    rule_id: string;
    description: string;
    score: number;
    status: string;
    metric_annual_volume: number;
  };

 