# Install the packages proceedings/scipy.plugin.mjs imports (into scipy2026/node_modules, gitignored);
# without them the preface is built without its organization and slides pages
if [ ! -d ../node_modules/myst-common ]; then
 (cd .. && npm install --prefix . --no-save --no-package-lock myst-common unist-builder myst-ext-card)
fi
# Generate article PDFs with maybe wrong page numbers
for folder in $(ls | egrep -i '^[^\.]+$'); do
 echo $folder
 cd $folder
 curvenote build --pdf
 cd ..
done
# Update page numbers in article myst.ymls
bash ./update_pages.sh 1 *
# Re-generate PDFs with correct page numbers
for folder in $(ls | egrep -i '^[^\.]+$'); do
 echo $folder
 cd $folder
 curvenote build --pdf
 cd ..
done
# Write frontmatter page number summary
bash ./generate_summary.sh ../templates/scipy-preface/papers.yml *
# Generate frontmatter PDF
cd ../proceedings
curvenote build --pdf
cd ../papers
# Combine all PDFs into final PDF
pdftk preface.pdf */full_text.pdf cat output ../proceedings/proceedings.pdf
