export interface ProjectFrontmatter {
  title: string;
  slug: string;
  programme: string;
  role: string;
  status: 'active' | 'completed' | 'planned';
  summary: string;
  externalUrl?: string;
  tags: string[];
  order: number;
}

export interface PartnerFrontmatter {
  title: string;
  slug: string;
  public: boolean;
  status: 'exploring' | 'pilot' | 'operational';
  formats: string[];
  focusTags: string[];
  summary: string;
  order: number;
}

export interface OperationFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: {
    name: string;
    status: 'active' | 'standby' | 'planned' | 'confidential';
    lastUpdated: string;
    type: string;
    relatedLink?: string;
  };
}

export interface OperationsGeoJSON {
  type: 'FeatureCollection';
  features: OperationFeature[];
}
