/**
 * Explicit documentation sidebar for Cue2.
 * Keep IDs in sync with docs/ paths (no file extension).
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        'getting-started/system-requirements',
        'getting-started/install',
        'getting-started/concepts',
        'getting-started/keyboard-shortcuts',
        'getting-started/licensing',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'tutorials/index' },
      items: [
        'tutorials/zero-to-audio',
        'tutorials/zero-to-video',
        'tutorials/zero-to-text',
        'tutorials/cue-sequences',
        'tutorials/groups-and-nesting',
        'tutorials/audio-routing',
        'tutorials/multi-screen-canvas',
        'tutorials/osc-go',
        'tutorials/midi-trigger',
        'tutorials/control-cues',
        'tutorials/media-backup',
      ],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      link: { type: 'doc', id: 'fundamentals/index' },
      items: [
        'fundamentals/main-window',
        'fundamentals/sessions',
        'fundamentals/cues',
        'fundamentals/inspector',
        'fundamentals/cuelist',
        'fundamentals/groups',
        'fundamentals/cue-sequences',
        'fundamentals/timing',
        'fundamentals/triggers',
        'fundamentals/playback-transport',
        'fundamentals/undo-redo',
        'fundamentals/library',
      ],
    },
    {
      type: 'category',
      label: 'Audio',
      link: { type: 'doc', id: 'audio/index' },
      items: [
        'audio/audio-components',
        'audio/output-patches',
        'audio/routing-matrix',
        'audio/levels-and-fades',
        'audio/playback-preferences',
        'audio/technical-signal-path',
        'audio/technical-decode-and-buffers',
        'audio/technical-mixing',
        'audio/formats-and-metadata',
        'audio/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Video & displays',
      link: { type: 'doc', id: 'video/index' },
      items: [
        'video/video-components',
        'video/layout',
        'video/embedded-audio',
        'video/text-overlays',
        'video/subtitles',
        'video/canvas-screens-layers',
        'video/output-preferences',
        'video/technical-decode-and-present',
        'video/technical-display-graph',
        'video/formats-and-images',
        'video/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Control & components',
      link: { type: 'doc', id: 'control/index' },
      items: [
        'control/control-components',
        'control/fades',
        'control/seek',
        'control/layer-translate',
        'control/osc-send',
        'control/midi-output',
      ],
    },
    {
      type: 'category',
      label: 'Networking & show control',
      link: { type: 'doc', id: 'networking/index' },
      items: [
        'networking/osc-overview',
        'networking/osc-connections',
        'networking/osc-listen',
        'networking/osc-input-map',
        'networking/osc-command-reference',
        'networking/midi-overview',
        'networking/midi-input-map',
        'networking/cue-midi-triggers',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      link: { type: 'doc', id: 'settings/index' },
      items: [
        'settings/general',
        'settings/cue-defaults',
        'settings/component-defaults',
        'settings/audio',
        'settings/video-output',
        'settings/canvas-editor',
        'settings/audio-output-patch',
        'settings/connections-and-maps',
        'settings/cue2-preferences',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'doc', id: 'reference/index' },
      items: [
        'reference/glossary',
        'reference/component-types',
        'reference/showfile-format',
        'reference/media-backup-layout',
        'reference/armed-and-status',
        'reference/faq',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      link: { type: 'doc', id: 'project/contributing' },
      items: [
        'project/contributing',
        'project/building',
        'project/versioning',
      ],
    },
  ],
};

export default sidebars;
