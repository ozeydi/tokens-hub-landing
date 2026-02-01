// Type definitions for your application

export interface DomainMetric {
  label: string;
  value: string | number;
  description: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface UseCase {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  marketSize?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface ComparableSale {
  domain: string;
  salePrice: number;
  year: number;
  description: string;
  relevance: 'high' | 'medium' | 'low';
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

// Form validation types
export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Analytics event types
export type AnalyticsEvent =
  | { type: 'page_view'; page: string }
  | { type: 'form_submission'; form: string }
  | { type: 'cta_click'; button: string; section: string }
  | { type: 'scroll'; section: string; percentage: number };
