import { fetchRule } from '../../lib/data';
import RulesTable from './table';
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Page() {
    const rules = [
      {
          "id": 1,
          "name": "RM05",
          "rule_id": "RM05",
          "description": "Motor theft",
          "score": 60,
          "status": "Active",
          "metric_annual_volume": 30
      },
      {   "id": 2,
          "name": "RM10",
          "rule_id": "RM10",
          "description": "Motor theft",
          "score": 60,
          "status": "Active",
          "metric_annual_volume": 60
      },
      {   "id": 3,
          "name": "RM25",
          "rule_id": "RM25",
          "description": "Motor theft",
          "score": 60,
          "status": "Active",
          "metric_annual_volume": 60
      },
      {   "id": 4,
          "name": "RM15",
          "rule_id": "RM15",
          "description": "Motor theft",
          "score": 60,
          "status": "Active",
          "metric_annual_volume": 60
      },
      {   "id": 5,
          "name": "RM20",
          "rule_id": "RM20",
          "description": "Motor theft",
          "score": 60,
          "status": "Active",
          "metric_annual_volume": 60
      }
      ]
    return (
        <div>
          <RulesTable rules={rules}/>
        </div>
      )
}