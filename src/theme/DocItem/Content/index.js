import React from 'react';
import clsx from 'clsx';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Content from '@theme-original/DocItem/Content';
import {
  CUE2_CURRENT_VERSION,
  CUE2_VERSION_FRONT_MATTER_KEY,
} from '@site/src/cue2DocMeta';

/**
 * Wraps every doc page and shows which Cue2 release the page was written/verified for.
 * Prefer front-matter `cue2_version`; fall back to the site current version.
 */
export default function DocItemContentWrapper(props) {
  const {frontMatter} = useDoc();
  const pageVersion =
    frontMatter?.[CUE2_VERSION_FRONT_MATTER_KEY] || CUE2_CURRENT_VERSION;
  const isCurrent = pageVersion === CUE2_CURRENT_VERSION;

  return (
    <>
      <aside
        className={clsx(
          'cue2-doc-version',
          !isCurrent && 'cue2-doc-version--stale',
        )}
        aria-label={`Documentation verified for Cue2 ${pageVersion}`}
      >
        <span className="cue2-doc-version__label">Applies to</span>
        <span className="cue2-doc-version__value">Cue2 {pageVersion}</span>
        {!isCurrent && (
          <span className="cue2-doc-version__note">
            Site current: {CUE2_CURRENT_VERSION}
          </span>
        )}
      </aside>
      <Content {...props} />
    </>
  );
}
