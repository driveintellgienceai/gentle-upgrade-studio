#!/bin/bash
# Download Wonderist brand assets from Google Drive
#
# PREREQUISITES:
#   1. Share the _Fonts folder in Drive with "Anyone with the link" (Viewer)
#   2. Share the Brand Style Guide folder the same way
#   3. Update FONT_IDS below with the actual file IDs from the shared links
#
# USAGE:
#   bash scripts/download-brand-assets.sh
#
# To find a file ID from a Drive share link:
#   https://drive.google.com/file/d/FILE_ID_IS_HERE/view?usp=sharing

set -e

echo "Downloading Tooth Architect brand assets from Google Drive..."
echo ""

# Install gdown if not present
pip install --break-system-packages gdown 2>/dev/null || \
  pip install gdown 2>/dev/null || \
  echo "Note: gdown install failed, trying curl fallback"

mkdir -p public/fonts public/logos public/images/brand

# =====================================================================
# UPDATE THESE IDs with the actual Google Drive file IDs
# Get them from: Drive > Right-click file > Get link > copy the ID
# =====================================================================
MUSEO_SANS_ID="REPLACE_WITH_FILE_ID"
MOSTRA_NUOVA_ID="REPLACE_WITH_FILE_ID"
PRIMARY_LOGO_SVG_ID="REPLACE_WITH_FILE_ID"
ICON_SVG_ID="REPLACE_WITH_FILE_ID"
BRAND_GUIDE_PDF_ID="REPLACE_WITH_FILE_ID"
# =====================================================================

download_file() {
  local FILE_ID="$1"
  local OUTPUT="$2"
  local LABEL="$3"

  if [ "$FILE_ID" = "REPLACE_WITH_FILE_ID" ]; then
    echo "  SKIP $LABEL — file ID not set"
    return
  fi

  echo "  Downloading $LABEL..."
  gdown "https://drive.google.com/uc?id=${FILE_ID}" -O "$OUTPUT" 2>/dev/null || \
    curl -L "https://drive.google.com/uc?export=download&id=${FILE_ID}" -o "$OUTPUT" 2>/dev/null || \
    echo "  FAILED: $LABEL — check that the file is shared publicly"

  if [ -f "$OUTPUT" ]; then
    FILE_TYPE=$(file "$OUTPUT" 2>/dev/null | head -1)
    if echo "$FILE_TYPE" | grep -qi "html\|text\|ascii"; then
      echo "  WARNING: $OUTPUT looks like HTML, not a binary file — Drive link may not be public"
      rm -f "$OUTPUT"
    else
      echo "  OK: $OUTPUT"
    fi
  fi
}

echo "=== Fonts ==="
download_file "$MUSEO_SANS_ID"  "public/fonts/MuseoSans-500.otf"      "Museo Sans 500"
download_file "$MOSTRA_NUOVA_ID" "public/fonts/MostraNuova-Light.otf" "Mostra Nuova Light"

echo ""
echo "=== Logos ==="
download_file "$PRIMARY_LOGO_SVG_ID" "public/logos/primary-logo.svg" "Primary Logo SVG"
download_file "$ICON_SVG_ID"         "public/logos/icon.svg"          "Icon SVG"

echo ""
echo "=== Brand Style Guide ==="
download_file "$BRAND_GUIDE_PDF_ID" "docs/brand/brand-style-guide.pdf" "Brand Style Guide PDF"

echo ""
echo "=== Results ==="
echo "public/fonts/:"
ls -lh public/fonts/ 2>/dev/null || echo "  (empty)"
echo ""
echo "public/logos/:"
ls -lh public/logos/ 2>/dev/null || echo "  (empty)"
echo ""
echo "=== Next Steps ==="
echo "If font files downloaded successfully:"
echo "  git add public/fonts/ && git commit -m 'feat: add Wonderist brand font files' && git push"
echo ""
echo "If downloads failed:"
echo "  1. Go to Drive > _Fonts folder > Share > Anyone with link > Viewer"
echo "  2. Get each file's ID from its share URL"
echo "  3. Update the IDs at the top of this script and re-run"
