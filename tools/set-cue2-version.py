#!/usr/bin/env python3
"""Set or update cue2_version front matter on docs pages.

Examples:
  # Set all pages to the site current version from cue2DocMeta.js
  python3 tools/set-cue2-version.py --from-meta

  # Set all pages to an explicit version
  python3 tools/set-cue2-version.py --version v0.2:NewName

  # Only pages missing the key
  python3 tools/set-cue2-version.py --from-meta --missing-only
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
META = ROOT / "src" / "cue2DocMeta.js"
KEY = "cue2_version"


def read_meta_version() -> str:
    text = META.read_text(encoding="utf-8")
    m = re.search(
        r"(?:export\s+)?const\s+CUE2_CURRENT_VERSION\s*=\s*['\"]([^'\"]+)['\"]",
        text,
    )
    if not m:
        raise SystemExit(f"Could not parse CUE2_CURRENT_VERSION from {META}")
    return m.group(1)


def apply_version(path: Path, version: str, missing_only: bool) -> str:
    text = path.read_text(encoding="utf-8")
    if text.startswith("---\n"):
        end = text.find("\n---\n", 4)
        if end == -1:
            return "skip-bad-fm"
        fm = text[4:end]
        body = text[end + 5 :]
        if re.search(rf"^{KEY}\s*:", fm, re.M):
            if missing_only:
                return "skip-has"
            fm = re.sub(
                rf"^{KEY}\s*:.*$",
                f"{KEY}: {version}",
                fm,
                count=1,
                flags=re.M,
            )
        else:
            if re.search(r"^title\s*:", fm, re.M):
                fm = re.sub(
                    r"^(title\s*:.*)$",
                    rf"\1\n{KEY}: {version}",
                    fm,
                    count=1,
                    flags=re.M,
                )
            else:
                fm = fm.rstrip() + f"\n{KEY}: {version}"
        path.write_text(f"---\n{fm}\n---\n{body}", encoding="utf-8")
        return "ok"
    path.write_text(f"---\n{KEY}: {version}\n---\n\n{text}", encoding="utf-8")
    return "ok-new-fm"


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--version", help="Version string, e.g. v0.1:StripyHat")
    g.add_argument(
        "--from-meta",
        action="store_true",
        help="Use CUE2_CURRENT_VERSION from src/cue2DocMeta.js",
    )
    p.add_argument(
        "--missing-only",
        action="store_true",
        help="Only add cue2_version when the key is absent",
    )
    p.add_argument(
        "--path",
        type=Path,
        default=DOCS,
        help="Docs root (default: docs/)",
    )
    args = p.parse_args()
    version = read_meta_version() if args.from_meta else args.version
    if not version:
        print("Empty version", file=sys.stderr)
        return 2

    stats: dict[str, int] = {}
    for path in sorted(args.path.rglob("*.md")):
        result = apply_version(path, version, args.missing_only)
        stats[result] = stats.get(result, 0) + 1
        print(f"{result:12} {path.relative_to(ROOT)}")

    print(f"\nVersion: {version}")
    print("Summary:", stats)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
