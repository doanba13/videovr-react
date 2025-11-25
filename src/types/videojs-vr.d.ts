declare module 'videojs-vr' {
  import videojs from 'video.js';
  
  export interface VideoJsVRPluginOptions {
    projection?: '180' | '180_LR' | '180_MONO' | '360' | 'Sphere' | 'equirectangular' | 'Cube' | '360_CUBE' | 'NONE' | 'AUTO' | '360_LR' | '360_TB' | 'EAC' | 'EAC_LR';
    forceCardboard?: boolean;
    motionControls?: boolean;
    debug?: boolean;
    sphereDetail?: number;
    omnitone?: any;
    omnitoneOptions?: any;
    disableTogglePlay?: boolean;
  }
}

declare module 'video.js' {
  import { VideoJsVRPluginOptions } from 'videojs-vr';
  export interface Player {
    vr(options?: VideoJsVRPluginOptions): void;
  }
}
