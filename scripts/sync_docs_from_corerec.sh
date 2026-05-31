#!/usr/bin/env bash
# Sync Sphinx docs from CoreRec into this repo for corerec.online deployment.
#
# Usage (from landing-corerec root):
#   ./scripts/sync_docs_from_corerec.sh
#
# Requires: conda env `corerec` with CoreRec installed editable from sibling repo.

set -euo pipefail

CORE="${COREREC_ROOT:-$(cd "$(dirname "$0")/../.." && pwd)/CoreRec}"
LAND="$(cd "$(dirname "$0")/.." && pwd)"

if [[ ! -d "$CORE/docs/source" ]]; then
  echo "CoreRec docs not found at $CORE/docs/source" >&2
  echo "Set COREREC_ROOT to your CoreRec clone path." >&2
  exit 1
fi

echo "==> Sync Sphinx source: $CORE/docs/source -> $LAND/docs/source"
rsync -a --delete \
  --exclude='__pycache__' \
  --exclude='.DS_Store' \
  "$CORE/docs/source/" "$LAND/docs/source/"

echo "==> Build Sphinx (conda env: corerec)"
source "$(conda info --base)/etc/profile.d/conda.sh"
conda activate corerec
cd "$CORE"
python -m sphinx -b html docs/source docs/build/html

echo "==> Deploy HTML -> $LAND/web/public/docs"
rsync -a --delete \
  --exclude='.DS_Store' \
  --exclude='.doctrees' \
  --exclude='.buildinfo.bak' \
  "$CORE/docs/build/html/" "$LAND/web/public/docs/"

echo "Done. Version: $(grep VERSION "$LAND/web/public/docs/_static/documentation_options.js" | head -1)"
echo "Commit landing-corerec and push to trigger Netlify deploy."
