export interface MarketReport {
  broker_id: number;
  broker_name: string;
  chart_style: ChartStyle;
  modules: MrModules
}

export interface ChartStyle {
  chart_style: {
    background_image: string;
  }
}

export interface MrModules {
  it: {
    broker_id: string;
    reports: Report[]
  },
  mr: Mr
}

export interface Report {
  report_id: number;
  mr_layout?: number
}

export interface Mr {
  broker_id: number,
  chart_style: ChartStyle;
  disclaimer_paragraphs : [],
  header_notification_html: {},
  include_forecast : boolean;
  reports: Report[]
}
