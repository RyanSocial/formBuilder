import {RssReport} from "../../../../shared/api/rss/rss.service";

export interface RssData {
  title? : string;
  mode: 'update' | 'create',
  report: RssReport
}
