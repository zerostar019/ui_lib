export interface SegmentedInterface {
    id: number;
    label: string;
    value: string | number;
}

export interface SegmentedProperties {
    trackPadding?: string,
    selectColor?: string,
    caretBgColor?: string,
    borderRadius?: string,
    trackBg?: string,
    trackHeight?: string,
    segmentHoverColor?: string,
    textColor?: string,
    inlineBorderColor?: string,
    segmentPadding?: string
}

export type SegmentedWidthType = "auto" | string;