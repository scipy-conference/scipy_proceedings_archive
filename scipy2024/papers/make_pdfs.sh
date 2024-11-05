# Generate article PDFs with maybe wrong page numbers
for folder in $(ls | egrep -i '^[^\.]+$'); do
 cd $folder
 myst build --pdf
 cd ..
done
# Update page numbers in article myst.ymls
bash ./update_pages.sh 1 *
# Re-generate PDFs with correct page numbers
for folder in $(ls | egrep -i '^[^\.]+$'); do
 cd $folder
 myst build --pdf
 cd ..
done
# Write frontmatter page number summary
bash ./generate_summary.sh ../templates/scipy-preface/papers.yml *
# Generate frontmatter PDF
cd ../proceedings
myst build --pdf
cd ../papers
# Combine all PDFs into final PDF
pdftk preface.pdf */full_text.pdf cat output ../proceedings/proceedings.pdf
