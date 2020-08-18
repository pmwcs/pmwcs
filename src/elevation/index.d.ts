/** The Elevation Component */
export interface ElevationProps {
  /** A number from 0 - 24 for different levels of elevation */
  z?: number | string;
  /** Allows for smooth transitions between elevations when the z value changes. */
  transition?: boolean;
  /** Allows the elevation classes to be merged onto the child component instead of creating an new DOM node. */
  wrap?: boolean;
}
