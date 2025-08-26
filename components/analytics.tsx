"use client"

import { track } from "@vercel/analytics"

export const trackImageConversion = (fromFormat: string, toFormat: string, fileSize: number) => {
  track("image_conversion", {
    from_format: fromFormat,
    to_format: toFormat,
    file_size: fileSize,
    timestamp: new Date().toISOString(),
  })
}

export const trackPageView = (page: string) => {
  track("page_view", {
    page,
    timestamp: new Date().toISOString(),
  })
}

export const trackError = (error: string, context: string) => {
  track("error", {
    error,
    context,
    timestamp: new Date().toISOString(),
  })
}

export const trackUserAction = (action: string, details?: Record<string, any>) => {
  track("user_action", {
    action,
    ...details,
    timestamp: new Date().toISOString(),
  })
}

// Custom hook for analytics
export const useAnalytics = () => {
  return {
    trackImageConversion,
    trackPageView,
    trackError,
    trackUserAction,
  }
}
