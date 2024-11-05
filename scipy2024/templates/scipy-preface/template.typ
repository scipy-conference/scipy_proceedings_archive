#set text(font: "Noto Sans", size: 10pt)

#let spacer = text(fill: gray)[ #h(8pt) | #h(8pt)]

#let papers = yaml("papers.yml")

#set page(
  paper: "us-letter",
  background: none,
)

#align(center)[
  #v(14em)
  #image("logo.png", width: 50%)
  #v(3em)
  #text(size:30pt, weight: "bold")[Proceedings of the 23rd Python in Science Conference]
]

#pagebreak()

#align(bottom + left)[
  #text(size:11pt, weight: "bold")[[-doc.title-]]
  #v(-0.3em)
  #text(size:7.5pt)[Edited by [# for auth in doc.authors -#][#- if loop.last -#]and [# endif -#][-auth.name-][#- if not loop.last -#], [# endif -#][#- endfor -#]]
  #v(1em)
  #text(size:7.5pt)[[-doc.venue.short_title-] [-doc.date.year-]]
  #v(-0.5em)
  #text(size:7.5pt)[[-doc.venue.location-]]
  #v(-0.5em)
  #text(size:7.5pt)[[-doc.venue.date-]]
  #v(1em)
  #text(size:7.5pt)[Copyright © [-doc.date.year-]. The articles in the Proceedings of the Python in Science Conference are copyrighted and owned by their original authors.]
  #v(-0.2em)
  #text(size:7.5pt)[This is an open-access publication and is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are credited.]
  #v(-0.2em)
  #text(size:7.5pt)[For more information, please see: [-doc.license.content.url-]]
  #v(1em)
  #text(size:7.5pt)[ISSN:[-doc.venue.issn-]]
  #v(-0.5em)
  #text(size:7.5pt)[https://doi.org/[-doc.doi-]]
]

#pagebreak()

[-CONTENT-]

#pagebreak()
= Table of Contents

#v(1em)
#{
  for paper in papers {
      table(
        columns: (35pt, auto),
        inset: 0em,
        stroke: none,
        gutter: 0em,
        [ #emph(str(paper.at("page")))], [ #text(size: 12pt, style: "italic", paper.at("title"))],
      )
      if ("author" in paper) {
        table(
          columns: (35pt, auto),
          inset: 0em,
          stroke: none,
          gutter: 0em,
          [], [ #text(size: 10pt, fill: black.lighten(20%), upper(paper.at("author")))]
        )
      }
      v(3pt)
    }
}