/**
 * Cue2 application version this documentation set tracks.
 *
 * When you cut a new Cue2 release and refresh docs:
 * 1. Update {@link CUE2_CURRENT_VERSION} here.
 * 2. Update `cue2_version` in each page's front matter as you re-verify that page
 *    (see tools/set-cue2-version.py and docs/project/contributing.md).
 *
 * Display format: v{major}.{minor}:{CodeName}
 * Example: v0.1:StripyHat  (maps to Version.cs 0.1.x / CodeName StripyHat)
 */
export const CUE2_CURRENT_VERSION = 'v0.1:StripyHat';

/**
 * Front-matter key used on every Markdown page under docs/.
 */
export const CUE2_VERSION_FRONT_MATTER_KEY = 'cue2_version';
