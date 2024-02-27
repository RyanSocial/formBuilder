export interface Broker {
  _id: string;
  broker_id: number;
  db_name: string;
  active: boolean;
  deactivation_date: number;
  note: string;
  name: string;
  solr_use_df_offset: boolean;
  has_mobile: boolean;
  solr_xmlapi_collection: string | null;
  performancestatstype: string | null;
  realm_config: any; // Change the type to match the expected data
  logo: any; // Change the type to match the expected data
  mobile: {
    show_login: boolean;
    has_mobile: boolean;
    mobile_chart_style: string | null;
    mobile_lead_generation_web_hook: string | null;
    has_va: boolean;
  };
}
